import { BrowserRouter, Route, Routes as DOMRoutes } from 'react-router-dom';

import { useAuth } from '../store/Auth';
import { Header } from '../components/Header';
import { ContentContainer } from '../components/ContentContainer';

import AddDeliveryman from '../pages/deliverymans/Add';
import EditDeliveryman from '../pages/deliverymans/Edit';
import DeliverymansList from '../pages/deliverymans/List';

import OrdersList from '../pages/orders/List';

import Login from '../pages/login';
import AddOrder from '../pages/orders/Add';
import EditOrder from '../pages/orders/Edit';
import HomePage from '../pages/home';

const AppRoutes = () => (
  <>
    <Header />
    <ContentContainer>
      <DOMRoutes>
        <Route path="/" element={<HomePage />} />

        <Route path="entregadores" element={<DeliverymansList />} />
        <Route path="entregadores/novo" element={<AddDeliveryman />} />
        <Route path="entregadores/editar/:id" element={<EditDeliveryman />} />

        <Route path="pedidos" element={<OrdersList />} />
        <Route path="pedidos/novo" element={<AddOrder />} />
        <Route path="pedidos/editar/:id" element={<EditOrder />} />
      </DOMRoutes>
    </ContentContainer>
  </>
);

const AuthRoutes = () => (
  <DOMRoutes>
    <Route path="*" element={<Login />} />
  </DOMRoutes>
);

export const Routes = () => {
  const { user } = useAuth();

  const isAuthenticated = !!user;

  return (
    <BrowserRouter>
      {isAuthenticated ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
};
