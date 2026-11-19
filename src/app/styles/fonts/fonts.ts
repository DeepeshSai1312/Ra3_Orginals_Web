import { Archivo, Instrument_Serif, Michroma } from 'next/font/google';

// Display + body. Variable font with the width axis so headlines can use font-stretch: 68%.
export const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-archivo',
  display: 'swap',
});

// Italic accent for the "feeling word" in headlines.
export const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

// Small uppercase section labels.
export const michroma = Michroma({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-michroma',
  display: 'swap',
});
