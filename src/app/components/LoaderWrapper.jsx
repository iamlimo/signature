"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // No `.events` here
import Loader from "./Loader";

export default function LoaderWrapper() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 600); // Simulate loader delay
    return () => clearTimeout(timeout);
  }, [pathname]);

  return loading ? <Loader /> : null;
}
