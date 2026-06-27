import { useState, useEffect } from "react";

// GTA 6 Console launch: November 19, 2026
const CONSOLE_TARGET = new Date("2026-11-19T00:00:00Z");

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function Countdown() {
  const [time, setTime] = useState(getRemaining());

  function getRemaining() {
    const diff = CONSOLE_TARGET.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, launched: true };
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    return { days, hours, minutes, seconds, launched: false };
  }

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  if (time.launched) {
    return (
      <div className="text-center p-4 border border-primary/30 bg-primary/5 rounded-xl">
        <div className="text-primary font-headline text-2xl">🎮 GTA 6 IS OUT NOW!</div>
        <div className="text-sm text-muted-foreground mt-1">Available on PS5 and Xbox Series X|S</div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 md:p-5">
      <div className="text-xs font-mono text-primary uppercase tracking-widest mb-3 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
        GTA 6 Launch Countdown — November 19, 2026
      </div>
      <div className="grid grid-cols-4 gap-2 md:gap-3">
        {[
          { value: time.days, label: "Days" },
          { value: time.hours, label: "Hours" },
          { value: time.minutes, label: "Mins" },
          { value: time.seconds, label: "Secs" },
        ].map(({ value, label }) => (
          <div key={label} className="bg-background/60 rounded-lg px-2 py-3 text-center border border-primary/20">
            <div className="font-headline text-2xl md:text-3xl text-primary leading-none tabular-nums">
              {pad(value)}
            </div>
            <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest mt-1">{label}</div>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-muted-foreground mt-2 text-center">
        PS5 &amp; Xbox Series X|S · Pre-orders live now · <a href="/gta6/release-date" className="text-primary underline">Full release info →</a>
      </p>
    </div>
  );
}
