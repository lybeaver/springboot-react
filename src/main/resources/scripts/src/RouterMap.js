import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";

export default [
    { path: "/", name: "Login", component: Login },
    { path: "/home", name: "Home", component: Home , auth: true},
    { path: "/register", name: "Register", component: Register , auth: true},
    { path: "/login", name: "Login", component: Login },
]