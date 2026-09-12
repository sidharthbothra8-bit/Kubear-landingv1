import React from "react";

interface ClosingCtaSectionProps {
  appUrl: string;
}

export function ClosingCtaSection({ appUrl }: ClosingCtaSectionProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 border-t border-[#E5EBE6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-[#FAF7F1] via-[#F5EFE6] to-[#EFE8DC] border border-[#E4D9C7] overflow-hidden relative shadow-[0_16px_48px_-12px_rgba(30,25,20,0.06),inset_0_1px_0_rgba(255,255,255,0.95)] group">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[340px] sm:min-h-[380px]">
            {/* Left Column: Heading and CTA */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#142823] tracking-tight leading-[1.15]">
                Make room for the life<br />
                you’re planning.
              </h2>
              <div className="pt-8">
                <a
                  href={appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kh-btn-primary inline-flex items-center justify-center min-h-[46px] px-8 py-3.5 rounded-xl text-white font-semibold text-sm sm:text-base cursor-pointer"
                >
                  Get early access
                </a>
              </div>
            </div>

            {/* Right Column: Stack of books + mug lifestyle scene */}
            <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-full min-h-[300px] w-full overflow-hidden flex items-center justify-end">
              {/* Lifestyle photo with smooth fade into the left side gradient */}
              <div className="relative w-full h-full">
                <img
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop"
                  alt="Stacked books and coffee mug in sunlight"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F1] via-[#FAF7F1]/60 to-transparent lg:w-48 pointer-events-none" />

                {/* Overlaid Book Spine Titles */}
                <div className="absolute bottom-10 left-12 sm:left-20 bg-[#FFFDF9]/95 backdrop-blur-md border border-[#E8E1D5] rounded-xl px-4 py-2.5 shadow-[0_6px_20px_rgba(20,40,32,0.08)] rotate-[-2deg] pointer-events-none hidden sm:block">
                  <div className="text-[10px] font-semibold text-[#5B5244] border-b border-[#EDE6DA] pb-0.5">
                    A healthier me
                  </div>
                  <div className="text-[10px] font-semibold text-[#5B5244] border-b border-[#EDE6DA] py-0.5">
                    A happier us
                  </div>
                  <div className="text-[10px] font-semibold text-[#5B5244] pt-0.5">
                    A brighter tomorrow
                  </div>
                </div>

                {/* Overlaid Ceramic Mug Title */}
                <div className="absolute bottom-14 right-12 sm:right-24 bg-[#FFFDF9]/95 backdrop-blur-md border border-[#E8E0D2] rounded-xl px-3.5 py-2.5 shadow-[0_6px_20px_rgba(20,40,32,0.08)] pointer-events-none hidden sm:block">
                  <div className="text-[10px] font-bold text-[#45423D] leading-tight text-center font-serif">
                    Same Money<br />
                    More Possibilities<br />
                    <span className="text-[#E85D3F]">♥</span>
                  </div>
                </div>

                {/* Handwritten Annotation in Top-Right: Good plans live here */}
                <div className="absolute top-6 right-6 sm:right-10 pointer-events-none">
                  <div className="kh-handwritten text-[#C96632] text-xl sm:text-2xl font-bold rotate-6 text-right leading-tight">
                    Good<br />
                    plans live<br />
                    here
                  </div>
                  <svg
                    className="w-20 h-4 mt-0.5 ml-auto text-[#E85D3F]"
                    viewBox="0 0 80 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 5 10 C 25 15, 55 4, 75 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
