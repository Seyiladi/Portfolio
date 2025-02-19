import React from "react";
import Navbar from "./components/Header/page";

export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2234738000342371"
        crossOrigin="anonymous"
      ></script>
      <Navbar />
      {children}
    </div>
  );
}
