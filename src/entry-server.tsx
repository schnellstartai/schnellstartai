import ReactDOMServer from 'react-dom/server';

export function render(url: string) {
  const html = ReactDOMServer.renderToString(
    <div>Hello World - Server Rendered</div>
  );
  
  return html;
}