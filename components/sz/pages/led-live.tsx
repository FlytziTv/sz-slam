export default function LedLive() {
  return (
    <div className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-szcolor opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-szcolor shadow-[0_0_15px_rgba(var(--szcolor-rgb),1)]"></span>
    </div>
  );
}
