"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Modal } from "@heroui/react";
import toast from "react-hot-toast";

const BookingCard = ({ room }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login first");
      return;
    }

    const formData = new FormData(e.currentTarget);

    const date = formData.get("date");
    const startTime = formData.get("startTime");
    const endTime = formData.get("endTime");
    const specialNote = formData.get("specialNote");

    if (!date || !startTime || !endTime) {
      toast.error("Please select date, start time and end time");
      return;
    }

    const startHour = Number(startTime.split(":")[0]);
    const endHour = Number(endTime.split(":")[0]);

    if (endHour <= startHour) {
      toast.error("End time must be after start time");
      return;
    }

    const totalCost = (endHour - startHour) * Number(room.hourlyRate);

    const bookingData = {
      roomId: room._id,
      roomName: room.roomName,
      userId: user?.id,
      userName: user?.name,
      userImage: user?.image,
      imageUrl: room.imageUrl,
      hourlyRate: room.hourlyRate,
      date,
      startTime,
      endTime,
      totalCost,
      specialNote,
      status: "confirmed",
    };
    const {data: tokenData} = await authClient.token()
    console.log(tokenData)
    const res = await fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData?.token}`
      },
      body: JSON.stringify(bookingData),
    });

    const data = await res.json();

    if (res.status === 409) {
      toast.error(data.message);
      return;
    }

    if (res.ok) {
      toast.success("Room booked successfully!");
    } else {
      toast.error("Failed to create booking.");
    }
  };

  return (
    <Modal>
      <Button
        radius="full"
        className="h-12 w-full rounded-full bg-[#FF6B1A] px-10 font-semibold text-white hover:bg-[#FF8A3D] sm:w-auto"
      >
        Book Now
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-lg">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>Book {room?.roomName}</Modal.Heading>
            </Modal.Header>

            <Modal.Body>
              <form onSubmit={handleBooking} className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-[#111111]">
                    Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full rounded-xl border border-[#E5E7EB] px-4 py-3 outline-none focus:border-[#FF6B1A]"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-[#111111]">
                      Start Time
                    </label>

                    <select
                      name="startTime"
                      className="w-full rounded-xl border border-[#E5E7EB] px-4 py-3 outline-none focus:border-[#FF6B1A]"
                    >
                      <option value="">Select time</option>
                      <option value="08:00">08:00</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="12:00">12:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-[#111111]">
                      End Time
                    </label>

                    <select
                      name="endTime"
                      className="w-full rounded-xl border border-[#E5E7EB] px-4 py-3 outline-none focus:border-[#FF6B1A]"
                    >
                      <option value="">Select time</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="12:00">12:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                      <option value="20:00">20:00</option>
                    </select>
                  </div>
                </div>

                <div className="rounded-2xl bg-[#F7F3EF] p-4">
                  <p className="text-sm text-[#6B7280]">Hourly Rate</p>

                  <h3 className="text-xl font-bold text-[#111111]">
                    ${room?.hourlyRate}/hr
                  </h3>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-[#111111]">
                    Special Note
                  </label>

                  <textarea
                    name="specialNote"
                    rows={4}
                    placeholder="Write any special request..."
                    className="w-full rounded-xl border border-[#E5E7EB] px-4 py-3 outline-none focus:border-[#FF6B1A]"
                  />
                </div>

                <Button
                  type="submit"
                  radius="full"
                  className="w-full bg-[#FF6B1A] font-semibold text-white hover:bg-[#FF8A3D]"
                >
                  Confirm Booking
                </Button>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default BookingCard;
