import Section from "@/components/common/Section";

import opencompany from "@/assets/services/opencompany.webp";
import opencompany2 from "@/assets/services/opencompany2.jpg";
import styles from "@/style";
import { GoDot } from "react-icons/go";

const VisaE2 = ({ isMenuShown, darkMode, blue }) => {
  return (
    <>
      <Section
        blue={blue}
        darkMode={darkMode}
        isMenuShown={isMenuShown}
        title="XXXX Visa"
        subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa illo animi non cumque odio recusandae eveniet saepe fugit quisquam numquam, at tempora quis nam rem quas quasi blanditiis dolore perferendis?"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20   ">
          <div className=" flex items-center justify-center  ">
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
                Requirements to apply for the E-2 Visa
              </div>
              <div className={`${styles.subtitle} collapse-content   `}>
                <div className="my-2">
                  To qualify for an E-2 visa, the treaty investor must:
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>Be a citizen of a treaty country.</p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    You must be a citizen and not just a resident of one of the
                    treaty countries.
                  </p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>You do not have to live in that treaty country.</p>
                </div>

                <div className="flex gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    Have invested a substantial amount of capital in a
                    commercial enterprise in the US.
                  </p>
                </div>
                <div className="flex gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    Recommend a minimum investment of $100,000-$200,000 USD.
                  </p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <div>
                    In exceptional cases, applications with a minimum investment
                    of $50,000 USD may be considered good candidates.
                  </div>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <div>
                    Present evidence that demonstrates that the investment is{" "}
                    <span className="font-bold">substantial.</span>
                  </div>
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
                The evidence must include:
              </div>
              <div className={`${styles.subtitle} collapse-content   `}>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>Bank statements.</p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>Detailed list of purchased goods and materials.</p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>Business plan formulated with your projected success.</p>
                </div>

                <div className="flex gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>Put funds at risk.</p>
                </div>
                <div className="flex gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    You must put up funds for the startup and the investment
                    must run the risk of being lost.
                  </p>
                </div>
                <div className="flex gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>Have a real company.</p>
                </div>
                <div className="flex gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>It must offer a good or service and generate profits.</p>
                </div>
                <div className="flex gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    Investments in real estate, undeveloped land or stocks do
                    not qualify.
                  </p>
                </div>
                <div className="flex gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    Intend to enter the US solely for the purpose of developing
                    and conducting the business enterprise.
                  </p>
                </div>
                <div className="flex gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    Be the main investor, hold a position of supervisor,
                    executive or personnel with specialized knowledge.
                  </p>
                </div>
                <div className="flex gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    Demonstrate ownership of at least 50% of the business or
                    control.
                  </p>
                </div>
                <div className="flex gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>Ordinary skilled and unskilled workers do not qualify.</p>
                </div>
                <div className="flex gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>Have a significant impact.</p>
                </div>
                <div className="flex gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    You must demonstrate a significant public benefit to the US
                    based on your role in the business.
                  </p>
                </div>
                <div className="flex gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>Have more than a marginal business enterprise.</p>
                </div>
                <div className="flex gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    The company must generate an income significantly higher
                    than an average income, which provides a modest living for
                    the investor and his family.
                  </p>
                </div>

                <div className="my-2">
                  Some evidence that can be presented to show that the
                  investment business is bona fide include:
                </div>

                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <div>Tax returns.</div>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <div>financial statements.</div>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <div>
                    Quarterly salary reports or payroll summaries (i.e. W-2,
                    W3).
                  </div>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <div>Business Organization Chart.</div>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <div>
                    Business documents (i.e. permits, occupational license,
                    local authorizations).
                  </div>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <div>
                    Business documents (i.e. permits, occupational license,
                    local authorizations).
                  </div>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <div>
                    Bank transaction documents (for example, contracts and
                    invoices).
                  </div>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <div>
                    Business marketing materials (e.g. advertisements, events,
                    website).
                  </div>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <div>leasing contract.</div>
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
                E-2 Visa for employees
              </div>
              <div className={`${styles.subtitle} collapse-content   `}>
                <div className="my-2">
                  To qualify to bring an employee to the US the employer must:
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    Meet the nationality requirement for an investor (i.e.
                    nationality of a treaty country), or business organization
                    (i.e. at least 50% ownership must be nationality of the
                    treaty country).
                  </p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>Have the same nationality as the employee.</p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    Maintain “E” visa classification if you are not residing
                    outside the US.
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
                E-2 Visa for employees with an executive and/or supervisory
                position
              </div>
              <div className={`${styles.subtitle} collapse-content   `}>
                <div className="my-2">
                  When evaluating the executive and/or supervisory element, the
                  following factors should be considered:
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    The title of the intended position of employment; the duties
                    of the position held by the applicant; the extent to which
                    the applicant will have ultimate control and responsibility
                    for business operations; the number and skill levels of
                    employees the applicant will supervise, the pay level.
                  </p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    Whether the executive or supervisory element of the position
                    is a primary function and is not a secondary or collateral
                    function.
                  </p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>The weight to be assigned to a given factor.</p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    For example, the job title of “manager” might be useful in
                    evaluating the position of supervisor if the applicant has
                    numerous employees.
                  </p>
                </div>
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
                E-2 Applicant Family
              </div>
              <div className={`${styles.subtitle} collapse-content   `}>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    Spouses and unmarried children under 21 years of age may be
                    included in the application and may accompany the
                    investor/employee to the United States.
                  </p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    The nationalities of spouses and children do not need to be
                    the same as the investor/employee.
                  </p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    If the application is approved, family members will be
                    granted the same period of permanence as the
                    investor/employee.
                  </p>
                </div>
                <div className="flex  gap-2 ">
                  <div>
                    <GoDot className="text-2xl" />
                  </div>
                  <p>
                    If you are already in the US, you can request renewal of
                    your E-2 dependent classification.
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
                Spouse and children
              </div>
              <div className={`${styles.subtitle} collapse-content   `}>
                <div className="my-2">
                  Spouses may apply for work authorization using filing form
                  I-765. If approved, they have no restrictions on where they
                  can work in the US.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default VisaE2;
