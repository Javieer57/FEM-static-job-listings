import { League_Spartan } from "next/font/google";
import "../styles/global.css";

const spartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-spartan",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${spartan.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
