import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Step1AboutYou from "./pages/Signup/Step1/Step1AboutYou";
import Step2SigninDetails from "./pages/Signup/Step2/Step2SigninDetails";
import Step3Confirmation from "./pages/Signup/Step3/Step3Confirmation";
import ContactUs from "./components/ContactUs";
import ForgetPasswordPage from "./pages/Signin/ForgetPasswordPage";
import OTPVerificationPage from "./pages/Signin/OTPVerificationPage";
import ResetPasswordPage from "./pages/Signin/ResetPasswordPage";
import SigninPage from "./pages/Signin/SigninPage";
import SecurityPage from "./pages/SecurityPage"; // Add this import

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/security",
    element: <SecurityPage />,
  },
  {
    path: "/signin",
    element: <SigninPage />,
  },
  {
    path: "/forget-password",
    element: <ForgetPasswordPage />,
  },
  {
    path: "/otp-verification",
    element: <OTPVerificationPage />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordPage />,
  },
  {
    path: "/signup/step1",
    element: <Step1AboutYou />,
  },
  {
    path: "/signup/step2",
    element: <Step2SigninDetails />,
  },
  {
    path: "/signup/step3",
    element: <Step3Confirmation />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
]);

export default router;
