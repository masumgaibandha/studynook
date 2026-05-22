export async function generateMetadata({ params }) {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/rooms/${id}`, {
    cache: "no-store",
  });

  const room = await res.json();

  return {
    title: `StudyNook | ${room.roomName}`,
  };
}
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { FaWifi, FaRegStar } from "react-icons/fa";
import { MdOutlineMapsHomeWork, MdOutlineMeetingRoom } from "react-icons/md";
import { HiOutlineUsers, HiOutlineCurrencyDollar } from "react-icons/hi";

import { EditModal } from "@/components/EditModal";
import { DeleteRoom } from "@/components/DeleteRoom";
import BookingCard from "@/components/BookingCard";

const RoomsDetailsPage = async ({ params }) => {
  const { id } = await params;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(`http://localhost:5000/rooms/${id}`, {
    cache: "no-store",
  });

  const room = await res.json();

  const isOwner =
    user?.email && room?.ownerEmail && user.email === room.ownerEmail;

  const {
    roomName,
    description,
    hourlyRate,
    floor,
    capacity,
    amenities,
    imageUrl,
  } = room;

  return (
    <section className="bg-[#F7F3EF] px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/rooms"
            className="text-sm font-semibold text-[#FF6B1A] hover:underline"
          >
            ← Back to Rooms
          </Link>

          <div className="flex items-center gap-3">
            {isOwner && (
              <>
                <EditModal room={room} />
                <DeleteRoom room={room} />
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
            <Image
              src={imageUrl}
              alt={roomName}
              width={800}
              height={520}
              priority
              className="h-80 w-full object-cover md:h-[430px]"
            />
          </div>

          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-xl md:p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FFF1E8] px-4 py-2 text-sm font-semibold text-[#FF6B1A]">
              <MdOutlineMeetingRoom />
              Study Room
            </div>

            <h1 className="[font-family:var(--font-poppins)] text-3xl font-black leading-tight text-[#111111] md:text-4xl">
              {roomName}
            </h1>

            <p className="mt-4 text-base leading-7 text-[#6B7280]">
              {description}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#E5E7EB] bg-[#F7F3EF] p-4">
                <MdOutlineMapsHomeWork
                  className="mb-2 text-[#FF6B1A]"
                  size={24}
                />
                <p className="text-sm text-[#6B7280]">Floor</p>
                <h3 className="mt-1 text-lg font-bold text-[#111111]">
                  {floor}
                </h3>
              </div>

              <div className="rounded-2xl border border-[#E5E7EB] bg-[#F7F3EF] p-4">
                <HiOutlineUsers className="mb-2 text-[#FF6B1A]" size={24} />
                <p className="text-sm text-[#6B7280]">Capacity</p>
                <h3 className="mt-1 text-lg font-bold text-[#111111]">
                  {capacity} People
                </h3>
              </div>

              <div className="rounded-2xl border border-[#E5E7EB] bg-[#F7F3EF] p-4">
                <HiOutlineCurrencyDollar
                  className="mb-2 text-[#FF6B1A]"
                  size={24}
                />
                <p className="text-sm text-[#6B7280]">Hourly Rate</p>
                <h3 className="mt-1 text-lg font-bold text-[#111111]">
                  ${hourlyRate}/hr
                </h3>
              </div>

              <div className="rounded-2xl border border-[#E5E7EB] bg-[#F7F3EF] p-4">
                <FaRegStar className="mb-2 text-[#FF6B1A]" size={22} />
                <p className="text-sm text-[#6B7280]">Booking Count</p>
                <h3 className="mt-1 text-lg font-bold text-[#111111]">
                  {room.bookingCount || 0} Bookings
                </h3>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="mb-3 text-xl font-bold text-[#111111]">
                Amenities
              </h3>

              <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF1E8] px-4 py-2 text-sm font-semibold text-[#FF6B1A]">
                <FaWifi />
                {Array.isArray(amenities) ? amenities.join(", ") : amenities}
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <BookingCard room={room} />

              <Link
                href="/rooms"
                className="flex h-12 w-full items-center justify-center rounded-full border border-[#111111] px-10 text-center font-semibold text-[#111111] hover:bg-[#111111] hover:text-white sm:w-auto"
              >
                Back to Rooms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsDetailsPage;
