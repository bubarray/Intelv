import { ChevronRight, Package, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const MarketplaceFeatures = () => {
  return (
    <div
          className=" mx-auto flex w-full flex-col items-center gap-12 md:gap-20 bg-gradient-to-b from-[#077A7D] via-[#008997] to-[#0099B5] px-4 py-10 md:px-16 md:py-14"
      style={{
        margin: "0 auto -1px",
      }}
    >
      {/* Header Section */}
      <div className="flex w-full max-w-3xl flex-col items-center gap-4">
        <div
          className="text-white text-center font-bold text-base leading-[150%] flex items-center"
          style={{
            fontFamily: "Hind, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          Our Services
        </div>
        <div className="flex flex-col items-center gap-6 w-full">
          <div
                      className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient w-full text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[120%] tracking-[-0.32px] md:tracking-[-0.48px] lg:leading-[120%] md:leading-[130%] sm:leading-[130%]"
            style={{
              fontFamily:
                "'Albert Sans', -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
                      Comprehensive IT solutions designed to meet your business objectives
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="flex items-center gap-12 w-full lg:flex-row lg:gap-12 md:flex-col md:gap-10 sm:flex-col sm:gap-8">
        {/* Left Column */}
        <div className="flex flex-col items-center gap-16 flex-1 lg:gap-16 md:gap-10 sm:gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center gap-6 w-full sm:gap-4">
            <Package className="w-12 h-12 text-white" />
            <div className="flex flex-col items-center gap-4 w-full">
              <div
                className="w-full text-white text-center text-2xl font-normal leading-[140%] tracking-[-0.24px] sm:text-xl"
                style={{
                  fontFamily:
                    "'Albert Sans', -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                Website & App Development
              </div>
              <div
                className="w-full text-white text-center text-base font-normal leading-[150%]"
                style={{
                  fontFamily:
                    "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                              Develop robust and user-friendly websites and mobile applications tailored to your business needs and streamline your operations.
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center gap-6 w-full sm:gap-4">
            <Shield className="w-12 h-12 text-white" />
            <div className="flex flex-col items-center gap-4 w-full">
              <div
                className="w-full text-white text-center text-2xl font-normal leading-[140%] tracking-[-0.24px] sm:text-xl"
                style={{
                  fontFamily:
                    "'Albert Sans', -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                              Autonomous AI
              </div>
              <div
                className="w-full text-white text-center text-base font-normal leading-[150%]"
                style={{
                  fontFamily:
                    "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                              Advanced AI systems engineered for autonomous operation, designed for the Enterprise.
              </div>
            </div>
          </div>
        </div>

        {/* Center Image */}
        <img
                  src="https://www.alkendiit.ae/images/services/security-services.jpg"
          alt="Marketplace illustration"
          style={{ height: "426px" }}
          className="w-[540px] max-w-[400px] rounded-[40px] object-cover"
        />

        {/* Right Column */}
        <div className="flex flex-col items-center gap-16 flex-1 lg:gap-16 md:gap-10 sm:gap-8">
          {/* Feature 3 */}
          <div className="flex flex-col items-center gap-6 w-full sm:gap-4">
            <Shield className="w-12 h-12 text-white" />
            <div className="flex flex-col items-center gap-4 w-full">
              <div
                className="w-full text-white text-center text-2xl font-normal leading-[140%] tracking-[-0.24px] sm:text-xl"
                style={{
                  fontFamily:
                    "'Albert Sans', -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                SEO
              </div>
              <div
                className="w-full text-white text-center text-base font-normal leading-[150%]"
                style={{
                  fontFamily:
                    "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                              Enhance your brand visibility and reach your target audience
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center gap-6 w-full sm:gap-4">
            <Users className="w-12 h-12 text-white" />
            <div className="flex flex-col items-center gap-4 w-full">
              <div
                className="w-full text-white text-center text-2xl font-normal leading-[140%] tracking-[-0.24px] sm:text-xl"
                style={{
                  fontFamily:
                    "'Albert Sans', -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                              Data Intelligence and Cloud Management
              </div>
              <div
                className="w-full text-white text-center text-base font-normal leading-[150%]"
                style={{
                  fontFamily:
                    "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                              From database design, cloud optimization, backup solutions and analysis to keep your data secure and business informed.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceFeatures;
