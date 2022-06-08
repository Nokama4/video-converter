import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";
import 'video.js/dist/video-js.css'

hydrate(<RemixBrowser />, document);
