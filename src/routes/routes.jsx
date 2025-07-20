import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Authentication/Registration";
import Login from "../Pages/Authentication/Login";
import DashboardLayout from "../Layout/Admin/DashboardLayout";
import EmailVerification from "../Pages/Authentication/EmailVerification";
import OTP_Verification from "../Pages/Authentication/OTP_Verification";
import ResetPassword from "../Pages/Authentication/ResetPassword";

import Pricing from "../Pages/Pricing/Pricing";
import UserDashboardHome from "../Pages/UserDashboard/UserDashboardHome";
import UserSettings from "../Pages/UserDashboard/UserSettings";
import AdminOverview from "../Layout/Admin/AdminOverview";
import AiDetection from "../Layout/Admin/AiDetection";
import Humanization from "../Layout/Admin/Humanization";
// import Billing from "../Layout/Admin/Billing/Billing";
import SeoInsights from "../Layout/Admin/SeoInsights";
import Settings from "../Layout/Admin/Settings";
import UserAndRoles from "../Layout/Admin/UserAndRoles";
import AddRols from "../Layout/Admin/AddRols";
import Billing from "../Layout/Admin/Billing/Billing";
import AddPlan from "../Layout/Admin/Billing/AddPlan";
import UserActivity from "../Layout/Admin/UserActivity";
import UserActivityDetails from "../Layout/Admin/UserActivityDettails";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
        children: [
          {path: '/', element: <Home/>},
          {path: 'pricing', element: <Pricing/>},
          {path: 'user_dashboard', element: <UserDashboardHome/>},
          {path: 'user_dashboard/user_setting', element: <UserSettings/>}
      ]
    },

    {
        path: '/admin_dashboard',
        element: <DashboardLayout />,
      children: [
      {index: true, element: <AdminOverview/>},
       {path: 'ai_detection', element: <AiDetection/>},
       {path: 'humanization', element: <Humanization/>},
       {path: 'biling', element: <Billing/>},
       {path: 'user_roles', element: <UserAndRoles/>},
       {path: 'seo_insights', element: <SeoInsights/>},
       {path: 'settings', element: <Settings/>},
       {path: 'add_rols', element: <AddRols/>},
       {path: 'add_plan', element: <AddPlan/>},
       {path: 'user_activity', element: <UserActivity/>},
       {path: 'user_activity_dettails', element: <UserActivityDetails/>},
      
        ]
    },

    {path: '/sign_up', element: <Registration/>},
    {path: '/signin', element: <Login/>},
    {path: '/verify', element: <EmailVerification/>},
    {path: '/otp_verify', element: <OTP_Verification/>},
    {path: '/reset_password', element: <ResetPassword/>},
  ]);