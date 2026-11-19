import RoleGuard from "@/components/auth/role-guard";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <RoleGuard roles={["SUPER_ADMIN", "ADMIN", "DOCTOR"]}>
      {children}
    </RoleGuard>
  );
}
