"use client";

import { Button } from "@/components/ui/button";
import { useGetMe } from "@/features/auth/api/use-get-me";
import { useSignOut } from "@/features/auth/api/use-sign-out";

const DashboardPage = () => {
  const { data, isLoading, error } = useGetMe();

  const { mutate: signOut } = useSignOut();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>DashboardPage</h1>
      <div className="">
        <p>{data.full_name}</p>
        <p>{data.email}</p>
        <p>{data.city}</p>
        <p>{data.country}</p>
      </div>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  );
};

export default DashboardPage;
