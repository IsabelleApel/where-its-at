import { RouterProvider, createBrowserRouter } from "react-router-dom"
import LandingPage from '../pages/LandingPage/LandingPage';
import EventsPage from '../pages/EventsPage/EventsPage';
import EventsDetailsPage from '../pages/EventsDetailsPage/EventsDetailsPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import TicketsPage from '../pages/TicketsPage/TicketsPage';
import ErrorPage from "../pages/ErrorPage/ErrorPage";

function Router() {

    const router = createBrowserRouter([
        {
            path : '/',
            element : <LandingPage />,
            errorElement : <ErrorPage />
        },
        {
            path : '/events',
            element : <EventsPage />
        },
        {
            path : '/events/:id',
            element : <EventsDetailsPage />
        },
        {
            path : '/order',
            element : <OrderPage />
        },
        {
            path : '/tickets',
            element : <TicketsPage />
        }
        ])

    return (
    <RouterProvider router={router} />
    )
}

export default Router;