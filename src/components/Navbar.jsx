
export default function Navbar() {
  return (
    <div className="w-full flex justify-center fixed top-6 z-50 px-4">
      <nav className="w-full max-w-4xl bg-bg2/90 backdrop-blur-md px-6 py-4 rounded-full border border-white/5 flex justify-between items-center shadow-lg">
        <div className="text-white font-heading font-bold text-xl tracking-tighter bg-white/10 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-white/20 transition-colors">
          ks
        </div>
        <div className="hidden md:flex gap-8 text-sm font-body font-medium text-white/70">
          <a href="#about" className="hover:text-white transition-colors">Home</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a href="#contact" className="bg-white/10 text-white px-6 py-2 rounded-full font-body font-semibold text-sm hover:bg-white/20 transition-all border border-white/5 hover:scale-105">
          Let's Talk
        </a>
      </nav>
    </div>
  );
}