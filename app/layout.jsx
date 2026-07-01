import MainTemplate from "@/components/frontendcomponent/templates/MainTemplate";
import { ReduxProvider } from "@/store/provider";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const montreal = localFont({
  src: "../public/font/ppneuemontreal.woff",
  variable: "--font-montreal",
});

export const metadata = {
  title: "Navayu",
  description: "Redefining Health. Reimagining Life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${montreal.variable}`}>
      <body cz-shortcut-listen="true">
        <ReduxProvider>
          <MainTemplate>{children}</MainTemplate>
        </ReduxProvider>
      </body>
    </html>
  );
}
