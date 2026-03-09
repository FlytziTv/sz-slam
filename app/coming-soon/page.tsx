export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-8 max-w-lg w-full text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-[#333] bg-[#111] rounded-full px-4 py-1.5 text-xs text-[#888]">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          En cours de développement
        </div>

        {/* Title */}
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-semibold tracking-tight text-white">
            Portfolio
          </h1>
          <p className="text-[#555] text-base leading-relaxed">
            Je refais entièrement mon portfolio.<br />
            Revenez bientôt.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#1a1a1a]" />

        {/* Footer info */}
        <p className="text-xs text-[#444]">
          SZDev · 2026
        </p>

      </div>
    </div>
  );
}