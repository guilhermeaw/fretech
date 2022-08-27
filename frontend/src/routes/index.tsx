import { BrowserRouter, Route, Routes as DOMRoutes } from 'react-router-dom';
import { Header } from '../components/Header';
import Login from '../pages/Login';

export const Routes = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <DOMRoutes>
        <Route path="/" element={<Login />} />
        <Route path="/encomendas" element={<h1>encomendas</h1>} />
      </DOMRoutes>
    </BrowserRouter>
  );
};
