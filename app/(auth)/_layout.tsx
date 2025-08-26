import { Redirect, Slot } from "expo-router";
import React from "react";

export default function AuthLayout() {
  const isAuthenticated = false;

  if (isAuthenticated) return <Redirect href="/" />;

  return <Slot />;
}
