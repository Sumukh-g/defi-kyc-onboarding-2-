
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border mt-auto py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-defi-primary to-defi-secondary flex items-center justify-center">
                <span className="text-white font-bold text-xs">IN</span>
              </div>
              <span className="font-bold text-xl">Infine</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Decentralized identity & DeFi wallet for everyone
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-6 mb-4">
              <Link to="/" className="text-sm hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/create-wallet" className="text-sm hover:text-primary transition-colors">
                Create Wallet
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Infine. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
