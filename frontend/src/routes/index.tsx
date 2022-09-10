import { BrowserRouter, Route, Routes as DOMRoutes } from 'react-router-dom';
import { Header } from '../components/Header';
import Login from '../pages/Login';

const AppRoutes = () => (
  <>
    <Header />
    <DOMRoutes>
      <Route path="/encomendas" element={<h1>encomendas</h1>} />
    </DOMRoutes>
  </>
);

const AuthRoutes = () => (
  <DOMRoutes>
    <Route path="/" element={<Login />} />
  </DOMRoutes>
);

export const Routes = () => {
  const logged = true;

  return (
    <BrowserRouter>{logged ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
};
