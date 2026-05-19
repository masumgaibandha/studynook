"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-white/80 backdrop-blur-xl shadow-sm">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/study-nook-logo.png"
            alt="StudyNook"
            width={220}
            height={60}
            className="object-contain"
            priority
          />
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-sm font-semibold text-[#FF6B1A]">
            Home
          </Link>

          <Link
            href="/rooms"
            className="text-sm font-medium text-[#111111] transition hover:text-[#FF6B1A]"
          >
            Rooms
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-[#111111] transition hover:text-[#FF6B1A]"
          >
            About
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Button
            as={Link}
            href="/login"
            variant="bordered"
            radius="full"
            size="sm"
            className="border-[#111111] px-6 font-semibold text-[#111111] hover:bg-[#111111] hover:text-white"
          >
            Login
          </Button>

          <Button
            as={Link}
            href="/register"
            radius="full"
            size="sm"
            className="bg-[#FF6B1A] px-6 font-semibold text-white hover:bg-[#FF8A3D]"
          >
            Register
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
