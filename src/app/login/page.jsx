"use client";

import { authClient } from "@/lib/auth-client";

import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    if (data) {
      toast.success("Login successful");
      redirect("/");
    }

    if (error) {
      toast.error("Login failed");
    }
  };

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <section className="min-h-screen bg-[#F7F3EF] px-4 py-16">
      <div className="mx-auto max-w-md">
        {/* Heading */}
        <div className="mb-6 text-center">
          <h1 className="[font-family:var(--font-poppins)] text-4xl font-black text-[#111111]">
            Login to Your Account
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#6B7280]">
            Join StudyNook and start booking quiet study rooms today.
          </p>
        </div>

        {/* Card */}
        <Card className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-xl md:p-8">
          <Form onSubmit={onSubmit} className="flex flex-col gap-5">
            {/* Email */}
            <TextField isRequired name="email" type="email">
              <Label className="text-sm font-semibold text-[#111111]">
                Email
              </Label>

              <Input placeholder="john@example.com" className="rounded-2xl" />

              <FieldError />
            </TextField>

            {/* Password */}
            <TextField isRequired name="password" type="password">
              <Label className="text-sm font-semibold text-[#111111]">
                Password
              </Label>

              <Input
                placeholder="Enter your password"
                className="rounded-2xl"
              />
              <FieldError />
            </TextField>

            {/* Login Button */}
            <Button
              type="submit"
              radius="full"
              size="lg"
              className=" w-full bg-[#FF6B1A] font-semibold text-white hover:bg-[#FF8A3D]"
            >
              Login
            </Button>
          </Form>

          {/* Google Button UI Only */}
          <Button
            type="button"
            variant="outline"
            radius="full"
            size="lg"
            className="w-full border-[#E5E7EB] bg-white font-semibold text-[#111111]"
            onClick={handleGoogleSignin}
          >
            <FcGoogle size={22} />
            Continue with Google
          </Button>

          {/* Footer */}
          <p className="text-center text-sm text-[#6B7280]">
            Don't have an account?{" "}
            <Link href="/register" className="font-semibold text-[#FF6B1A]">
              Register
            </Link>
          </p>
        </Card>
      </div>
    </section>
  );
};

export default LoginPage;
