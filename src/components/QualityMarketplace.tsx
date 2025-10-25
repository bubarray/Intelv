import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const QualityMarketplace = () => {
  return (
    <div
      className="w-full bg-[#0A0202]"
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
                  {/* Tagline */}
                  <div
                    className="text-white text-base font-normal"
                    style={{
                      fontFamily:
                        "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Quality
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-start gap-6 w-full">
                    <h2
                      className="text-white text-5xl font-normal leading-[48px] tracking-[-0.48px] w-full"
                      style={{
                        fontFamily:
                          "'Albert Sans', -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      Discover the Best Spare Parts Marketplace
                    </h2>
                    <p
                      className="text-white text-base font-normal w-full"
                      style={{
                        fontFamily:
                          "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      Our marketplace connects you with trusted suppliers for
                      all your spare part needs. Enjoy a seamless shopping
                      experience with user-friendly features.
                    </p>
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
                          className="text-white text-xl font-normal leading-7 tracking-[-0.2px] w-full"
                          style={{
                            fontFamily:
                              "'Albert Sans', -apple-system, Roboto, Helvetica, sans-serif",
                          }}
                        >
                          Wide Selection
                        </h3>
                        <p
                          className="text-white text-base font-normal w-full"
                          style={{
                            fontFamily:
                              "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                          }}
                        >
                          Access a vast range of spare parts from multiple
                          reputable vendors in one place.
                        </p>
                      </div>

                      {/* Feature 2 */}
                      <div className="flex flex-col items-start gap-4 flex-1">
                        <h3
                          className="text-white text-xl font-normal leading-7 tracking-[-0.2px] w-full"
                          style={{
                            fontFamily:
                              "'Albert Sans', -apple-system, Roboto, Helvetica, sans-serif",
                          }}
                        >
                          User Authentication
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
                  </div>
                </div>

                {/* Buttons Row */}
                <div className="flex flex-row">
                  <div className="flex flex-col items-center gap-4 w-full">
                    <Link href="/products">
                      <Button
                        variant="outline"
                        className="text-white border-white/20 bg-transparent hover:bg-white/10 h-9 px-6 rounded-xl"
                        style={{
                          fontFamily:
                            "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                          fontSize: "14px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        Shop
                      </Button>
                    </Link>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-white hover:bg-white/10 h-9 px-0 rounded-xl flex items-center justify-center"
                    style={{
                      fontFamily:
                        "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "20px",
                    }}
                  >
                    <span className="mr-2">Learn More</span>
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </div>
              </div>

              {/* Spacer for layout */}
              <div className="flex flex-1 justify-center w-full" />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col w-6/12 ml-5 max-md:ml-0 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0478aab14d2f5229c77b898d05980b82ef09eff9?width=1232"
              alt="Marketplace quality illustration"
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
