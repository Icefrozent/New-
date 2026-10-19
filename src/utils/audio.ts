/**
 * Refined ambient sound engine using Web Audio API
 * Generates warm, gentle acoustic wedding chime tones in pentatonic scales (Khim / Roneat inspired)
 * and paper folding rustle sound effect on envelope opening.
 */

let audioCtx: AudioContext | null = null;
let isPlaying = false;
let ambientInterval: number | null = null;
let masterGain: GainNode | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.35, audioCtx.currentTime);
    masterGain.connect(audioCtx.destination);
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Play a delicate paper rustling sound for seal & envelope movement
 */
export function playPaperRustle() {
  try {
    const ctx = getAudioContext();
    const bufferSize = ctx.sampleRate * 0.35;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.08));
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, ctx.currentTime);
    filter.Q.setValueAtTime(1.5, ctx.currentTime);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

    noise.connect(filter);
    filter.connect(gain);
    if (masterGain) gain.connect(masterGain);
    else gain.connect(ctx.destination);

    noise.start();
  } catch {
    // Ignore audio autoplay restrictions
  }
}

/**
 * Play a resonant soft singing chime
 */
export function playChime(freq = 523.25, duration = 2.0) {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    // Warm harmonics
    const osc2 = ctx.createOscillator();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 1.5, ctx.currentTime);
    const gain2 = ctx.createGain();
    gain2.gain.setValueAtTime(0.08, ctx.currentTime);
    gain2.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration * 0.6);

    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gain);
    osc2.connect(gain2);

    if (masterGain) {
      gain.connect(masterGain);
      gain2.connect(masterGain);
    } else {
      gain.connect(ctx.destination);
      gain2.connect(ctx.destination);
    }

    osc.start();
    osc2.start();
    osc.stop(ctx.currentTime + duration);
    osc2.stop(ctx.currentTime + duration);
  } catch {
    // Ignore
  }
}

// Khmer pentatonic scale notes (in Hz)
const PENTATONIC_FREQS = [
  261.63, // C4
  293.66, // D4
  329.63, // E4
  392.0,  // G4
  440.0,  // A4
  523.25, // C5
  587.33, // D5
  659.25, // E5
  783.99  // G5
];

export function startAmbientMusic(): boolean {
  try {
    const ctx = getAudioContext();
    if (isPlaying) return true;
    isPlaying = true;

    // Initial flourish chime chord
    setTimeout(() => playChime(329.63, 2.5), 100);
    setTimeout(() => playChime(523.25, 3.0), 450);
    setTimeout(() => playChime(659.25, 3.5), 800);

    let step = 0;
    ambientInterval = window.setInterval(() => {
      if (!isPlaying) return;
      const note = PENTATONIC_FREQS[step % PENTATONIC_FREQS.length];
      playChime(note, 2.8);
      // Gentle counter-melody note occasionally
      if (step % 3 === 0) {
        setTimeout(() => {
          if (!isPlaying) return;
          const harmonNote = PENTATONIC_FREQS[(step + 2) % PENTATONIC_FREQS.length];
          playChime(harmonNote * 1.5, 2.2);
        }, 900);
      }
      step++;
    }, 2400);

    return true;
  } catch {
    isPlaying = false;
    return false;
  }
}

export function stopAmbientMusic() {
  isPlaying = false;
  if (ambientInterval) {
    clearInterval(ambientInterval);
    ambientInterval = null;
  }
}

export function toggleAmbientMusic(): boolean {
  if (isPlaying) {
    stopAmbientMusic();
    return false;
  } else {
    return startAmbientMusic();
  }
}

export function isMusicPlaying(): boolean {
  return isPlaying;
}
