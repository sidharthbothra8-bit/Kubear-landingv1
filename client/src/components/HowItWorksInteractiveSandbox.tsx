/* Interactive How It Works Playground & Visual Step Engine for Kubear */
import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Check,
  CheckCircle2,
  ChevronRight,
  Coffee,
  Coins,
  Eye,
  FileCheck,
  Flame,
  Home as HomeIcon,
  Image as ImageIcon,
  Lock,
  LockKeyhole,
  MessageSquare,
  Palmtree,
  Receipt,
  RotateCcw,
  Send,
  Shield,
  ShieldCheck,
  Sparkles,
  Split,
  TrendingUp,
  UploadCloud,
  Users,
  Utensils,
  Wallet,
  Zap,
} from "lucide-react";

export function HowItWorksInteractiveSandbox() {
  const [activeTab, setActiveTab] = useState<"chat" | "receipt" | "salary" | "split">("chat");

  // Chat Demo State
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<
    Array<{ sender: "user" | "kubear"; text: string; tag?: string; amount?: string; time?: string }>
  >([
    {
      sender: "user",
      text: "Paid ₹40 auto to HSR metro",
      time: "8:45 AM",
    },
    {
      sender: "kubear",
      text: "Logged ₹40 under Daily Commute • Safe daily spend adjusted to ₹610.",
      tag: "Transport",
      amount: "₹40",
      time: "8:45 AM",
    },
    {
      sender: "user",
      text: "₹180 filter coffee & dosa with Nikhil",
      time: "10:15 AM",
    },
    {
      sender: "kubear",
      text: "Logged ₹180 under Food & Chai • Weekly dining buffer has ₹1,420 remaining.",
      tag: "Food & Drinks",
      amount: "₹180",
      time: "10:15 AM",
    },
  ]);

  const handleSendQuickChat = (promptText: string) => {
    const userMsg = { sender: "user" as const, text: promptText, time: "Just now" };
    let botReply = {
      sender: "kubear" as const,
      text: "Recorded and added to your weekly buffer.",
      tag: "General",
      amount: "₹0",
      time: "Just now",
    };

    if (promptText.toLowerCase().includes("swiggy") || promptText.toLowerCase().includes("dinner")) {
      botReply = {
        sender: "kubear",
        text: "Logged ₹340 under Food • Today's safe buffer is now ₹270.",
        tag: "Food Delivery",
        amount: "₹340",
        time: "Just now",
      };
    } else if (promptText.toLowerCase().includes("blinkit") || promptText.toLowerCase().includes("milk")) {
      botReply = {
        sender: "kubear",
        text: "Logged ₹120 under Household Groceries • Added to this week's pantry ledger.",
        tag: "Groceries",
        amount: "₹120",
        time: "Just now",
      };
    } else if (promptText.toLowerCase().includes("uber") || promptText.toLowerCase().includes("cab")) {
      botReply = {
        sender: "kubear",
        text: "Logged ₹210 under Cab/Auto • Commute buffer at 65% capacity.",
        tag: "Transport",
        amount: "₹210",
        time: "Just now",
      };
    }

    setChatMessages((prev) => [...prev, userMsg, botReply]);
    setChatInput("");
  };

  // Receipt Demo State
  const [receiptState, setReceiptState] = useState<"ready" | "scanning" | "extracted">("extracted");

  // Salary Demo State
  const [salaryAlloc, setSalaryAlloc] = useState({
    salary: 75000,
    rent: 22000,
    sip: 15000,
    parents: 10000,
    goa: 5000,
  });

  const totalCommitted = salaryAlloc.rent + salaryAlloc.sip + salaryAlloc.parents + salaryAlloc.goa;
  const safeSpendMonthly = salaryAlloc.salary - totalCommitted;
  const dailySpendLimit = Math.floor(safeSpendMonthly / 30);

  // Split Demo State
  const [splitAmounts, setSplitAmounts] = useState({
    cook: 4000,
    wifi: 1200,
    blinkit: 2400,
  });
  const totalShared = splitAmounts.cook + splitAmounts.wifi + splitAmounts.blinkit;
  const yourShare = totalShared / 2;

  return (
    <div className="w-full rounded-3xl border border-[#E5DFD4] bg-[#FCFAF6] p-4 shadow-xl sm:p-7 md:p-9 text-[#123630]">
      {/* Top Header & Mode Switcher */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-[#E8E1D5] pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5C2B] animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#D44722]">
              Interactive UX Simulator
            </span>
          </div>
          <h3 className="mt-1 font-serif text-2xl font-normal text-[#123630] sm:text-3xl tracking-tight">
            Try how Kubear works in everyday life
          </h3>
          <p className="mt-1 text-sm text-[#5A6E69]">
            Zero bank scraping. See how fast natural input and visual clarity feel.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex flex-wrap gap-1.5 rounded-2xl bg-[#F0EBE0] p-1.5 self-start md:self-auto border border-[#E2DBD0]">
          <button
            onClick={() => setActiveTab("chat")}
            className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-extrabold transition-all cursor-pointer ${
              activeTab === "chat"
                ? "bg-[#123630] text-[#FFFDF8] shadow-sm"
                : "text-[#5A6E69] hover:bg-white hover:text-[#123630]"
            }`}
          >
            <MessageSquare className="size-3.5" />
            1. Chat Logger
          </button>
          <button
            onClick={() => setActiveTab("receipt")}
            className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-extrabold transition-all cursor-pointer ${
              activeTab === "receipt"
                ? "bg-[#123630] text-[#FFFDF8] shadow-sm"
                : "text-[#5A6E69] hover:bg-white hover:text-[#123630]"
            }`}
          >
            <Camera className="size-3.5" />
            2. Photo Bill
          </button>
          <button
            onClick={() => setActiveTab("salary")}
            className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-extrabold transition-all cursor-pointer ${
              activeTab === "salary"
                ? "bg-[#123630] text-[#FFFDF8] shadow-sm"
                : "text-[#5A6E69] hover:bg-white hover:text-[#123630]"
            }`}
          >
            <Coins className="size-3.5" />
            3. Salary Jobs
          </button>
          <button
            onClick={() => setActiveTab("split")}
            className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-extrabold transition-all cursor-pointer ${
              activeTab === "split"
                ? "bg-[#123630] text-[#FFFDF8] shadow-sm"
                : "text-[#5A6E69] hover:bg-white hover:text-[#123630]"
            }`}
          >
            <Split className="size-3.5" />
            4. Two-Table Split
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="mt-6">
        {/* TAB 1: Chat Logger Demo */}
        {activeTab === "chat" && (
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="flex flex-col rounded-2xl border border-[#E5DFD4] bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-[#F0EBE0] pb-3">
                <div className="flex items-center gap-2">
                  <div className="grid size-7 place-items-center rounded-lg bg-[#FF5C2B]/10 text-[#FF5C2B]">
                    <MessageSquare className="size-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-[#123630]">Kubear Fast Logger</h4>
                    <span className="text-[10px] font-bold text-emerald-700">● Online &amp; Ready</span>
                  </div>
                </div>
                <span className="rounded-full bg-[#F6F2EA] px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#5A6E69] border border-[#E8E1D5]">
                  Hinglish &amp; English
                </span>
              </div>

              {/* Chat Thread */}
              <div className="mt-4 flex max-h-[290px] min-h-[260px] flex-col gap-3 overflow-y-auto pr-1">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-[#123630] text-white rounded-br-none"
                          : "border border-[#E5DFD4] bg-[#F9F7F1] text-[#123630] rounded-bl-none shadow-xs"
                      }`}
                    >
                      <p className="font-medium">{msg.text}</p>
                      {msg.tag && (
                        <div className="mt-2 flex items-center justify-between gap-2 border-t border-[#E8E1D5] pt-1.5 font-mono text-[10px]">
                          <span className="rounded bg-white px-1.5 py-0.5 font-bold text-[#D44722] border border-[#E8E1D5] shadow-xs">
                            🏷️ {msg.tag}
                          </span>
                          <span className="font-extrabold text-[#123630]">{msg.amount}</span>
                        </div>
                      )}
                    </div>
                    <span className="mt-1 font-mono text-[9px] text-[#839791]">{msg.time}</span>
                  </div>
                ))}
              </div>

              {/* Quick Prompt Triggers */}
              <div className="mt-3 flex flex-wrap gap-1.5 border-t border-[#F0EBE0] pt-3">
                <span className="self-center text-[10px] font-bold text-[#839791]">Try clicking:</span>
                <button
                  onClick={() => handleSendQuickChat("Paid ₹340 for Swiggy dinner")}
                  className="rounded-full border border-[#E2DBD0] bg-[#FAF7F0] px-2.5 py-1 text-[11px] font-bold text-[#123630] hover:border-[#FF5C2B] hover:bg-orange-50 transition-colors cursor-pointer"
                >
                  &ldquo;₹340 Swiggy dinner&rdquo;
                </button>
                <button
                  onClick={() => handleSendQuickChat("₹120 Blinkit milk & curd")}
                  className="rounded-full border border-[#E2DBD0] bg-[#FAF7F0] px-2.5 py-1 text-[11px] font-bold text-[#123630] hover:border-[#FF5C2B] hover:bg-orange-50 transition-colors cursor-pointer"
                >
                  &ldquo;₹120 Blinkit milk&rdquo;
                </button>
                <button
                  onClick={() => handleSendQuickChat("Paid ₹210 Uber cab to office")}
                  className="rounded-full border border-[#E2DBD0] bg-[#FAF7F0] px-2.5 py-1 text-[11px] font-bold text-[#123630] hover:border-[#FF5C2B] hover:bg-orange-50 transition-colors cursor-pointer"
                >
                  &ldquo;₹210 Uber to office&rdquo;
                </button>
              </div>

              {/* Custom Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (chatInput.trim()) handleSendQuickChat(chatInput);
                }}
                className="mt-3 flex gap-2"
              >
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type like 'Chai ₹30' or 'Auto ₹50'..."
                  className="flex-1 rounded-xl border border-[#DCD5C7] px-3.5 py-2 text-xs font-medium focus:border-[#123630] focus:outline-none bg-[#FAF7F0]"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center rounded-xl bg-[#FF5C2B] px-4 text-xs font-bold text-white hover:bg-[#e04e20] transition-colors cursor-pointer shadow-sm"
                >
                  <Send className="size-3.5" />
                </button>
              </form>
            </div>

            {/* Explanatory Benefit Column (Warm Light Parchment) */}
            <div className="space-y-4 rounded-2xl bg-[#F7F3EB] border border-[#E2DBD0] p-5 text-[#123630]">
              <div className="flex items-center justify-between border-b border-[#E8E1D5] pb-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#D44722]">
                  Step 1 • Zero Friction Logging
                </span>
                <Sparkles className="size-4 text-[#D44722]" />
              </div>
              <h4 className="font-serif text-xl font-normal text-[#123630]">
                No dropdowns. No 6-field forms.
              </h4>
              <p className="text-xs leading-relaxed text-[#5A6E69]">
                Traditional finance apps make you pick an account, pick a category, pick a date, and select tags. With Kubear, you just type natural speech like you’re texting a friend.
              </p>
              <div className="space-y-2.5 pt-2 text-xs font-bold text-[#123630]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-700" />
                  <span>Understands Hinglish terms (Chai, Auto, Dosa, Petrol)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-700" />
                  <span>Auto-calculates today&apos;s remaining guilt-free balance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-700" />
                  <span>Never requires SMS background access or bank passwords</span>
                </div>
              </div>
              <div className="rounded-xl bg-white border border-[#E5DFD4] p-3 text-[11px] font-mono text-[#5A6E69]">
                💡 <em>Pro-tip: Log right when you tap pay on UPI so you never have to remember later.</em>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Photo Bill Demo */}
        {activeTab === "receipt" && (
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] items-start">
            {/* Left: Interactive Bill Preview */}
            <div className="relative rounded-2xl border border-[#E5DFD4] bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between border-b border-[#F0EBE0] pb-3">
                <div className="flex items-center gap-2">
                  <Receipt className="size-4 text-[#2563EB]" />
                  <h4 className="text-xs font-extrabold text-[#123630]">Smart Receipt OCR</h4>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setReceiptState("scanning");
                      setTimeout(() => setReceiptState("extracted"), 800);
                    }}
                    className="flex items-center gap-1 rounded-lg bg-blue-50 border border-blue-200 px-2.5 py-1 text-[11px] font-bold text-[#2563EB] hover:bg-blue-100 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="size-3" /> Re-scan
                  </button>
                </div>
              </div>

              {/* Receipt Visual Mock */}
              <div className="mt-4 rounded-xl border border-dashed border-[#D4CCC0] bg-[#FAF8F3] p-4 font-mono text-xs text-[#123630] shadow-inner">
                <div className="text-center border-b border-[#E8E1D5] pb-2">
                  <p className="font-extrabold text-sm tracking-wide text-[#123630]">CAFE HYDERABAD ROAST</p>
                  <p className="text-[10px] text-[#839791]">Koramangala 5th Block • Invoice #4912</p>
                </div>

                <div className="my-3 space-y-1.5 text-[11px]">
                  <div className="flex justify-between">
                    <span>2x Bun Maska</span>
                    <span className="font-bold">₹140</span>
                  </div>
                  <div className="flex justify-between">
                    <span>2x Irani Chai</span>
                    <span className="font-bold">₹80</span>
                  </div>
                  <div className="flex justify-between">
                    <span>1x Chicken Keema Pav</span>
                    <span className="font-bold">₹240</span>
                  </div>
                  <div className="flex justify-between text-[#839791]">
                    <span>GST (5%)</span>
                    <span>₹23</span>
                  </div>
                </div>

                <div className="flex justify-between border-t-2 border-dashed border-[#D4CCC0] pt-2 font-bold text-sm">
                  <span>TOTAL PAID</span>
                  <span className="text-[#FF5C2B]">₹483.00</span>
                </div>
              </div>

              {/* Extracted Card Output */}
              <div className="mt-4 rounded-xl bg-emerald-50/80 border border-emerald-200 p-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-emerald-700" />
                    <span className="text-xs font-bold text-emerald-950">Extracted in 1.4s</span>
                  </div>
                  <span className="rounded bg-emerald-100 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold text-emerald-900 font-mono">
                    Food &amp; Dining
                  </span>
                </div>
                <p className="mt-2 text-xs text-emerald-900 leading-relaxed">
                  Total of <strong>₹483</strong> recorded across 3 items. Weekly dining buffer updated automatically.
                </p>
              </div>
            </div>

            {/* Right: Why OCR Beats Bank Sync (Warm Light Parchment) */}
            <div className="space-y-4 rounded-2xl bg-[#F7F3EB] border border-[#E2DBD0] p-5 text-[#123630]">
              <div className="flex items-center justify-between border-b border-[#E8E1D5] pb-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#D44722]">
                  Step 2 • Photo Bill Extraction
                </span>
                <UploadCloud className="size-4 text-[#D44722]" />
              </div>
              <h4 className="font-serif text-xl font-normal text-[#123630]">
                Snap the paper bill. We do the math.
              </h4>
              <p className="text-xs leading-relaxed text-[#5A6E69]">
                Got a long grocery slip from DMart or a dinner bill with friends? Instead of manually typing each line or guessing how to split, take a quick snapshot.
              </p>
              <div className="space-y-2.5 pt-2 text-xs font-bold text-[#123630]">
                <div className="flex items-start gap-2">
                  <Check className="size-4 text-emerald-700 mt-0.5 flex-none" />
                  <span>Itemized breakdown prevents forgotten purchases</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="size-4 text-emerald-700 mt-0.5 flex-none" />
                  <span>Ready-made for 50/50 flatmate split allocation</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="size-4 text-emerald-700 mt-0.5 flex-none" />
                  <span>Your receipt photos stay private and encrypted on your account</span>
                </div>
              </div>
              <div className="rounded-xl bg-white border border-[#E5DFD4] p-3 text-[11px] font-mono text-[#5A6E69]">
                ⚡ <em>Offline ready: Snap photos even without a steady internet connection.</em>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Salary Allocation System */}
        {activeTab === "salary" && (
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="rounded-2xl border border-[#E5DFD4] bg-white p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-[#F0EBE0] pb-3">
                <div>
                  <h4 className="text-xs font-extrabold text-[#123630]">1st of the Month Calculator</h4>
                  <p className="text-[10px] text-[#839791]">Adjust sliders to see your safe spend</p>
                </div>
                <span className="font-mono text-xs font-bold text-[#D44722] bg-[#FFF2EC] border border-[#FED7AA] px-2.5 py-1 rounded-lg">
                  Salary: ₹{salaryAlloc.salary.toLocaleString("en-IN")}
                </span>
              </div>

              {/* Sliders */}
              <div className="space-y-3.5 text-xs">
                <div>
                  <div className="flex justify-between font-bold text-[#123630] mb-1">
                    <span>🏠 House Rent to Owner</span>
                    <span className="font-mono font-extrabold">₹{salaryAlloc.rent.toLocaleString("en-IN")}</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="45000"
                    step="1000"
                    value={salaryAlloc.rent}
                    onChange={(e) => setSalaryAlloc({ ...salaryAlloc, rent: Number(e.target.value) })}
                    className="w-full accent-[#123630] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-bold text-[#123630] mb-1">
                    <span>📈 Monthly SIP &amp; Mutual Funds</span>
                    <span className="font-mono font-extrabold">₹{salaryAlloc.sip.toLocaleString("en-IN")}</span>
                  </div>
                  <input
                    type="range"
                    min="2000"
                    max="30000"
                    step="1000"
                    value={salaryAlloc.sip}
                    onChange={(e) => setSalaryAlloc({ ...salaryAlloc, sip: Number(e.target.value) })}
                    className="w-full accent-[#123630] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-bold text-[#123630] mb-1">
                    <span>👨‍👩‍👧 Family Support / Mummy-Papa</span>
                    <span className="font-mono font-extrabold">₹{salaryAlloc.parents.toLocaleString("en-IN")}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="25000"
                    step="1000"
                    value={salaryAlloc.parents}
                    onChange={(e) => setSalaryAlloc({ ...salaryAlloc, parents: Number(e.target.value) })}
                    className="w-full accent-[#123630] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-bold text-[#123630] mb-1">
                    <span>🏖️ Goa Trip Savings Fund</span>
                    <span className="font-mono font-extrabold text-[#D44722]">₹{salaryAlloc.goa.toLocaleString("en-IN")}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="15000"
                    step="500"
                    value={salaryAlloc.goa}
                    onChange={(e) => setSalaryAlloc({ ...salaryAlloc, goa: Number(e.target.value) })}
                    className="w-full accent-[#FF5C2B] cursor-pointer"
                  />
                </div>
              </div>

              {/* Output Result Card (Light Emerald & Gold) */}
              <div className="rounded-2xl bg-[#EAF5EF] border border-[#BEE3D1] p-4 text-[#0B4036] flex items-center justify-between shadow-xs">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 font-mono">
                    Safe Daily Spending Buffer
                  </span>
                  <div className="font-serif text-3xl text-[#0B4036] font-normal tracking-tight">
                    ₹{dailySpendLimit}{" "}
                    <span className="text-xs font-sans text-emerald-800 font-bold">/ day</span>
                  </div>
                  <p className="text-[11px] text-emerald-800 font-medium mt-0.5">
                    ₹{safeSpendMonthly.toLocaleString("en-IN")} total remaining this month
                  </p>
                </div>
                <div className="text-right font-mono text-xs">
                  <span className="block text-[10px] text-emerald-800 font-bold">Locked Upfront:</span>
                  <span className="font-extrabold text-[#D44722] text-sm">
                    ₹{totalCommitted.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: The Philosophy */}
            <div className="space-y-4 rounded-2xl bg-[#FFF5E6] p-5 text-[#123630] border border-[#E8D3B5]">
              <div className="flex items-center justify-between border-b border-[#E8D3B5] pb-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#D44722]">
                  Step 3 • Order Before Spending
                </span>
                <Coins className="size-4 text-[#D44722]" />
              </div>
              <h4 className="font-serif text-xl font-normal text-[#123630]">
                Give every rupee a job on day one.
              </h4>
              <p className="text-xs leading-relaxed text-[#5A6E69]">
                Most people spend first and wonder why they have nothing left for savings by the 20th. Kubear inverts this: lock your fixed obligations first, so whatever is left is 100% guilt-free.
              </p>
              <div className="space-y-2.5 pt-2 text-xs font-bold text-[#123630]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#FF5C2B]" />
                  <span>No anxiety when buying that weekend coffee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#FF5C2B]" />
                  <span>Rent &amp; bills never collide with your savings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#FF5C2B]" />
                  <span>Clear daily spending target keeps you on track effortlessly</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Two-Table Split */}
        {activeTab === "split" && (
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="rounded-2xl border border-[#E5DFD4] bg-white p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-[#F0EBE0] pb-3">
                <div>
                  <h4 className="text-xs font-extrabold text-[#123630]">Shared Flat vs Personal Table</h4>
                  <p className="text-[10px] text-[#839791]">2 Flatmates • 50/50 Split Rule</p>
                </div>
                <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-md">
                  Two Tables
                </span>
              </div>

              {/* Visual Two Tables */}
              <div className="grid gap-3 sm:grid-cols-2">
                {/* Table 1: Shared */}
                <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-3.5 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-950 flex items-center gap-1">
                      <Users className="size-3 text-[#FF5C2B]" /> Shared Table
                    </span>
                    <span className="text-[10px] font-bold text-amber-800">Both Can See</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-[#123630]">
                    <div className="flex justify-between bg-white p-2 rounded-lg border border-amber-200/80 font-medium shadow-xs">
                      <span>Cook Aunty</span>
                      <span className="font-mono font-bold">₹4,000</span>
                    </div>
                    <div className="flex justify-between bg-white p-2 rounded-lg border border-amber-200/80 font-medium shadow-xs">
                      <span>Airtel Fiber WiFi</span>
                      <span className="font-mono font-bold">₹1,200</span>
                    </div>
                    <div className="flex justify-between bg-white p-2 rounded-lg border border-amber-200/80 font-medium shadow-xs">
                      <span>Blinkit Oil &amp; Spices</span>
                      <span className="font-mono font-bold">₹2,400</span>
                    </div>
                  </div>
                  <div className="border-t border-amber-200 pt-2 flex justify-between font-bold text-xs text-amber-950">
                    <span>Total Shared:</span>
                    <span className="font-mono">₹{totalShared.toLocaleString("en-IN")}</span>
                  </div>
                </div>

                {/* Table 2: Personal */}
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-3.5 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-950 flex items-center gap-1">
                      <LockKeyhole className="size-3 text-emerald-700" /> Personal Table
                    </span>
                    <span className="text-[10px] font-bold text-emerald-800">Only You See</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-[#123630]">
                    <div className="flex justify-between bg-white p-2 rounded-lg border border-emerald-200/80 font-medium shadow-xs">
                      <span>Blue Tokai Coffee</span>
                      <span className="font-mono font-bold">₹280</span>
                    </div>
                    <div className="flex justify-between bg-white p-2 rounded-lg border border-emerald-200/80 font-medium shadow-xs">
                      <span>Zara T-shirt</span>
                      <span className="font-mono font-bold">₹1,490</span>
                    </div>
                    <div className="flex justify-between bg-white p-2 rounded-lg border border-emerald-200/80 font-medium shadow-xs">
                      <span>Netflix Subscription</span>
                      <span className="font-mono font-bold">₹649</span>
                    </div>
                  </div>
                  <div className="border-t border-emerald-200 pt-2 text-[10px] text-emerald-900 font-medium italic">
                    Zero shared awkwardness. Your personal spends stay private.
                  </div>
                </div>
              </div>

              {/* Settlement Strip (Warm Paper) */}
              <div className="rounded-xl bg-[#F4EFE6] border border-[#DFD7CA] p-3.5 text-[#123630] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 font-bold">
                  <CheckCircle2 className="size-4 text-emerald-700" />
                  <span>Your 50% share of home costs:</span>
                </div>
                <span className="font-mono text-sm font-extrabold text-[#D44722]">
                  ₹{yourShare.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {/* Right: Flatmate clarity */}
            <div className="space-y-4 rounded-2xl bg-[#F7F3EB] border border-[#E2DBD0] p-5 text-[#123630]">
              <div className="flex items-center justify-between border-b border-[#E8E1D5] pb-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0B4036]">
                  Step 4 • Shared vs Private
                </span>
                <Users className="size-4 text-[#0B4036]" />
              </div>
              <h4 className="font-serif text-xl font-normal text-[#123630]">
                Share what belongs together. Keep the rest private.
              </h4>
              <p className="text-xs leading-relaxed text-[#5A6E69]">
                You shouldn&apos;t have to explain every personal purchase to flatmates or spouse just because you share a roof. With Kubear Money Spaces, only designated shared items appear on the group table.
              </p>
              <div className="space-y-2.5 pt-2 text-xs font-bold text-[#123630]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-700" />
                  <span>Instant math settlement at month end</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-700" />
                  <span>No awkward conversations about who paid what</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-700" />
                  <span>Personal shopping never visible to roommates</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
