"use client";

import { Button, Card, Modal } from "@heroui/react";
import Link from "next/link";
import toast from "react-hot-toast";

import {
  HiOutlineCurrencyDollar,
  HiOutlineOfficeBuilding,
  HiOutlinePhotograph,
  HiOutlineUsers,
} from "react-icons/hi";

import { MdOutlineMeetingRoom } from "react-icons/md";

export function EditModal({ room }) {
  const { roomName, description, hourlyRate, floor, capacity, imageUrl } = room;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    const res = await fetch(`http://localhost:5000/rooms/${room._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const roomsData = await res.json();
    toast.success("Room updated successfully");
  };
  return (
    <Modal>
      <Button
        radius="full"
        className="bg-[#FF6B1A] px-6 font-semibold text-white hover:bg-[#FF8A3D]"
      >
        Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="max-h-[90vh] overflow-y-auto sm:max-w-3xl">
            <Modal.CloseTrigger />

            <Modal.Body className="p-0">
              <Card className="rounded-3xl border border-[#E5E7EB] bg-white shadow-xl">
                <form onSubmit={onSubmit} className="space-y-8 p-6 md:p-10">
                  {/* Heading */}
                  <div>
                    <h2 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#111111]">
                      <span className="h-4 w-1 rounded-full bg-[#FF6B1A]" />
                      Edit Room Information
                    </h2>

                    <div className="grid grid-cols-1 gap-5">
                      {/* Room Name */}
                      <div>
                        <label className="mb-1.5 block text-[13px] font-semibold text-[#111111]">
                          Room Name
                        </label>

                        <div className="relative">
                          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#6B7280]">
                            <MdOutlineMeetingRoom size={18} />
                          </span>

                          <input
                            type="text"
                            name="roomName"
                            defaultValue={roomName}
                            placeholder="e.g. Quiet Focus Room A"
                            className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 pl-10 text-[14px] text-[#111111] placeholder-[#6B7280] outline-none transition-colors hover:border-[#FF6B1A] focus:border-[#FF6B1A]"
                          />
                        </div>
                      </div>

                      {/* Image URL */}
                      <div>
                        <label className="mb-1.5 block text-[13px] font-semibold text-[#111111]">
                          Image URL
                        </label>

                        <div className="relative">
                          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#6B7280]">
                            <HiOutlinePhotograph size={18} />
                          </span>

                          <input
                            type="url"
                            name="imageUrl"
                            defaultValue={imageUrl}
                            placeholder="https://example.com/room.jpg"
                            className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 pl-10 text-[14px] text-[#111111] placeholder-[#6B7280] outline-none transition-colors hover:border-[#FF6B1A] focus:border-[#FF6B1A]"
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
                        <label className="mb-1.5 block text-[13px] font-semibold text-[#111111]">
                          Floor
                        </label>

                        <div className="relative">
                          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#6B7280]">
                            <HiOutlineOfficeBuilding size={18} />
                          </span>

                          <input
                            type="text"
                            name="floor"
                            defaultValue={floor}
                            placeholder="e.g. 3rd Floor"
                            className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 pl-10 text-[14px] text-[#111111] placeholder-[#6B7280] outline-none transition-colors hover:border-[#FF6B1A] focus:border-[#FF6B1A]"
                          />
                        </div>
                      </div>

                      {/* Capacity */}
                      <div>
                        <label className="mb-1.5 block text-[13px] font-semibold text-[#111111]">
                          Capacity
                        </label>

                        <div className="relative">
                          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#6B7280]">
                            <HiOutlineUsers size={18} />
                          </span>

                          <input
                            type="number"
                            name="capacity"
                            defaultValue={capacity}
                            placeholder="e.g. 6"
                            className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 pl-10 text-[14px] text-[#111111] placeholder-[#6B7280] outline-none transition-colors hover:border-[#FF6B1A] focus:border-[#FF6B1A]"
                          />
                        </div>
                      </div>

                      {/* Hourly Rate */}
                      <div>
                        <label className="mb-1.5 block text-[13px] font-semibold text-[#111111]">
                          Hourly Rate ($)
                        </label>

                        <div className="relative">
                          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#6B7280]">
                            <HiOutlineCurrencyDollar size={18} />
                          </span>

                          <input
                            type="number"
                            name="hourlyRate"
                            defaultValue={hourlyRate}
                            placeholder="e.g. 10"
                            className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 pl-10 text-[14px] text-[#111111] placeholder-[#6B7280] outline-none transition-colors hover:border-[#FF6B1A] focus:border-[#FF6B1A]"
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

                    <label className="mb-1.5 block text-[13px] font-semibold text-[#111111]">
                      Room Description
                    </label>

                    <textarea
                      name="description"
                      rows={5}
                      defaultValue={description}
                      placeholder="Describe the room..."
                      className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-[14px] text-[#111111] placeholder-[#6B7280] outline-none transition-colors hover:border-[#FF6B1A] focus:border-[#FF6B1A]"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-4 border-t border-[#E5E7EB] pt-6 sm:flex-row">
                    <Button
                      type="submit"
                      size="lg"
                      radius="full"
                      className="bg-[#FF6B1A] px-10 font-semibold text-white shadow-lg hover:bg-[#FF8A3D]"
                    >
                      Update Room
                    </Button>

                    <Link
                      href="/rooms"
                      className="rounded-full border border-[#111111] px-10 py-3 text-center font-semibold text-[#111111] hover:bg-[#111111] hover:text-white"
                    >
                      Back to Rooms
                    </Link>
                  </div>
                </form>
              </Card>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
