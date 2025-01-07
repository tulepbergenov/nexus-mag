"use client";

import { ErrorMessage } from "@/components";
import { Suspense, useEffect } from "react";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error("Error captured:", error);
  }, [error]);

  return (
    <section>
      <div className="container">
        <div className="py-[24px] sm:py-[48px]">
          <Suspense fallback={null}>
            <ErrorMessage reset={reset} />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Error;
