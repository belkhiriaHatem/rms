import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="flex items-center justify-between border-b p-4">
      <h1>Dashboard Title</h1>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <ProfileSection />
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
