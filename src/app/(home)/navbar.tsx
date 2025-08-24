"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NavbarSideBar } from "./navbar-sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface NavProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavItem = ({ href, children, isActive }: NavProps) => {
  return (
    <Button
      asChild
      variant={"outline"}
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-xl",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navItems = [
  {
    href: "/",
    children: "Home",
  },
  {
    href: "/about",
    children: "About",
  },
  {
    href: "/pricing",
    children: "Pricing",
  },
  {
    href: "/contact",
    children: "Contact",
  },
];

export const Navbar = () => {
  const pathName = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className='h-20 flex border-b justify-between font-medium bg-white'>
      <Link href='/' className='pl-6 flex items-center'>
        <span className={`${poppins.className} text-5xl font-semibold`}>
          My Shop
        </span>
      </Link>

      <NavbarSideBar items={navItems} open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />

      <div className='items-center gap-4 hidden lg:flex'>
        {navItems.map((item) => (
          <NavItem key={item.href} {...item} isActive={pathName === item.href}>
            {item.children}
          </NavItem>
        ))}
      </div>

      <div className='hidden lg:flex'>
        <Button
          asChild
          variant='secondary'
          className='border-l border-t-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg'
        >
          <Link href='/sign-in'>Login</Link>
        </Button>
        <Button
          asChild
          variant='secondary'
          className='border-l border-t-0 border-r-0 px-12 h-full rounded-none bg-black hover:bg-pink-400 transition-colors text-lg hover:text-black text-white'
        >
          <Link href='/sign-up'>Register</Link>
        </Button>
      </div>

      <div className="flex items-center justify-center lg:hidden">
        <Button
          variant={"ghost"}
          className="size-12 border-transparent bg-white"
          onClick={() => setIsSidebarOpen(true)}>
          <MenuIcon/>
        </Button>
      </div>
    </nav>
  );
};
