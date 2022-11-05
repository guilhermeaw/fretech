import { BrowserRouter, Route, Routes as DOMRoutes } from 'react-router-dom';

import { useAuth } from '../store/Auth';
import { Header } from '../components/Header';
import { ContentContainer } from '../components/ContentContainer';

import AddDeliveryman from '../pages/deliverymans/Add';
import EditDeliveryman from '../pages/deliverymans/Edit';
import DeliverymansList from '../pages/deliverymans/List';

import Login from '../pages/login';
import HomePage from '../pages/home';

import AddOrder from '../pages/orders/Add';
import EditOrder from '../pages/orders/Edit';
import OrdersList from '../pages/orders/List';

import AddOccurrence from '../pages/occurrences/Add';
import OccurrencesList from '../pages/occurrences/List';

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

        <Route path="ocorrencias" element={<OccurrencesList />} />
        <Route path="ocorrencias/nova" element={<AddOccurrence />} />
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
