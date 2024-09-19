import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Login = () => {
  return (
    <main className={"flex items-center justify-center h-96"}>
      <div className={"flex flex-col items-center justify-center space-y-5"}>
        <h1 className={"text-4xl"}>Login</h1>
        <Button
          size={"lg"}
          className={"space-x-2 bg-purple-500 text-foreground"}
        >
          <Image
            width={28}
            height={28}
            src={"/digilocker.png"}
            alt={"Sign in with digilocker"}
            className={"shadow-md"}
          />
          <span>Login with Digilocker </span>
        </Button>

        <div className={"text-sm text-foreground/70"}>
          Upon signing in, you agree to our Privacy Policy
        </div>
      </div>
    </main>
  );
};

export default Login;
