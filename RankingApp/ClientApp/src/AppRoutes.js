import { Home } from "./components/Home";
import RankItems from "./components/RankItems";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
      path: '/rank-items',
      element: <RankItems />
  },
  {
      path: '/login',
      element: <Login />
  },
  {
      path: '/signup',
      element: <Signup />
  }
];

export default AppRoutes;
