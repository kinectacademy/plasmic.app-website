import React, { ReactNode } from "react";

// This provides a safe, empty context so Plasmic components don't crash
export default function GlobalContextWrapper({ children }: { children: ReactNode }) {
  return <>{children}</>;
}