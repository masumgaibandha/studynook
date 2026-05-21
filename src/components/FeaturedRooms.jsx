import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FaWifi } from "react-icons/fa";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";

const FeaturedRooms = async () => {
  const res = await fetch("http://localhost:5000/rooms", {
    cache: "no-store",
  });

  const rooms = await res.json();
  const featuredRooms = rooms.slice(0, 6);

  return (
    <section className="bg-[#F7F3EF] px-4 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black text-[#111111]">
            Explore Study Rooms
          </h1>

          <p className="mt-3 text-[#6B7280]">
            Discover modern and comfortable study spaces for focused learning.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredRooms.map((room) => (
            <div
              key={room._id}
              className="overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={room.imageUrl}
                  alt={room.roomName}
                  fill
                  className="object-cover transition duration-500 hover:scale-110"
                />

                <div className="absolute left-4 top-4 rounded-full bg-[#FF6B1A] px-4 py-2 text-xs font-semibold text-white shadow-lg">
                  ${room.hourlyRate}/hr
                </div>
              </div>

              {/* Content */}
              <div className="space-y-5 p-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#111111]">
                    {room.roomName}
                  </h2>

                  <p className="mt-2 line-clamp-3 text-sm leading-7 text-[#6B7280]">
                    {room.description}
                  </p>
                </div>

                {/* Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-[#374151]">
                  <div className="flex items-center gap-2">
                    <HiMiniBuildingOffice2 className="text-[#FF6B1A]" />
                    <span>{room.floor}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MdOutlineMeetingRoom className="text-[#FF6B1A]" />
                    <span>{room.capacity} Seats</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaWifi className="text-[#FF6B1A]" />
                    <span>{room.amenities}</span>
                  </div>
                </div>

                {/* Button */}
                <Link href={`/rooms/${room._id}`}>
                  <Button
                    radius="full"
                    className="w-full bg-[#FF6B1A] font-semibold text-white hover:bg-[#FF8A3D]"
                  >
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;
