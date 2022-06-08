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
    for (let key2 of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key2) && (copyDefault || key2 !== "default"))
        __defProp(target, key2, { get: () => module2[key2], enumerable: !(desc = __getOwnPropDesc(module2, key2)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache2) => {
  return (module2, temp) => {
    return cache2 && cache2.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache2 && cache2.set(module2, temp), temp);
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
var import_cache = __toESM(require("@emotion/cache"));
var import_react2 = require("@emotion/react");
var import_create_instance = __toESM(require("@emotion/server/create-instance"));
var key = "custom";
var cache = (0, import_cache.default)({ key });
var {
  extractCriticalToChunks,
  constructStyleTagsFromChunks
} = (0, import_create_instance.default)(cache);
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react2.CacheProvider, {
    value: cache
  }, /* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  })));
  const chunks = extractCriticalToChunks(markup);
  const styles = constructStyleTagsFromChunks(chunks);
  markup = markup.replace("__STYLES__", styles);
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
var import_react3 = require("@remix-run/react");
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css"
    }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react3.Meta, null), /* @__PURE__ */ React.createElement(import_react3.Links, null), typeof document === "undefined" ? "__STYLES__" : null), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react3.Outlet, null), /* @__PURE__ */ React.createElement(import_react3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react3.Scripts, null), /* @__PURE__ */ React.createElement(import_react3.LiveReload, null)));
}

// route:/Users/carine/Desktop/video-converter/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader
});
var import_styled2 = __toESM(require("@emotion/styled"));
var import_node = require("@remix-run/node");

// app/components/Nav.tsx
var import_styled = __toESM(require("@emotion/styled"));
var import_Stack = __toESM(require("@mui/material/Stack"));
var import_Button = __toESM(require("@mui/material/Button"));
var Container = import_styled.default.div({
  borderBottom: "1px solid gray",
  padding: "1em"
});
var Nav = () => {
  const activeStyle = {
    textDecoration: "underline"
  };
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(import_Stack.default, {
    spacing: 2,
    direction: "row"
  }, /* @__PURE__ */ React.createElement(import_Button.default, {
    variant: "contained"
  }, "Upload video")));
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

// app/models/videos.server.ts
var import_aws_sdk = __toESM(require("aws-sdk"));
var import_uuid = require("uuid");
var getVideos = async () => {
  console.log(process.env);
  import_aws_sdk.default.config.update({
    region: "eu-west-3",
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
  });
  const dynamoDb = new import_aws_sdk.default.DynamoDB.DocumentClient();
  const params = {
    TableName: "videos"
  };
  dynamoDb.scan(params, (err, data) => {
    if (err) {
      console.log(err);
      return null;
    } else {
      const { Items } = data;
      return {
        videos: Items
      };
    }
  });
};

// route:/Users/carine/Desktop/video-converter/app/routes/index.tsx
var MyStyledH1 = import_styled2.default.h1`
  font-size: 5rem;
  color: green;
`;
var loader = async ({ request, params }) => {
  console.log(params, "noteId not found");
  const note = await getVideos();
  if (!note) {
    throw new Response("Not Found", { status: 404 });
  }
  return (0, import_node.json)({ note });
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement(Nav_default, null), /* @__PURE__ */ React.createElement(List_default, null));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "0aabf0e1", "entry": { "module": "/build/entry.client-EEGA4PEK.js", "imports": ["/build/_shared/chunk-OOOT6WWT.js", "/build/_shared/chunk-2MLTBGTY.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-GG4ZGEWS.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-NWHFNPZL.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-0AABF0E1.js" };

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
