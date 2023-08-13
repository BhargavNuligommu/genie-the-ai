"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("bc85cc82-6ac4-48de-a26f-f41ce1844e73");
  }, []);

  return null;
};
