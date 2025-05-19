"use client"
import Footer from "@/app/(root)/components/Footer";
import Header from "@/app/(root)/components/Header";
import PayOnlineMain from "@/app/(root)/components/PayOnline/PayOnlineMain";
import { useParams } from "next/navigation";

const page = () => {
    const {tableid , merchantid} = useParams()
  return (
    <>
      <Header merchantid={merchantid} tableid={tableid}/>
      <PayOnlineMain merchantid={merchantid} tableid={tableid} />
      <Footer />
    </>
  );
}
export default page;
