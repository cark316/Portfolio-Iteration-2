import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { forwardRef, ForwardedRef } from "react";

const Navbar = forwardRef((props: any, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <nav
      ref={ref}
      className="flex flex-row items-center justify-center font-urbanist-medium text-2xl p-4 border-[1px] rounded-xl gap-8 backdrop-blur-md translate-y-[100px] opacity-0"
    >
      <div>
        <Button variant="ghost" size="icon">
          LOGO
        </Button>
      </div>
      <ul className="flex flex-row gap-4 p-2">
        <li>
          <Button variant="ghost" className="text-xl py-4 px-1">
            ABOUT
          </Button>
        </li>
        <li>
          <Button variant="ghost" className="text-xl py-4 px-1">
            PROJECTS
          </Button>
        </li>
        <li>
          <Button variant="ghost" className="text-xl py-4 px-1">
            CONTACT
          </Button>
        </li>
      </ul>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
});

export default Navbar;
