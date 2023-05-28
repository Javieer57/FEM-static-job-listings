import localFont from "next/font/local";
import "../styles/global.css";

const myFont = localFont({
  src: "../../public/fonts/LeagueSpartan-VariableFont.ttf",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={myFont.className}>
      <Component {...pageProps} />
    </div>
  );
}
