import { Suspense } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { ROUTES } from './routes/routes';
import { AuthLayout } from './layout';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// IMPORTED WEB PAGES 
import { 
        OverviewPage, 
        SignInPage, 
        ForgotPasswordPage,
        ResetPasswordPage,
        SignUpPage,
        Home, ContactPage, AboutPage,
        GetStarted, 
        SolarInstallation,
        SolarAnalytics,
        ConfirmEmailPage,
        PricingPage, LearnMorePage, SolarPVCalculatorPage
        }

 from './pages';
 

import { Analytics, DataTable} from './components'



const PrivateOutlet = () => {

  // get isAuth value (boolean ) from state in auth reducer
  // if isAuth is True, it redirects to the index page /

  const { isAuthorized: isAuth } = useSelector((state) => state.auth);

  const location = useLocation();

    if (!isAuth) {
          return <Navigate to="/" state={{ from: location }} />;
        }
        
  return (
    <div>
      <Suspense fallback="loading...">
        <Outlet />
      </Suspense>
    </div>
  );
};

// for auth routes - login, signup forget password ...
// if isAuth is True, the /dashboard route is returned, if False, the AuthLayout is returned
const ProtectedOutlet = () => {
  const {isAuthorized: isAuth } = useSelector((state) => state.auth);
  return !isAuth ? (
    <AuthLayout>
      <Suspense fallback="loading...">
        <Outlet />
      </Suspense>
    </AuthLayout>
  ) : (
    <Navigate to="/dashboard" />
  );
};

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<ProtectedOutlet/>}>
        <Route index element={<Home />} />
        <Route path={ROUTES.signIn.path} element={<SignInPage />} />
        <Route path={ROUTES.signUp.path} element={<SignUpPage />} />
        <Route path= "/forgot-password" element={<ForgotPasswordPage />} />
        <Route path= "/reset-password" element={<ResetPasswordPage />} />
        <Route path="/verify/:encoded_email" element={<ConfirmEmailPage />} />
        <Route path= {ROUTES.contact.path} element={<ContactPage/>} />
        <Route path= "/about" element={<AboutPage/>} />
        <Route path= {ROUTES.getStarted.path} element={<GetStarted/>} />
        <Route path= {ROUTES.solarCalculator.path} element={<SolarPVCalculatorPage />} />
        <Route path= {ROUTES.solarInstallation.path} element={<SolarInstallation />} />
        <Route path= {ROUTES.confirmEmail.path} element={<ConfirmEmailPage />} />
        <Route path= {ROUTES.solarAnalytics.path} element={<SolarAnalytics />} />
        <Route path= "/pricing" element = {<PricingPage />} />
        <Route path= "/learn-more" element = {<LearnMorePage />} />
      </Route>

      <Route path={ROUTES.dashboard.path} element={<PrivateOutlet />}>
        <Route path={ROUTES.overview.path} element={<OverviewPage />} />
        <Route path= {ROUTES.generateData.path} element={<DataTable/>} />
        <Route path= {ROUTES.analytics.path} element={<Analytics />} />
        <Route index element={<Navigate to={ROUTES.overview.path} />} />
      </Route>

    </Routes>

    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </>
);

export default App;