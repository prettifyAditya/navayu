"use client";
import { useModal } from "@/hooks/useModal";
import React from "react";
import { useSelector } from "react-redux";

const Overlay = () => {
  const { closeModal } = useModal();
  const { isModal } = useSelector((state) => state.modal);

  return (
    <div
      className={`overlay ${isModal !== null ? "is-open" : ""}`}
      onClick={closeModal}
    ></div>
  );
};

export default Overlay;
