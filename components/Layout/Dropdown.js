import Link from "next/link";
import { MdClose } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Dropdown({ isOpen, toggleOpen }) {
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
  return (
    <motion.div
      className="lg:hidden fixed right-0 left-14 inset-y-0 bg-custom-gray2 z-10"
      variants={slide}
      initial={false}
      animate={isOpen ? "animate" : "initial"}
      transition={{ duration: 0.3 }}
    >
      {/* <div className="absolute top-4 right-4 text-white text-2xl">
        <MdClose />
      </div> */}
      <div className="px-5 py-5 flex flex-col gap-2 text-white font-bold">
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
          {/* <p className="mt-5 text-sm">
            <span>
              <FaPhoneAlt className="inline mr-3" /> 01612345678
            </span>
          </p> */}
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

export default Dropdown;
