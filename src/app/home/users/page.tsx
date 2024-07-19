import { Button, buttonVariants } from "@/components/ui/button";
import { AllUsersGrid } from "@/features/users";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function UsersPage() {
  return (
    <div>
       <div className="py-2 w-full flex justify-end items-center gap-2">
       
        <Link href={'/home/users/new-user'} className={buttonVariants({ size: 'sm', })}>
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Añadir usuario
          </span>
        </Link>
      </div>

      <AllUsersGrid />


    </div>
  );
}