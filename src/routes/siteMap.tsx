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
import Users from "../pages/Users";
import {
  HomeIcon,
  AboutIcon,
  GalleryIcon,
  PostsIcon,
  LoginIcon,
  LogoutIcon,
  RegisterIcon,
  ProfileIcon,
  UsersIcon,
} from "../components/icons";

export interface RouteElementType {
  path: string; // Path to the route
  element: JSX.Element; // page to show;
  errorElement?: JSX.Element; // page to show if error;
  icon?: JSX.Element; // Icon of link or button or page title
  title: string; // Used for the title of the page
  authRequired?: boolean; // user required to access this route
  adminRequired?: boolean; // admin prvileges required to access this route
  menu: boolean; // Show this link in menu
  hasModal?: boolean; // the route is replaced with modal
  showUser?: boolean; // Show in menu if user is logged in
  hideUser?: boolean; // Hide in menu if user is not logged in
}

/* TODO: a postokat is routeolni kell majd, hogy a postokat is meg lehessen nyitni külön oldalon /posts/:id */
const siteMap: RouteElementType[] = [
  {
    path: "/",
    element: <Home />,
    icon: <HomeIcon />,
    errorElement: <ErrorPage />,
    title: "Home",
    authRequired: false,
    adminRequired: false,
    menu: true,
    showUser: true,
    hideUser: true,
  },
  {
    path: "/about",
    element: <About />,
    icon: <AboutIcon />,
    title: "About",
    authRequired: false,
    adminRequired: false,
    menu: true,
    showUser: true,
    hideUser: true,
  },
  {
    path: "/posts",
    element: <Posts />,
    icon: <PostsIcon />,
    title: "Posts",
    authRequired: true,
    adminRequired: false,
    menu: true,
    showUser: true,
    hideUser: false,
  },
  {
    path: "/gallery",
    element: <Gallery />,
    icon: <GalleryIcon />,
    title: "Gallery",
    authRequired: true,
    adminRequired: false,
    menu: true,
    showUser: true,
    hideUser: false,
  },
  {
    path: "/login",
    element: <Login />,
    icon: <LoginIcon />,
    title: "Sign in",
    authRequired: false,
    adminRequired: false,
    menu: true,
    hasModal: true,
    showUser: false,
    hideUser: true,
  },
  {
    path: "/users",
    element: <Users />,
    icon: <UsersIcon />,
    title: "Users",
    authRequired: true,
    adminRequired: true,
    menu: true,
    hasModal: false,
    showUser: true,
    hideUser: false,
  },
  {
    path: "/profile",
    element: <Profile />,
    icon: <ProfileIcon />,
    title: "My Profile",
    authRequired: true,
    adminRequired: false,
    menu: false,
    showUser: true,
    hideUser: false,
  },
  {
    path: "/logout",
    element: <Logout />,
    icon: <LogoutIcon />,
    title: "Logout",
    authRequired: true,
    adminRequired: false,
    menu: true,
    showUser: true,
    hideUser: false,
  },
  {
    path: "/register",
    element: <Register />,
    icon: <RegisterIcon />,
    title: "Sign up",
    authRequired: false,
    adminRequired: false,
    menu: true,
    hasModal: true,
    showUser: false,
    hideUser: true,
  },

  {
    path: "/congrat",
    element: <Congrat />,
    title: "Congrat",
    authRequired: false,
    adminRequired: false,
    menu: false,
    showUser: false,
    hideUser: true,
  },
];

export default siteMap;
