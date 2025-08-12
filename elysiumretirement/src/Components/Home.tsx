import React from "react";
import Navbar from "./NavBar";
import HeroBanner from "./Banner";
import OurStory from "./OurStory";
import CoreProblems from "./CoreProblems";
import CircleDiagram from "./ElysiumSolutions";
import LivingOptions from "./LivingOptions";
import ImageSlider from "./Instagram";
import ContactForm from "./GetinTouch";
import AddtionalSection from "./AddtionalSection";
import SecondAddtionalSection from "./SecondAddtionalSection";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="top-10 Home text-green-900">
      <HeroBanner />
      <OurStory />
      <CoreProblems />
      <LivingOptions />
      <AddtionalSection />
      <ImageSlider />
      <SecondAddtionalSection />
      <ContactForm />
    </div>
  );
};

export default Home;
