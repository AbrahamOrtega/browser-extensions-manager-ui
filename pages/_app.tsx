import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={notoSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
