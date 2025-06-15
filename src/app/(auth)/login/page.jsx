import { LoginForm } from "@/components/login-form"
import { CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <CardContent className="p-0">
        <LoginForm />
      </CardContent>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="underline underline-offset-2 text-primary">
          Register
        </Link>
      </div>
    </>
  );
}
