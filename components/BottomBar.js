export default function BottomBar() {
  return (
    <footer className="relative z-10 flex items-center justify-between px-12 py-[18px] bottom-bar">
      <span className="bottom-brand">moxsend.ai</span>
      <div className="flex gap-6">
        <a href="#" className="bottom-link">Privacy</a>
        <a href="#" className="bottom-link">Contact</a>
        <span className="bottom-link">Stop spraying. Start converting.</span>
      </div>
    </footer>
  )
}
