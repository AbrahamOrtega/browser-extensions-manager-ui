import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased bg-linear-[var(--color-light-gradient)] text-neutral-900 dark:bg-linear-[var(--color-dark-gradient)] dark:text-neutral-0">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
