import React from "react";
import bill from "@/assets/bill.png";
import style from "@/style";

import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "@/components";

import Navbar2 from "@/components/Navbar_copy";
import Services from "@/components/Services";
import Practices from "@/components/Practices";
import Advantages from "@/components/Advantages";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Section from "@/components/common/Section";
import ImgContent from "@/components/common/ImgContent";
import ImgContent2 from "@/components/common/ImgContent2";
import opencompany from "@/assets/services/opencompany.webp";
import opencompany2 from "@/assets/services/opencompany2.jpg";

const OpenCompany = ({ isMenuShown }) => {
  return (
    <>
      <Section
        isMenuShown={isMenuShown}
        title="Open a Company"
        subtitle="What are the benefits of migrating or expanding your company to
              one of the most attractive markets on the continent. We open your
              company in the USA."
      >
        <div className=" flex flex-col justify-center   w-full">
          <ImgContent
            img={opencompany}
            title="Opening a business in the US is the #1 expansion move. #1 for today's entrepreneur"
          >
            <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
              With our help, you can overcome trade barriers in your local
              market while simultaneously expanding into the US market.
            </p>
            <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
              Having a US-based company can generate new customers and increase
              trustworthiness because it is perceived as more legitimate. We'll
              guide you through the setup process every step of the way to make
              sure everything works correctly.
            </p>
          </ImgContent>

          <ImgContent2
            img={opencompany2}
            title="Learn to do all these things in a practical and technical way."
          >
            <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
              With our team of experts, we will explain how to set up your
              business quickly and easily step by step, saving you time and
              money. Your focus and attention should be on running your business
            </p>
          </ImgContent2>
        </div>
      </Section>
    </>
  );
};

export default OpenCompany;
