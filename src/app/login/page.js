"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState("");
  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setLoginInProgress(true);
    await signIn("credentials", { email, password, callbackUrl: "/" });
    setLoginInProgress(false);
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
      <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          disabled={loginInProgress}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          disabled={loginInProgress}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit">Login</button>
        <div className="my-4 text-center text-gray-500">
          or Login with provider
        </div>
        <button
          className="flex gap-4 justify-center
          max-w-xs mx-auto"
          disabled={loginInProgress}
        >
          <Image src={"/google.png"} alt={""} width={24} height={24} />
          Login with google
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Existing account?{" "}
          <Link className="underline" href={"/login"}>
            Login here &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
}

export default LoginPage;
