export interface LifeNodeData {
  id: string;
  label: string;
  category: string;
  amount: number;
  formattedAmount: string;
  iconType: "home" | "emi" | "investments" | "everyday" | "travel" | "family" | "emergency";
  desktopPos: { xPercent: number; yPercent: number };
  svgEndCoord: { x: number; y: number };
  microContext: string;
  accentColor: string;
  glowColor: string;
  floatingDelay: number;
  scale?: number;
  labelWidth?: string;
  depth?: "front" | "back";
  pathOpacity?: number;
}

export interface HeroValueItem {
  icon: string;
  text: string;
}
