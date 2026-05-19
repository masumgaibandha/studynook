"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="overflow-hidden bg-[#F7F3EF]">
      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:px-8 lg:grid-cols-2 lg:gap-14 lg:py-16">
        {/* Left Content */}
        <div className="order-2 space-y-7 text-center lg:order-1 lg:text-left">
          <div className="inline-flex items-center rounded-full border border-[#FFE2CF] bg-[#FFF1E8] px-4 py-2">
            <p className="text-xs font-semibold text-[#FF6B1A] sm:text-sm">
              📚 Smart Library Room Booking
            </p>
          </div>

          <div className="space-y-5">
            <h1 className="text-4xl font-black leading-tight text-[#111111] sm:text-5xl md:text-6xl">
              Find. Book.
              <span className="text-[#FF6B1A]"> Focus.</span>
            </h1>

            <p className="mx-auto max-w-xl text-base leading-7 text-[#4B5563] sm:text-lg lg:mx-0 lg:leading-8">
              Discover quiet and modern study rooms for students, researchers,
              and teams. Book your perfect space instantly.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link href="/rooms">
              <Button
                radius="full"
                size="lg"
                className="w-[190px] bg-[#FF6B1A] font-semibold text-white hover:bg-[#FF8A3D]"
              >
                Explore Rooms
              </Button>
            </Link>

            <Link href="/add-room">
              <Button
                variant="bordered"
                radius="full"
                size="lg"
                className="w-[190px] border-[#111111] font-semibold text-[#111111] hover:bg-[#111111] hover:text-white"
              >
                Add Your Room
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-3">
            {[
              ["Easy Booking", "Book study rooms in just a few clicks."],
              ["Smart Schedule", "Real-time availability and confirmation."],
              ["Quiet Spaces", "Comfortable rooms for productive study."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-[#E5E7EB] bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="mb-2 text-base font-bold text-[#111111] sm:text-lg">
                  {title}
                </h3>
                <p className="text-sm leading-6 text-[#6B7280]">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="relative order-1 mx-auto w-full max-w-[620px] lg:order-2">
          <div className="overflow-hidden rounded-[28px] shadow-2xl sm:rounded-[36px]">
            <Image
              src="/assets/hero-banner.png"
              alt="Students studying in library"
              width={700}
              height={700}
              priority
              className="h-[320px] w-full object-cover sm:h-[430px] md:h-[520px] lg:h-[650px]"
            />
          </div>

          <div className="absolute -left-4 top-8 hidden overflow-hidden rounded-2xl border-4 border-white shadow-2xl sm:block lg:-left-10 lg:top-10">
            <Image
              src="/assets/library-image (1).jpg"
              alt="Students reading in library"
              width={180}
              height={180}
              className="h-[110px] w-[110px] object-cover md:h-[150px] md:w-[150px] lg:h-[180px] lg:w-[180px]"
            />
          </div>



          <div className="absolute bottom-4 left-1/2 flex w-[90%] -translate-x-1/2 items-center justify-between rounded-3xl bg-[#111111]/90 px-5 py-4 backdrop-blur-lg sm:bottom-6 sm:w-auto sm:gap-8 sm:px-8 sm:py-5 lg:left-6 lg:translate-x-0">
            <div>
              <h3 className="text-lg font-bold text-white sm:text-2xl">500+</h3>
              <p className="text-xs text-gray-300 sm:text-sm">Study Rooms</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white sm:text-2xl">
                1200+
              </h3>
              <p className="text-xs text-gray-300 sm:text-sm">Happy Users</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white sm:text-2xl">15K+</h3>
              <p className="text-xs text-gray-300 sm:text-sm">Bookings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
