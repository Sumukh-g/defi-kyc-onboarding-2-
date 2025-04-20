
import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-6 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-defi-primary to-defi-secondary flex items-center justify-center">
            <span className="text-white font-bold text-xs">IN</span>
          </div>
          <span className="font-bold text-xl">Infine</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/create-wallet" className="font-medium hover:text-primary transition-colors">
            Create Wallet
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-full"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background z-40 border-b border-border md:hidden">
          <nav className="container mx-auto py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium hover:text-primary transition-colors px-6 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="font-medium hover:text-primary transition-colors px-6 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/create-wallet" 
              className="font-medium hover:text-primary transition-colors px-6 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Create Wallet
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
