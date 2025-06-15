import { RegisterForm } from "@/components/register-form";
import { CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <CardContent className="p-0">
        <RegisterForm />
      </CardContent>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="underline underline-offset-2 text-primary">
          Login
        </Link>
      </div>
    </>
  );
}
