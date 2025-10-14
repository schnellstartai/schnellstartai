import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import { BackToTop } from "@/components/BackToTop";

// Lazy load all page components for code splitting
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const FAQ = lazy(() => import("./pages/FAQ"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contact = lazy(() => import("./pages/Contact"));
const Leitfaden = lazy(() => import("./pages/Leitfaden"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => React.createElement(
  QueryClientProvider,
  { client: queryClient },
  React.createElement(
    TooltipProvider,
    null,
    React.createElement(Toaster, null),
    React.createElement(Sonner, null),
    React.createElement(
      Suspense,
      {
        fallback: React.createElement(
          "div",
          { className: "min-h-screen flex items-center justify-center" },
          React.createElement("div", {
            className: "animate-spin rounded-full h-32 w-32 border-b-2 border-primary"
          })
        )
      },
      React.createElement(
        Routes,
        null,
        React.createElement(Route, { path: "/", element: React.createElement(Index, null) }),
        React.createElement(Route, { path: "/services", element: React.createElement(Services, null) }),
        React.createElement(Route, { path: "/faq", element: React.createElement(FAQ, null) }),
        React.createElement(Route, { path: "/about", element: React.createElement(About, null) }),
        React.createElement(Route, { path: "/blog", element: React.createElement(Blog, null) }),
        React.createElement(Route, { path: "/blog/:slug", element: React.createElement(BlogPost, null) }),
        React.createElement(Route, { path: "/contact", element: React.createElement(Contact, null) }),
        React.createElement(Route, { path: "/leitfaden", element: React.createElement(Leitfaden, null) }),
        React.createElement(Route, { path: "/impressum", element: React.createElement(Impressum, null) }),
        React.createElement(Route, { path: "/datenschutz", element: React.createElement(Datenschutz, null) }),
        React.createElement(Route, { path: "*", element: React.createElement(NotFound, null) })
      )
    ),
    React.createElement(BackToTop, null)
  )
);

export default App;
