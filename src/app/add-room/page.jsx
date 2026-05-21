"use client";

import { Button, Card, Checkbox } from "@heroui/react";
import { MdOutlineMeetingRoom } from "react-icons/md";
import {
  HiOutlinePhotograph,
  HiOutlineOfficeBuilding,
  HiOutlineUsers,
  HiOutlineCurrencyDollar,
} from "react-icons/hi";

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
  const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());


    const res = await fetch("http://localhost:5000/rooms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const roomsData = await res.json();
    console.log(roomsData);

  };
  return (
    <section className="min-h-screen bg-[#F7F3EF] px-4 py-14">
      <div className="mx-auto max-w-5xl">
        {/* Page Header */}
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
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card className="rounded-3xl border border-[#E5E7EB] bg-white shadow-xl">
              <form onSubmit={onSubmit} className="space-y-8 p-6 md:p-10">
                {/* Basic Info */}
                <div>
                  <h2 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#111111]">
                    <span className="h-4 w-1 rounded-full bg-[#FF6B1A]" />
                    Basic Information
                  </h2>
                  <div className="grid grid-cols-1 gap-5">
                    {/* Room Name */}
                    <div>
                      <label className={labelClass}>
                        Room Name <span className="text-[#FF6B1A]">*</span>
                      </label>
                      <div className="relative">
                        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#6B7280]">
                          <MdOutlineMeetingRoom size={18} />
                        </span>
                        <input
                          type="text"
                          name="roomName"
                          placeholder="e.g. Quiet Focus Room A"
                          className={`${inputClass} pl-10`}
                        />
                      </div>
                    </div>

                    {/* Image URL */}
                    <div>
                      <label className={labelClass}>
                        Image URL <span className="text-[#FF6B1A]">*</span>
                      </label>
                      <div className="relative">
                        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#6B7280]">
                          <HiOutlinePhotograph size={18} />
                        </span>
                        <input
                          type="url"
                          name="imageUrl"
                          placeholder="https://example.com/room.jpg"
                          className={`${inputClass} pl-10`}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Room Details */}
                <div>
                  <h2 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#111111]">
                    <span className="h-4 w-1 rounded-full bg-[#FF6B1A]" />
                    Room Details
                  </h2>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                    {/* Floor */}
                    <div>
                      <label className={labelClass}>
                        Floor <span className="text-[#FF6B1A]">*</span>
                      </label>
                      <div className="relative">
                        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#6B7280]">
                          <HiOutlineOfficeBuilding size={18} />
                        </span>
                        <input
                          type="text"
                          name="floor"
                          placeholder="e.g. 3rd Floor"
                          className={`${inputClass} pl-10`}
                        />
                      </div>
                    </div>

                    {/* Capacity */}
                    <div>
                      <label className={labelClass}>
                        Capacity <span className="text-[#FF6B1A]">*</span>
                      </label>
                      <div className="relative">
                        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#6B7280]">
                          <HiOutlineUsers size={18} />
                        </span>
                        <input
                          type="number"
                          name="capacity"
                          placeholder="e.g. 6"
                          className={`${inputClass} pl-10`}
                        />
                      </div>
                    </div>

                    {/* Hourly Rate */}
                    <div>
                      <label className={labelClass}>
                        Hourly Rate ($){" "}
                        <span className="text-[#FF6B1A]">*</span>
                      </label>
                      <div className="relative">
                        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#6B7280]">
                          <HiOutlineCurrencyDollar size={18} />
                        </span>
                        <input
                          type="number"
                          name="hourlyRate"
                          placeholder="e.g. 10"
                          className={`${inputClass} pl-10`}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h2 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#111111]">
                    <span className="h-4 w-1 rounded-full bg-[#FF6B1A]" />
                    Description
                  </h2>
                  <div>
                    <label className={labelClass}>
                      Room Description <span className="text-[#FF6B1A]">*</span>
                    </label>
                    <textarea
                      name="description"
                      rows={5}
                      placeholder="Describe the room — its atmosphere, rules, and what makes it great for studying…"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h2 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#111111]">
                    <span className="h-4 w-1 rounded-full bg-[#FF6B1A]" />
                    Amenities
                  </h2>
                  <label className="mb-3 block text-[13px] font-semibold text-[#111111]">
                    Select all that apply
                  </label>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {amenities.map(({ value, icon }) => (
                      <label
                        key={value}
                        className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:border-[#FF6B1A] hover:shadow-md"
                      >
                        <input
                          type="checkbox"
                          name="amenities"
                          value={value}
                          className="h-4 w-4 accent-[#FF6B1A]"
                        />

                        <span className="text-base">{icon}</span>

                        <span className="text-[13px] font-medium text-[#111111]">
                          {value}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Actions */}
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
                    className="border-[#111111] px-10 font-semibold text-[#111111] hover:bg-[#111111] hover:text-white transition-all"
                  >
                    Reset
                  </Button>
                </div>
              </form>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-5">
            {/* Listing Tips */}
            <Card className="rounded-3xl border border-[#E5E7EB] bg-white shadow-xl">
              <div className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6B1A]/10">
                  <span className="text-lg">💡</span>
                </div>
                <h3 className="mb-3 text-[13px] font-bold uppercase tracking-widest text-[#111111]">
                  Listing Tips
                </h3>
                <ul className="space-y-2.5 text-[13px] text-[#6B7280]">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 font-bold text-[#FF6B1A]">→</span>
                    Use a clear, specific room name.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 font-bold text-[#FF6B1A]">→</span>
                    Check all amenities — boosts discoverability.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 font-bold text-[#FF6B1A]">→</span>
                    Set a competitive rate to get more bookings.
                  </li>
                </ul>
              </div>
            </Card>

            {/* Image Guidelines */}
            <Card className="rounded-3xl border border-[#E5E7EB] bg-white shadow-xl">
              <div className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6B1A]/10">
                  <span className="text-lg">🖼️</span>
                </div>
                <h3 className="mb-3 text-[13px] font-bold uppercase tracking-widest text-[#111111]">
                  Image Guidelines
                </h3>
                <ul className="space-y-2.5 text-[13px] text-[#6B7280]">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 font-bold text-[#FF6B1A]">→</span>
                    Direct URL ending in .jpg or .png.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 font-bold text-[#FF6B1A]">→</span>
                    Landscape 16:9 ratio looks best on cards.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 font-bold text-[#FF6B1A]">→</span>
                    Minimum 800px wide recommended.
                  </li>
                </ul>
              </div>
            </Card>

            {/* Card Preview */}
            <Card className="rounded-3xl border border-[#E5E7EB] bg-white shadow-xl">
              <div className="p-6">
                <h3 className="mb-4 text-[13px] font-bold uppercase tracking-widest text-[#6B7280]">
                  Card Preview
                </h3>
                <div className="flex h-[90px] items-center justify-center rounded-2xl border border-dashed border-[#E5E7EB] bg-[#F7F3EF]">
                  <MdOutlineMeetingRoom className="text-[#FF6B1A]" size={34} />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-3 w-3/4 rounded-full bg-[#F3F4F6]" />
                  <div className="h-2.5 w-1/2 rounded-full bg-[#F3F4F6]" />
                  <div className="h-2.5 w-2/3 rounded-full bg-[#F3F4F6]" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddRoomPage;
