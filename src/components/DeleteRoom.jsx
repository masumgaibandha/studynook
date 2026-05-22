"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";

export function DeleteRoom({ room }) {
  const onDelete = async () => {
    const {data: tokenData} = await authClient.token()
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${room._id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${tokenData?.token}`
      }
    });

    const data = await res.json();

    if (data.deletedCount > 0) {
      toast.success("Room deleted successfully");
      window.location.href = "/rooms";
    } else {
      toast.error("Failed to delete room");
    }
  };

  return (
    <AlertDialog>
      <Button variant="danger" radius="full">
        Delete
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete {room.roomName} permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{room.roomName}</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>

              <Button slot="close" variant="danger" onClick={onDelete}>
                Confirm Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
