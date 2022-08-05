import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/tailwind.css";
import videoStyles from "./styles/custom-style.css";
import videoJsStyle from 'video.js/dist/video-js.css'

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: videoStyles },
    { rel: "stylesheet", href: videoJsStyle },
  ];
}


export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
