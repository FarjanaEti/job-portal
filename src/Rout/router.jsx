import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Paages/Home";
import Register from "../Paages/Register";
import SignIn from "../Paages/SignIn";
import JobDetails from "../Paages/JobDetails";
import PrivateRout from "./PrivateRout";
import JobApply from "../Paages/JobApply";
import MyApplications from "../Paages/MyApplications";
import AddJob from "../Paages/AddJob";
import MyPostedJobs from "../Paages/MyPostedJobs";
import ViewApplication from "../Paages/ViewApplication";


//jwt===json web token pronounce as jot
//json web token jet.io
const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    errorElement: <h2>Error page</h2>,
    children:[
       {
         path:'/',
         element:<Home></Home>                     
       },
       {
       path:'/jobs/:id',
       element:<PrivateRout>
         <JobDetails></JobDetails>,
       </PrivateRout>,
       loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
       },
       {
        path: '/apply/:id',
        element: <PrivateRout><JobApply></JobApply></PrivateRout>
      },
      {
        path: '/myApplications',
        element: <PrivateRout><MyApplications></MyApplications></PrivateRout>
      },
      {
      path:'/addjob',
      element:<PrivateRout><AddJob></AddJob></PrivateRout>
      },
      {
      path:'/myjob',
      element:<PrivateRout><MyPostedJobs></MyPostedJobs></PrivateRout>
      },
      {
      path:'/viewApplications/:job_id',
      element:<PrivateRout><ViewApplication></ViewApplication></PrivateRout>,
      loader: ({ params }) => fetch(`http://localhost:3000/job-applications/jobs/${params.job_id}`)
    },
       {
        path:'/register',
        element:<Register></Register>                      
       },
       {
        path:'/signin',
        element:<SignIn></SignIn>
       }                    
    ]
  },
]);
export default router;