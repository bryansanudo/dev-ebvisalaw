import Section from "@/components/common/Section";

import opencompany from "@/assets/services/opencompany.webp";
import opencompany2 from "@/assets/services/opencompany2.jpg";
import styles from "@/style";

const OpenCompany = ({ darkMode, isMenuShown }) => {
  return (
    <>
      <Section
        darkMode={darkMode}
        isMenuShown={isMenuShown}
        title="Open a Company"
        subtitle="What are the benefits of migrating or expanding your company to
              one of the most attractive markets on the continent. We open your
              company in the USA."
      >
        <div className="w-full flex flex-col gap-6 md:gap-20 mb-20  ">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="w-full h-full  rounded-[20px] shadow-xl shadow-gray-500 ">
              <img
                src={opencompany}
                className="object-contain rounded-[20px]"
                alt=""
              />
            </div>
            <div className="flex items-center ">
              <div className="flex flex-col items-center justify-center">
                <h2 className={`${styles.title} mb-3`}>
                  Opening a business in the US is the #1 expansion move. #1 for
                  today's entrepreneur
                </h2>
                <p className={`${styles.subtitle}`}>
                  With our help, you can overcome trade barriers in your local
                  market while simultaneously expanding into the US market.
                </p>
                <p className={`${styles.subtitle}`}>
                  Having a US-based company can generate new customers and
                  increase trustworthiness because it is perceived as more
                  legitimate. We'll guide you through the setup process every
                  step of the way to make sure everything works correctly.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-20 ">
            <div className="flex items-center ">
              <div className="flex flex-col items-center justify-center ">
                <h2 className={`${styles.title} mb-3`}>
                  Opening a business in the US is the #1 expansion move. #1 for
                  today's entrepreneur
                </h2>
                <p className={`${styles.subtitle}`}>
                  With our help, you can overcome trade barriers in your local
                  market while simultaneously expanding into the US market.
                </p>
                <p className={`${styles.subtitle}`}>
                  Having a US-based company can generate new customers and
                  increase trustworthiness because it is perceived as more
                  legitimate. We'll guide you through the setup process every
                  step of the way to make sure everything works correctly.
                </p>
              </div>
            </div>
            <div className="w-full h-full  rounded-[20px] shadow-xl shadow-gray-500   ">
              <img
                src={opencompany2}
                className="object-contain rounded-[20px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default OpenCompany;
