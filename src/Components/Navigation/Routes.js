import {lazy, Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';

const HomePage = lazy(() => import('../../screens/Home'));
const SingnupPage = lazy(() => import('../../screens/Signup'));
const LoginPage = lazy(() => import('../../screens/Login'));
const ProductsPage = lazy(() => import('../../screens/Products'));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/signup" exact component={SingnupPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/products" exact component={ProductsPage} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
