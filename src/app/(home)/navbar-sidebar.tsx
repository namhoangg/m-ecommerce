import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";

interface NavItem {
  href: string;
  children: React.ReactNode;
}

interface Props {
  items: NavItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NavbarSideBar = ({items, open, onOpenChange}: Props) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side='left' className='p-0 transition-none'>
        <SheetHeader className='p-4 border-b'>
          <div className='flex items-center'>
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className='flex flex-col overflow-y-auto h-full pb-2'>
          {items.map((item) => (
            <Link
              key={item.href}
              {...item}
              onClick={() => onOpenChange(false)}
              className='w-full text-left p-4 hover:bg-black hover:text-white flex items-center'
            >
              {item.children}
            </Link>
          ))}
          <div className='border-t'>
            <Link
              href='sign-in'
              className='w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium'
            >
              Login
            </Link>
            <Link
              href='sign-up'
              className='w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium'
            >
              Register
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}