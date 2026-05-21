"use client";

import { authClient } from "@/lib/auth-client";

import {
  Button,
  Card,
  Description,
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

const RegisterPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
      image: user.image,
    });

    if (data) {
        
       toast.success("Registration successful! Please login.");
       redirect("/login");
    }
     

    if (error) {
      toast.error("Registration failed");
    }
  };
  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  }

  return (
    <section className="min-h-screen bg-[#F7F3EF] px-4 py-16">
      <div className="mx-auto max-w-md">
        {/* Heading */}
        <div className="mb-6 text-center">
          <h1 className="[font-family:var(--font-poppins)] text-4xl font-black text-[#111111]">
            Create Account
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#6B7280]">
            Join StudyNook and start booking quiet study rooms today.
          </p>
        </div>

        {/* Card */}
        <Card className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-xl md:p-8">
          <Form onSubmit={onSubmit} className="flex flex-col gap-5">
            {/* Name */}
            <TextField isRequired name="name" type="text">
              <Label className="text-sm font-semibold text-[#111111]">
                Name
              </Label>

              <Input placeholder="Enter your name" className="rounded-2xl" />

              <FieldError />
            </TextField>

            {/* Image URL */}
            <TextField isRequired name="image" type="url">
              <Label className="text-sm font-semibold text-[#111111]">
                Photo URL
              </Label>

              <Input
                placeholder="https://example.com/photo.jpg"
                className="rounded-2xl"
              />

              <FieldError />
            </TextField>

            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }

                return null;
              }}
            >
              <Label className="text-sm font-semibold text-[#111111]">
                Email
              </Label>

              <Input placeholder="john@example.com" className="rounded-2xl" />

              <FieldError />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 6) {
                  return "Password must be at least 6 characters";
                }

                if (!/[A-Z]/.test(value)) {
                  return "Password must contain uppercase letter";
                }

                if (!/[a-z]/.test(value)) {
                  return "Password must contain lowercase letter";
                }

                return null;
              }}
            >
              <Label className="text-sm font-semibold text-[#111111]">
                Password
              </Label>

              <Input
                placeholder="Enter your password"
                className="rounded-2xl"
              />

              <Description className="text-xs text-[#6B7280]">
                Minimum 6 characters with uppercase and lowercase letters.
              </Description>

              <FieldError />
            </TextField>

            {/* Register Button */}
            <Button
              type="submit"
              radius="full"
              size="lg"
              className=" w-full bg-[#FF6B1A] font-semibold text-white hover:bg-[#FF8A3D]"
            >
              Register
            </Button>
          </Form>

          {/* Google Button UI Only */}
          <Button
          onClick={handleGoogleSignin}
            type="button"
            variant="outline"
            radius="full"
            size="lg"
            className="w-full border-[#E5E7EB] bg-white font-semibold text-[#111111]"
          >
            <FcGoogle size={22} />
            Continue with Google
          </Button>

          {/* Footer */}
          <p className="text-center text-sm text-[#6B7280]">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-[#FF6B1A]">
              Login
            </Link>
          </p>
        </Card>
      </div>
    </section>
  );
};

export default RegisterPage;
