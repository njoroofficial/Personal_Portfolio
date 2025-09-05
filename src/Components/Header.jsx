// Header section component

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-lg">
      <div className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Moses Njoroge</div>
          <nav className="flex items-center text-primary gap-8">
            <button className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button className="text-muted-foreground hover:text-primary transition-colors">
              About
            </button>
            <button className="text-muted-foreground hover:text-primary transition-colors">
              Skills
            </button>
            <button className="text-muted-foreground hover:text-primary transition-colors">
              Blog
            </button>
            <button className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
