"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="bg-[#F7F3EF]">
      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-8">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-[#FFE2CF] bg-[#FFF1E8] px-4 py-2">
            <p className="text-sm font-medium text-[#FF6B1A]">
              📚 Smart Library Room Booking
            </p>
          </div>

          {/* Heading */}
          <div className="space-y-5">
            <h1 className="max-w-xl text-5xl font-black leading-tight text-[#111111] md:text-6xl">
              Find. Book.
              <span className="text-[#FF6B1A]"> Focus.</span>
            </h1>

            <p className="max-w-lg text-lg leading-8 text-[#4B5563]">
              Discover quiet and modern study rooms for students, researchers,
              and teams. Book your perfect space instantly.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/rooms">
              <Button
                radius="full"
                size="lg"
                className="bg-[#FF6B1A] px-8 font-semibold text-white hover:bg-[#FF8A3D]"
              >
                Explore Rooms
              </Button>
            </Link>

            <Link href="/add-room">
              <Button
                variant="bordered"
                radius="full"
                size="lg"
                className="border-[#111111] px-8 font-semibold text-[#111111] hover:bg-[#111111] hover:text-white"
              >
                Add Your Room
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 gap-5 pt-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-bold text-[#111111]">
                Easy Booking
              </h3>
              <p className="text-sm leading-6 text-[#6B7280]">
                Book study rooms in just a few clicks.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-bold text-[#111111]">
                Smart Schedule
              </h3>
              <p className="text-sm leading-6 text-[#6B7280]">
                Real-time availability and instant confirmation.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-bold text-[#111111]">
                Quiet Spaces
              </h3>
              <p className="text-sm leading-6 text-[#6B7280]">
                Comfortable environments for productive study.
              </p>
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="relative">
          {/* Main Image */}
          <div className="overflow-hidden rounded-[32px] shadow-2xl">
            <Image
              src="/assets/hero-banner.png"
              alt="Study Room"
              width={700}
              height={700}
              className="h-[650px] w-full object-cover"
              priority
            />
          </div>

          {/* Floating Image Top */}
          <div className="absolute -left-10 top-10 hidden overflow-hidden rounded-3xl border-4 border-white shadow-2xl lg:block">
            <Image
              src="/assets/library-image (1).jpg"
              alt="Library"
              width={180}
              height={180}
              className="h-[180px] w-[180px] object-cover"
            />
          </div>

          {/* Floating Image Bottom */}
          <div className="absolute -bottom-10 right-0 hidden overflow-hidden rounded-3xl border-4 border-white shadow-2xl lg:block">
            <Image
              src="/assets/library-image (13).jpg"
              alt="Students"
              width={220}
              height={220}
              className="h-[220px] w-[220px] object-cover"
            />
          </div>

          {/* Stats Card */}
          <div className="absolute bottom-6 left-6 flex items-center gap-8 rounded-3xl bg-[#111111]/90 px-8 py-5 backdrop-blur-lg">
            <div>
              <h3 className="text-2xl font-bold text-white">500+</h3>
              <p className="text-sm text-gray-300">Study Rooms</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">1200+</h3>
              <p className="text-sm text-gray-300">Happy Users</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">15K+</h3>
              <p className="text-sm text-gray-300">Bookings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
