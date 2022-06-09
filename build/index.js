var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/carine/Desktop/video-converter/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-55DNWN2R.css";

// route:/Users/carine/Desktop/video-converter/app/root.tsx
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/Users/carine/Desktop/video-converter/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});

// app/components/Nav.tsx
var import_react3 = require("react");
var import_Stack = __toESM(require("@mui/material/Stack"));
var import_Button = __toESM(require("@mui/material/Button"));
var import_Box = __toESM(require("@mui/material/Box"));
var import_Typography = __toESM(require("@mui/material/Typography"));
var import_Modal = __toESM(require("@mui/material/Modal"));
var style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};
var Nav = () => {
  const [open, setOpen] = (0, import_react3.useState)(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_Stack.default, {
    spacing: 2,
    direction: "row"
  }, /* @__PURE__ */ React.createElement(import_Button.default, {
    variant: "contained",
    onClick: handleOpen
  }, "Upload video"), /* @__PURE__ */ React.createElement(import_Modal.default, {
    open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /* @__PURE__ */ React.createElement(import_Box.default, {
    sx: style
  }, /* @__PURE__ */ React.createElement(import_Typography.default, {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Create a new video"), /* @__PURE__ */ React.createElement(import_Typography.default, {
    id: "modal-modal-description",
    sx: { mt: 2 }
  }, "Duis mollis, est non commodo luctus, nisi erat porttitor ligula.")))));
};
var Nav_default = Nav;

// app/components/List/data.ts
var videos = [
  { id: 1, title: "Video 1", description: "Description 1", url: "https://www.youtube.com/embed/1" },
  { id: 2, title: "Video 2", description: "Description 2", url: "https://www.youtube.com/embed/2" },
  { id: 3, title: "Video 3", description: "Description 3", url: "https://www.youtube.com/embed/3" },
  { id: 4, title: "Video 4", description: "Description 4", url: "https://www.youtube.com/embed/4" },
  { id: 5, title: "Video 5", description: "Description 5", url: "https://www.youtube.com/embed/5" }
];

// app/components/List/index.tsx
var List = () => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "List"), /* @__PURE__ */ React.createElement("div", null, videos.map((video) => /* @__PURE__ */ React.createElement("div", {
    key: video.id
  }, /* @__PURE__ */ React.createElement("h2", null, video.title), /* @__PURE__ */ React.createElement("p", null, video.description)))));
};
var List_default = List;

// route:/Users/carine/Desktop/video-converter/app/routes/index.tsx
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement(Nav_default, null), /* @__PURE__ */ React.createElement(List_default, null));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "e49646b2", "entry": { "module": "/build/entry.client-IUQOVSVN.js", "imports": ["/build/_shared/chunk-NWCUBYMP.js", "/build/_shared/chunk-INMVB2G3.js", "/build/_shared/chunk-WXJ2FZ7Z.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-6XWNWP7V.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-KKZSP53S.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-E49646B2.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
