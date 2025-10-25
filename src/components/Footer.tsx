import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full bg-[#6B66D0]" style={{ padding: "0 64px 80px" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start w-full gap-8 md:gap-11 -mb-0.5">
          {/* Main Content */}
          <div className="flex items-start gap-8 md:gap-16 lg:gap-32 w-full flex-col md:flex-row">
            {/* Newsletter Section */}
            <div className="flex flex-col items-start gap-6 w-full max-w-[500px]">
              {/* Logo */}
              <div className="flex w-[84px] h-[36px] justify-center items-center">
                <svg
                  width="71"
                  height="37"
                  viewBox="0 0 71 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_8257_29)">
                    <path
                      d="M67.7653 17.817L67.7282 17.8542C67.9884 17.148 68.5087 16.8878 68.9547 16.8878C69.5866 16.8878 70.1441 17.371 70.1441 18.0772C70.1441 18.2259 70.1441 18.4117 70.0698 18.6347C68.7689 21.9799 66.0184 23.6896 63.3423 23.9498C62.1158 26.0312 60.1087 27.5551 57.2467 27.5551C53.1582 27.5551 51.337 24.3215 51.337 20.7905C51.337 16.4418 54.0875 11.6099 58.6963 11.6099C59.6998 11.6099 60.5547 11.833 61.2609 12.1303C63.3423 12.9108 64.6804 15.6241 64.6804 18.5232C64.6804 19.4524 64.606 20.3816 64.383 21.2737C65.7583 20.7905 67.0591 19.6754 67.7653 17.817ZM59.9972 14.6577V14.6206C59.1795 14.6206 58.6963 15.6984 58.6963 16.9993C58.6963 18.8949 59.737 20.6418 61.3724 21.2737C61.6326 20.456 61.7441 19.5268 61.7441 18.4489C61.7441 16.3675 61.1122 14.6577 59.9972 14.6577ZM57.2839 24.8418C58.3246 24.8418 59.3653 24.3958 60.183 23.4666C57.7671 22.3887 56.2432 19.8613 56.2432 17.4453C56.2432 16.6276 56.3919 15.7728 56.6149 15.0294C55.1282 16.256 54.2733 18.6719 54.2733 20.7905C54.2733 23.5409 55.5742 24.8418 57.2839 24.8418Z"
                      fill="white"
                    />
                    <path
                      d="M51.9109 17.8169L51.8737 17.8541C52.1339 17.1479 52.5799 16.8506 53.0259 16.8506C53.6578 16.8506 54.2896 17.4081 54.2896 18.1143C54.2896 18.3001 54.2525 18.4488 54.1781 18.6346C52.7286 22.1656 50.5728 26.2913 47.1162 28.7072L47.0419 29.4506C46.633 33.9108 44.3658 36.7355 41.5038 36.7355C39.348 36.7355 38.0843 35.2488 38.0843 33.5019C38.0843 30.3426 41.3179 29.1904 44.3286 27.2577C44.4029 26.4771 44.4401 25.5851 44.4772 24.5815C42.9905 26.2169 41.3923 26.886 39.9799 26.886C37.1551 26.886 34.8507 24.5815 34.8507 21.0506C34.8507 15.624 38.4188 12.0559 42.3958 12.0559H42.433C45.1463 12.0559 48.0454 13.5054 48.0454 16.1072C48.0454 16.9621 47.6737 21.6081 47.3764 25.2134C49.3834 23.3178 51.056 20.2329 51.9109 17.8169ZM40.3887 24.2099C41.764 24.2099 43.6224 23.355 44.7746 19.155C44.9604 18.2258 45.0719 17.4081 45.0348 16.4417C44.8118 15.4382 43.9569 14.8435 42.7303 14.8435C40.2029 14.8435 37.787 17.2594 37.787 20.9391C37.787 23.1692 38.8277 24.2099 40.3887 24.2099ZM41.8011 34.0223H41.8383C42.6188 34.0223 43.4737 33.5019 44.0312 30.1568C42.3958 31.1231 40.8719 32.0895 40.8719 33.2417C40.8719 33.7249 41.2436 34.0223 41.8011 34.0223Z"
                      fill="white"
                    />
                    <path
                      d="M35.5029 17.817L35.4658 17.8542C35.7259 17.148 36.2463 16.8878 36.6923 16.8878C37.3242 16.8878 37.8817 17.371 37.8817 18.0772C37.8817 18.2259 37.8817 18.4117 37.8074 18.6347C36.5065 21.9799 33.756 23.6896 31.0799 23.9498C29.8534 26.0312 27.8463 27.5551 24.9843 27.5551C20.8958 27.5551 19.0746 24.3215 19.0746 20.7905C19.0746 16.4418 21.825 11.6099 26.4339 11.6099C27.4374 11.6099 28.2923 11.833 28.9985 12.1303C31.0799 12.9108 32.418 15.6241 32.418 18.5232C32.418 19.4524 32.3436 20.3816 32.1206 21.2737C33.4959 20.7905 34.7967 19.6754 35.5029 17.817ZM27.7348 14.6577V14.6206C26.9171 14.6206 26.4339 15.6984 26.4339 16.9993C26.4339 18.8949 27.4746 20.6418 29.11 21.2737C29.3702 20.456 29.4817 19.5268 29.4817 18.4489C29.4817 16.3675 28.8498 14.6577 27.7348 14.6577ZM25.0215 24.8418C26.0622 24.8418 27.1029 24.3958 27.9206 23.4666C25.5047 22.3887 23.9808 19.8613 23.9808 17.4453C23.9808 16.6276 24.1295 15.7728 24.3525 15.0294C22.8658 16.256 22.0109 18.6719 22.0109 20.7905C22.0109 23.5409 23.3118 24.8418 25.0215 24.8418Z"
                      fill="white"
                    />
                    <path
                      d="M20.9637 16.6436C20.4433 16.6436 19.9973 16.9038 19.6999 17.61C18.7336 20.0631 16.7264 24.226 14.6821 24.226C13.3949 24.226 12.3988 23.9349 11.3922 23.6407C10.3642 23.3403 9.32542 23.0366 7.95453 23.0366C7.47133 23.0366 6.80229 23.111 6.17042 23.2225C8.074 20.6267 8.78514 17.483 9.47422 11.5407C8.17676 11.4581 7.12135 11.2184 6.35207 10.9763C5.53042 18.5128 4.59736 21.3864 1.18979 24.226C0.743762 24.5977 0.520752 25.1181 0.520752 25.6385C0.520752 26.4562 1.22696 27.1624 2.11902 27.1624C2.41637 27.1624 2.75088 27.0509 3.0854 26.9022C4.98102 26.0473 6.13325 25.8243 7.54567 25.8243C8.44384 25.8243 9.51858 26.0812 10.6693 26.3561C11.9947 26.6729 13.4208 27.0137 14.7937 27.0137C17.8043 27.0137 19.7743 24.0774 21.9672 18.3905C22.0788 18.2047 22.1159 17.9817 22.1159 17.7958C22.1159 17.0896 21.5584 16.6436 20.9637 16.6436Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.54066 9.43822C7.21375 9.67319 8.26457 9.94675 9.627 10.0277L9.85001 10.0276C14.0501 10.0276 16.8006 7.42575 16.8006 4.30356C16.8006 2.29644 15.2395 0.735352 13.0465 0.735352C10.1102 0.735352 8.06591 2.74247 7.02518 6.71954C5.72427 6.01333 4.83222 4.74959 4.38619 3.15133C4.16317 2.37078 3.67998 1.88758 3.01093 1.88758C2.19322 1.88758 1.67285 2.51946 1.67285 3.37434C1.67285 5.90183 3.64281 8.3178 6.54198 9.43287L6.54066 9.43822ZM10.073 7.31424C10.6305 4.74959 11.5226 3.52302 12.712 3.52302C13.3439 3.52302 13.7527 3.89471 13.7527 4.56375C13.7527 5.79032 12.4518 7.2399 10.073 7.31424Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8257_29">
                      <rect
                        width="70"
                        height="36"
                        fill="white"
                        transform="translate(0.520752 0.735352)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              {/* Newsletter Description */}
              <p
                className="text-white text-base font-normal leading-[150%] w-full"
                style={{
                  fontFamily:
                    "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                Subscribe to our newsletter for the latest updates on features
                and product releases.
              </p>

              {/* Newsletter Form */}
              <div className="flex flex-col items-start gap-3 w-full">
                <div className="flex items-start gap-4 w-full">
                  <div className="flex px-3 py-2 items-center gap-2 flex-1 rounded-xl border border-white/20 bg-white/10">
                    <input
                      type="email"
                      placeholder="Your email here"
                      className="flex-1 bg-transparent text-white placeholder:text-white/60 border-none outline-none text-base"
                      style={{
                        fontFamily:
                          "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    />
                  </div>
                  <Button
                    variant="outline"
                    className="text-white border-white/20 bg-transparent hover:bg-white/10 px-6 py-2.5 rounded-xl"
                    style={{
                      fontFamily:
                        "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Join
                  </Button>
                </div>
                <p
                  className="text-white text-xs font-normal leading-[150%] w-full"
                  style={{
                    fontFamily:
                      "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  By subscribing, you consent to our Privacy Policy and agree to
                  receive updates.
                </p>
              </div>
            </div>

            {/* Links Section */}
            <div className="flex items-start gap-10 flex-1 md:grid md:grid-cols-3 md:gap-8 sm:flex sm:flex-col sm:gap-8">
              {/* Quick Links */}
              <div className="flex flex-col items-start gap-4 flex-1">
                <h3
                  className="text-white text-base font-semibold leading-[150%] w-full"
                  style={{
                    fontFamily:
                      "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Quick Links
                </h3>
                <div className="flex flex-col items-start w-full">
                  {[
                    "About Us",
                    "Contact Us",
                    "Support Center",
                    "Blog Posts",
                    "FAQs",
                  ].map((link) => (
                    <div key={link} className="flex py-2 items-start w-full">
                      <a
                        href="#"
                        className="flex-1 text-white text-sm font-normal leading-[150%] hover:text-white/80 transition-colors"
                        style={{
                          fontFamily:
                            "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        {link}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div
                className="flex flex-col items-start gap-4 flex-1"
                style={{ marginLeft: "26px" }}
              >
                <h3
                  className="text-white text-base font-semibold leading-[150%] w-full"
                  style={{
                    fontFamily:
                      "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Resources
                </h3>
                <div className="flex flex-col items-start w-full">
                  {[
                    "User Guides",
                    "Case Studies",
                    "Webinars",
                    "Events",
                    "Newsroom",
                  ].map((link) => (
                    <div key={link} className="flex py-2 items-start w-full">
                      <a
                        href="#"
                        className="flex-1 text-white text-sm font-normal leading-[150%] hover:text-white/80 transition-colors"
                        style={{
                          fontFamily:
                            "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        {link}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stay Connected */}
              <div
                className="flex flex-col items-start gap-4 flex-1"
                style={{ marginLeft: "31px" }}
              >
                <h3
                  className="text-white text-base font-semibold leading-[150%] w-full"
                  style={{
                    fontFamily:
                      "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Stay Connected
                </h3>
                <div className="flex flex-col items-start w-full">
                  {[
                    { name: "Facebook", icon: Facebook },
                    { name: "Instagram", icon: Instagram },
                    { name: "Twitter", icon: Twitter },
                    { name: "LinkedIn", icon: Linkedin },
                    { name: "YouTube", icon: Youtube },
                  ].map(({ name, icon: Icon }) => (
                    <div
                      key={name}
                      className="flex py-2 items-center gap-3 w-full"
                    >
                      <Icon className="w-6 h-6 text-white" />
                      <a
                        href="#"
                        className="text-white text-sm font-normal leading-[150%] hover:text-white/80 transition-colors"
                        style={{
                          fontFamily:
                            "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        {name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col items-start gap-8 w-full">
            {/* Divider */}
            <div className="w-full h-px bg-white/20"></div>

            {/* Credits Row */}
            <div className="flex justify-between items-start w-full md:flex-col md:gap-4 sm:flex-col sm:gap-4">
              <p
                className="text-white text-sm font-normal leading-[150%]"
                style={{
                  fontFamily:
                    "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                © 2025 Relume. All rights reserved.
              </p>
              <div className="flex items-start gap-6">
                {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
                  (link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-white text-sm font-normal leading-[150%] underline hover:text-white/80 transition-colors"
                      style={{
                        fontFamily:
                          "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      {link}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
