import styled from '@emotion/styled';
import 'video.js/dist/video-js.css'

const MyStyledH1 = styled.h1`
  font-size: 5rem;
  color: green;
`;

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <MyStyledH1>Welcome to Remix</MyStyledH1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            Quickstart Blog Tutorial
          </a>
        </li>
        {/* ... */}
      </ul>
    </div>
  );
}
