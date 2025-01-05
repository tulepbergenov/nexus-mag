"use client";

import { cn } from "@/shared/libs";
import { Dialog, DialogPanel } from "@headlessui/react";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { HiOutlineSearch } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import * as v from "valibot";

type SeachFormInputs = {
  query: string;
};

const schema = v.object({
  query: v.pipe(v.string("Search is required"), v.trim()),
});

export const SearchModal = ({
  triggerClassName,
}: {
  triggerClassName?: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const { handleSubmit, register, reset, setFocus } = useForm<SeachFormInputs>({
    defaultValues: {
      query: "",
    },
    resolver: valibotResolver(schema),
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    reset();
  };

  const handleSearchFormSubmit: SubmitHandler<SeachFormInputs> = (data) => {
    const url = new URL("/search", window.location.origin);
    url.searchParams.set("q", data.query);

    router.push(url.toString());

    handleCloseModal();
  };

  useEffect(() => {
    if (isModalOpen) {
      const t = setTimeout(() => {
        setFocus("query");
      }, 0);

      return () => clearTimeout(t);
    }
  }, [isModalOpen, setFocus]);

  return (
    <>
      <button
        className={cn(
          "transition-colors duration-300 ease-in-out active:text-[#FF0004] [@media(hover:hover)]:hover:text-[#FF0004]",
          triggerClassName,
        )}
        onClick={handleOpenModal}
        type="button"
      >
        <HiOutlineSearch className="h-auto w-[24px]" />
        <span className="sr-only">Open search modal</span>
      </button>
      <AnimatePresence initial={false} mode="wait">
        {isModalOpen && (
          <Dialog
            className="relative z-50"
            onClose={handleCloseModal}
            open={isModalOpen}
            static
          >
            <motion.div
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-[2px]"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            />
            <DialogPanel
              animate={{
                opacity: 1,
                transition: {
                  bounce: false,
                  duration: 0.2,
                  ease: "easeInOut",
                },
              }}
              as={motion.div}
              className="fixed left-2/4 top-[14%] w-screen -translate-x-2/4 px-[24px] text-white md:top-[30%] md:w-[700px] xl:w-[1000px]"
              exit={{
                opacity: 0,
                transition: {
                  bounce: false,
                  duration: 0.2,
                  ease: "easeInOut",
                },
              }}
              initial={{
                opacity: 1,
              }}
            >
              <form
                className="relative"
                onSubmit={handleSubmit(handleSearchFormSubmit)}
              >
                <input
                  className="inline-block w-full border-x-0 border-b-[2px] border-t-0 !border-b-white bg-transparent p-0 py-[24px] pr-[42px] font-test-manuka text-[42px] font-semibold uppercase leading-none placeholder:font-test-manuka placeholder:text-white focus:ring-transparent"
                  inputMode="search"
                  placeholder="Search"
                  {...register("query")}
                />
                <button
                  className="absolute right-0 top-[28px] flex size-[40px] items-center justify-center text-white transition-colors duration-300 ease-in-out active:text-[#FF0004] md:flex [@media(hover:hover)]:hover:text-[#FF0004]"
                  onClick={handleCloseModal}
                  type="button"
                >
                  <IoCloseSharp className="absolute left-2/4 top-2/4 h-auto w-full -translate-x-2/4 -translate-y-2/4" />
                  <span className="sr-only">Close search modal</span>
                </button>
              </form>
            </DialogPanel>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};
