import * as React from "react";
import { Stack, Box } from "@mui/material";
import { Header } from "./header/Header";

export const AuthLayout = (props) => {
  console.log(props.children);
  return (
    <Stack direction="column" height="100%">
      <Header></Header>
      <main>
        <Box>{props.children}</Box>
      </main>
    </Stack>
  );
};
