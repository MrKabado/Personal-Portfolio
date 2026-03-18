"use client"
import { useState, useEffect } from "react";
import RecentTaskHolder from "@/components/common/RecentTaskHolder";
import AdminContainer from "@/components/common/AdminContainer";

export default function recentTask() {
  return (
    <AdminContainer>
      <RecentTaskHolder 
        limit = {false}
      />
    </AdminContainer>
  )
}