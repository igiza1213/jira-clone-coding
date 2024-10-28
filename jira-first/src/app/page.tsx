import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/action";
import { UserButton } from "@/features/auth/components/user-button";

export default async function Home() {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  return (
    <div className="">
      <UserButton />
    </div>
  );
}
