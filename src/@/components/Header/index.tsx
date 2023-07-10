import { Button } from "../ui/button";
import { Utensils } from "lucide-react";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl">
      <div className="relative flex items-center justify-between p-4">
        <div className="flex flex-row items-center gap-2">
          <h1 className="scroll-m-20 text-2xl font-semibold tracking-widest text-primary">
            RMS
          </h1>
          <span className="flex h-[2rem] w-[2rem] animate-spin items-center justify-center rounded-full bg-secondary p-2 text-accent">
            <Utensils className="animate-pulse" />
          </span>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <ProfileSection />
        </div>
      </div>
    </div>
  );
};

export default Header;
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  // This effect will run once after the component has mounted,
  // setting isClient to true
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !theme) return null;

  return (
    <Button
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="h-[2rem] w-[2rem] rounded-full"
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          theme === "light" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        }`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
          theme === "light" ? "rotate-90 scale-0" : "rotate-0 scale-100"
        }`}
      />
    </Button>
  );
}

import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";

function ProfileSection() {
  const user = useUser();
  return (
    <div>
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              breadcrumbs: "bg-red-500",
            },
          }}
          afterSignOutUrl="/"
        />
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>
    </div>
  );
}
