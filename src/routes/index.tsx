import { Suspense, lazy } from "react";
import { PAGE } from "../utils/constants"
import { Navigate } from "react-router-dom";

const Loadable = (Component: any) => (myProps: any) => {
  return <Suspense><Component {...myProps}/></Suspense>
}

const ListFeedPage = Loadable(lazy(() => import('../pages/ListFeedPage')));
const DetailsPage = Loadable(lazy(() => import ('../pages/DetailsPage/DetailsPage')));

const routes = [
    {
        path: PAGE.ROOT.PATH,
        element: <ListFeedPage />
    },
        {
        path: PAGE.DETAILS.PATH(':id'),
        element: <DetailsPage />
    },
    {
    path: "/",
    children: [{ path: "*", exact: true, element: <Navigate to={PAGE.ROOT.PATH} replace /> }],
  },
]

export default routes;