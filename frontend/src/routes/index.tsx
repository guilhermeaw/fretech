import { BrowserRouter, Route, Routes as DOMRoutes } from 'react-router-dom';

import { Header } from '../components/Header';
import { ContentContainer } from '../components/ContentContainer';

import AddDeliveryman from '../pages/deliverymans/Add';
import EditDeliveryman from '../pages/deliverymans/Edit';
import DeliverymansList from '../pages/deliverymans/List';

import OrdersList from '../pages/orders/List';

import Login from '../pages/Login';
import AddOrder from '../pages/orders/Add';
import EditOrder from '../pages/orders/Edit';

const AppRoutes = () => (
  <>
    <Header />
    <ContentContainer>
      <DOMRoutes>
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
    <Route path="/" element={<Login />} />
  </DOMRoutes>
);

export const Routes = () => {
  const logged = true;

  return (
    <BrowserRouter>{logged ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
};
