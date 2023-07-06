import {
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Head from "next/head";
import Link from "next/link";
import { Button } from "~/@/components/ui/button";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const user = useUser();

  return (
    <>
      <Head>
        <title>RMS</title>
        <meta name="description" content="RMS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div>
          {!!user.isSignedIn && (
            <SignOutButton>
              <Button>Sign out</Button>
            </SignOutButton>
          )}
          {!user.isSignedIn && (
            <SignInButton>
              <Button>Sign In</Button>
            </SignInButton>
          )}
        </div>
        <div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </main>
    </>
  );
}
