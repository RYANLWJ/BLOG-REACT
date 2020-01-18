import  Home  from "../pages/home/home";
import repo from "../pages/repo/repo";
import signIn from "../pages/signIn/signIn";


const routes = [
  {
    path: "/",
    exact: true,
    component: Home
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
    
  }
];

export default routes;
