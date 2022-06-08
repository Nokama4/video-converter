import styled from '@emotion/styled';
import 'video.js/dist/video-js.css'

import Nav from '~/components/Nav';
import List from '~/components/List';

const MyStyledH1 = styled.h1`
  font-size: 5rem;
  color: green;
`;

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Nav />
      <List />
    </div>
  );
}
