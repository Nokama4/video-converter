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

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-GGMS2OGT.css";

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

// route:/Users/carine/Desktop/video-converter/app/routes/create.tsx
var create_exports = {};
__export(create_exports, {
  action: () => action,
  default: () => create_default
});
var import_react3 = require("react");
var import_Button = __toESM(require("@mui/material/Button"));
var import_Box = __toESM(require("@mui/material/Box"));
var import_react4 = require("@remix-run/react");

// app/models/videos.server.ts
var import_aws_sdk = __toESM(require("aws-sdk"));
var import_uuid = require("uuid");
require("dotenv").config();
import_aws_sdk.default.config.update({
  region: "eu-west-3",
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY
});
var documentClient = new import_aws_sdk.default.DynamoDB.DocumentClient();
var getVideos = async () => {
  const params = {
    TableName: "basicVideoTable"
  };
  let data = await documentClient.scan(params).promise();
  const { Items } = data;
  return Items;
};

// route:/Users/carine/Desktop/video-converter/app/routes/create.tsx
var action = async ({ request, params }) => {
  const body = await request.formData();
  return null;
};
var style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column"
};
var Create = () => {
  const actionData = (0, import_react4.useActionData)();
  const [open, setOpen] = (0, import_react3.useState)(false);
  const [asset, setAsset] = (0, import_react3.useState)(null);
  const [title, setTitle] = (0, import_react3.useState)("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const onChangeAsset = async (evt) => {
    var _a, _b;
    const file = (_b = (_a = evt == null ? void 0 : evt.target) == null ? void 0 : _a.files) == null ? void 0 : _b[0];
    if (!file)
      return setAsset(null);
    setAsset(file);
  };
  const handleSubmit = () => {
    console.log(getVideos);
  };
  return /* @__PURE__ */ React.createElement(import_Box.default, {
    sx: style
  }, /* @__PURE__ */ React.createElement(import_react4.Form, {
    method: "post",
    action: "/create"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    onChange: handleChange,
    value: title
  }), /* @__PURE__ */ React.createElement(import_Button.default, {
    type: "submit"
  }, "Submit")));
};
var create_default = Create;

// route:/Users/carine/Desktop/video-converter/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader
});
var import_node = require("@remix-run/node");
var import_react5 = require("@remix-run/react");
var import_Button2 = __toESM(require("@mui/material/Button"));

// app/components/List/index.tsx
var List = ({ videos }) => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "List"), /* @__PURE__ */ React.createElement("div", null, videos.map((video) => /* @__PURE__ */ React.createElement("div", {
    key: video.id
  }, /* @__PURE__ */ React.createElement("h2", null, video.title)))));
};
var List_default = List;

// route:/Users/carine/Desktop/video-converter/app/routes/index.tsx
var loader = async ({ request, params }) => {
  const videos = await getVideos();
  if (!videos) {
    throw new Response("Not Found", { status: 404 });
  }
  return (0, import_node.json)(videos);
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-4 border-b-1 border-black"
  }, /* @__PURE__ */ React.createElement(import_Button2.default, {
    variant: "contained"
  }, /* @__PURE__ */ React.createElement(import_react5.NavLink, {
    to: "create"
  }, "Upload video"))), /* @__PURE__ */ React.createElement(List_default, {
    videos: (0, import_react5.useLoaderData)()
  }));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "a2d16d1f", "entry": { "module": "/build/entry.client-Y7FO37OI.js", "imports": ["/build/_shared/chunk-PAMZWZCO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-KE432MDH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/create": { "id": "routes/create", "parentId": "root", "path": "create", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/create-TLSPEG4C.js", "imports": ["/build/_shared/chunk-DO3DDVQI.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-F46RFWLF.js", "imports": ["/build/_shared/chunk-DO3DDVQI.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-A2D16D1F.js" };

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
  "routes/create": {
    id: "routes/create",
    parentId: "root",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports
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
