// import localFont from "next/font/local";
import HeroPage from "@/components/HeroPage";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });


export default function Home() {
  return (
    <div style={{ paddingLeft: '2rem', paddingRight: '2rem', textAlign: 'center' }}>
      <HeroPage />
    </div>
  );
}

