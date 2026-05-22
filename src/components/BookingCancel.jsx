"use client";

import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";

export function BookingCancel({ bookingId }) {
    const handleBookingCancel = async () => {
        const res = await fetch(`http://localhost:5000/bookings/${bookingId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        console.log(data)
        if (res.ok) {
            toast("Booking cancelled successfully!");
        } else {
            toast.error("Failed to cancel booking. Please try again.");
        }
        window.location.reload();
    }
  return (
    <AlertDialog>
      <Button
        variant="bordered"
        radius="full"
        className="border-red-500 px-6 font-semibold text-red-500 hover:bg-red-500 hover:text-white"
      >
        Booking Cancel
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Cancel Booking?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently cancel your booking. Are you sure you want to proceed?
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleBookingCancel} slot="close" variant="danger">
                Confirm Cancel
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
