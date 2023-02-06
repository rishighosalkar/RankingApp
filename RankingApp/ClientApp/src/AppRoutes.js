import { Home } from "./components/Home";
import RankItemsContainer from "./components/RankItems/RankItemsContainer";
import MovieImageArr from "./components/ImageArr/MovieImages";
import AlbumImageArr from "./components/ImageArr/AlbumImageArr";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

console.log(MovieImageArr);
const AppRoutes = [
  {
    index: true,
    element: <Home />
    },
    {
        path: '/rank-movies',
        element: <RankItemsContainer dataType={1} imgArr={MovieImageArr} />
    },
    {
        path: '/rank-albums',
        element: <RankItemsContainer dataType={2} imgArr={AlbumImageArr} />
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
