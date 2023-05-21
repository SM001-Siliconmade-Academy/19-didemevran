import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi";

const Header = ({ isActive = false }) => {
  const { data: sessionData } = useSession();
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="rounded-md bg-sky-500 px-2">
          <Link href="/">
            <Image
              className=""
              alt="Logo"
              width={60}
              height={60}
              src="/../public/hopi.png"
            />
          </Link>
        </div>
        <Image
          alt="Logo"
          width={60}
          height={60}
          src="/../public/hopishop.jpg"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            {isActive ? (
              <Link href="/products" className="font-bold underline">
                ÜRÜNLER
              </Link>
            ) : (
              <Link href="/products">ÜRÜNLER</Link>
            )}
          </li>
          <li>
            <a>WEHOPI</a>
          </li>
          <li>
            <a>KAMPANYALAR</a>
          </li>
          <li>
            <a>MARKALAR</a>
          </li>
          <li>
            <a>HOPI</a>
          </li>
          <li>
            <a className="justify-between">
              BLOG <FiChevronDown />
            </a>
            <ul className="p-2">
              <li>
                <a>BLOG 1</a>
              </li>
              <li>
                <a>BLOG 2</a>
              </li>
            </ul>
          </li>
          <li>
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input-bordered input rounded-full pl-10"
              />
              <div className="absolute left-7 top-7">
                <FiSearch />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <AuthShowcase />
      </div>
    </div>
  );
};

export default Header;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <div>
      {sessionData ? (
        <a className="btn gap-4 rounded-full bg-accent capitalize text-white">
          <div className="flex gap-3">
            <div className="dropdown">
              <label tabIndex={0}>
                <FiChevronDown />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box mt-8 w-24 bg-base-100 shadow"
              >
                <li>
                  <a>
                    <button
                      className="rounded-full bg-white/10 px-3 py-3 font-semibold text-black no-underline transition hover:bg-white/20"
                      onClick={
                        sessionData ? () => void signOut() : () => void signIn()
                      }
                    >
                      {sessionData ? "Sign out" : "Sign in"}
                    </button>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col text-[10px]">
              <span>Merhaba</span>
              <span>{sessionData.user?.name}</span>
            </div>
            <Image
              className="rounded-full"
              width={25}
              height={25}
              src={sessionData?.user.image ?? ""}
              alt="Profile image"
            />
          </div>
        </a>
      ) : (
        <a className="btn gap-4 rounded-full bg-accent px-8 capitalize text-white">
          <div
            className="flex items-center justify-center gap-3"
            onClick={sessionData ? () => void signOut() : () => void signIn()}
          >
            <div>
              <div className="text-sm">Giris yap</div>
              <div className="text-[8px]">veya kayit ol</div>
            </div>
            <div>
              <HiOutlineUser />
            </div>
          </div>
        </a>
      )}
    </div>
  );
};
