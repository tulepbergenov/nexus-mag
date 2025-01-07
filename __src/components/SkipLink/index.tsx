export const SkipLink = () => {
  return (
    <a
      className="sr-only z-[100] flex items-center justify-center bg-[#050505] uppercase text-[#FF0004] focus:outline-none focus-visible:not-sr-only dark:bg-[#FF0004] dark:text-white"
      href="#main"
    >
      <span className="py-[12px] underline">Skip to main content</span>
    </a>
  );
};
