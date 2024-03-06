import Container from "../Utils/Container/Container";
import { GoHeartFill } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { navLinks } from "../Utils/navLinks";
import Image from "next/image";

const Navbar = () => {
  return (
    <Container>
      <div className="hidden lg:flex justify-between items-center py-4">
        <div className="">
          {navLinks.map((link) => {
            return (
              <a className="mx-6 my-4" key={link.id}>
                {link.name}
              </a>
            );
          })}
        </div>
        <div>
          <Image
            width={100}
            height={100}
            className="w-[200px] h-[50px]"
            src="/images/Epicurean Logo.svg"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center gap-10">
          <div className="flex gap-5">
            <span>
              <IoIosSearch className="h-5 w-5" />
            </span>
            <span>
              <GoHeartFill className="h-5 w-5" />
            </span>
            <span>
              <AiOutlineShoppingCart className="h-5 w-5" />
            </span>
          </div>
          <div className="flex justify-center items-center gap-4">
            <span>
              <CiUser />
            </span>
            <button>Sing In</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
