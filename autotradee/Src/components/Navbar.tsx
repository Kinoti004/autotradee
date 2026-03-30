import { Car, Plus, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b bg-card sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <Car className="h-7 w-7 text-primary" />
          <span className="font-display text-xl font-bold text-foreground">AutoTrade</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 font-body text-sm font-medium text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Buy</Link>
          <Link to="/sell" className="hover:text-foreground transition-colors">Sell</Link>
          <Link to="/auctions" className="hover:text-foreground transition-colors">Auctions</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/signin">
            <Button variant="outline" size="sm" className="hidden sm:flex gap-1.5">
              <User className="h-4 w-4" />
              Sign In
            </Button>
          </Link>
          <Button size="sm" className="gap-1.5 bg-accent text-accent-foreground hover:bg-accent/90">
            <Plus className="h-4 w-4" />
            Post Listing
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
