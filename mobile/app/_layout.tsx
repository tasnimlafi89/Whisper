import { Stack } from "expo-router";
import "./global.css"

import {QueryClient,QueryClientProvider,useQuery,useMutation} from '@tanstack/react-query';

const queryClient = new QueryClient()
export default function RootLayout() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Stack />
    </QueryClientProvider>
  );
}
