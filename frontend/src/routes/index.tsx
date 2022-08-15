import { BrowserRouter, Route, Routes as DOMRoutes } from 'react-router-dom';
import { Header } from '../components/Header';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <DOMRoutes>
        <Route path="/" element={<h1>rota raiz</h1>} />
        <Route path="/encomendas" element={<h1>encomendas</h1>} />
      </DOMRoutes>
    </BrowserRouter>
  );
};
