"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div className="flex flex-col items-start space-y-6">
          <div className="mb-[2px]">
            <Link href="/">
              <Image
                src="/assets/study-nook-logo.png"
                alt="StudyNook"
                width={190}
                height={55}
                className="object-contain brightness-[3]"
              />
            </Link>
          </div>

          <p className="max-w-xs text-sm leading-7 text-gray-400">
            StudyNook helps students and researchers find quiet, modern, and
            productive study rooms instantly.
          </p>

          <div className="flex items-center gap-3">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:bg-[#FF6B1A] hover:text-white"
            >
              <FaFacebookF size={15} />
            </Link>

            <Link
              href="https://x.com"
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:bg-[#FF6B1A] hover:text-white"
            >
              <FaXTwitter size={15} />
            </Link>

            <Link
              href="https://instagram.com"
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:bg-[#FF6B1A] hover:text-white"
            >
              <FaInstagram size={15} />
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:bg-[#FF6B1A] hover:text-white"
            >
              <FaLinkedinIn size={15} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-6 text-xl font-bold">Quick Links</h3>

          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-[#FF6B1A]">
                Home
              </Link>
            </li>

            <li>
              <Link href="/rooms" className="hover:text-[#FF6B1A]">
                Rooms
              </Link>
            </li>

            <li>
              <Link href="/add-room" className="hover:text-[#FF6B1A]">
                Add Room
              </Link>
            </li>

            <li>
              <Link href="/my-bookings" className="hover:text-[#FF6B1A]">
                My Bookings
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="mb-6 text-xl font-bold">Support</h3>

          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <Link href="/about" className="hover:text-[#FF6B1A]">
                About Us
              </Link>
            </li>

            <li>
              <Link href="/rooms" className="hover:text-[#FF6B1A]">
                Explore Rooms
              </Link>
            </li>

            <li>
              <Link href="/my-bookings" className="hover:text-[#FF6B1A]">
                My Bookings
              </Link>
            </li>

            <li>
              <Link href="/add-room" className="hover:text-[#FF6B1A]">
                Add Room
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-6 text-xl font-bold">Contact Info</h3>

          <div className="space-y-4 text-sm text-gray-400">
            <p className="flex items-center gap-3">
              <MdEmail className="text-[#FF6B1A]" size={18} />
              support@studynook.com
            </p>

            <p className="flex items-center gap-3">
              <MdPhone className="text-[#FF6B1A]" size={18} />
              +880 1234-567890
            </p>

            <p className="flex items-start gap-3">
              <MdLocationOn className="mt-1 text-[#FF6B1A]" size={18} />

              <span>
                123 Library Avenue,
                <br />
                Dhaka, Bangladesh
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-sm text-gray-500 sm:px-6 md:flex-row lg:px-8">
          <p>© 2026 StudyNook. All rights reserved.</p>

          <p>Designed for modern library study room booking.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
