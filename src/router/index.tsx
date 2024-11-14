import React, { lazy } from "react"
import Home from "../views/Home"
// import About from "../views/About"
// import User from "../views/User"
const About = lazy(() => import("../views/About"))
const User = lazy(() => import("../views/User"))

import { Navigate } from "react-router-dom"

//懒加载模式
const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>loading</div>}>
        {comp}
    </React.Suspense>
)

const routes = [
    {
        path: "/",
        element: <Navigate to="/home" />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/about",
        element: withLoadingComponent(<About />)
    },
    {
        path: "/user",
        element: withLoadingComponent(<User />)


    }

]

export default routes