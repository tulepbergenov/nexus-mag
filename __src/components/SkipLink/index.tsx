export const SkipLink = () => {
  return (
    <a
      className="sr-only flex items-center justify-center bg-[#050505] uppercase text-[#FF0004] focus:outline-none focus-visible:not-sr-only"
      href="#main"
    >
      <span className="py-[12px] underline">Skip to main content</span>
    </a>
  );
};
