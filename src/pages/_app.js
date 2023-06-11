import localFont from "next/font/local";
import "../styles/global.css";
import { JobsProvider } from "@/contexts/JobsContext";

const myFont = localFont({
  src: "../../public/fonts/LeagueSpartan-VariableFont.ttf",
});

export default function App({ Component, pageProps }) {
  return (
    <JobsProvider>
      <div className={myFont.className}>
        <Component {...pageProps} />
      </div>
    </JobsProvider>
  );
}
