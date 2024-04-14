import * as React from "react";
import { AuthLayout } from "../../layout/AuthLayout";

const Home = () => {
  return <h1>Домашняя страница</h1>;
};

export const HomePage = () => {
  return (
    <AuthLayout>
      <Home />
    </AuthLayout>
  );
};
