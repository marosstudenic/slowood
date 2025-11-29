"use client";
import { useEffect, useState } from "react";
import { QuoteModal } from "./QuoteModal";

export const QuoteModalShow = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const modalShown = localStorage.getItem("quoteModalShown");
    if (modalShown) return;
    const timer = setTimeout(() => {
      setShowModal(true);
      localStorage.setItem("quoteModalShown", "true");
    }, 15000); // show modal after 10 seconds
    return () => clearTimeout(timer);
  }, []);

  return <>{showModal && <QuoteModal onClose={() => setShowModal(false)} />}</>;
};
