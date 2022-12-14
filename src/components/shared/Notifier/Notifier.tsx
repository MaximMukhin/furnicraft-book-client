import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { Snackbar, Alert } from "@mui/material";
import { notificationState } from "@/states/notification";

export function Notifier() {
  const [notification, setNotification] = useRecoilState(notificationState);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (notification.content) {
      setOpen(true);
    }
  }, [setOpen, notification]);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setNotification({ content: "", severity: notification.severity });
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={notification.severity}
        sx={{ width: "100%" }}
      >
        {notification.content}
      </Alert>
    </Snackbar>
  );
}
