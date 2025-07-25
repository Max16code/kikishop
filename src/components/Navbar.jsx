'use client';

import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "@/context/Cartcontext";

export default function Navbar() {
  const { cartCount } = useCart(); // 👈 Get cart count from context

  return (
    <div className="w-full flex items-center justify-between px-6 py-4 shadow-md bg-transparent">
      
      {/* Left: Logo at extreme left */}
      <div className="flex items-center justify-start min-w-[70px]">
        <img
          className="rounded-xl"
          src="/kikiLogo.jpg"
          width={80}
          height={1}
          alt="kikiimage"
        />
      </div>

      {/* Center: Navigation */}
      <div className="flex-1 flex justify-center font-bold gap-12 text-sm  text-yellow-400">
        <Link className="hidden md:flex items-center" href="/Blazers">BLAZERS</Link>
        <Link className="hidden lg:flex items-center" href="/Shirts">SHIRTS</Link>
        <Link className="hidden lg:flex items-center" href="/Skirts">SKIRTS</Link>
        <Link className="hidden lg:flex items-center" href="/Jeans">JEANS</Link>
        <Link className="hidden lg:flex items-center" href="/Active-wears">ACTIVE WEARS</Link>
        <Link className="hidden md:flex items-center" href="/Dresses">DRESSES</Link>
      </div>

      {/* Right: Contact + Cart */}
      <div className="flex items-center justify-end gap-6 text-sm font-medium text-yellow-400">
        <Link className="hidden md:flex items-center" href="/Contact">CONTACT</Link>
        <div className="relative">
          <Link href="/Cart">
            <FiShoppingCart className="text-2xl text-yellow-400" />
          </Link>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </div>
      </div>

    </div>
  );
}
