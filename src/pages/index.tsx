import Head from "next/head";
import Link from "next/link";
import { Button } from "~/@/components/ui/button";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>RMS</title>
        <meta name="description" content="RMS" />
        <link rel="icon" href="/utensils-crossed.svg" />
      </Head>
      <main className="">
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-primary lg:text-5xl">
            Taxing Laughter: The Joke Tax Chronicles
          </h1>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            The People of the Kingdom
          </h2>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            The Joke Tax
          </h3>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            People stopped telling jokes
          </h4>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The king, seeing how much happier his subjects were, realized the
            error of his ways and repealed the joke tax.
          </p>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            After all, he said, everyone enjoys a good joke, so its only fair
            that they should pay for the privilege.
          </blockquote>
          <div className="my-6 w-full overflow-y-auto">
            <table className="w-full">
              <thead>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                    Kings Treasury
                  </th>
                  <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                    Peoples happiness
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="m-0 border-t p-0 even:bg-secondary">
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    Empty
                  </td>
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    Overflowing
                  </td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-secondary">
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    Modest
                  </td>
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    Satisfied
                  </td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-secondary">
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    Full
                  </td>
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    Ecstatic
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>1st level of puns: 5 gold coins</li>
            <li>2nd level of jokes: 10 gold coins</li>
            <li>3rd level of one-liners : 20 gold coins</li>
          </ul>
          <div className="text-lg font-semibold">
            Are you sure absolutely sure?
          </div>
          <small className="text-sm font-medium leading-none">
            Email address
          </small>
          <p className="text-sm text-muted-foreground">
            Enter your email address.
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>1st level of puns: 5 gold coins</li>
            <li>2nd level of jokes: 10 gold coins</li>
            <li>3rd level of one-liners : 20 gold coins</li>
          </ul>
          <div className="text-lg font-semibold">
            Are you sure absolutely sure?
          </div>
          <small className="text-sm font-medium leading-none">
            Email address
          </small>
          <p className="text-sm text-muted-foreground">
            Enter your email address.
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>1st level of puns: 5 gold coins</li>
            <li>2nd level of jokes: 10 gold coins</li>
            <li>3rd level of one-liners : 20 gold coins</li>
          </ul>
          <div className="text-lg font-semibold">
            Are you sure absolutely sure?
          </div>
          <small className="text-sm font-medium leading-none">
            Email address
          </small>
          <p className="text-sm text-muted-foreground">
            Enter your email address.
          </p>
        </div>
      </main>
    </>
  );
}
