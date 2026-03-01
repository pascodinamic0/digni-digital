export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="w-14 h-14 relative flex items-center justify-center animate-pulse">
          <div className="absolute w-7 h-10 bg-accent transform -skew-x-12 -translate-x-0.5 rounded-sm" style={{ opacity: 0.9 }} />
          <div className="absolute w-7 h-10 bg-accent transform skew-x-12 translate-x-0.5 rounded-sm" style={{ opacity: 0.4 }} />
        </div>
        <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
      </div>
    </main>
  )
}
