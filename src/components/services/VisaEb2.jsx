import Section from "@/components/common/Section";

import opencompany from "@/assets/services/opencompany.webp";
import opencompany2 from "@/assets/services/opencompany2.jpg";
import styles from "@/style";
import { GoDot } from "react-icons/go";

const VisaEb2 = ({ isMenuShown }) => {
  return (
    <>
      <Section
        isMenuShown={isMenuShown}
        title="EB2 Visa"
        subtitle="Details About the process. Tap on one of the topics below and get the information you need."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20   ">
          <div className=" flex items-center justify-center  ">
            <img
              src={opencompany2}
              className="object-contain rounded-[20px]  md:mx-0   shadow-lg shadow-white"
              alt=""
            />
          </div>

          <div className="md:col-span-2 flex  flex-col items-center justify-center w-full  ">
            {/* 1 */}
            <div
              tabIndex={0}
              className="collapse collapse-arrow feedback-card rounded-box w-full  "
            >
              <div
                className={`${styles.sectionText} collapse-title font-poppins font-semibold text-[20px] leading-[32px] text-white `}
              >
                Description
              </div>
              <div
                className={`${styles.sectionText} collapse-content font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mr-10 flex flex-col gap-2  `}
              >
                The National Interest Waiver (NIW) is a powerful option for
                certain highly qualified individuals to obtain a green card in
                the United States through self-petition. With an approved
                national interest waiver, someone can obtain a green card
                without having a job offer.
              </div>
            </div>
            {/* 2 */}
            <div
              tabIndex={0}
              className="collapse collapse-arrow feedback-card rounded-box w-full  "
            >
              <div
                className={`${styles.sectionText} collapse-title font-poppins font-semibold text-[20px] leading-[32px] text-white `}
              >
                Features of the EB2-NIW Visa
              </div>
              <div
                className={`${styles.sectionText} collapse-content font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mr-10 flex flex-col gap-2  `}
              >
                <div className="flex flex-col gap-4">
                  <p>
                    The EB2-NIW is an employment-based visa that does not
                    require sponsorship. The NIW stands for “national interest
                    exemption.” This means that the United States government
                    will waive the requirement for a job offer.
                  </p>
                  <p>
                    The Department of Labor will grant authorization to employ a
                    foreign national if the foreign national's proposed endeavor
                    benefits the U.S. Therefore, a qualified individual can
                    “self-petition” and obtain a green card based on his or her
                    own professional experience and skills.
                  </p>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div
              tabIndex={0}
              className="collapse collapse-arrow  feedback-card rounded-box w-full  "
            >
              <div
                className={`${styles.sectionText} collapse-title font-poppins font-semibold text-[20px] leading-[32px] text-white `}
              >
                At Amerigo we can help you obtain this visa. How will we do it?
                Well, we guide you with:
              </div>
              <div
                className={`${styles.sectionText} collapse-content font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mr-10 `}
              >
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>Fast and effective advice from the first call.</p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>You apply from anywhere in the world.</p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>Attention from different channels: calls, or emails.</p>
                </div>

                <div className="flex gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>Expert, agile, fast, and safe support.</p>
                </div>
                <div className="flex gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    The EB2-NIW visa requires a lot of documentation. It also
                    includes many steps that people often don't know or
                    understand. Here, we have listed all the frequently asked
                    questions that people often struggle with. In doing so, we
                    aim to make the green card application process and
                    processing times a little easier for our customers. Below is
                    a complete basic guide for the EB2-National Interest Waiver
                    visa.
                  </p>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div
              tabIndex={0}
              className="collapse collapse-arrow feedback-card rounded-box w-full  "
            >
              <div
                className={`${styles.sectionText} collapse-title font-poppins font-semibold text-[20px] leading-[32px] text-white `}
              >
                How to apply for the EB1 Visa
              </div>
              <div
                className={`${styles.sectionText} collapse-content font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mr-10 flex flex-col gap-2  `}
              >
                <div className="flex flex-col gap-4">
                  <p>
                    The EB-1 Visa application process varies depending on the
                    category in which you are applying.
                  </p>
                  <p>
                    Those who apply as immigrants with extraordinary abilities
                    can self-petition, meaning you can apply independently by
                    filing Form I-140 (Petition for Foreign Worker).
                  </p>
                  <p>
                    If you are an outstanding professor or researcher or are
                    applying as a multinational executive or manager, your
                    employer must file Form I-140 (Petition for Foreign Worker)
                    on your behalf.
                  </p>
                  <p>
                    During the application process, your US employer will need
                    to demonstrate its continued ability to pay the offered
                    salary as of the priority date.
                  </p>
                  <p>
                    An annual report, federal income tax return, or audited
                    financial statement can be used to demonstrate this.
                  </p>
                  <p>
                    Again, the EB-1 Visa can be acquired much faster than most
                    US Green Cards. This is because PERM Labor Certification
                    from a US employer is not required. Most The other
                    employment-based immigration visas require this, which can
                    significantly increase processing time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default VisaEb2;
