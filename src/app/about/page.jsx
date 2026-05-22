import Link from "next/link";
import { Button } from "@heroui/react";
import { FaBookOpen, FaUsers, FaClock, FaShieldAlt } from "react-icons/fa";

const AboutPage = () => {
  return (
    <section className="bg-[#F7F3EF] px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <h1 className="[font-family:var(--font-poppins)] text-4xl font-black text-[#111111] md:text-5xl">
            About StudyNook
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-[#6B7280] leading-7">
            StudyNook is a modern library study room booking platform that helps
            students, researchers, and teams find quiet and productive spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">
            <h2 className="[font-family:var(--font-poppins)] text-3xl font-bold text-[#111111]">
              Our Mission
            </h2>

            <p className="mt-4 leading-8 text-[#6B7280]">
              Our mission is to make study room booking simple, fast, and
              reliable. Whether you need a quiet corner for exam preparation or
              a collaborative space for group work, StudyNook helps you book the
              right room at the right time.
            </p>

            <Link href="/rooms">
              <Button
                radius="full"
                className="mt-8 bg-[#FF6B1A] px-8 font-semibold text-white hover:bg-[#FF8A3D]"
              >
                Explore Rooms
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 shadow-lg">
              <FaBookOpen className="mb-4 text-[#FF6B1A]" size={30} />
              <h3 className="text-xl font-bold text-[#111111]">
                Smart Booking
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                Book rooms by date and time with a simple user-friendly system.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-lg">
              <FaUsers className="mb-4 text-[#FF6B1A]" size={30} />
              <h3 className="text-xl font-bold text-[#111111]">
                Student Friendly
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                Designed for students, researchers, teams, and library users.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-lg">
              <FaClock className="mb-4 text-[#FF6B1A]" size={30} />
              <h3 className="text-xl font-bold text-[#111111]">
                Real-Time Access
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                View available rooms and book your preferred schedule quickly.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-lg">
              <FaShieldAlt className="mb-4 text-[#FF6B1A]" size={30} />
              <h3 className="text-xl font-bold text-[#111111]">
                Reliable Platform
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                Built with modern technology for a smooth booking experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
