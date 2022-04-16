import Link from "next/link";
import Image from "next/image";
import { MdClose, MdMenu } from "react-icons/md";
import { motion, useCycle } from "framer-motion";
import Dropdown from "./Dropdown";

function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const button = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };

  return (
    <div>
      <div className="bg-custom-blue">
        <div className="container px-4 pt-3 pb-2 flex justify-between items-center">
          <Link href="/" passHref>
            <div className="w-[85px] lg:w-[100px] lg:h-full">
              <Image
                src="/images/logos/logo.png"
                alt="dnata logo"
                width={180}
                height={105}
              />
            </div>
          </Link>

          <button
            className="lg:hidden text-custom-blue2 text-xl p-2"
            aria-label="toggle"
            onClick={() => toggleOpen()}
          >
            <motion.div
              variants={button}
              animate={isOpen ? "initial" : "animate"}
              transition={{ duration: 0.5 }}
            >
              <MdMenu className={!isOpen ? "block text-3xl" : "hidden"} />
            </motion.div>
            <motion.div
              variants={button}
              animate={isOpen ? "animate" : "initial"}
              transition={{ duration: 0.5 }}
            >
              <MdClose className={isOpen ? "block text-3xl" : "hidden"} />
            </motion.div>
          </button>

          <div className="hidden lg:flex justify-between items-center gap-8 text-base text-custom-blue2 font-bold">
            <Link href="/flight" passHref>
              <a className="hover:text-custom-blue3 transition duration-300">
                Flight
              </a>
            </Link>
            <Link href="/hotel" passHref>
              <a className="hover:text-custom-blue3 transition duration-300">
                Hotel
              </a>
            </Link>
            <Link href="/visa" passHref>
              <a className="hover:text-custom-blue3 transition duration-300">
                Visa
              </a>
            </Link>
            <Link href="/holiday" passHref>
              <a className="hover:text-custom-blue3 transition duration-300">
                Holiday
              </a>
            </Link>
            <Link href="/shipping" passHref>
              <a className="hover:text-custom-blue3 transition duration-300">
                Shipping
              </a>
            </Link>
            <Link href="/export-import" passHref>
              <a className="hover:text-custom-blue3 transition duration-300">
                Export/Import
              </a>
            </Link>
            <Link href="/contact" passHref>
              <button className="px-5 py-2 rounded-full text-white text-xs font-bold bg-custom-blue3 hover:bg-custom-blue2 transition duration-300">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Dropdown isOpen={isOpen} toggleOpen={toggleOpen} />
    </div>
  );
}

export default Header;
