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
        {/* Responsive two-column layout */}
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {/* Left Column */}
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start gap-10 md:gap-20 w-full">
              <div
                className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight md:leading-[48px] tracking-[-0.24px] md:tracking-[-0.48px] w-full"
                style={{
                  fontFamily:
                    "'Albert Sans', -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                Connect With Us Today
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col w-6/12 ml-5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start gap-8 flex-1">
              <p
                className="text-white text-base font-normal w-full"
                style={{
                  fontFamily:
                    "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                Explore our extensive range of spare parts tailored to meet your
                needs. Sign up now to unlock exclusive offers and seamless
                shopping.
              </p>

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <Button
                  className="bg-[#BE6E1E] border-[#BE6E1E] text-white hover:bg-[#BE6E1E]/90 h-9 px-6 rounded-xl"
                  style={{
                    fontFamily:
                      "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "20px",
                  }}
                >
                  Browse
                </Button>
                <Button
                  variant="outline"
                  className="text-white border-white/20 bg-transparent hover:bg-white/10 h-9 px-6 rounded-xl w-full"
                  style={{
                    fontFamily:
                      "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "20px",
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
