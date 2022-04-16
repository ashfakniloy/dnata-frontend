import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaLocationArrow,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-custom-gray2">
      <div className="container py-14 px-4">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between items-start">
          <div className="flex flex-col self-center lg:self-start">
            <Image
              src="/images/logos/dnata-logo2.png"
              alt="dnata logo"
              width={320}
              height={200}
            />
            <div className="flex justify-center gap-6 text-2xl text-white">
              <span>
                <a
                  href="https://www.facebook.com/DnataBD/"
                  aria-label="facebook"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook />
                </a>
              </span>
              <span>
                <a
                  href="https://www.twitter.com/DnataBD/"
                  aria-label="twitter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
              </span>
              <span>
                <a
                  href="https://www.instagram.com/DnataBD/"
                  aria-label="instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </span>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 flex flex-col gap-5 text-sm font-bold">
            <p className="text-white">Contact Information</p>
            <div className="flex flex-col gap-3 text-gray-400">
              <div className="">
                <span>
                  <FaPhone className="inline mr-2" />
                </span>
                <a
                  href="tel:+8802-9848304"
                  className="hover:text-white transition duration-300"
                >
                  (+8802) 9848304
                </a>
                &nbsp;|&nbsp;
                <a
                  href="tel:+8802-8831804"
                  className="hover:text-white transition duration-300"
                >
                  8831804
                </a>
                <p className="ml-6">
                  <a
                    href="tel:+8802-9847893"
                    className="hover:text-white transition duration-300"
                  >
                    9847893
                  </a>
                  &nbsp;|&nbsp;
                  <a
                    href="tel:+8802-9842924"
                    className="hover:text-white transition duration-300"
                  >
                    9842924
                  </a>
                  &nbsp;|&nbsp;
                  <a
                    href="tel:+8802-9842925"
                    className="hover:text-white transition duration-300"
                  >
                    9842924
                  </a>
                  -
                  <a
                    href="tel:+8802-9842925"
                    className="hover:text-white transition duration-300"
                  >
                    5
                  </a>
                </p>
              </div>
              <div className="hover:text-white transition duration-300">
                <a href="mailto:info@dnatabd.com">
                  <span>
                    <FaEnvelope className="inline mr-2" />
                  </span>
                  info@dnatabd.com
                </a>
              </div>
              <div className="flex hover:text-white transition duration-300">
                <span>
                  <FaLocationArrow className="inline mr-2" />
                </span>
                <p>
                  The Floria Castle (3rd Floor), Suite- C1, House- 07
                  <br /> Road - 23/ A, Gulshan -1, Dhaka-1212
                </p>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col gap-5 text-sm font-bold">
            <p className="text-white">Services</p>
            <div className="flex flex-col gap-3 text-gray-400">
              <p>Flight</p>
              <p>Hotel</p>
              <p>Visa</p>
              <p>Holiday</p>
              <p>Shipping</p>
              <p>Import/Export</p>
            </div>
          </div> */}
        </div>

        <div className="mt-14 text-white text-sm">
          {/* <Link href="#" passHref>
            <a>Privacy Policy</a>
          </Link> */}

          <p>&copy; 2022 Dnata Limited. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
