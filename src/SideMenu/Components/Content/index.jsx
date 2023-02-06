import React from "react";
import { Route, Routes } from "react-router-dom";

function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/dashboard" element={<div>Dashboard</div>} />
        <Route path="/active-users" element={<div>Active Users</div>} />
        <Route path="/disabled-users" element={<div>Disabled Users </div>} />
        <Route path="/profile" element={<div>Profile</div>} />
      </Routes>
    </div>
  );
}

export default Content;
