// import type { FC, HTMLAttributes } from "react";

// import { CheckItemText } from "@/marketing/pricing-sections/base-components/pricing-tier-card";
// import { cx } from "@/utils/cx";
import { BsGraphUpArrow } from "react-icons/bs";
import { GoGoal } from "react-icons/go";
import { CiCalendarDate } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa";
import img1 from "../../../public/phone1.png";
import img2 from "../../../public/dashboard.png";
import img3 from "../../../public/phone2.png";
import img4 from "../../../public/dashboard2.png";

// const AlternateImageMockup: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
//     return (
//         <div
//             className={cx(
//                 "size-full rounded-[9.03px] bg-primary p-[0.9px] shadow-modern-mockup-outer-md ring-[0.56px] ring-utility-gray-300 ring-inset md:rounded-[20.08px] md:p-0.5 md:shadow-modern-mockup-outer-lg md:ring-[1.25px] lg:absolute lg:w-auto lg:max-w-none",
//                 props.className,
//             )}
//         >
//             <div className="size-full rounded-[7.9px] bg-primary p-0.5 shadow-modern-mockup-inner-md md:rounded-[17.57px] md:p-[3.5px] md:shadow-modern-mockup-inner-lg">
//                 <div className="relative size-full overflow-hidden rounded-[6.77px] ring-[0.56px] ring-utility-gray-200 md:rounded-[15.06px] md:ring-[1.25px]">
//                     {props.children}
//                 </div>
//             </div>
//         </div>
//     );
// };

export const FeaturesAlternatingLayout01 = () => {
    return (
        <section className="flex flex-col gap-12 overflow-hidden relative bg-[#dac5fa] py-16 sm:gap-16 md:gap-20 md:py-24 lg:gap-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-purple-700 md:text-md">Features</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-black md:text-display-md">Beautiful analytics to grow smarter</h2>
                    <p className="mt-4 text-lg text-gray-600 md:mt-5 md:text-xl">
                        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                    </p>
                </div>
            </div>

            <div className="mx-auto flex w-full max-w-container flex-col gap-12 px-4 sm:gap-16 md:gap-20 md:px-8 lg:gap-24">
                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center">
                        <BsGraphUpArrow size={25} className="p-2 rounded-full bg-purple-400 h-10 w-10 md:h-16 md:w-16 text-white" />
                        <h2 className="mt-5 text-display-xs font-semibold text-black md:text-display-sm">Growth You Can See</h2>
                        <p className="mt-2 text-md text-gray-600 md:mt-4 md:text-lg">
                            It didn't happen overnight. but with the right content, their audience kept growing.
                        </p>

                        {/* <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Leverage automation to move fast",
                                "Always give customers a human to chat to",
                                "Automate customer support and close leads faster",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul> */}
                    </div>

                    <div className="relative w-full flex-1 lg:h-128 z-10">
                        {/* <AlternateImageMockup className="lg:left-0"> */}
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src={img1}
                                className="size-full object-contain lg:w-auto lg:max-w-none dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src={img1}
                                className="size-full object-contain not-dark:hidden lg:w-auto lg:max-w-none"
                            />
                        {/* </AlternateImageMockup> */}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center lg:order-last">
                        <GoGoal  size={25} className="p-2 rounded-full bg-purple-400 h-10 w-10 md:h-16 md:w-16 text-white" />
                        <h2 className="mt-5 text-display-xs font-semibold text-black md:text-display-sm">Where Strategy Meets Results</h2>
                        <p className="mt-2 text-md text-gray-600 md:mt-4 md:text-lg">
                            We don't guess, We plan, Execute, and deliver real engagement.
                        </p>
                        {/* <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Keep your customers in the loop with live chat",
                                "Embed help articles right on your website",
                                "Customers never have to leave the page to find an answer",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul> */}
                    </div>

                    <div className="relative w-full flex-1 lg:h-128 z-10">
                        {/* <AlternateImageMockup className="lg:right-0"> */}
                            {/* Light mode image (hidden in dark mode) */}
                            
                            <img
                                alt="Dashboard mockup showing application interface"
                                src={img2}
                                className="size-full object-contain lg:w-auto lg:max-w-none dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src={img2}
                                className="size-full object-contain not-dark:hidden lg:w-auto lg:max-w-none md:ml-[-200px]"
                            />
                        {/* </AlternateImageMockup> */}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center">
                        <CiCalendarDate  size={25} className="p-2 rounded-full bg-purple-400 h-10 w-10 md:h-16 md:w-16 text-white" />
                        <h2 className="mt-5 text-display-xs font-semibold text-black md:text-display-sm">What 30 Days Can Do</h2>
                        <p className="mt-2 text-md text-gray-600 md:mt-4 md:text-lg">
                            In just 30 days, we turned low-performance into high-engagement posts all through strategy and consistency.
                        </p>
                        {/* <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Filter, export, and drilldown on the data quickly",
                                "Save, schedule, and automate reports to your inbox",
                                "Connect the tools you already use with 100+ integrations",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul> */}
                    </div>

                    <div className="relative w-full flex-1 lg:h-128">
                        {/* <AlternateImageMockup className="lg:left-0"> */}
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src={img3}
                                className="size-full object-contain lg:w-auto lg:max-w-none dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src={img3}
                                className="size-full object-contain not-dark:hidden lg:w-auto lg:max-w-none"
                            />
                        {/* </AlternateImageMockup> */}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center lg:order-last">
                        <FaRegLightbulb  size={25} className="p-2 rounded-full bg-purple-400 h-10 w-10 md:h-16 md:w-16 text-white" />
                        <h2 className="mt-5 text-display-xs font-semibold text-black md:text-display-sm">29 Million Reasons Strategy Matters</h2>
                        <p className="mt-2 text-md text-gray-600 md:mt-4 md:text-lg">
                            Engagement this high doesn't happen by chance it's build with intention.
                        </p>
                        {/* <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Keep your customers in the loop with live chat",
                                "Embed help articles right on your website",
                                "Customers never have to leave the page to find an answer",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul> */}
                    </div>

                    <div className="relative w-full flex-1 lg:h-128 z-10">
                        {/* <AlternateImageMockup className="lg:right-0"> */}
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src={img4}
                                className="size-full object-contain lg:w-auto lg:max-w-none dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src={img4}
                                className="size-full object-contain not-dark:hidden lg:w-auto lg:max-w-none md:ml-[-200px]"
                            />
                        {/* </AlternateImageMockup> */}
                    </div>
                </div>
            </div>




            {/* Right Side */}
            <div className="absolute md:bottom-[90%] bottom-[85%] w-[80%] -right-4 md:-right-4 h-12 md:w-[60%]  md:h-20 bg-purple-700 opacity-40 -rotate-12"></div>
            <div className="absolute md:bottom-[87.7%] bottom-[83.3%] w-[60%] -right-4 h-12 md:-right-4 md:w-[50%] md:h-20  bg-purple-600 opacity-40 -rotate-12"></div>
            <div className="absolute md:bottom-[85.4%] bottom-[81.6%] w-[40%] -right-4 h-12 md:-right-4 md:w-[40%] md:h-20 bg-purple-500 opacity-45 -rotate-12"></div>
            <div className="absolute md:bottom-[83.1%] bottom-[79.8%] w-[25%] -right-4 h-12 md:-right-4 md:w-[30%] md:h-20 bg-purple-400 opacity-45 -rotate-12"></div>
            <div className="absolute md:bottom-[81.1%] bottom-[77.9%] w-[13%] -right-4 h-12 md:-right-4 md:w-[20%] md:h-20 bg-purple-300 opacity-45 -rotate-12"></div>

            
                <div className="absolute md:bottom-[50%] bottom-[60%] w-[13%] -left-4 md:-left-4 h-12 md:w-[20%]  md:h-20 bg-purple-700 opacity-40 -rotate-12"></div>
                <div className="absolute md:bottom-[47.7%] bottom-[58.2%] w-[25%] -left-4 h-12 md:-left-4 md:w-[30%] md:h-20  bg-purple-600 opacity-40 -rotate-12"></div>
                <div className="absolute md:bottom-[45.4%] bottom-[56.4%] w-[40%] -left-4 h-12 md:-left-4 md:w-[40%] md:h-20 bg-purple-500 opacity-45 -rotate-12"></div>
                <div className="absolute md:bottom-[43%] bottom-[54.7%] w-[60%] -left-4 h-12 md:-left-4 md:w-[50%] md:h-20 bg-purple-400 opacity-45 -rotate-12"></div>
                <div className="absolute md:bottom-[40.7%] bottom-[53%] w-[80%] -left-4 h-12 md:-left-4 md:w-[60%] md:h-20 bg-purple-300 opacity-45 -rotate-12"></div>

                <div className="absolute md:bottom-[5%] bottom-[10%] w-[90%] -right-6 md:-right-9 h-12 md:w-[50%]  md:h-20 bg-purple-700 opacity-40 rotate-[20deg]"></div>
                <div className="absolute md:bottom-[7.3%] bottom-[11.7%] w-[75%] -right-6 h-12 md:-right-9 md:w-[43%] md:h-20  bg-purple-600 opacity-40 rotate-[20deg]"></div>
                <div className="absolute md:bottom-[9.6%] bottom-[13.4%] w-[60%] -right-6 h-12 md:-right-9 md:w-[36%] md:h-20 bg-purple-500 opacity-45 rotate-[20deg]"></div>
                <div className="absolute md:bottom-[11.8%] bottom-[15%] w-[40%] -right-6 h-12 md:-right-9 md:w-[28%] md:h-20 bg-purple-400 opacity-45 rotate-[20deg]"></div>
                <div className="absolute md:bottom-[14.3%] bottom-[16.6%] w-[20%] -right-6 h-12 md:-right-4 md:w-[20%] md:h-20 bg-purple-300 opacity-45 rotate-[20deg]"></div>
            
        </section>
    );
};

export default FeaturesAlternatingLayout01;