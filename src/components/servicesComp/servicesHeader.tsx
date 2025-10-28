import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <div
          className="w-full bg-gradient-to-b from-[#0099B5] to-[#6B66D0] px-4 py-10 md:px-16 md:py-14"
      style={{
        marginTop: "-2px",
      }}
    >
      <div className="max-w-7xl mx-auto">
              <div
                  className="text-white text-center font-bold text-base leading-[150%] flex items-center"
                  style={{
                      fontFamily: "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
              >
                  Our Services
              </div>
        {/* Responsive two-column layout */}
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {/* Left Column */}
          <div className="flex flex-row max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start gap-10 md:gap-20 w-full">
              <div
                className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight md:leading-[48px] tracking-[-0.24px] md:tracking-[-0.48px] w-full"
                style={{
                  fontFamily:
                    "'Albert Sans', -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                              Ready to transform your business with smarter IT solutions?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
