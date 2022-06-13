import 'video.js/dist/video-js.css'
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, NavLink } from "@remix-run/react";
import Button from '@mui/material/Button';

import Nav from '~/components/Nav';
import List from '~/components/List';
import { getVideos } from "~/models/videos.server";

export const loader: LoaderFunction = async ({ request, params }) => {
  const videos = await getVideos();
  if (!videos) {
    throw new Response("Not Found", { status: 404 });
  }

  // console.log(videos, request);
  
  return json(videos);
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
       <div className='p-4 border-b-1 border-black'>
        <Button variant="contained"><NavLink to='create'>Upload video</NavLink></Button>
       </div>
      <List videos={useLoaderData()} />
    </div>
  );
}
