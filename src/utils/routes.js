import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import PortfolioDetails from "../pages/PortfolioDetails";
import Resume from "../pages/Resume";
import Services from "../pages/Services";
import StarterPage from "../pages/StarterPage";

const routes=[
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/portfolio',
        element: <Portfolio />
    },
    {
        path: '/portfolio/:id',
        element: <PortfolioDetails />
    },
    {
        path: '/resume',
        element: <Resume />
    },
    {
        path: '/services',
        element: <Services />
    },
    {
        path: '/starter',
        element: <StarterPage />
    }
]
export default routes;