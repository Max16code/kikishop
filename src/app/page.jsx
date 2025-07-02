import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";


export default function Home() {
  return (
    <div className="justify-center text-yellow-400"> 
      <h1 className="text-2xl font-bold ">Welcome to Dkikishop</h1>   
      <Navbar />  
      
    </div>
  );
}
