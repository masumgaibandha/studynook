import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FaWifi } from "react-icons/fa";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyListingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    return (
      <section className="min-h-screen bg-[#F7F3EF] px-4 py-14">
        <div className="mx-auto max-w-3xl rounded-3xl border border-[#E5E7EB] bg-white p-10 text-center shadow-lg">
          <h1 className="text-3xl font-black text-[#111111]">
            Please Login First
          </h1>

          <p className="mt-3 text-[#6B7280]">
            You need to login to view your listings.
          </p>

          <Link href="/login">
            <Button
              radius="full"
              className="mt-6 bg-[#FF6B1A] px-8 font-semibold text-white hover:bg-[#FF8A3D]"
            >
              Login
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  const res = await fetch("http://localhost:5000/rooms", {
    cache: "no-store",
  });

  const rooms = await res.json();

  const myRooms = rooms.filter((room) => room.ownerEmail === user.email);

  return (
    <section className="bg-[#F7F3EF] px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black text-[#111111]">My Listings</h1>

          <p className="mt-3 text-[#6B7280]">
            Manage all your listed study rooms.
          </p>
        </div>

        {myRooms.length === 0 ? (
          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-10 text-center shadow-lg">
            <h2 className="text-2xl font-bold text-[#111111]">
              No Rooms Added Yet
            </h2>

            <p className="mt-3 text-[#6B7280]">
              Start by adding your first study room.
            </p>

            <Link href="/add-room">
              <Button
                radius="full"
                className="mt-6 bg-[#FF6B1A] px-8 font-semibold text-white hover:bg-[#FF8A3D]"
              >
                Add Room
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {myRooms.map((room) => (
              <div
                key={room._id}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-lg"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={room.imageUrl}
                    alt={room.roomName}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-[#FF6B1A] px-4 py-2 text-xs font-semibold text-white">
                    ${room.hourlyRate}/hr
                  </div>
                </div>

                <div className="flex flex-1 flex-col space-y-5 p-6">
                  <div>
                    <h2 className="text-2xl font-bold text-[#111111]">
                      {room.roomName}
                    </h2>

                    <p className="mt-2 line-clamp-3 text-sm leading-7 text-[#6B7280]">
                      {room.description}
                    </p>
                  </div>

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

                  <Link href={`/rooms/${room._id}`} className="mt-auto">
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
        )}
      </div>
    </section>
  );
};

export default MyListingsPage;
