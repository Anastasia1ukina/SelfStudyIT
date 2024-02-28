import React from 'react'
import ReactDOM from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//import './index.css'
// import Layout from './routes/Layout'
// import LoginAction from './routes/LoginAction'
// import LoginLoader from './routes/LoginLoader'
// import LoginPage from './routes/LoginPage'
// import { PublicPage, ProtectedPage } from './routes/index'
// import SignInSide from './components/Login'
// import SignInSide from './features/login/loginPage'
// import ProtectedLoader from './routes/ProtectedLoader'
// import AuthStatus from './routes/AuthStatus'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import AppRouter from './AppRouter/AppRouter'

// const router = createBrowserRouter([
//   {
//     id: "root",
//     path: "/",
//     loader() {
//       // Our root route always provides the user, if logged in
//       return { user: fakeAuthProvider.username };
//     },
//     Component: Layout,
//     children: [
//       {
//         index: true,
//         Component: PublicPage,
//       },
//       {
//         path: "login",
//         element: <SignInSide />,
//         action: LoginAction,
//         loader: LoginLoader,
//         Component: LoginPage,
//       },
//       {
//         path: "protected",
//         loader: ProtectedLoader,
//         Component: ProtectedPage,
//       },
//     ],
//   },
//   {
//     path: "/logout",
//     async action() {
//       // We signout in a "resource route" that we can hit from a fetcher.Form
//       await fakeAuthProvider.signout();
//       return redirect("/");
//     },
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
    {/* <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} /> */}
    {/* <SignInSide /> */}
  </React.StrictMode>,
)
