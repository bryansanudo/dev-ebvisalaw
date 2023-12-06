import Section from "@/components/common/Section";

import opencompany from "@/assets/services/opencompany.webp";
import opencompany2 from "@/assets/services/opencompany2.jpg";
import styles from "@/style";
import { GoDot } from "react-icons/go";

const VisaEb1 = ({ darkMode, isMenuShown, blue }) => {
  return (
    <>
      <Section
        darkMode={darkMode}
        isMenuShown={isMenuShown}
        blue={blue}
        title="EB1 Visa"
        subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa illo animi non cumque odio recusandae eveniet saepe fugit quisquam numquam, at tempora quis nam rem quas quasi blanditiis dolore perferendis?"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20   ">
          <div className=" flex items-center justify-center  ">
            {/* <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full blue__gradient" /> */}
            {/* <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" /> */}
            <img
              src={opencompany}
              className="object-contain rounded-[20px]  md:mx-0   shadow-xl shadow-gray-500"
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
                About the EB1 Visa
              </div>
              <div className={`${styles.subtitle} collapse-content   `}>
                <div className="flex flex-col gap-4">
                  <p>
                    The EB-1 Visa is an immigrant visa to the US that is part of
                    the employment-based Visa category.
                  </p>
                  <p>
                    The EB-1 is a preferential Visa that is open to foreign
                    nationals with extraordinary abilities, outstanding
                    professors and researchers, and certain multinational
                    executives or managers.
                  </p>
                  <p>
                    The applicant must be able to demonstrate “sustained
                    national or international recognition” in their particular
                    field (which may include science, arts, education, business,
                    or athletics).
                  </p>
                  <p>
                    This type of Visa, also known as a Residence Card, grants
                    you permanent residence. This means that whoever receives it
                    can remain in the US indefinitely with their green card. If
                    you want to apply for US citizenship, you can do so after 5
                    years of continuous residence as a green card holder.
                  </p>
                  <p>
                    The EB1-1 Visa is considered particularly desirable because
                    the wait for acceptance can be much shorter than other
                    immigrant entry routes, which can take years.
                  </p>
                  <p>
                    In addition, it is not necessary for the applicant to have a
                    labor certification. So in other words, US companies are not
                    required to see if the role can be filled domestically
                    first.
                  </p>
                </div>
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
                At EB Visa Law we can help you obtain this visa. How will we do
                it? Well, we guide you with:
              </div>
              <div className={`${styles.subtitle} collapse-content   `}>
                <div className="flex  gap-2 ">
                  <div className="flex gap-2">
                    <GoDot className="text-2xl  " />
                  </div>
                  <p>Fast and effective advice from the first call</p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>You apply from anywhere in the world</p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>Attention in different channels: calls or emails</p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>Expert, agile, fast, and safe support.</p>
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
                EB1 Visa Requirements
              </div>
              <div className={`${styles.subtitle} collapse-content   `}>
                <div className="my-2">
                  To obtain an EB1A Visa, you must prove 3 things:
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    That you have extraordinary ability in the sciences, arts,
                    education, business or athletics.
                  </p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    That you come to the United States to continue working in
                    your field of extraordinary ability.
                  </p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    That by entering the United States you substantially benefit
                    this country.
                  </p>
                </div>

                <div className="my-2">
                  If you do not have an important national or international
                  award or recognition, you must meet at least 3 of the
                  following requirements:
                </div>
                <div className="flex gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    Receipt of nationally or internationally recognized minor
                    awards or awards for excellence in your field of activity.
                  </p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <div>
                    Membership in associations in your field of activity, which
                    require outstanding achievements of their members, as judged
                    by recognized national or international experts in their
                    disciplines or fields.
                  </div>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    Material published about you, in major professional or trade
                    publications or other relevant media, related to your work
                    in your field of activity.
                  </p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    Participation, either as an individual or as part of a
                    panel, as a judge of the work of others in the same or
                    related field of expertise for which classification is
                    sought.
                  </p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    Original scientific, academic, artistic, sporting or
                    business-related contributions of great importance in your
                    field of activity.
                  </p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    Authorship of academic articles in your field, in major
                    professional or trade publications or other prominent media.
                  </p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    The exhibition of your work in art exhibitions or showcases.
                  </p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    Have played a leadership or critical role for organizations
                    or establishments that have a distinguished reputation.
                  </p>
                </div>
                <div className="flex gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    Have earned a high salary or other significantly high
                    compensation for services, relative to others in your field
                  </p>
                </div>

                <div className="flex gap-2">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  Have achieved commercial success in the performing arts, as
                  evidenced by box office receipts or sales of records,
                  cassettes, compact discs, or videos.
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
                How to apply for the EB1 Visa
              </div>
              <div className={`${styles.subtitle} collapse-content   `}>
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

export default VisaEb1;
