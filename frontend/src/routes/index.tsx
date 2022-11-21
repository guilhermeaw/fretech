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
import OrderInfo from '../pages/orders/Info';
import OrdersList from '../pages/orders/List';

import AddOccurrence from '../pages/occurrences/Add';
import OccurrencesList from '../pages/occurrences/List';

import AddVehicle from '../pages/vehicles/Add';
import VehiclesList from '../pages/vehicles/List';

import AddDelivery from '../pages/deliveries/Add';
import DeliveriesList from '../pages/deliveries/List';
import EditOccurrence from '../pages/occurrences/Edit';

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
        <Route path="pedidos/:id" element={<OrderInfo />} />

        <Route path="ocorrencias" element={<OccurrencesList />} />
        <Route path="ocorrencias/nova" element={<AddOccurrence />} />
        <Route path="ocorrencias/editar/:id" element={<EditOccurrence />} />

        <Route path="veiculos" element={<VehiclesList />} />
        <Route path="veiculos/novo" element={<AddVehicle />} />

        <Route path="entregas" element={<DeliveriesList />} />
        <Route path="entregas/nova" element={<AddDelivery />} />
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
