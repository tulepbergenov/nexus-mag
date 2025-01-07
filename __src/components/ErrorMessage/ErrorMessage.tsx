import type { ErrorMessageType } from "./ErrorMessage.type";

const ErrorMessage = ({ reset }: ErrorMessageType) => {
  return (
    <div className="leading-none">
      <h1 className="sr-only">Something went wrong!</h1>
      <div>
        <div className="text-[40px] font-medium uppercase -tracking-[0.1em] sm:text-[80px]">
          something went
        </div>
        <div className="flex flex-wrap items-end justify-between">
          <div className="text-[40px] font-medium uppercase -tracking-[0.1em] sm:text-[80px]">
            wrong
          </div>
          <button
            className="inline-block -translate-x-[10px] -translate-y-[4px] text-[20px] uppercase transition-colors duration-300 ease-in-out active:text-[#FF0004] sm:-translate-x-[44px] sm:text-6xl md:flex [@media(hover:hover)]:hover:text-[#FF0004]"
            onClick={() => reset()}
            type="button"
          >
            try again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
