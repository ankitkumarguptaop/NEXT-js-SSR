import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";
import { Container } from "@mui/material";
import ReduxProvider from "@/store/reduc-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ReduxProvider>
          <Container maxWidth="xl" sx={{ backgroundColor: "red" }}>
            {children}
          </Container>
          </ReduxProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
