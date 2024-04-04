import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { AuthLayout } from "../layout/AuthLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Navigate to="/home" />} />
      <Route
        path="home"
        element={
          <AuthLayout>
            <HomePage />
          </AuthLayout>
        }
      />
      <Route
        path="profile"
        element={
          <AuthLayout>
            <ProfilePage />
          </AuthLayout>
        }
      />

      <Route
        path="dashboard"
        element={
          <AuthLayout>
            <HomePage />
          </AuthLayout>
        }
      />
      <Route path="*" element={<Navigate to="/home" />} />
    </Route>
  )
);

function AuthenticatedRouter() {
  return <RouterProvider router={router} />;
}

export default AuthenticatedRouter;
