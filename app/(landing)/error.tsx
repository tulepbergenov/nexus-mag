"use client";

import { useEffect } from "react";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section>
      <div className="container">
        <div className="py-[32px]">
          <p>Something went wrong!</p>
          <button onClick={() => reset()}>Try again</button>
        </div>
      </div>
    </section>
  );
};

export default Error;
