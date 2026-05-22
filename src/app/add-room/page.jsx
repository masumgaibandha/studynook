"use client";

import { Button, Card } from "@heroui/react";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { authClient } from "@/lib/auth-client";
import {
  HiOutlinePhotograph,
  HiOutlineOfficeBuilding,
  HiOutlineUsers,
  HiOutlineCurrencyDollar,
} from "react-icons/hi";
import toast from "react-hot-toast";

const amenities = [
  { value: "Whiteboard", icon: "✏️" },
  { value: "Projector", icon: "📽️" },
  { value: "Wi-Fi", icon: "📶" },
  { value: "Power Outlets", icon: "🔌" },
  { value: "Quiet Zone", icon: "🔇" },
  { value: "Air Conditioning", icon: "❄️" },
];

const inputClass =
  "w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-[14px] text-[#111111] placeholder-[#6B7280] outline-none transition-colors hover:border-[#FF6B1A] focus:border-[#FF6B1A]";

const labelClass = "block text-[13px] font-semibold text-[#111111] mb-1.5";

const AddRoomPage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const onSubmit = async (e) => {
    e.preventDefault();

    const { data: tokenData } = await authClient.token();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const selectedAmenities = formData.getAll("amenities");

    const roomData = {
      ...data,
      amenities: selectedAmenities,
      ownerEmail: user?.email,
      ownerName: user?.name,
      bookingCount: 0,
    };

    const res = await fetch("http://localhost:5000/rooms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(roomData),
    });

    if (res.ok) {
      toast.success("Room created successfully");
      window.location.href = "/rooms";
    } else {
      toast.error("Failed to create room");
    }
  };

  return (
    <section className="min-h-screen bg-[#F7F3EF] px-4 py-14">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#FF6B1A] text-white shadow-xl">
            <MdOutlineMeetingRoom size={30} />
          </div>
          <h1 className="text-4xl font-black text-[#111111]">
            List a New Study Room
          </h1>
          <p className="mt-3 text-[#6B7280]">
            Share your study space with students and researchers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="rounded-3xl border border-[#E5E7EB] bg-white shadow-xl">
              <form onSubmit={onSubmit} className="space-y-8 p-6 md:p-10">
                <div>
                  <h2 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#111111]">
                    <span className="h-4 w-1 rounded-full bg-[#FF6B1A]" />
                    Basic Information
                  </h2>
                  <div className="grid grid-cols-1 gap-5">
                    <div>
                      <label className={labelClass}>
                        Room Name <span className="text-[#FF6B1A]">*</span>
                      </label>
                      <input
                        type="text"
                        name="roomName"
                        required
                        placeholder="e.g. Quiet Focus Room A"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        Image URL <span className="text-[#FF6B1A]">*</span>
                      </label>
                      <input
                        type="url"
                        name="imageUrl"
                        required
                        placeholder="https://example.com/room.jpg"
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#111111]">
                    <span className="h-4 w-1 rounded-full bg-[#FF6B1A]" />
                    Room Details
                  </h2>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                    <div>
                      <label className={labelClass}>
                        Floor <span className="text-[#FF6B1A]">*</span>
                      </label>
                      <input
                        type="text"
                        name="floor"
                        required
                        placeholder="e.g. 3rd Floor"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        Capacity <span className="text-[#FF6B1A]">*</span>
                      </label>
                      <input
                        type="number"
                        name="capacity"
                        required
                        placeholder="e.g. 6"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        Hourly Rate ($){" "}
                        <span className="text-[#FF6B1A]">*</span>
                      </label>
                      <input
                        type="number"
                        name="hourlyRate"
                        required
                        placeholder="e.g. 10"
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#111111]">
                    <span className="h-4 w-1 rounded-full bg-[#FF6B1A]" />
                    Description
                  </h2>
                  <textarea
                    name="description"
                    rows={5}
                    required
                    placeholder="Describe the room..."
                    className={inputClass}
                  />
                </div>

                <div>
                  <h2 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#111111]">
                    <span className="h-4 w-1 rounded-full bg-[#FF6B1A]" />
                    Amenities
                  </h2>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {amenities.map(({ value, icon }) => (
                      <label
                        key={value}
                        className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 shadow-sm hover:border-[#FF6B1A]"
                      >
                        <input
                          type="checkbox"
                          name="amenities"
                          value={value}
                          className="h-4 w-4 accent-[#FF6B1A]"
                        />
                        <span>{icon}</span>
                        <span className="text-[13px] font-medium text-[#111111]">
                          {value}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4 border-t border-[#E5E7EB] pt-6 sm:flex-row">
                  <Button
                    type="submit"
                    size="lg"
                    radius="full"
                    className="bg-[#FF6B1A] px-10 font-semibold text-white hover:bg-[#FF8A3D] shadow-lg"
                  >
                    Publish Room
                  </Button>
                  <Button
                    type="reset"
                    variant="bordered"
                    size="lg"
                    radius="full"
                    className="border-[#111111] px-10 font-semibold text-[#111111]"
                  >
                    Reset
                  </Button>
                </div>
              </form>
            </Card>
          </div>

          <div className="flex flex-col gap-5">
            <Card className="rounded-3xl border border-[#E5E7EB] bg-white shadow-xl">
              <div className="p-6">
                <h3 className="mb-3 text-[13px] font-bold uppercase tracking-widest text-[#111111]">
                  Listing Tips
                </h3>
                <p className="text-sm text-[#6B7280]">
                  Use clear details, useful amenities, and a good room image.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddRoomPage;
