import React from "react";
import {
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
  Route,
  redirect,
} from "react-router-dom";

/* Layouts */
import PageWithHeader from "../layouts/PageWithHeader";
import PostLayout from "../layouts/PostLayout";

/* Components */
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Gallery from "../pages/Gallery";
import Congrat from "../pages/Congrat";
import Logout from "../pages/Logout";
import Posts from "../pages/Posts";
import Profile from "../pages/Profile";
import ErrorPage from "../pages/ErrorPage";
import Post from "../pages/PostPage";
import Users from "../pages/Users";
import User from "../pages/User";

/* Hooks */
import getUser from "../hooks/useUser";
// import { RouteElementType } from "./siteMap";

// const ProtectedRoute: React.FC<RouteElementType> = ({
//   path = "/",
//   element,
//   authRequired,
//   adminRequired,
// }) => {
//   const user = getUser();

//   if (!user) {
//     if (authRequired) return <Navigate to="/login" replace />;
//   } else if (user.role !== "admin" && adminRequired) {
//     return <Navigate to="/" replace />;
//   }

//   return element;
// };

export const redirectWithUser = () => {
  const user = getUser();
  if (user) {
    return redirect("/");
  }
};
export const redirectWithoutUser = () => {
  const user = getUser();
  if (!user) {
    return redirect("/");
  }
};
export const redirectWithoutAdmin = () => {
  const user = getUser();
  if (!user || user?.role !== "admin") {
    return redirect("/login");
  }
};

/* TODO: not bad, but i would like to map form the sitemap object */
const Routes = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageWithHeader />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} loader={redirectWithUser} />
      <Route
        path="/register"
        element={<Register />}
        loader={redirectWithUser}
      />
      <Route
        path="/gallery"
        element={<Gallery />}
        loader={redirectWithoutUser}
      />
      <Route
        path="/congrat"
        element={<Congrat />}
        loader={redirectWithoutUser}
      />
      <Route path="/logout" element={<Logout />} loader={redirectWithoutUser} />
      <Route path="/posts" element={<Posts />} loader={redirectWithoutUser} />
      <Route path="/post" element={<PostLayout />} loader={redirectWithoutUser}>
        <Route index element={<Post />} loader={redirectWithoutUser} />
        <Route path=":id" element={<Post />} loader={redirectWithoutUser} />
      </Route>
      <Route
        path="/profile"
        element={<Profile />}
        loader={redirectWithoutUser}
      />
      <Route
        path="/user/:userid"
        element={<User />}
        loader={redirectWithoutUser}
      />
      <Route path="/users" element={<Users />} loader={redirectWithoutAdmin} />
      <Route path="/error" element={<ErrorPage />} />
    </Route>
  )
);

export default Routes;
