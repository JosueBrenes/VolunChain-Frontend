"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A061E] p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#151127] rounded-[20px] overflow-hidden max-w-4xl w-full mx-4">
        <div className="relative hidden md:block p-10">
          <div className="absolute top-10 left-10">
            <div className="flex items-center gap-4">
              <Image
                src="/logo.svg"
                alt="VolunChain Logo"
                width={150}
                height={150}
              />
            </div>
          </div>

          <Image
            src="/volunchain-illustration.png"
            alt="VolunChain Illustration"
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="p-10 md:p-16">
          <p className="text-[#7C88B1] text-sm mb-4">Welcome back</p>

          <h1 className="text-white text-3xl font-bold mb-4">
            Sign In to VolunChain
          </h1>

          <p className="text-[#7C88B1] text-sm mb-8">
            Don't have an account?{" "}
            <Link href="/register" className="text-[#4285f4] hover:underline">
              Register
            </Link>
          </p>

          <button className="w-full mb-10 flex items-center justify-center gap-4 bg-transparent border border-[#73b9eb] text-[#73b9eb] rounded-full py-3 hover:bg-[#73b9eb]/10 transition-colors">
            <span>Sign in with Google</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.1711 8.36788H17.4998V8.33329H9.99984V11.6666H14.7094C14.0223 13.6071 12.1761 15 9.99984 15C7.23859 15 4.99984 12.7612 4.99984 10C4.99984 7.23871 7.23859 5 9.99984 5C11.2744 5 12.4344 5.48612 13.3177 6.28612L15.8261 3.77779C14.3177 2.36663 12.2594 1.5 9.99984 1.5C5.31734 1.5 1.49984 5.31746 1.49984 10C1.49984 14.6825 5.31734 18.5 9.99984 18.5C14.6823 18.5 18.4998 14.6825 18.4998 10C18.4998 9.43829 18.4098 8.89371 18.1711 8.36788Z"
                fill="#73b9eb"
              />
            </svg>
          </button>

          <div className="space-y-6">
            <div>
              <Input
                type="email"
                placeholder="Your email here"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <Input
                type="password"
                placeholder="Your password here"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="w-full flex items-center justify-center gap-4 bg-[#EF565D] text-white rounded-full py-3 hover:bg-[#EF565F]/90 transition-colors">
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}