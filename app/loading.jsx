export default function Loading() {
  return (
    <main className="grid min-h-svh place-items-center bg-zinc-950 px-5 text-white">
      <div className="flex w-full max-w-[18rem] flex-col items-center text-center">
        <div className="relative mb-7 grid h-24 w-24 place-items-center">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-2 rounded-full border border-blue-400/30" />
          <div className="site-loader-orbit absolute inset-0 rounded-full">
            <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-blue-300 shadow-[0_0_24px_rgba(147,197,253,0.9)]" />
          </div>
          <div className="site-loader-pulse h-11 w-11 rounded-full bg-gradient-to-br from-blue-300 via-white to-zinc-300 shadow-[0_0_48px_rgba(96,165,250,0.45)]" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-200/80">
          German Losada
        </p>
        <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-white/10">
          <div className="site-loader-bar h-full rounded-full bg-gradient-to-r from-blue-300 via-white to-blue-400" />
        </div>
      </div>
    </main>
  )
}
