import HomePage from "./../containers/GuestLayout/HomePage";
import MovieBookingDetails from "../containers/GuestLayout/MovieBookingDetails/MovieBookingDetails";
import BookingPage from "../containers/GuestLayout/BookingPage";
import AuthPage from "../containers/AuthPage";
import UserPage from "../containers/GuestLayout/UserPage";
import DashBoard from "../containers/AdminLayout/DashBoard"
import MovieManagement from "../components/MovieManagement/movie-management";
import UserManagement from "../components/UserManagement/user-management";

const routesAdmin = [
  {
    exact: true,
    path: "/dashboard",
    component: DashBoard,
  },
  {
    exact: true,
    path: "/dashboard/user",
    component: UserManagement,
  },
  {
    exact: true,
    path: "/dashboard/movie",
    component: MovieManagement,
  }
];

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

];
const routesLogin = [
  {
    exact: true,
    path: "/login",
    component: AuthPage,
  },
  {
    exact: false,
    path: "/signUp",
    component: UserPage,
  },
];

const routesUser = [];
export { routesAdmin, routesGuest, routesLogin, routesUser };
