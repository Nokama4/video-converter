import 'video.js/dist/video-js.css'
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import Nav from '~/components/Nav';
import List from '~/components/List';
import { getVideos } from "~/models/videos.server";

export const loader: LoaderFunction = async ({ request, params }) => {
  const videos = await getVideos();
  if (!videos) {
    throw new Response("Not Found", { status: 404 });
  }

  console.log(videos);
  
  return json(videos);
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Nav />
      <List videos={useLoaderData()} />
    </div>
  );
}
