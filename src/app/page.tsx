import Image from "next/image";
import style from "./home.module.css";
import Header from "./components/header[not using]";
import Navbar from "./components/navbar";
import HeroSection from "./sections/heroSection";
import StatSection from "./sections/statsSection";
import MiddleSection from "./sections/middleSection"
import MiddleScSection from './sections/middleScSection';
import MiddleThSection from './sections/middleThSection';
import CardSection from './sections/cardSection';
import EmailSection from './sections/emailSection';
import CompanySection from './sections/companiesSection';
import FooterSection from './sections/footerSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-r from-[#2f339b] via-[#827cad] to-[#1b345e] mx-auto">
      <div>
        <Navbar />
      </div>
      <div className="mt-24 container mx-auto px-12 py-5">
        <HeroSection />
        <StatSection />
        <MiddleSection />
        <MiddleScSection />
        <MiddleThSection />
        <EmailSection />
        <CardSection />
        <CompanySection />
        <FooterSection />

      </div>
    </main>
  );
}
