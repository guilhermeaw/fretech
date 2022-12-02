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
import EditOccurrence from '../pages/occurrences/Edit';
import OccurrencesList from '../pages/occurrences/List';

import AddVehicle from '../pages/vehicles/Add';
import EditVehicle from '../pages/vehicles/Edit';
import VehiclesList from '../pages/vehicles/List';

import AddDelivery from '../pages/deliveries/Add';
import EditDelivery from '../pages/deliveries/Edit';
import DeliveriesList from '../pages/deliveries/List';
import ManageDelivery from '../pages/deliveries/Manage';

import ChangePassword from '../pages/users/ChangePassword';

const AppRoutes = () => (
  <>
    <Header />
    <ContentContainer>
      <DOMRoutes>
        <Route path="/" element={<HomePage />} />

        <Route path="usuario/trocar-senha" element={<ChangePassword />} />

        <Route path="entregadores" element={<DeliverymansList />} />
        <Route path="entregadores/novo" element={<AddDeliveryman />} />
        <Route path="entregadores/editar/:id" element={<EditDeliveryman />} />

        <Route path="pedidos" element={<OrdersList />} />
        <Route path="pedidos/:id" element={<OrderInfo />} />
        <Route path="pedidos/novo" element={<AddOrder />} />
        <Route path="pedidos/editar/:id" element={<EditOrder />} />

        <Route path="ocorrencias" element={<OccurrencesList />} />
        <Route path="ocorrencias/nova" element={<AddOccurrence />} />
        <Route path="ocorrencias/editar/:id" element={<EditOccurrence />} />

        <Route path="veiculos" element={<VehiclesList />} />
        <Route path="veiculos/novo" element={<AddVehicle />} />
        <Route path="veiculos/editar/:id" element={<EditVehicle />} />

        <Route path="entregas" element={<DeliveriesList />} />
        <Route path="entregas/nova" element={<AddDelivery />} />
        <Route path="entregas/editar/:id" element={<EditDelivery />} />
        <Route path="entregas/controlar/:id" element={<ManageDelivery />} />
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
