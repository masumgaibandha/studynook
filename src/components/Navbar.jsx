"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";

const Navbar = () => {
  const pathname = usePathname();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success("Signed out successfully!");
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "/rooms" },

    ...(user
      ? [
          { name: "Add Room", href: "/add-room" },
          { name: "My Listings", href: "/my-listings" },
          { name: "My Bookings", href: "/my-bookings" },
        ]
      : []),

    { name: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-white/80 shadow-sm backdrop-blur-xl">
      <nav className="container mx-auto flex h-18 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/study-nook-logo.png"
            alt="StudyNook"
            width={180}
            height={50}
            className="object-contain md:w-55"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition ${
                  isActive
                    ? "font-semibold text-[#FF6B1A]"
                    : "font-medium text-[#111111] hover:text-[#FF6B1A]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-3 sm:flex">
          {user ? (
            <div className="group relative">
              <span>
                <Avatar>
                  <Avatar.Image
                    referrerPolicy="no-referrer"
                    alt={user?.name}
                    src={user?.image}
                  />

                  <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                </Avatar>
              </span>

              <div className="invisible absolute right-0 top-14 z-50 w-52 rounded-2xl border border-[#E5E7EB] bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
               

                <Link
                  href="/my-listings"
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-[#111111] hover:bg-[#F7F3EF]"
                >
                  My Listings
                </Link>

                <Link
                  href="/my-bookings"
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-[#111111] hover:bg-[#F7F3EF]"
                >
                  My Bookings
                </Link>

                <button
                  onClick={handleSignOut}
                  className="w-full rounded-xl px-3 py-2 text-left text-sm font-medium text-red-500 hover:bg-red-50"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link href="/login">
                <Button
                  variant="bordered"
                  radius="full"
                  size="sm"
                  className="border-[#111111] px-6 font-semibold text-[#111111] hover:bg-[#111111] hover:text-white"
                >
                  Login
                </Button>
              </Link>

              <Link href="/register">
                <Button
                  radius="full"
                  size="sm"
                  className="bg-[#FF6B1A] px-6 font-semibold text-white hover:bg-[#FF8A3D]"
                >
                  Register
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Login Button */}
        <div className="flex items-center gap-3 sm:hidden">
          {!user ? (
            <Button
              as={Link}
              href="/login"
              radius="full"
              size="sm"
              className="bg-[#111111] px-5 font-semibold text-white"
            >
              Login
            </Button>
          ) : (
            <Avatar>
              <Avatar.Image
                referrerPolicy="no-referrer"
                alt={user?.name}
                src={user?.image}
              />

              <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
            </Avatar>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
