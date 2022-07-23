import { Suspense } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import { AuthLayout } from './layout';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// WEB PAGES
import { 
        OverviewPage, 
        SignInPage, 
        SignUpPage, 
        Home, Contact, 
        GetStarted, 
        SolarInstallation,
        SolarAnalytics,
        }

 from './pages';
 

import { Analytics, DataTable} from './components'
import { ConfirmEmail } from './components/compounds/ConfirmEmail/confirmEmail';



const PrivateOutlet = () => {

  // get isAuth value (boolean ) from state in auth reducer
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
        <Route path= {ROUTES.contact.path} element={<Contact/>} />
        <Route path= {ROUTES.getStarted.path} element={<GetStarted/>} />
        <Route path= {ROUTES.solarInstallation.path} element={<SolarInstallation/>} />
        <Route path= {ROUTES.confirmEmail.path} element={<ConfirmEmail/>} />
        <Route path= {ROUTES.solarAnalytics.path} element={<SolarAnalytics/>} />
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