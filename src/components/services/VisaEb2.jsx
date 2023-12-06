import Section from "@/components/common/Section";

import opencompany from "@/assets/services/opencompany.webp";
import opencompany2 from "@/assets/services/opencompany2.jpg";
import styles from "@/style";
import { GoDot } from "react-icons/go";

const VisaEb2 = ({ isMenuShown, darkMode, blue }) => {
  return (
    <>
      <Section
        darkMode={darkMode}
        blue={blue}
        isMenuShown={isMenuShown}
        title="EB2 Visa"
        subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa illo animi non cumque odio recusandae eveniet saepe fugit quisquam numquam, at tempora quis nam rem quas quasi blanditiis dolore perferendis?"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20   ">
          <div className=" flex items-center justify-center  ">
            <img
              src={opencompany2}
              className="object-contain rounded-[20px]  md:mx-0 shadow-xl shadow-gray-500"
              alt=""
            />
          </div>

          <div className="md:col-span-2 flex  flex-col items-center justify-center w-full  ">
            {/* 1 */}
            <div
              tabIndex={0}
              className={`collapse collapse-arrow ${
                darkMode
                  ? "shadow-sm shadow-white feedback-card "
                  : "shadow-md shadow-black "
              }
   rounded-box w-full  `}
            >
              <div className={`${styles.title} collapse-title  `}>
                Description
              </div>
              <div className={`${styles.subtitle} collapse-content   `}>
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
              className={`collapse collapse-arrow ${
                darkMode
                  ? "shadow-sm shadow-white feedback-card "
                  : "shadow-md shadow-black "
              }
   rounded-box w-full  `}
            >
              <div className={`${styles.title} collapse-title  `}>
                Features of the EB2-NIW Visa
              </div>
              <div className={`${styles.subtitle} collapse-content   `}>
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
              className={`collapse collapse-arrow ${
                darkMode
                  ? "shadow-sm shadow-white feedback-card "
                  : "shadow-md shadow-black "
              }
   rounded-box w-full  `}
            >
              <div className={`${styles.title} collapse-title  `}>
                At EB Visa Law we can help you obtain this visa. How will we do
                it? Well, we guide you with:
              </div>
              <div className={`${styles.subtitle} collapse-content   `}>
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
              className={`collapse collapse-arrow ${
                darkMode
                  ? "shadow-sm shadow-white feedback-card "
                  : "shadow-md shadow-black "
              }
   rounded-box w-full  `}
            >
              <div className={`${styles.title} collapse-title  `}>
                What is EB-2 with national interest exemption?
              </div>
              <div className={`${styles.subtitle} collapse-content   `}>
                An EB2-NIW is an immigrant visa that grants a foreign national
                permanent legal residence without the requirement of an offer of
                employment. The job offer requirement does not apply if the
                candidate can demonstrate that her permanent residence in the US
                would be in the “national interest” and would benefit the
                country.
              </div>
            </div>
            {/* 5 */}
            <div
              tabIndex={0}
              className={`collapse collapse-arrow ${
                darkMode
                  ? "shadow-sm shadow-white feedback-card "
                  : "shadow-md shadow-black "
              }
   rounded-box w-full  `}
            >
              <div className={`${styles.title} collapse-title  `}>
                Is there a difference between a regular EB2 and an EB2 with
                national interest exemption?
              </div>
              <div className={`${styles.subtitle} collapse-content   `}>
                <div className="flex flex-col gap-4">
                  <p>
                    Yes, both are very different in terms of their requirements,
                    processing times, and the documentation required for each.
                    Generally, an EB2 visa or other employment-based visas
                    require a formal offer of employment for an applicant to be
                    eligible to apply. In addition, it requires a Labor
                    Certification from the Department of Labor.
                  </p>
                  <p>
                    An EB2 with NIW, on the other hand, does not require any
                    offer of employment. The applicant is not required to go
                    through the labor certification process with the Department
                    of Labor. This is provided that the petitioner (applicant)
                    can prove that her admission to the United States would be
                    in the national benefit.
                  </p>
                </div>
              </div>
            </div>
            {/* 6 */}
            <div
              tabIndex={0}
              className={`collapse collapse-arrow ${
                darkMode
                  ? "shadow-sm shadow-white feedback-card "
                  : "shadow-md shadow-black "
              }
   rounded-box w-full  `}
            >
              <div className={`${styles.title} collapse-title  `}>
                Who can apply for an EB2-NIW?
              </div>
              <div className={`${styles.subtitle} collapse-content   `}>
                <div className="flex flex-col gap-4">
                  <p>
                    Any foreign citizen can apply for an EB2-NIW visa. An
                    immigration attorney can complete a solid application
                    package that checks all requirements and presents the
                    appropriate legal arguments. An applicant does not need an
                    employer.
                  </p>
                  <p>
                    As mentioned above, one of the main benefits of the EB2
                    national interest waiver is the ability to self-apply for
                    your green card. Through the national interest waiver, the
                    applicant does not need to go through the hassle of finding
                    a U.S. employer willing to sponsor his or her immigrant
                    petition. Another benefit is that through the national
                    interest exemption, the labor certification process can be
                    avoided entirely.
                  </p>
                </div>
              </div>
            </div>
            {/* 7 */}
            <div
              tabIndex={0}
              className={`collapse collapse-arrow ${
                darkMode
                  ? "shadow-sm shadow-white feedback-card "
                  : "shadow-md shadow-black "
              }
   rounded-box w-full  `}
            >
              <div className={`${styles.title} collapse-title  `}>
                Speed ​​in the process
              </div>
              <div className={`${styles.subtitle} collapse-content   `}>
                <div className="flex flex-col gap-4">
                  <p>
                    Another main benefit of the national interest exemption is
                    the speed of the process. Through a traditional
                    employer-sponsored green card, the process can be very
                    lengthy. The employer must undergo various hiring activities
                    and must also obtain an approved labor certification from
                    the Department of Labor.
                  </p>
                  <p>This process alone can take several months to complete.</p>
                  <p>
                    However, the benefit of the EB2 national interest exemption
                    is that you do not need to go through the labor
                    certification process. The applicant can file his or her
                    immigrant petition directly, saving him or her a tremendous
                    amount of time.
                  </p>
                </div>
              </div>
            </div>

            {/* 8 */}
            <div
              tabIndex={0}
              className={`collapse collapse-arrow ${
                darkMode
                  ? "shadow-sm shadow-white feedback-card "
                  : "shadow-md shadow-black "
              }
   rounded-box w-full  `}
            >
              <div className={`${styles.title} collapse-title  `}>
                National interest exemption requirements
              </div>
              <div className={`${styles.subtitle} collapse-content   `}>
                <div className="my-2">
                  There are 4 main requirements to qualify for EB2 NIW:
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>You must qualify under the EB2 immigrant category.</p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    Your proposed effort in the US must have substantial merit
                    and national importance.
                  </p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    You must be well positioned to advance the proposed effort.
                  </p>
                </div>

                <div className="my-2">
                  You must demonstrate that, on balance, it would be beneficial
                  to the
                </div>
                <div className="flex gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    United States to waive the requirement to have a job offer
                    and for a U.S.
                  </p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <div>company to undergo the labor certification process.</div>
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
