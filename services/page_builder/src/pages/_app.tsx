import "@/src/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastProvider } from "@manon/react-components-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  );
}
