import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FaWifi } from "react-icons/fa";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";

const RoomsCard = ({ room }) => {
    const { roomName, description, hourlyRate, floor, capacity, amenities, imageUrl, _id } = room;
  return (
    <div>
      <div
       
        className="overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      >
        {/* Image */}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={roomName}
            fill
            className="object-cover transition duration-500 hover:scale-110"
          />

          <div className="absolute left-4 top-4 rounded-full bg-[#FF6B1A] px-4 py-2 text-xs font-semibold text-white shadow-lg">
            ${hourlyRate}/hr
          </div>
        </div>

        {/* Content */}
        <div className="space-y-5 p-6">
          <div>
            <h2 className="text-2xl font-bold text-[#111111]">
              {roomName}
            </h2>

            <p className="mt-2 line-clamp-3 text-sm leading-7 text-[#6B7280]">
              {description}
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
          <Link href={`/rooms/${_id}`}>
            <Button
              radius="full"
              className="w-full bg-[#FF6B1A] font-semibold text-white hover:bg-[#FF8A3D]"
            >
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomsCard;
