"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-white/80 backdrop-blur-xl shadow-sm">
      <nav className="mx-auto flex h-18 container items-center justify-between ">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/study-nook-logo.png"
            alt="StudyNook"
            width={180}
            height={50}
            className="object-contain md:w-[220px]"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href={"/"} className="text-sm font-semibold text-[#FF6B1A]">
            Home
          </Link>

          <Link
            href={"/rooms"}
            className="text-sm font-medium text-[#111111] hover:text-[#FF6B1A]"
          >
            Rooms
          </Link>
          <Link
            href={"/add-room"}
            className="text-sm font-medium text-[#111111] hover:text-[#FF6B1A]"
          >
            Add Room
          </Link>
          <Link
            href={"/my-listings"}
            className="text-sm font-medium text-[#111111] hover:text-[#FF6B1A]"
          >
            My Listings
          </Link>
          <Link
            href={"/my-bookings"}
            className="text-sm font-medium text-[#111111] hover:text-[#FF6B1A]"
          >
            My Bookings
          </Link>

          <Link
            href={"/about"}
            className="text-sm font-medium text-[#111111] hover:text-[#FF6B1A]"
          >
            About
          </Link>
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <Link href={"/login"}>
            <Button
              variant="bordered"
              radius="full"
              size="sm"
              className="border-[#111111] px-6 font-semibold text-[#111111] hover:bg-[#111111] hover:text-white"
            >
              Login
            </Button>
          </Link>

          <Link href={"/register"}>
            <Button
              radius="full"
              size="sm"
              className="bg-[#FF6B1A] px-6 font-semibold text-white hover:bg-[#FF8A3D]"
            >
              Register
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:hidden">
          <Button
            as={Link}
            href="/login"
            radius="full"
            size="sm"
            className="bg-[#111111] px-5 font-semibold text-white"
          >
            Login
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
