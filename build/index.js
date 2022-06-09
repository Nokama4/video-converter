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
var tailwind_default = "/build/_assets/tailwind-W6QTUDKE.css";

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
var import_react4 = require("react");
var import_Stack = __toESM(require("@mui/material/Stack"));
var import_Button = __toESM(require("@mui/material/Button"));
var import_Box = __toESM(require("@mui/material/Box"));
var import_Typography = __toESM(require("@mui/material/Typography"));
var import_Modal = __toESM(require("@mui/material/Modal"));
var import_TextField = __toESM(require("@mui/material/TextField"));

// app/components/display/Upload.tsx
var import_react3 = require("react");
var TYPES = {
  "image/png": "image",
  "image/jpeg": "image",
  "image/jpg": "image",
  "image/webp": "image",
  "image/gif": "image",
  "video/mp4": "video",
  "video/quicktime": "video",
  "video/mov": "video"
};
function FileUpload(props) {
  const {
    value,
    onChange,
    label,
    sublabel,
    maxSize = 4e7,
    acceptTypes = "image/*,.mp4,.mov",
    description = "PNG, GIF, WEBP or MP4.",
    isMultiple = false,
    hasPreview = true
  } = props;
  const [sizeReached, setSizeReached] = (0, import_react3.useState)(false);
  const [id] = (0, import_react3.useState)(Math.random().toString(36));
  const onFileChange = (e) => {
    var _a;
    const file = ((_a = e == null ? void 0 : e.target) == null ? void 0 : _a.files) ? e.target.files[0] : null;
    if (file && maxSize && file.size >= maxSize) {
      return setSizeReached(true);
    }
    setSizeReached(false);
    onChange(e);
  };
  const assetPreview = (asset) => {
    if (!asset)
      return null;
    const type = TYPES[asset == null ? void 0 : asset.type] || "image";
    const previewClass = "w-full max-w-max	border-black rounded border flex-grow max-h-96";
    return type === "image" ? /* @__PURE__ */ React.createElement("img", {
      src: asset && URL.createObjectURL(asset),
      alt: "preview-unlockable",
      className: previewClass
    }) : /* @__PURE__ */ React.createElement("video", {
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      src: asset && URL.createObjectURL(asset),
      className: previewClass
    });
  };
  const preview = (0, import_react3.useMemo)(() => {
    return assetPreview(value);
  }, [value]);
  const isGb = maxSize && maxSize >= 1e9;
  return /* @__PURE__ */ React.createElement("div", {
    className: `my-4 w-full flex flex-col`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-2"
  }, label), !preview && sublabel && /* @__PURE__ */ React.createElement("div", {
    className: "text-gtxt text-sm mb-4"
  }, sublabel), hasPreview && /* @__PURE__ */ React.createElement(React.Fragment, null, preview || /* @__PURE__ */ React.createElement("label", {
    htmlFor: id,
    className: "w-full h-40 rounded bg-g text-gtxt flex-grow flex flex-col items-center justify-center cursor-pointer "
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/upload.svg",
    alt: "file-upload-icon"
  }), `${description} Max ${new Intl.NumberFormat("en-US", {
    style: "unit",
    unit: isGb ? "gigabyte" : "megabyte",
    maximumSignificantDigits: isGb ? 2 : 1,
    unitDisplay: "short"
  }).format(maxSize / (isGb ? 1e9 : 1e6))}`), preview && /* @__PURE__ */ React.createElement("p", {
    className: "mt-4 text-sm text-primary hover:underline",
    onClick: onChange
  }, "Remove")), /* @__PURE__ */ React.createElement("input", {
    type: "file",
    name: "file",
    multiple: isMultiple,
    id,
    onChange: onFileChange,
    className: "hidden",
    accept: acceptTypes
  }), sizeReached && /* @__PURE__ */ React.createElement("p", {
    className: "text-red mt-2"
  }, "File size must be maximum of", " ", new Intl.NumberFormat("en-US", {
    style: "unit",
    unit: isGb ? "gigabyte" : "megabyte",
    maximumSignificantDigits: isGb ? 2 : 1,
    unitDisplay: "short"
  }).format(maxSize / (isGb ? 1e9 : 1e6))));
}

// app/components/Nav.tsx
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
var Nav = () => {
  const [open, setOpen] = (0, import_react4.useState)(false);
  const [asset, setAsset] = (0, import_react4.useState)(null);
  const [title, setTitle] = (0, import_react4.useState)("");
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
  return /* @__PURE__ */ React.createElement("div", {
    className: "p-4 border-b-1 border-black"
  }, /* @__PURE__ */ React.createElement(import_Stack.default, {
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
  }, "Create a new video"), /* @__PURE__ */ React.createElement(FileUpload, {
    sublabel: "Add video to upload to S3",
    onChange: onChangeAsset,
    value: asset,
    maxSize: 52e9
  }), /* @__PURE__ */ React.createElement(import_TextField.default, {
    id: "outlined-name",
    color: "primary",
    label: "Title",
    value: title,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement(import_Button.default, null, "Submit")))));
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
var assets_manifest_default = { "version": "8e5b03e2", "entry": { "module": "/build/entry.client-24EEKTME.js", "imports": ["/build/_shared/chunk-4GDDSWSI.js", "/build/_shared/chunk-INMVB2G3.js", "/build/_shared/chunk-WXJ2FZ7Z.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-4XYS7Y3H.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-HETRRVOG.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-8E5B03E2.js" };

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
