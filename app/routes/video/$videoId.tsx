import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import VideoPlayer from '~/components/Video'
import { getVideo } from '~/utils/videos.server'

export const loader: LoaderFunction = async ({ request, params }) => {
  console.log(params);
  
  if (params.videoId) {
    const video = await getVideo(params?.videoId);
    if (!video) {
      throw new Response("Not Found", { status: 404 });
    }
  
    console.log(video);
    
    return json(video);
  
  }
};

const Video = () => {
  return (
    <div>
      <h1>Video</h1>
      <VideoPlayer video={useLoaderData()} />
    </div>
  );
}

export default Video;