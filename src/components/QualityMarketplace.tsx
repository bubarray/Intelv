import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const QualityMarketplace = () => {
  return (
    <div
      className="w-full bg-[#0099B5]"
      style={{
        marginBottom: "-4px",
        padding: "79px 64px 0",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Responsive two-column layout */}
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {/* Left Column */}
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center gap-10 md:gap-20">
              {/* Main Content Section */}
              <div className="flex flex-col items-start gap-8 flex-1">
                {/* Section Title */}
                <div className="flex flex-col items-start gap-4 w-full">
                  {/* Content */}
                  <div className="flex flex-col items-start gap-6 w-full">
                    <h3
                      className="text-[#4a0045] text-5xl font-normal leading-[48px] tracking-[-0.48px] w-full"
                      style={{
                        fontFamily:
                          "'Albert Sans', -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      Why choose us?
                    </h3>
                  </div>
                </div>

                {/* Features Section */}
                <div className="flex flex-col items-start gap-4 w-full">
                  <div className="flex flex-col items-start gap-4 w-full py-2">
                    {/* Features Row */}
                    <div className="flex flex-row">
                      {/* Feature 1 */}
                      <div className="flex flex-col items-start gap-4 flex-1 mr-8">
                        <h3
                          className="bg-[#FDBB2D] bg-clip-text text-transparent text-3xl font-normal leading-7 tracking-[-0.2px] w-full"
                          style={{
                            fontFamily:
                              "'Albert Sans', -apple-system, Roboto, Helvetica, sans-serif",
                          }}
                        >
                          Tailored Solutions, Not Templates
                        </h3>
                        <p
                          className="text-white text-base font-normal w-full"
                          style={{
                            fontFamily:
                              "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                          }}
                        >
                          Every business is unique. We take the time to understand your goals, challenges, and workflow before designing custom IT solutions that fit perfectly.
                        </p>
                      </div>

                      {/* Feature 2 */}
                      <div className="flex flex-col items-start gap-4 flex-1">
                        <h3
                          className="bg-[#FDBB2D] bg-clip-text text-transparent text-3xl font-normal leading-7 tracking-[-0.2px] w-full"
                          style={{
                            fontFamily:
                              "'Albert Sans', -apple-system, Roboto, Helvetica, sans-serif",
                          }}
                        >
                          Client-First Approach
                        </h3>
                        <p
                          className="text-white text-base font-normal w-full"
                          style={{
                            fontFamily:
                              "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                          }}
                        >
                          Secure your transactions with our reliable user
                          account authentication system.
                        </p>
                      </div>
                                      </div>
                                      <div className="flex flex-row">
                                          {/* Feature 3 */}
                                          <div className="flex flex-col items-start gap-4 flex-1 mr-8">
                                              <h3
                                                  className="bg-[#FDBB2D] bg-clip-text text-transparent text-3xl font-normal leading-7 tracking-[-0.2px] w-full"
                                                  style={{
                                                      fontFamily:
                                                          "'Albert Sans', -apple-system, Roboto, Helvetica, sans-serif",
                                                  }}
                                              >
                                                  Cutting-Edge Technologies
                                              </h3>
                                              <p
                                                  className="text-white text-base font-normal w-full"
                                                  style={{
                                                      fontFamily:
                                                          "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                                                  }}
                                              >
                                                  From cloud computing and cybersecurity to AI and automation, we leverage the latest technologies to ensure your business stays future-ready.
                                              </p>
                                          </div>

                                          {/* Feature 4 */}
                                          <div className="flex flex-col items-start gap-4 flex-1">
                                              <h3
                                                  className="bg-[#FDBB2D] bg-clip-text text-transparent text-3xl font-normal leading-7 tracking-[-0.2px] w-full"
                                                  style={{
                                                      fontFamily:
                                                          "'Albert Sans', -apple-system, Roboto, Helvetica, sans-serif",
                                                  }}
                                              >
                                                  Cost-Effective Excellence
                                              </h3>
                                              <p
                                                  className="text-white text-base font-normal w-full"
                                                  style={{
                                                      fontFamily:
                                                          "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                                                  }}
                                              >
                                                  Get enterprise-level IT services without the enterprise-level price tag. Our lean structure allows us to deliver high-quality solutions that maximize value and minimize cost.
                                              </p>
                                          </div>
                                      </div>
                  </div>
                </div>
              </div>

              {/* Spacer for layout */}
              <div className="flex flex-1 justify-center w-full" />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col w-6/12 ml-5 max-md:ml-0 max-md:w-full">
            <img
              src="https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Business-Setup-Consultant-in-Dubai-_-Cover-21-2-23.jpg"
              alt=""
              style={{
                height: "492px",
                marginLeft: "-5px",
              }}
              className="block rounded-[40px] object-cover w-full max-w-[640px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityMarketplace;
