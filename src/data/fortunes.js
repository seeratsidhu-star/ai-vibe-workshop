export const fortunes = [
  "Your next idea will change everything.",
  "A bold prototype beats a perfect plan.",
  "Creativity flows when you stop overthinking.",
  "Someone will love what you're building.",
  "Trust the process — magic is in the making.",
  "Your design instincts are sharper than you think.",
  "An unexpected collaboration brings great fortune.",
  "The best code is the code you ship today.",
  "Your curiosity will open a new door.",
  "Good things come to those who iterate.",
  "A small step today becomes a giant leap tomorrow.",
  "The universe favors the brave designer.",
  "Your vibe will attract the right audience.",
  "Break one rule and discover something new.",
  "Patience now, breakthrough soon.",
];

export function randomFortune(exclude) {
  const pool = exclude ? fortunes.filter((f) => f !== exclude) : fortunes;
  return pool[Math.floor(Math.random() * pool.length)];
}
