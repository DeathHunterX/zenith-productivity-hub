"use client";

import { setUser } from "@/common/redux/slices/user.slice";
import { useAppDispatch } from "@/common/redux/store";
import PrivateNavbar from "@/components/shared/navbar/private-navbar-";
import { SidebarLeft } from "@/components/shared/sidebar/sidebar-left";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useGetMe } from "@/features/auth/api/use-get-me";
import { useEffect } from "react";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  const { data: userInfo, isSuccess: isLoadingSuccess } = useGetMe();

  useEffect(() => {
    if (userInfo && isLoadingSuccess) {
      dispatch(setUser(userInfo));
    }
  }, [userInfo, isLoadingSuccess, dispatch]);

  return (
    <SidebarProvider>
      <SidebarLeft />

      <SidebarInset>
        <PrivateNavbar />
        <div className="px-8 pb-16">{children}</div>
      </SidebarInset>

      {/* <SidebarRight /> */}
    </SidebarProvider>
  );
};

export default PrivateLayout;
