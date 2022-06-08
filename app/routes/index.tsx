import styled from '@emotion/styled';
import 'video.js/dist/video-js.css'
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";


import Nav from '~/components/Nav';
import List from '~/components/List';
import { getVideos } from "~/models/videos.server";

const MyStyledH1 = styled.h1`
  font-size: 5rem;
  color: green;
`;
export const loader: LoaderFunction = async ({ request, params }) => {
  console.log(params, "noteId not found");

  const note = await getVideos();
  if (!note) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ note });
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Nav />
      <List />
    </div>
  );
}
