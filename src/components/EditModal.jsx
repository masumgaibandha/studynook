"use client";

import { authClient } from "@/lib/auth-client";
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

    const { data: tokenData } = await authClient.token();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${room._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      toast.success("Room updated successfully");
      window.location.reload();
    } else {
      toast.error("Failed to update room");
    }
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
                  <div>
                    <h2 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#111111]">
                      <span className="h-4 w-1 rounded-full bg-[#FF6B1A]" />
                      Edit Room Information
                    </h2>

                    <div className="grid grid-cols-1 gap-5">
                      <div>
                        <label className="mb-1.5 block text-[13px] font-semibold text-[#111111]">
                          Room Name
                        </label>

                        <input
                          type="text"
                          name="roomName"
                          defaultValue={roomName}
                          className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-[14px] text-[#111111] outline-none hover:border-[#FF6B1A] focus:border-[#FF6B1A]"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-[13px] font-semibold text-[#111111]">
                          Image URL
                        </label>

                        <input
                          type="url"
                          name="imageUrl"
                          defaultValue={imageUrl}
                          className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-[14px] text-[#111111] outline-none hover:border-[#FF6B1A] focus:border-[#FF6B1A]"
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
                        <label className="mb-1.5 block text-[13px] font-semibold text-[#111111]">
                          Floor
                        </label>

                        <input
                          type="text"
                          name="floor"
                          defaultValue={floor}
                          className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-[14px] text-[#111111] outline-none hover:border-[#FF6B1A] focus:border-[#FF6B1A]"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-[13px] font-semibold text-[#111111]">
                          Capacity
                        </label>

                        <input
                          type="number"
                          name="capacity"
                          defaultValue={capacity}
                          className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-[14px] text-[#111111] outline-none hover:border-[#FF6B1A] focus:border-[#FF6B1A]"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-[13px] font-semibold text-[#111111]">
                          Hourly Rate ($)
                        </label>

                        <input
                          type="number"
                          name="hourlyRate"
                          defaultValue={hourlyRate}
                          className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-[14px] text-[#111111] outline-none hover:border-[#FF6B1A] focus:border-[#FF6B1A]"
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
                      defaultValue={description}
                      className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-[14px] text-[#111111] outline-none hover:border-[#FF6B1A] focus:border-[#FF6B1A]"
                    />
                  </div>

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
