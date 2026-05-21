"use client";

import { Button, Card, Modal } from "@heroui/react";
import {
  HiOutlineCurrencyDollar,
  HiOutlineOfficeBuilding,
  HiOutlinePhotograph,
  HiOutlineUsers,
} from "react-icons/hi";
import { MdOutlineMeetingRoom } from "react-icons/md";

const inputClass =
  "w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-[14px] text-[#111111] placeholder-[#6B7280] outline-none transition-colors hover:border-[#FF6B1A] focus:border-[#FF6B1A]";

const labelClass = "mb-1.5 block text-[13px] font-semibold text-[#111111]";

export function EditModal({ room }) {
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
                <form className="space-y-8 p-6 md:p-10">
                  <div>
                    <h2 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#111111]">
                      <span className="h-4 w-1 rounded-full bg-[#FF6B1A]" />
                      Edit Room Information
                    </h2>

                    <div className="grid grid-cols-1 gap-5">
                      <div>
                        <label className={labelClass}>Room Name</label>
                        <div className="relative">
                          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#6B7280]">
                            <MdOutlineMeetingRoom size={18} />
                          </span>
                          <input
                            type="text"
                            name="roomName"
                            placeholder="e.g. Quiet Focus Room A"
                            defaultValue={roomName}
                            className={`${inputClass} pl-10`}
                          />
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>Image URL</label>
                        <div className="relative">
                          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#6B7280]">
                            <HiOutlinePhotograph size={18} />
                          </span>
                          <input
                            type="url"
                            name="imageUrl"
                            defaultValue={imageUrl}
                            placeholder="https://example.com/room.jpg"
                            className={`${inputClass} pl-10`}
                          />
                        </div>
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
                        <label className={labelClass}>Floor</label>
                        <div className="relative">
                          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#6B7280]">
                            <HiOutlineOfficeBuilding size={18} />
                          </span>
                          <input
                            type="text"
                            name="floor"
                            placeholder="e.g. 3rd Floor"
                            defaultValue={floor}
                            className={`${inputClass} pl-10`}
                          />
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>Capacity</label>
                        <div className="relative">
                          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#6B7280]">
                            <HiOutlineUsers size={18} />
                          </span>
                          <input
                            type="number"
                            name="capacity"
                            placeholder="e.g. 6"
                            defaultValue={capacity}
                            className={`${inputClass} pl-10`}
                          />
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>Hourly Rate ($)</label>
                        <div className="relative">
                          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#6B7280]">
                            <HiOutlineCurrencyDollar size={18} />
                          </span>
                          <input
                            type="number"
                            name="hourlyRate"
                            placeholder="e.g. 10"
                            defaultValue={hourlyRate}
                            className={`${inputClass} pl-10`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#111111]">
                      <span className="h-4 w-1 rounded-full bg-[#FF6B1A]" />
                      Description
                    </h2>

                    <label className={labelClass}>Room Description</label>
                    <textarea
                      name="description"
                      rows={5}
                      placeholder="Describe the room..."
                      defaultValue={description}
                      className={inputClass}
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

                    <Button
                      type="reset"
                      variant="bordered"
                      size="lg"
                      radius="full"
                      className="border-[#111111] px-10 font-semibold text-[#111111] transition-all hover:bg-[#111111] hover:text-white"
                    >
                      Reset
                    </Button>
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
