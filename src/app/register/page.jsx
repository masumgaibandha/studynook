"use client";
import { authClient } from "@/lib/auth-client";
import { Card } from "@heroui/react";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { email } from "better-auth";

import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log(user);

    const { data: signUpData, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
      image: user.image,
    });
    if (signUpData) {
      redirect ("/login");
      toast.success("User registered successfully");    
    }
        if (error) {
      toast.error("Enter a valid credential");
    }
  };
  return (
    <div>
      <div className="text-center my-6">
        <h1 className="text-3xl font-bold">Create an Account</h1>
        <p className="mt-2 text-gray-600">
          Sign up to access exclusive features and stay updated with our latest
          news.
        </p>
      </div>
      <Card title="Register" className="max-w-md mx-auto mt-5 ">
        <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4">
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter Your Name" />
            <FieldError />
          </TextField>

          <TextField isRequired name="image" type="url">
            <Label>Image URL</Label>
            <Input placeholder=" Image URL" />
            <FieldError />
          </TextField>

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
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex justify-center">
            <Button type="submit" className={"w-full"}>
              Register
            </Button>
          </div>
        </Form>
        {/* Google Button */}
        <Button
          type="button"
          variant="outline"
          className="w-full rounded-none h-10 border border-gray-200 bg-white text-black text-xl font-semibold "
        >
          <FcGoogle />
          Sign In With Google
        </Button>

        {/* Footer */}
        <p className="text-center text-gray-500  mt-2">
          Already have an account?{" "}
          <Link href={"/login"}>
            <span className="text-cyan-600 font-semibold cursor-pointer">
              Log In
            </span>
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default RegisterPage;
