import ReactDom from "react-dom/client";
import App from "./App";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// This enables two things
// Caching
// Global query control
const queryClient = new QueryClient();

ReactDom.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
);
