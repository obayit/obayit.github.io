import{w as i,q as a,p as t,M as c,L as l,S as h,t as p,O as d,i as u}from"./chunk-UVKPFVEO-BwactrwG.js";const f=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"}];function w({children:s}){return t.jsxs("html",{lang:"en",children:[t.jsxs("head",{children:[t.jsx("script",{type:"text/javascript",children:`
    // Single Page Apps for GitHub Pages
    // MIT License
    // https://github.com/rafgraph/spa-github-pages
    // This script checks to see if a redirect is present in the query string,
    // converts it back into the correct url and adds it to the
    // browser's history using window.history.replaceState(...),
    // which won't cause the browser to attempt to load the new url.
    // When the single page app is loaded further down in this file,
    // the correct url will be waiting in the browser's history for
    // the single page app to route accordingly.
    (function (l) {
      if (l.search[1] === "/") {
        var decoded = l.search
          .slice(1)
          .split("&")
          .map(function (s) {
            return s.replace(/~and~/g, "&");
          })
          .join("?");
        window.history.replaceState(
          null,
          null,
          l.pathname.slice(0, -1) + decoded + l.hash,
        );
      }
    })(window.location);
  `}),t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx(c,{}),t.jsx(l,{})]}),t.jsxs("body",{children:[s,t.jsx(h,{}),t.jsx(p,{})]})]})}const m=i(function(){return t.jsx(d,{})}),x=a(function({error:e}){let o="Oops!",r="An unexpected error occurred.",n;return u(e)&&(o=e.status===404?"404":"Error",r=e.status===404?"The requested page could not be found.":e.statusText||r),t.jsxs("main",{className:"pt-16 p-4 container mx-auto",children:[t.jsx("h1",{children:o}),t.jsx("p",{children:r}),n]})});export{x as ErrorBoundary,w as Layout,m as default,f as links};
