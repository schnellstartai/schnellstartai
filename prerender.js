import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Extract static routes from App.tsx
function extractStaticRoutes() {
  const appContent = fs.readFileSync(toAbsolute('src/App.tsx'), 'utf-8')
  const routes = []
  
  // Match <Route path="..." patterns
  const routeMatches = appContent.match(/<Route\s+path="([^"]+)"/g)
  
  if (routeMatches) {
    routeMatches.forEach(match => {
      const pathMatch = match.match(/path="([^"]+)"/)
      if (pathMatch) {
        const path = pathMatch[1]
        // Skip dynamic routes (containing :) and catch-all routes (*)
        if (!path.includes(':') && path !== '*') {
          routes.push(path)
        }
      }
    })
  }
  
  return routes
}

// Extract blog post slugs from Blog.tsx
function extractBlogSlugs() {
  try {
    const blogContent = fs.readFileSync(toAbsolute('src/pages/Blog.tsx'), 'utf-8')
    const slugs = []
    
    // Match slug: "..." patterns
    const slugMatches = blogContent.match(/slug:\s*"([^"]+)"/g)
    
    if (slugMatches) {
      slugMatches.forEach(match => {
        const slugMatch = match.match(/slug:\s*"([^"]+)"/)
        if (slugMatch) {
          slugs.push(`/blog/${slugMatch[1]}`)
        }
      })
    }
    
    return slugs
  } catch (error) {
    console.warn('Could not extract blog slugs:', error.message)
    return []
  }
}

// Generate file path for route
function getFilePath(route) {
  if (route === '/') {
    return 'dist/index.html'
  }
  
  // For other routes, create directory structure
  // e.g., /services -> dist/services/index.html
  return `dist${route}/index.html`
}

;(async () => {
  // Get all routes to prerender
  const staticRoutes = extractStaticRoutes()
  const blogRoutes = extractBlogSlugs()
  const allRoutes = [...staticRoutes, ...blogRoutes]
  
  console.log('Found routes to prerender:', allRoutes)
  
  // Ensure root route is always included
  if (!allRoutes.includes('/')) {
    allRoutes.unshift('/')
  }
  
  console.log('Final routes to prerender:', allRoutes)
  
  for (const route of allRoutes) {
    try {
      const appHtml = render(route)
      const html = template.replace(`<!--app-html-->`, appHtml)
      const filePath = getFilePath(route)
      
      // Ensure directory exists
      const dir = path.dirname(toAbsolute(filePath))
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }
      
      fs.writeFileSync(toAbsolute(filePath), html)
      console.log('pre-rendered:', filePath)
    } catch (error) {
      console.error(`Error prerendering ${route}:`, error.message)
    }
  }
})()