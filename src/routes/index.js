import HomePage from "./../containers/GuestLayout/HomePage";
import MovieBookingDetails from "../containers/GuestLayout/MovieBookingDetails/MovieBookingDetails";
import BookingPage from "../containers/GuestLayout/BookingPage";
import AuthPage from "../containers/AuthPage";
import UserPage from "../containers/GuestLayout/UserPage";

const routesAdmin = [];

const routesGuest = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/movie/:id",
    component: MovieBookingDetails,
  },
  {
    exact: false,
    path: "/booking",
    component: BookingPage,
  },
  {
    exact: false,
    path: "/signUp",
    component: UserPage,
  },
];
const routesLogin = [
  {
    exact: true,
    path: "/login",
    component: AuthPage,
  },
];

const routesUser = [];
export { routesAdmin, routesGuest, routesLogin, routesUser };
