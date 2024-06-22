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
import { DashboardPage } from "../pages/dashboard/DashboardPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Navigate to="/home" />} />
      <Route path="home" element={<HomePage />} />
      <Route path="profile" element={<ProfilePage />} />

      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Route>
  )
);

function AuthenticatedRouter() {
  return <RouterProvider router={router} />;
}

export default AuthenticatedRouter;
