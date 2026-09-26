import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { PLAY_URL } from "@/const";

interface ClosingCtaSectionProps {
  appUrl: string;
}

export function ClosingCtaSection({ appUrl }: ClosingCtaSectionProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 border-t border-[#E8EFEA] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          data-reveal
          className="rounded-[2.5rem] bg-gradient-to-br from-[#FFFDF9] via-[#FAF5EC] to-[#F3EADA] border border-[#E8DEC8] overflow-hidden relative shadow-[0_16px_48px_-12px_rgba(234,88,12,0.08),0_20px_50px_-20px_rgba(5,150,105,0.08),inset_0_1.5px_0_rgba(255,255,255,1)] group"
        >
          <div className="grid grid-cols-12 items-center min-h-[clamp(240px,30vw,390px)]">
            {/* Left Column: Heading and CTA */}
            <div className="col-span-7 p-[clamp(1rem,3vw,3.5rem)] z-10">
              <span className="kh-eyebrow-pill inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#C2410C] mb-3 sm:mb-5">
                <Sparkles className="size-3 text-[#EA580C]" />
                Samriddhi & Peace of Mind
              </span>
              <h2 className="kh-hero-display text-[1.65rem] sm:text-3xl lg:text-[2.65rem] font-bold text-[#0A241E] tracking-tight leading-[1.12]">
                Make room for the life<br />
                you’re planning.
              </h2>
              <p className="text-[0.95rem] sm:text-base text-[#3E524B] mt-3 sm:mt-5 font-normal leading-relaxed max-w-md">
                Step into every month knowing your family commitments, rent, SIPs, and celebrations are completely protected.
              </p>
              <div className="pt-5 sm:pt-8 flex flex-wrap items-center gap-3.5 sm:gap-5">
                <a
                  href={appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kh-btn-primary group inline-flex items-center justify-center min-h-[46px] sm:min-h-[50px] px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-white font-semibold text-[14.5px] sm:text-[15.5px] cursor-pointer gap-2 whitespace-nowrap shadow-md"
                >
                  <span>Start on Web</span>
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
                <a
                  href={PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kh-link-secondary-btn group inline-flex items-center justify-center min-h-[46px] sm:min-h-[50px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-[#0E241E] font-semibold text-[14.5px] sm:text-[15.5px] cursor-pointer gap-2 whitespace-nowrap"
                >
                  <span>Get it on Google Play</span>
                  <ArrowRight className="size-4 text-[#EA580C] transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right Column: Stack of books + mug lifestyle scene */}
            <div className="col-span-5 relative h-full min-h-[clamp(200px,28vw,360px)] w-full overflow-hidden flex items-center justify-end">
              {/* Lifestyle photo with smooth fade into the left side gradient */}
              <div className="relative w-full h-full">
                <img
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop"
                  alt="Stacked books and coffee mug in sunlight"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDF9] via-[#FAF5EC]/70 to-transparent w-24 sm:w-56 pointer-events-none" />

                {/* Overlaid Book Spine Titles */}
                <div className="absolute bottom-4 sm:bottom-10 left-3 sm:left-12 bg-[#FFFDF9]/95 backdrop-blur-md border border-[#E8E1D5] rounded-lg sm:rounded-xl px-2 sm:px-4 py-1.5 sm:py-2.5 shadow-[0_6px_20px_rgba(20,40,32,0.08)] rotate-[-2deg] pointer-events-none">
                  <div className="text-[clamp(7px,0.7vw,10px)] font-bold text-[#EA580C] border-b border-[#EDE6DA] pb-0.5">
                    Family & Parents Safe
                  </div>
                  <div className="text-[clamp(7px,0.7vw,10px)] font-bold text-[#047857] border-b border-[#EDE6DA] py-0.5">
                    Diwali Gold on Track
                  </div>
                  <div className="text-[clamp(7px,0.7vw,10px)] font-bold text-[#D97706] pt-0.5">
                    Zero Surprise EMIs
                  </div>
                </div>

                {/* Overlaid Ceramic Mug Title */}
                <div className="absolute bottom-6 sm:bottom-14 right-3 sm:right-16 bg-[#FFFDF9]/95 backdrop-blur-md border border-[#E8E0D2] rounded-lg sm:rounded-xl px-2 sm:px-3.5 py-1 sm:py-2.5 shadow-[0_6px_20px_rgba(20,40,32,0.08)] pointer-events-none">
                  <div className="text-[clamp(7px,0.7vw,10px)] font-bold text-[#0E241E] leading-tight text-center font-serif">
                    Same Salary<br />
                    More Possibilities<br />
                    <span className="text-[#EA580C]">✦</span>
                  </div>
                </div>

                {/* Handwritten Annotation in Top-Right: Good plans live here */}
                <div className="absolute top-3 sm:top-6 right-3 sm:right-8 pointer-events-none">
                  <div className="kh-handwritten text-[#EA580C] text-[clamp(12px,1.5vw,22px)] font-bold rotate-6 text-right leading-tight">
                    Good<br />
                    plans live<br />
                    here
                  </div>
                  <svg
                    className="w-12 sm:w-20 h-3 sm:h-4 mt-0.5 ml-auto text-[#EA580C]"
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

