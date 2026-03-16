import React from "react";
import "./AttendanceIcon.css";

const AttendanceIcon = ({ size = 60, position = 'fixed' }) => {
  const cls = `attendance-icon ${position === 'inline' ? 'attendance-inline' : 'attendance-fixed'}`;
  return (
    <div
      className={cls}
      style={{ width: size, height: size }}
      role="img"
      aria-label="Attendance logo"
    >
      <img
        src="/logo1.jpeg"
        alt="Attendance Logo"
        className="attendance-logo-img"
      />
    </div>
  );
};

export default AttendanceIcon;