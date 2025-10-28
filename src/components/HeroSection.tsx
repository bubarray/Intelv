import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const HeroSection = () => {
    return (
        <section
            className="w-full bg-[#077A7D] flex items-center px-4 py-6 md:px-16 md:py-8"
            style={{
                fontFamily: "Hind, -apple-system, Roboto, Helvetica, sans-serif",
            }}
        >
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20 w-full">
                {/* Left Content */}
                <div className="flex-1 flex flex-col items-start gap-6 lg:gap-8 text-center lg:text-left">
                    <div className="flex flex-col items-start gap-6 lg:gap-8">
                        <h1
                            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight lg:leading-[58px] w-full tracking-tight lg:tracking-[-0.96px]"
                            style={{
                                fontFamily:
                                    "Albert Sans, -apple-system, Roboto, Helvetica, sans-serif",
                            }}
                        >
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                                Empowering Your Business
                            </span>
                            <br />
                            <span className="text-white">Through Technology</span>
                        </h1>

                        <p
                            className="text-white text-base sm:text-lg font-normal leading-6 sm:leading-7 w-full"
                            style={{
                                fontFamily:
                                    "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                            }}
                        >
                            Professional IT solutions tailored to drive your business forward. From infrastructure to support, we&aposve got you covered.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                        <Link href="/services">
                            <Button
                                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 font-semibold text-lg transform hover:scale-105"
                                style={{
                                    fontFamily:
                                        "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    lineHeight: "24px",
                                }}
                            >
                                Our Services
                            </Button>
                        </Link>

                        <Link href="/contact-us">
                        <Button
                            variant="outline"
                            className="group relative inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 font-semibold text-lg transform hover:scale-105"
                            style={{
                                fontFamily:
                                    "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                                fontSize: "16px",
                                fontWeight: "500",
                                lineHeight: "24px",
                            }}
                        >
                            Get in touch
                        </Button>
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 flex justify-center w-full">
                    <img
                        src="https://budventure.technology/public/frontend/images/blog/blog_1_main.webp"
                        alt="Spare parts marketplace featuring various automotive components arranged around a brake disc"
                        style={{ height: "480px" }}
                        className="w-full max-w-[640px] object-cover rounded-[40px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
