import { personal } from '../data';

export default function Navbar() {
  return (
    <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center absolute top-0 left-0 right-0 z-50">
      <div className="text-white font-heading font-bold text-2xl tracking-tighter hover:text-brand transition-colors cursor-pointer">
        {personal.shortName}
      </div>
      <div className="hidden md:flex gap-8 text-sm font-body font-medium text-white/80">
        <a href="#about" className="hover:text-brand transition-colors">About</a>
        <a href="#skills" className="hover:text-brand transition-colors">Skills</a>
        <a href="#projects" className="hover:text-brand transition-colors">Projects</a>
        <a href="#contact" className="hover:text-brand transition-colors">Contact</a>
      </div>
    </nav>
  );
}