"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { MdOutlineErrorOutline } from "react-icons/md";

const NotFound = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#F7F3EF] px-4">
      <div className="max-w-xl text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#FF6B1A] text-white shadow-xl">
          <MdOutlineErrorOutline size={50} />
        </div>

        {/* 404 */}
        <h1 className="text-7xl font-black text-[#111111] md:text-8xl">404</h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-bold text-[#111111]">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-lg leading-8 text-[#6B7280]">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href={"/"}>
            <Button
              radius="full"
              size="lg"
              className="bg-[#FF6B1A] px-8 font-semibold text-white hover:bg-[#FF8A3D]"
            >
              Back To Home
            </Button>
          </Link>

          <Link href={"/rooms"}>
            <Button
              variant="bordered"
              radius="full"
              size="lg"
              className="border-[#111111] px-8 font-semibold text-[#111111] hover:bg-[#111111] hover:text-white"
            >
              Explore Rooms
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
