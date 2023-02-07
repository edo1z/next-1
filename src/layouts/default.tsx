import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Default({ children }: Props) {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
