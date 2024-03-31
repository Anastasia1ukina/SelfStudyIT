import * as React from "react";
import { Stack } from "@mui/material";
import { Header } from "./header/Header";

export const AuthLayout = (props) => {
    console.log(props.children)
  return (
    <Stack direction="column">
        <Header></Header>
        <main>
            {props.children}
        </main>
    </Stack>
  )
};
