import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  MessageSquare,
  Phone,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { APP_URL } from "@/components/MovingMoneyWorld";

interface FirstFactAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "auth" | "demo";
}

export function FirstFactAuthModal({
  isOpen,
  onClose,
  initialMode = "auth",
}: FirstFactAuthModalProps) {
  // Steps: 1 = Phone number, 2 = OTP, 3 = First Fact Prompt, 4 = First Fact Recorded Success
  const [step, setStep] = useState<1 | 2 | 3 | 4>(initialMode === "demo" ? 3 : 1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [expenseText, setExpenseText] = useState("");
  const [recordedFact, setRecordedFact] = useState<{
    text: string;
    amount: string;
    category: string;
    remaining: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanNumber = phoneNumber.replace(/\D/g, "");
    if (cleanNumber.length < 10) {
      setPhoneError("Please enter a valid 10-digit Indian mobile number");
      return;
    }
    setPhoneError("");
    setStep(2);
    // Pre-fill a demo OTP suggestion
    setOtp("458291");
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.trim().length < 6) {
      setOtpError("Please enter the 6-digit OTP");
      return;
    }
    setOtpError("");
    setStep(3);
  };

  const handleRecordFact = (text: string) => {
    const raw = text.trim() || expenseText.trim();
    if (!raw) return;

    let amount = "₹65";
    let category = "Transport";
    let remaining = "₹535";

    const lower = raw.toLowerCase();
    if (lower.includes("chai") || lower.includes("coffee") || lower.includes("snack") || lower.includes("tea")) {
      amount = "₹60";
      category = "Chai & Snacks";
      remaining = "₹540";
    } else if (lower.includes("swiggy") || lower.includes("zomato") || lower.includes("biryani") || lower.includes("dinner") || lower.includes("pizza")) {
      amount = "₹340";
      category = "Food Delivery";
      remaining = "₹260";
    } else if (lower.includes("grocer") || lower.includes("zepto") || lower.includes("blinkit") || lower.includes("milk") || lower.includes("1200")) {
      amount = "₹1,200";
      category = "Groceries (Split)";
      remaining = "₹540 (Shared)";
    } else if (lower.includes("auto") || lower.includes("metro") || lower.includes("uber") || lower.includes("cab") || lower.includes("65")) {
      amount = "₹65";
      category = "Transport";
      remaining = "₹535";
    } else {
      const match = raw.match(/\d+/);
      if (match) {
        amount = `₹${match[0]}`;
        category = "Daily Spending";
        const val = parseInt(match[0], 10);
        remaining = `₹${Math.max(0, 600 - val)}`;
      }
    }

    setRecordedFact({
      text: raw,
      amount,
      category,
      remaining,
    });
    setStep(4);
  };

  const resetFlow = () => {
    setStep(1);
    setPhoneNumber("");
    setOtp("");
    setExpenseText("");
    setRecordedFact(null);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-[#123630]/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-[#FFFDF8] rounded-t-3xl sm:rounded-3xl border border-[#E6DDD0] shadow-2xl overflow-hidden transition-all max-h-[92vh] flex flex-col">
        {/* Modal Top Header */}
        <div className="px-6 py-4 border-b border-[#EAE3D2] bg-[#FAF6EE] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#123630]">
              {step === 1 && "Frictionless Start • 30 Seconds"}
              {step === 2 && "Instant OTP Verification"}
              {step === 3 && "Record Your 1st Money Fact"}
              {step === 4 && "Fact Recorded • Clarity Unlocked"}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#4E6761] hover:text-[#123630] hover:bg-[#123630]/5 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#EAE3D2] h-1">
          <div
            className="bg-[#FF5C2B] h-1 transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-6">
          {/* STEP 1: Phone Number Input */}
          {step === 1 && (
            <form onSubmit={handleSendOtp} className="space-y-5">
              <div className="text-center sm:text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-[#FF5C2B]/10 text-[#CD4623] font-mono text-[11px] font-bold uppercase tracking-wider mb-2">
                  No bank login • No KYC
                </span>
                <h3 id="modal-title" className="font-serif text-2xl sm:text-3xl text-[#123630] leading-tight">
                  Start your daily money clarity in 30 seconds.
                </h3>
                <p className="mt-2 text-sm text-[#4E6760] leading-relaxed">
                  Enter your mobile number to get an instant 6-digit OTP. We never call, spam, or sell your profile.
                </p>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#123630] uppercase mb-1.5">
                  Indian Mobile Number
                </label>
                <div className="flex items-center rounded-xl border-2 border-[#123630]/20 bg-white px-3 py-2.5 focus-within:border-[#FF5C2B] transition-colors shadow-2xs">
                  <span className="font-mono text-sm font-bold text-[#123630] pr-2.5 border-r border-[#E0D8C8]">
                    🇮🇳 +91
                  </span>
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="98765 43210"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      if (phoneError) setPhoneError("");
                    }}
                    autoFocus
                    className="w-full pl-3 text-base text-[#123630] font-mono placeholder:text-[#9FB3AC] focus:outline-none"
                  />
                </div>
                {phoneError && (
                  <p className="mt-1.5 text-xs font-mono text-[#DC2626]">{phoneError}</p>
                )}
              </div>

              {/* Trust Callout */}
              <div className="p-3 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] text-xs text-[#166534] flex items-start gap-2.5">
                <ShieldCheck className="size-4.5 text-[#16A34A] shrink-0 mt-0.5" />
                <span>
                  <strong>100% Private & Read-Only:</strong> We never request bank passwords, UPI PINs, or read private SMS OTPs.
                </span>
              </div>

              <button
                type="submit"
                className="w-full min-h-[48px] rounded-xl bg-[#FF5C2B] hover:bg-[#E04B1D] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_4px_0_#9F3017] hover:shadow-[0_2px_0_#9F3017] active:translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Continue with OTP</span>
                <ArrowRight className="size-4" />
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="text-xs font-mono text-[#00604A] hover:underline cursor-pointer"
                >
                  Skip verification and try instant interactive demo →
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: OTP Entry */}
          {step === 2 && (
            <form onSubmit={handleVerifyOtp} className="space-y-5">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#10B981]/15 text-[#047857] font-mono text-[11px] font-bold uppercase tracking-wider mb-2">
                  OTP Sent
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#123630] leading-tight">
                  Enter 6-digit verification code
                </h3>
                <p className="mt-1.5 text-sm text-[#4E6760]">
                  Sent to +91 {phoneNumber || "98765 43210"}.{" "}
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-[#FF5C2B] underline font-bold cursor-pointer"
                  >
                    Change
                  </button>
                </p>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#123630] uppercase mb-1.5">
                  6-Digit OTP
                </label>
                <input
                  type="text"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => {
                    setOtp(e.target.value);
                    if (otpError) setOtpError("");
                  }}
                  autoFocus
                  placeholder="458291"
                  className="w-full text-center tracking-[0.4em] font-mono text-2xl py-3 rounded-xl border-2 border-[#123630]/20 bg-white focus:border-[#FF5C2B] focus:outline-none"
                />
                {otpError && (
                  <p className="mt-1.5 text-xs font-mono text-[#DC2626]">{otpError}</p>
                )}
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-[#4E6760]">
                <span>Didn't receive code?</span>
                <button
                  type="button"
                  onClick={() => setOtp("458291")}
                  className="text-[#CD4623] font-bold hover:underline cursor-pointer"
                >
                  ⚡ Auto-fill Demo OTP (458291)
                </button>
              </div>

              <button
                type="submit"
                className="w-full min-h-[48px] rounded-xl bg-[#123630] hover:bg-[#0E2824] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <span>Verify & Continue</span>
                <ArrowRight className="size-4" />
              </button>
            </form>
          )}

          {/* STEP 3: First Fact Prompt (Welcome Chat) */}
          {step === 3 && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] flex items-center gap-3">
                <div className="size-10 rounded-full bg-[#10B981] text-white flex items-center justify-center font-bold">
                  <CheckCircle2 className="size-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-[#065F46]">Verified! Session Established.</div>
                  <div className="text-xs text-[#047857]">Your private personal & shared spaces are ready.</div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#123630] leading-tight">
                  What is one recent expense you made today?
                </h3>
                <p className="mt-1.5 text-sm text-[#4E6760]">
                  No dropdowns, no forms. Just tell it naturally like you text a friend.
                </p>
              </div>

              {/* Quick Prompt Tap Suggestions */}
              <div>
                <p className="text-xs font-mono font-bold text-[#6D8A82] uppercase mb-2">
                  Tap to test an everyday Indian expense:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Auto ₹65", text: "Auto to Indiranagar metro ₹65" },
                    { label: "Chai & snacks ₹60", text: "Cutting chai & samosa ₹60" },
                    { label: "Swiggy dinner ₹340", text: "Swiggy dinner ₹340" },
                    { label: "Split Groceries ₹1200", text: "Split 1200 groceries with Rahul" },
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleRecordFact(item.text)}
                      className="p-3 text-left rounded-xl bg-white border border-[#D1E5DE] hover:border-[#123630] hover:bg-[#123630] hover:text-white transition-all cursor-pointer group shadow-2xs"
                    >
                      <div className="font-mono text-xs font-bold text-[#123630] group-hover:text-white">
                        {item.label}
                      </div>
                      <div className="text-[11px] text-[#6B8079] group-hover:text-white/80 truncate mt-0.5">
                        "{item.text}"
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleRecordFact(expenseText);
                }}
                className="flex items-center gap-2"
              >
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="or type e.g. 'Coffee 150', 'Milk 66'"
                    value={expenseText}
                    onChange={(e) => setExpenseText(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#123630]/20 bg-white text-sm text-[#123630] placeholder:text-[#9FB3AC] focus:border-[#FF5C2B] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="min-h-[48px] px-5 rounded-xl bg-[#FF5C2B] hover:bg-[#E04B1D] text-white font-bold text-sm shrink-0 flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Log</span>
                  <ArrowRight className="size-4" />
                </button>
              </form>
            </div>
          )}

          {/* STEP 4: First Fact Recorded & Daily Clarity Card */}
          {step === 4 && recordedFact && (
            <div className="space-y-5 animate-in fade-in zoom-in-95 duration-200">
              <div className="text-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/15 text-[#047857] font-mono text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="size-3.5" /> First Fact Logged in &lt; 45 Seconds!
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#123630]">
                  You just logged your first fact.
                </h3>
                <p className="mt-1 text-sm text-[#4E6760]">
                  Recorded <strong>"{recordedFact.text}"</strong> as {recordedFact.amount} under {recordedFact.category}.
                </p>
              </div>

              {/* Daily Clarity Card Showcase */}
              <div className="p-5 rounded-2xl bg-[#123630] text-white shadow-lg space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/15">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#A5DDD0]">
                    Today's Money Clarity
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#10B981]/20 text-[#4ADE80] font-bold">
                    Connected & Live
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white/10">
                    <span className="text-[11px] font-mono text-[#CBDCD6] block">Today's Remaining Limit</span>
                    <span className="text-2xl font-bold font-serif text-[#F4D277]">{recordedFact.remaining}</span>
                    <span className="text-[10px] text-[#A5DDD0] block mt-0.5">Updated in real-time</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10">
                    <span className="text-[11px] font-mono text-[#CBDCD6] block">Bills Due This Week</span>
                    <span className="text-2xl font-bold font-serif text-white">Rent ₹18,000</span>
                    <span className="text-[10px] text-[#A5DDD0] block mt-0.5">Due in 4 days (Set aside)</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-[#CBDCD6] flex items-center gap-2">
                  <Lock className="size-3.5 text-[#F4D277] shrink-0" />
                  <span>Personal and shared balances kept strictly private & separate.</span>
                </div>
              </div>

              {/* Final CTAs */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={APP_URL}
                  className="w-full min-h-[48px] rounded-xl bg-[#FF5C2B] hover:bg-[#E04B1D] text-white font-bold text-base flex items-center justify-center gap-2 shadow-[0_4px_0_#9F3017] hover:shadow-[0_2px_0_#9F3017] active:translate-y-0.5 transition-all"
                >
                  <span>Open Full Kubear Web App →</span>
                </a>

                <div className="flex items-center justify-center gap-4 text-xs font-mono text-[#4E6760]">
                  <button
                    type="button"
                    onClick={() => {
                      setExpenseText("");
                      setStep(3);
                    }}
                    className="hover:text-[#123630] underline cursor-pointer"
                  >
                    Try another expense prompt
                  </button>
                  <span>•</span>
                  <button
                    type="button"
                    onClick={onClose}
                    className="hover:text-[#123630] underline cursor-pointer"
                  >
                    Return to landing page
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Micro-Trust */}
        <div className="px-6 py-3 bg-[#FAF6EE] border-t border-[#EAE3D2] text-center text-[11px] font-mono text-[#526D66]">
          🔒 Zero bank passwords • No SMS snooping • Free to use • 30-second start
        </div>
      </div>
    </div>
  );
}
