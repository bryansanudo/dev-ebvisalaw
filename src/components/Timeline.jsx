import React from "react";

import process1 from "@/assets/process/process1.png";
import shield from "@/assets/Shield.svg";
import styles from "../style";

const Timeline = ({ darkMode }) => {
  return (
    <>
      <section className="max-w-5xl mx-auto py-10 text-white"></section>

      <section
        id="clients"
        className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
      >
        <div className="absolute z-[0] w-[20%] h-[40%] -right-[50%] rounded-full blue__gradient bottom-80" />

        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
          <h2 className={styles.heading2}>How does it work?</h2>
          {/* <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab esse
          suscipit ipsum laudantium cupiditate voluptatibus
        </p>
      </div> */}
        </div>
        <div className="mx-6 ">
          {/* step1 */}
          <div className="flex flex-row">
            <div className="hidden md:flex flex-col items-center ">
              <div className="w-40 py-5  bg-black-gradient-2 rounded-[20px]   mr-4 flex flex-col items-center justify-center">
                <div className="text-3xl font-black text-white">01</div>
                <div className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                  Meeting
                </div>
              </div>
              <div className="h-full border-l-4 border-transparent ">
                <div className="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
              </div>
            </div>
            <div
              className={` ${
                darkMode ? "shadow-sm shadow-white  " : "shadow-md shadow-black"
              } flex-auto border md:border-none rounded-[20px] p-6 md:p-0   `}
            >
              <div className="flex md:flex-row flex-col items-center ">
                <div className="flex-auto  ">
                  <div className="md:hidden font-poppins font-semibold text-[20px] leading-[32px] text-white">
                    <span className="font-black ">01</span> - Meeting
                  </div>

                  <div className=" flex items-center justify-center h-24 md:mt-2  ">
                    <p className="font-poppins font-normal text-[16px] leading-[24px] dark:text-dimWhite">
                      Let's talk about your goals and understand how we can help
                      you achieve them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start flex-row">
            <div className="border-t-4 border-r-4 border-transparent">
              <div className="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
            </div>
            <div className="border-t-4 border-transparent flex-auto">
              <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
            </div>
            <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
          </div>

          {/* step2 */}
          <div className="flex flex-row-reverse">
            <div className="hidden md:flex flex-col items-center">
              <div className="w-40 py-5  bg-black-gradient-2 rounded-[20px]   mr-4 flex flex-col items-center justify-center">
                <div className="text-3xl font-black text-white"> 02</div>
                <div className="mb-2 font-poppins font-semibold text-[20px] leading-[32px] text-white text-center">
                  Profile evaluation
                </div>
              </div>
              <div className="h-full border-r-4 border-transparent">
                <div className="border-l-4 ml-4 h-full border-gray-300 border-dashed"></div>
              </div>
            </div>
            <div
              className={`${
                darkMode ? "shadow-sm shadow-white  " : "shadow-md shadow-black"
              }
  flex-auto mr-4 border md:border-none rounded-[20px]  p-6 md:p-0`}
            >
              <div className="flex md:flex-row flex-col items-center">
                <div className="flex-auto">
                  <div className="md:hidden font-poppins font-semibold text-[20px] leading-[32px] dark:text-white">
                    <span className="font-black">Step 2</span> - Profile
                    evaluation
                  </div>

                  <div className="flex items-center justify-center h-36 ">
                    <p className="font-poppins font-normal text-[16px] leading-[24px] dark:text-dimWhite">
                      We will carefully analyze your profile to define the best
                      strategy for your case.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start flex-row-reverse">
            <div className="border-t-4 border-l-4 border-transparent">
              <div className="w-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-b-4 rounded-br-full"></div>
            </div>
            <div className="border-t-4 border-transparent flex-auto">
              <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
            </div>
            <div className="w-16 mt-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-t-4 rounded-tl-full"></div>
          </div>

          {/* step3 */}
          <div className="flex flex-row">
            <div className="hidden md:flex flex-col items-center">
              <div className="w-60 py-5  bg-black-gradient-2 rounded-[20px] mr-4 flex flex-col items-center justify-center">
                <div className="text-3xl font-black text-white">03</div>
                <div className="mb-2 font-poppins font-semibold text-[20px] leading-[32px] text-white text-center">
                  Strategy presentation meeting
                </div>
              </div>
            </div>
            <div
              className={`${
                darkMode ? "shadow-sm shadow-white  " : "shadow-md shadow-black"
              }
   flex-auto  mr-4 border md:border-none rounded-[20px]  p-6 md:p-0`}
            >
              <div className="flex md:flex-row flex-col items-center">
                <div className="flex-auto">
                  <div
                    className="md:hidden  font-poppins font-semibold text-[20px] leading-[32px] text-white
"
                  >
                    <span className="font-black ">Step 3</span> - Strategy
                    presentation meeting
                  </div>

                  <div className="flex items-center justify-center h-36 md:mt-2 ">
                    <p className="font-poppins font-normal text-[16px] leading-[24px] dark:text-dimWhite">
                      We will present you with a personalized strategy and
                      answer all your questions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start flex-row">
            <div className="border-t-4 border-r-4 border-transparent">
              <div className="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
            </div>
            <div className="border-t-4 border-transparent flex-auto">
              <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
            </div>
            <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
          </div>

          {/* step4 */}
          <div className="flex flex-row-reverse">
            <div className="hidden md:flex flex-col items-center">
              <div className="w-60 py-5  bg-black-gradient-2 rounded-[20px]   mr-4 flex flex-col items-center justify-center">
                <div className="text-3xl font-black text-white"> 04</div>
                <div className="font-poppins font-semibold text-[20px] leading-[32px] text-white text-center">
                  Signature of the legal services contract
                </div>
              </div>
            </div>
            <div
              className={`flex-auto ${
                darkMode ? "shadow-sm shadow-white  " : "shadow-md shadow-black"
              }
    mr-4 border md:border-none rounded-[20px]  p-6 md:p-0 `}
            >
              <div className="flex md:flex-row flex-col items-center">
                <div className="flex-auto">
                  <div className="md:hidden font-poppins font-semibold text-[20px] leading-[32px] text-white">
                    <span className="font-black">Step 4</span> - Signature of
                    the legal services contract
                  </div>

                  <div className="flex items-center justify-center h-36 ">
                    <p className="font-poppins font-normal text-[16px] leading-[24px] dark:text-dimWhite">
                      Formalizing the Legal Partnership: A Contract Successfully
                      Signed with the Lawyer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start flex-row-reverse">
            <div className="border-t-4 border-l-4 border-transparent">
              <div className="w-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-b-4 rounded-br-full"></div>
            </div>
            <div className="border-t-4 border-transparent flex-auto">
              <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
            </div>
            <div className="w-16 mt-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-t-4 rounded-tl-full"></div>
          </div>

          {/* step5 */}
          <div className="flex flex-row">
            <div className="hidden md:flex flex-col items-center">
              <div className="w-40 py-5  bg-black-gradient-2 rounded-[20px]   mr-4 flex flex-col items-center justify-center">
                <div className="text-3xl font-black text-white">05</div>
                <div className="font-poppins font-semibold text-[20px] leading-[32px] text-white text-center">
                  Case structuring
                </div>
              </div>
            </div>
            <div
              className={`flex-auto ${
                darkMode ? "shadow-sm shadow-white  " : "shadow-md shadow-black"
              }
    mr-4 border md:border-none rounded-[20px]  p-6 md:p-0`}
            >
              <div className="flex md:flex-row flex-col items-center">
                <div className="flex-auto">
                  <div className="md:hidden font-poppins font-semibold text-[20px] leading-[32px] text-white">
                    <span className="font-black">Step 5</span> - Case
                    structuring
                  </div>

                  <div className="flex items-center justify-center h-36 md:mt-2 ">
                    <p className="font-poppins font-normal text-[16px] leading-[24px] dark:text-dimWhite">
                      We will prepare your case with precision, guaranteeing the
                      best chance of success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start flex-row">
            <div className="border-t-4 border-r-4 border-transparent">
              <div className="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
            </div>
            <div className="border-t-4 border-transparent flex-auto">
              <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
            </div>
            <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
          </div>

          {/* step6 */}
          <div className="flex flex-row-reverse">
            <div className="hidden md:flex flex-col items-center">
              <div className="w-64 py-5  bg-black-gradient-2 rounded-[20px]   mr-4 flex flex-col items-center justify-center">
                <div className="text-3xl font-black text-white"> 06</div>
                <div className="font-poppins font-semibold text-[20px] leading-[32px] text-white text-center">
                  Presentation of the visa request
                </div>
              </div>
            </div>
            <div
              className={`flex-auto ${
                darkMode ? "shadow-sm shadow-white  " : "shadow-md shadow-black"
              }
    mr-4 border md:border-none rounded-[20px]  p-6 md:p-0`}
            >
              <div className="flex md:flex-row flex-col items-center">
                <div className="flex-auto">
                  <div className="md:hidden font-poppins font-semibold text-[20px] leading-[32px] text-white">
                    <span className="font-black">Step 6</span> - Presentation of
                    the visa request
                  </div>

                  <div className="flex items-center justify-center h-36">
                    <p className="font-poppins font-normal text-[16px] leading-[24px] dark:text-dimWhite">
                      We will send your case following all the necessary
                      deadlines and protocols.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start flex-row-reverse">
            <div className="border-t-4 border-l-4 border-transparent">
              <div className="w-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-b-4 rounded-br-full"></div>
            </div>
            <div className="border-t-4 border-transparent flex-auto">
              <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
            </div>
            <div className="w-16 mt-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-t-4 rounded-tl-full"></div>
          </div>

          {/* step7 */}
          <div className="flex flex-row">
            <div className="hidden md:flex flex-col items-center">
              <div className="w-60 py-5  bg-black-gradient-2 rounded-[20px]   mr-4 flex flex-col items-center justify-center">
                <div className="text-3xl font-black text-white">07</div>
                <div className="font-poppins font-semibold text-[20px] leading-[32px] text-white text-center">
                  Waiting for immigration response
                </div>
              </div>
            </div>
            <div
              className={`flex-auto ${
                darkMode ? "shadow-sm shadow-white  " : "shadow-md shadow-black"
              }
   mr-4 border md:border-none rounded-[20px]  p-6 md:p-0`}
            >
              <div className="flex md:flex-row flex-col items-center">
                <div className="flex-auto">
                  <div className="md:hidden font-poppins font-semibold text-[20px] leading-[32px] text-white">
                    <span className="font-black">Step 7</span> - Waiting for
                    immigration response
                  </div>

                  <div className="flex items-center justify-center h-36 md:mt-2 ">
                    <p className="font-poppins font-normal text-[16px] leading-[24px] dark:text-dimWhite">
                      We will follow your process closely and keep you informed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start flex-row">
            <div className="border-t-4 border-r-4 border-transparent">
              <div className="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
            </div>
            <div className="border-t-4 border-transparent flex-auto">
              <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
            </div>
            <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
          </div>

          {/* step8 */}
          <div className="flex flex-row-reverse">
            <div className="hidden md:flex flex-col items-center">
              <div className="w-40 py-5  bg-black-gradient-2 rounded-[20px]   mr-4 flex flex-col items-center justify-center">
                <div className="text-3xl font-black text-white">08</div>
                <div className="font-poppins font-semibold text-[20px] leading-[32px] text-white text-center">
                  Everything ready!
                </div>
              </div>
            </div>
            <div
              className={`flex-auto ${
                darkMode ? "shadow-sm shadow-white  " : "shadow-md shadow-black"
              }
    mr-4 border md:border-none rounded-[20px]  p-6 md:p-0`}
            >
              <div className="flex md:flex-row flex-col items-center">
                <div className="flex-auto">
                  <div className="md:hidden font-poppins font-semibold text-[20px] leading-[32px] text-white">
                    <span className="font-black">Step 8</span> - Everything
                    ready!
                  </div>

                  <div className="flex items-center justify-center h-36 md:mt-2 md:mx-10 ">
                    <p className="font-poppins font-normal text-[16px] leading-[24px] dark:text-dimWhite">
                      Now it's time to go! If approved, your process will be
                      finalized and you will receive everything you need for
                      your trip
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
