/**
 * Tactile Micro-Acoustics for Kubear
 * Generates organic, gentle woodblock/marimba clicks and water drops using Web Audio API.
 * Zero external audio files, zero network calls, instantly available.
 */

let audioCtx: AudioContext | null = null;
let soundEnabled = false;

// Check stored preference
if (typeof window !== "undefined") {
  try {
    const saved = localStorage.getItem("kubear_sound_fx");
    soundEnabled = saved === "true";
  } catch {
    soundEnabled = false;
  }
}

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

export function isSoundEnabled(): boolean {
  return soundEnabled;
}

export function toggleSound(): boolean {
  soundEnabled = !soundEnabled;
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem("kubear_sound_fx", soundEnabled ? "true" : "false");
    } catch {
      // ignore
    }
  }
  if (soundEnabled) {
    playChime();
  }
  return soundEnabled;
}

/**
 * Gentle wooden marimba tick (for pills, nodes, tabs)
 */
export function playTick(pitchMultiplier = 1) {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    const freq = 480 * pitchMultiplier;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.4, ctx.currentTime + 0.04);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.045);
  } catch {
    // ignore audio errors
  }
}

/**
 * Soft warm water droplet chime (for revealing safe balance, unlocking statements)
 */
export function playChime() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(660, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.06);

    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.18);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.19);
  } catch {
    // ignore audio errors
  }
}

/**
 * Deep calming confirmation chord (for completed calculations)
 */
export function playZen() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    [523.25, 659.25, 783.99].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.02);

      gain.gain.setValueAtTime(0.025, ctx.currentTime + idx * 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35 + idx * 0.02);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + idx * 0.02);
      osc.stop(ctx.currentTime + 0.4 + idx * 0.02);
    });
  } catch {
    // ignore audio errors
  }
}
