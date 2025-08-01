import AppRoutes from "./routes";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './services/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  )
}

export default App;
