/* Mobile-first expansion: this registry is the single source for internal Learn and Tools route copy, contextual links and route-level SEO data. */
export type Topic = {
  slug: string;
  label: string;
  title: string;
  description: string;
  accent: "orange" | "mint" | "saffron" | "ink";
};

export type Article = {
  slug: string;
  topic: string;
  title: string;
  description: string;
  readTime: string;
  visual: "salary" | "upi" | "rent" | "goa" | "home" | "library";
  takeaway: string;
  sections: { title: string; paragraphs: string[] }[];
  tool?: { label: string; href: string };
};

export type ToolCategory = "salary-cashflow" | "tax-debt" | "wealth-investing" | "metro-living";

export type ToolItem = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  category: ToolCategory;
  categoryLabel: string;
  visual: "salary" | "tax" | "card" | "sip" | "flatmate" | "buyrent" | "runway" | "carcab" | "goa" | "emi";
  query: string;
  learnSlug: string;
  badge?: string;
  timeToFill: string;
  inputsRequired: string[];
};

export const topics: Topic[] = [
  {
    slug: "start-here",
    label: "Start here",
    title: "Start with the month you have.",
    description: "A simpler way to see what comes in, what is due and what you want to keep moving.",
    accent: "orange",
  },
  {
    slug: "salary-planning",
    label: "Salary",
    title: "Give your salary a few clear jobs.",
    description: "Make room for bills, home, a little buffer and plans that matter to you.",
    accent: "saffron",
  },
  {
    slug: "upi-and-spending",
    label: "UPI week",
    title: "Small spends need some context.",
    description: "A calm way to look at the fast payments that make up an ordinary week.",
    accent: "mint",
  },
  {
    slug: "home-money",
    label: "Home money",
    title: "Share home costs, not every detail.",
    description: "Keep the selected things that matter to a home visible without mixing personal money.",
    accent: "ink",
  },
  {
    slug: "goals-and-saving",
    label: "Goals",
    title: "Keep the plan in the picture.",
    description: "A goal does not need to fight with every practical thing due this month.",
    accent: "orange",
  },
  {
    slug: "tax-and-long-term",
    label: "Long-term",
    title: "Long-term words, made simpler.",
    description: "Plain-English starting points for terms you may hear at work or at home.",
    accent: "saffron",
  },
];

export const tools: ToolItem[] = [
  {
    slug: "salary-allocation",
    title: "Day-1 Salary Allocation & Guilt-Free Daily Burn",
    eyebrow: "Cashflow & Burn",
    description: "Allocate rent, parents, SIPs and utility bills upfront on Day 1. See your exact daily guilt-free spend limit so you never run dry before month-end.",
    category: "salary-cashflow",
    categoryLabel: "Income & Cashflow",
    visual: "salary",
    query: "salary allocation planner India daily spend limit",
    learnSlug: "salary-day-is-not-spending-day",
    badge: "Most Popular",
    timeToFill: "1 min",
    inputsRequired: ["Take-home in-hand salary", "House Rent", "Parents / Family transfer", "Committed SIPs", "Wifi & Utility Bills"],
  },
  {
    slug: "tax-regime-comparator",
    title: "Old vs New Tax Regime Comparator (FY 2024-26)",
    eyebrow: "Tax Optimization",
    description: "Compare your exact tax liability under the revised New Regime (₹75k standard deduction + 87A rebate) vs Old Regime (80C, 80D, HRA & Home Loan deductions).",
    category: "tax-debt",
    categoryLabel: "Tax & Debt Defense",
    visual: "tax",
    query: "old vs new tax regime calculator India budget 2025",
    learnSlug: "epf-ppf-nps-basics",
    badge: "Budget 2024-26 Updated",
    timeToFill: "2 mins",
    inputsRequired: ["Gross Annual CTC", "Basic Salary (for HRA)", "Annual Rent Paid & City Tier", "Section 80C, 80D & NPS 80CCD"],
  },
  {
    slug: "credit-card-trap",
    title: "Credit Card Minimum Due Trap & Payoff Simulator",
    eyebrow: "Debt Freedom",
    description: "Discover the brutal reality of paying only the 5% minimum due at 42% APR. Calculate how much time and interest you save by adding even ₹1,500/month.",
    category: "tax-debt",
    categoryLabel: "Tax & Debt Defense",
    visual: "card",
    query: "credit card minimum due interest trap calculator India",
    learnSlug: "rent-bills-cards-what-to-see-first",
    badge: "Eye Opener",
    timeToFill: "1 min",
    inputsRequired: ["Current card balance", "Annual APR % (typically 42%)", "Your monthly payment amount"],
  },
  {
    slug: "sip-calculator",
    title: "Step-Up SIP & Wealth Compounding Engine",
    eyebrow: "Wealth Compounding",
    description: "Simulate equity mutual fund compounding with annual salary hike step-ups. See the massive difference a 10% yearly step-up makes, adjusted for 6% inflation.",
    category: "wealth-investing",
    categoryLabel: "Wealth & Compounding",
    visual: "sip",
    query: "step up SIP calculator India inflation adjusted",
    learnSlug: "salary-day-is-not-spending-day",
    badge: "Step-Up Compounding",
    timeToFill: "1 min",
    inputsRequired: ["Initial monthly SIP", "Expected CAGR %", "Investment horizon (years)", "Annual step-up %"],
  },
  {
    slug: "flatmate-maid-split",
    title: "Metro Flatmate & Domestic Staff Split Manager",
    eyebrow: "Shared Living",
    description: "Split rent, cook, maid, wifi, electricity, and Zepto grocery pool fairly among flatmates with transparent room-size weightages and UPI reminders.",
    category: "metro-living",
    categoryLabel: "Metro Living & Lifestyle",
    visual: "flatmate",
    query: "flatmate rent maid split calculator Bangalore Mumbai",
    learnSlug: "home-money-without-mix-up",
    badge: "Bangalore / Mumbai Special",
    timeToFill: "2 mins",
    inputsRequired: ["Total apartment rent", "Cook & Maid monthly salary", "Wifi & Electricity bills", "Number of flatmates"],
  },
  {
    slug: "emergency-runway",
    title: "Emergency Fund & Job Loss Runway Meter",
    eyebrow: "Financial Safety",
    description: "Measure your financial safety runway in months against unavoidable living costs, EMIs, family support, and medical buffers.",
    category: "salary-cashflow",
    categoryLabel: "Income & Cashflow",
    visual: "runway",
    query: "emergency fund runway calculator India job loss buffer",
    learnSlug: "salary-day-is-not-spending-day",
    badge: "Safety Essential",
    timeToFill: "1 min",
    inputsRequired: ["Inescapable monthly fixed costs", "Family support", "Current bank & liquid savings"],
  },
  {
    slug: "buy-vs-rent",
    title: "Buy vs Rent Home Decision Simulator",
    eyebrow: "Real Estate Decision",
    description: "Compare 15-year net worth of buying a flat with home loan EMI & maintenance vs Renting and investing the downpayment + EMI surplus in 12% equity index funds.",
    category: "wealth-investing",
    categoryLabel: "Wealth & Compounding",
    visual: "buyrent",
    query: "buy vs rent calculator India Bangalore Mumbai Gurgaon",
    learnSlug: "rent-bills-cards-what-to-see-first",
    badge: "Major Decision",
    timeToFill: "2 mins",
    inputsRequired: ["Target flat price", "Downpayment available", "Current monthly rent for equivalent flat", "Loan interest rate"],
  },
  {
    slug: "car-vs-cab",
    title: "Car Ownership vs Metro & Cabs True Cost Analyzer",
    eyebrow: "Commute Economics",
    description: "Uncover the hidden 5-year cost of owning a car (Depreciation, EMI, Fuel, Insurance, Parking & Service) compared to daily Uber, Ola, BluSmart and Metro.",
    category: "metro-living",
    categoryLabel: "Metro Living & Lifestyle",
    visual: "carcab",
    query: "car ownership vs ola uber true cost calculator India",
    learnSlug: "upi-weekly-check-in",
    badge: "Cost Reality",
    timeToFill: "2 mins",
    inputsRequired: ["Car on-road price", "Daily commute in KM", "Fuel / EV rate", "Daily cab expense alternative"],
  },
  {
    slug: "goa-goal-calculator",
    title: "Goa, Wedding & Festive Goal Planner",
    eyebrow: "Goal Planning",
    description: "Plan for a Goa vacation, destination wedding, Sovereign Gold, or Diwali gadget fund without straining your monthly salary or taking expensive personal loans.",
    category: "salary-cashflow",
    categoryLabel: "Income & Cashflow",
    visual: "goa",
    query: "travel wedding goal calculator India savings timeline",
    learnSlug: "goa-fund-without-guilt",
    badge: "Guilt-Free Planning",
    timeToFill: "1 min",
    inputsRequired: ["Goal category & target amount", "Current amount saved", "Target completion month"],
  },
  {
    slug: "emi-calculator",
    title: "Home & Personal Loan EMI Cost Visualizer",
    eyebrow: "Loan Repayment",
    description: "Calculate monthly instalments, total interest burden, and amortization breakdown for home, car, or personal loans across Indian lending institutions.",
    category: "tax-debt",
    categoryLabel: "Tax & Debt Defense",
    visual: "emi",
    query: "home loan personal loan EMI calculator India",
    learnSlug: "rent-bills-cards-what-to-see-first",
    badge: "Instant Loan Math",
    timeToFill: "1 min",
    inputsRequired: ["Principal loan amount", "Annual interest rate %", "Loan tenure in years"],
  },
];

export const articles: Article[] = [
  {
    slug: "salary-day-is-not-spending-day",
    topic: "salary-planning",
    title: "Salary day is not a spending day. Try these four jobs first.",
    description: "A simple way to give salary, bills, buffer and a personal plan some space before the month gets busy.",
    readTime: "4 min read",
    visual: "salary",
    takeaway: "The point is not to control every rupee. It is to make the important things visible before they surprise you.",
    tool: { label: "Try the Day-1 Salary Allocation Tool", href: "/learn/tools/salary-allocation" },
    sections: [
      {
        title: "Start with what cannot wait",
        paragraphs: [
          "Rent, a bill or a home expense does not need a complicated category. It just needs a clear place in your view.",
          "A simple first step is to name the things that are already spoken for this month. That makes the rest easier to see.",
        ],
      },
      {
        title: "Leave room for the plan you care about",
        paragraphs: [
          "A Goa plan, a course or a small buffer can sit beside the practical stuff. It does not need to wait until every month is perfect.",
          "Small repeatable choices usually feel easier than one dramatic money rule.",
        ],
      },
    ],
  },
  {
    slug: "upi-weekly-check-in",
    topic: "upi-and-spending",
    title: "UPI all week? A five-minute Friday check-in can help.",
    description: "A no-shame way to look back at the quick payments that are easy to forget by Sunday.",
    readTime: "3 min read",
    visual: "upi",
    takeaway: "The goal is context, not guilt. A short weekly check can make small spends easier to remember.",
    tool: { label: "Try the Car vs Cab Analyzer", href: "/learn/tools/car-vs-cab" },
    sections: [
      {
        title: "Quick is good. Invisible is not always helpful.",
        paragraphs: [
          "UPI makes ordinary things easy. A cab, lunch, chai, a small gift or groceries can happen before you have had time to think about them.",
          "That does not make the payment bad. It simply means your money story can become scattered.",
        ],
      },
      {
        title: "Use one small check-in",
        paragraphs: [
          "Pick a moment that already belongs to you, such as Friday evening or Sunday morning. Look at the week and name the payments you would otherwise forget.",
          "You are not looking for a perfect score. You are making next week less surprising.",
        ],
      },
    ],
  },
  {
    slug: "rent-bills-cards-what-to-see-first",
    topic: "start-here",
    title: "Rent, bills, cards. What should be visible first?",
    description: "A plain starter order for the commitments that can feel noisy when they are spread across different places.",
    readTime: "4 min read",
    visual: "rent",
    takeaway: "Start with what has a date. The month becomes easier to handle when due things are not hidden.",
    tool: { label: "Try the Credit Card Trap Calculator", href: "/learn/tools/credit-card-trap" },
    sections: [
      {
        title: "Look for dates before categories",
        paragraphs: [
          "When you are deciding what to see first, dates are often more useful than a long list of labels. A due date tells you which part of the month needs attention.",
          "Rent, a card bill and a regular repayment may all live in different places. Bringing the dates together is a useful first move.",
        ],
      },
      {
        title: "Make the next thing obvious",
        paragraphs: [
          "A money view works best when it answers one clear question: what needs attention next?",
          "You can add more detail later. Start with the commitment that would be most annoying to miss.",
        ],
      },
    ],
  },
  {
    slug: "goa-fund-without-guilt",
    topic: "goals-and-saving",
    title: "Goa ka plan. A simple way to keep it visible.",
    description: "A travel plan can live beside rent, bills and everyday spending without becoming a source of guilt.",
    readTime: "3 min read",
    visual: "goa",
    takeaway: "A goal becomes easier to keep when it has a visible place next to the rest of the month.",
    tool: { label: "Try the Goa Goal Calculator", href: "/learn/tools/goa-goal-calculator" },
    sections: [
      {
        title: "Do not hide the fun plan",
        paragraphs: [
          "A short trip, a concert or a course can feel less serious than a bill. But it may still be a real plan for you.",
          "Keeping it visible does not promise that it will happen. It simply lets you make the choice with the full month in mind.",
        ],
      },
      {
        title: "Make the next amount small enough to repeat",
        paragraphs: [
          "A number that works every month can feel more useful than a large target that makes you switch off.",
          "Try a simple estimate, then adjust it when the timeline or the plan changes.",
        ],
      },
    ],
  },
  {
    slug: "home-money-without-mix-up",
    topic: "home-money",
    title: "Home money without the mix-up.",
    description: "How selected home costs can stay visible while personal money remains personal.",
    readTime: "4 min read",
    visual: "home",
    takeaway: "Shared does not have to mean everything. Clear boundaries can make home conversations easier.",
    tool: { label: "Try the Flatmate & Maid Split Manager", href: "/learn/tools/flatmate-maid-split" },
    sections: [
      {
        title: "Name what is truly shared",
        paragraphs: [
          "Rent, groceries, a utility bill or a home repair may matter to more than one person. It can help to give those things a shared view.",
          "Personal purchases and personal plans do not need to become part of that view unless you want them to.",
        ],
      },
      {
        title: "Keep the conversation simple",
        paragraphs: [
          "A shared money conversation does not need to start with every transaction. Start with the one cost that affects the home this week.",
          "The point is clarity between people, not surveillance.",
        ],
      },
    ],
  },
  {
    slug: "epf-ppf-nps-basics",
    topic: "tax-and-long-term",
    title: "EPF, PPF and NPS. What each is meant for.",
    description: "A plain-English introduction to three long-term terms. General education, not a personal recommendation.",
    readTime: "5 min read",
    visual: "library",
    takeaway: "Long-term words can be understood one at a time. A starting point is more useful than a rushed decision.",
    tool: { label: "Try the Tax Regime Comparator", href: "/learn/tools/tax-regime-comparator" },
    sections: [
      {
        title: "Start with the full name and the purpose",
        paragraphs: [
          "These terms often come up when you start a job, talk about long-term saving or look at tax-related paperwork. Each has a different structure and set of rules.",
          "Before taking any action, use current official sources or a qualified professional for details that apply to you.",
        ],
      },
      {
        title: "Do not turn a simple explainer into a decision",
        paragraphs: [
          "A short guide can help you understand the words and frame better questions. It cannot tell you what is right for your income, goals or tax situation.",
          "If you choose to act, check the latest official rules and consider getting advice suited to your own situation.",
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((article) => article.slug === slug);
export const getTopic = (slug: string) => topics.find((topic) => topic.slug === slug);
export const getTool = (slug: string) => tools.find((tool) => tool.slug === slug);
