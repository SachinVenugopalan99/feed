import ListFeedPage from "../pages/ListFeedPage"
import { PAGE } from "../utils/constants"
import { Navigate } from "react-router-dom";


const routes = [
    {
        path: PAGE.ROOT.PATH,
        element: <ListFeedPage />
    },
      {
    path: "/",
    children: [{ path: "*", exact: true, element: <Navigate to={PAGE.ROOT.PATH} replace /> }],
  },
]

export default routes;