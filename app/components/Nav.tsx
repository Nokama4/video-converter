import { Link } from "@remix-run/react";
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { padding } from "@mui/system";

const Container = styled.div({
  borderBottom: '1px solid gray',
  padding: '1em'
});

const Nav = () => {
  const activeStyle = {
    textDecoration: "underline",
  };

  return (
    <Container>
      <Stack spacing={2} direction="row">
        <Button variant="contained">Upload video</Button>
      </Stack>
    </Container>
  );
}

export default Nav