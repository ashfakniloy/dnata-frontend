import { useEffect } from "react";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

function Sidebar({ isOpen, toggleOpen }) {
  const slide = {
    initial: {
      x: "90vw",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("active-sidebar");
    } else {
      document.body.classList.remove("active-sidebar");
    }
  }, [isOpen]);

  return (
    <motion.div
      className="lg:hidden fixed overflow-y-scroll right-0 left-14 inset-y-0 bg-custom-gray2 z-10"
      variants={slide}
      initial={false}
      animate={isOpen ? "animate" : "initial"}
      transition={{ duration: 0.3 }}
    >
      <div className="px-6 py-5 flex flex-col gap-2 text-white font-bold">
        <span
          className="text-white text-2xl mb-5 self-end hover:rotate-90 transition duration-300"
          onClick={() => toggleOpen()}
        >
          <MdClose />
        </span>
        <Link href="/flight">Flight</Link>
        <Link href="/hotel">Hotel</Link>
        <Link href="/visa">Visa</Link>
        <Link href="/holiday">Holiday</Link>
        <Link href="/shipping">Shipping</Link>
        <Link href="/export-import">Export/Import</Link>

        <div className="border-t mt-5 border-gray-500">
          <Link href="/contact" passHref>
            <button className="mt-7 px-5 py-2 rounded-full text-white text-sm font-bold bg-custom-blue3 hover:bg-custom-blue2 transition duration-300">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Sidebar;
