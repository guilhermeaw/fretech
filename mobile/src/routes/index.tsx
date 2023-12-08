import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AppRoutes } from './app.routes';

export function Routes() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AppRoutes />
    </QueryClientProvider>
  );
}
