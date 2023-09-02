"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import * as React from "react";

export function Query({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
