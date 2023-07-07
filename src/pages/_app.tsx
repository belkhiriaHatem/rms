import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import DashboardLayout from "~/@/components/DashboardLayout";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";

const MyApp: AppType = ({ Component, pageProps }) => {
  const { push } = useRouter();

  return (
    <ThemeProvider defaultTheme="light">
      <ClerkProvider navigate={(to) => push(to)} {...pageProps}>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </ClerkProvider>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
