import Image from "next/image";
import Link from "next/link";
import { Button, Card } from "@heroui/react";
import { FaCalendarAlt, FaClock, FaDollarSign } from "react-icons/fa";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { BookingCancel } from "@/components/BookingCancel";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const {token} = await auth.api.getToken({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    return (
      <section className="min-h-screen bg-[#F7F3EF] px-4 py-14">
        <div className="mx-auto max-w-3xl rounded-3xl border border-[#E5E7EB] bg-white p-10 text-center shadow-lg">
          <h1 className="[font-family:var(--font-poppins)] text-3xl font-black text-[#111111]">
            Please Login First
          </h1>

          <p className="mt-3 text-[#6B7280]">
            You need to login to view your bookings.
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

  const res = await fetch(`http://localhost:5000/bookings/${user.id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  const bookings = await res.json();
  

  return (
    <section className="min-h-screen bg-[#F7F3EF] px-4 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h1 className="[font-family:var(--font-poppins)] text-4xl font-black text-[#111111]">
            My Bookings
          </h1>
          <h2 className="mt-3 text-lg font-semibold text-[#FF6B1A]">
            Welcome, {user.name}
          </h2>

          <p className="mt-3 text-[#6B7280]">
            View and manage all your booked study rooms.
          </p>
        </div>

        {bookings.length === 0 && (
          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-10 text-center shadow-lg">
            <h2 className="text-2xl font-bold text-[#111111]">
              No Bookings Found
            </h2>

            <p className="mt-3 text-[#6B7280]">
              You haven't booked any study room yet.
            </p>

            <Link href="/rooms">
              <Button
                radius="full"
                className="mt-6 bg-[#FF6B1A] px-8 font-semibold text-white hover:bg-[#FF8A3D]"
              >
                Explore Rooms
              </Button>
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6">
          {bookings.map((booking) => (
            <Card
              key={booking._id}
              className="overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-xl"
            >
              <div className="grid grid-cols-1 gap-6 p-5 md:grid-cols-[260px_1fr_auto] md:items-center">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={booking.imageUrl}
                    alt={booking.roomName}
                    width={400}
                    height={260}
                    className="h-55 w-full object-cover md:h-45"
                  />
                </div>

                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FFF1E8] px-4 py-1.5 text-xs font-semibold capitalize text-[#FF6B1A]">
                    <MdOutlineMeetingRoom />
                    {booking.status}
                  </div>

                  <h2 className="text-2xl font-bold text-[#111111]">
                    {booking.roomName}
                  </h2>

                  <div className="mt-5 grid grid-cols-1 gap-3 text-sm text-[#6B7280] sm:grid-cols-3">
                    <p className="flex items-center gap-2">
                      <FaCalendarAlt className="text-[#FF6B1A]" />
                      {booking.date}
                    </p>

                    <p className="flex items-center gap-2">
                      <FaClock className="text-[#FF6B1A]" />
                      {booking.startTime} - {booking.endTime}
                    </p>

                    <p className="flex items-center gap-2">
                      <FaDollarSign className="text-[#FF6B1A]" />$
                      {booking.totalCost}
                    </p>
                  </div>

                  <div className="mt-5 rounded-2xl bg-[#F7F3EF] p-4">
                    <p className="text-sm font-semibold text-[#111111]">
                      Special Note
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[#6B7280]">
                      {booking.specialNote || "No special note added."}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Link href={`/rooms/${booking.roomId}`}>
                    <Button
                      radius="full"
                      className="w-full bg-[#FF6B1A] px-6 font-semibold text-white hover:bg-[#FF8A3D]"
                    >
                      View Room
                    </Button>
                  </Link>

                  <BookingCancel bookingId={booking._id} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyBookingPage;
