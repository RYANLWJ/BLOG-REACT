import  Home  from "../pages/home/home";
import repo from "../pages/repo/repo";
import signIn from "../pages/signIn/signIn";
import epidemic from "../pages/epidemic/epidemic";


const routes = [
  {
    path: "/",
    exact: true,
    component: epidemic
  },
  {
    path: "/home",
    exact: true,
    component: Home
  },
  {
    path: "/repo",
    component: repo,
    
  },
  {
    path: "/signIn",
    component: signIn,
    
  },
  {
    path: "/epidemic",
    component: epidemic,
    
  },
];

export default routes;
