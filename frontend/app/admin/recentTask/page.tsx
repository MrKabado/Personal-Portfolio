"use client"
import { useState, useEffect } from "react";
import RecentTaskHolder from "@/components/common/RecentTaskHolder";

export default function recentTask() {
  return (
    <div className="admin-default-div">
      <RecentTaskHolder 
        limit = {false}
      />
    </div>
  )
}