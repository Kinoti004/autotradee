import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { makes, priceRanges } from "@/data/vehicles";

interface HeroSearchProps {
  selectedMake: string;
  selectedPrice: number;
  onMakeChange: (make: string) => void;
  onPriceChange: (index: number) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const HeroSearch = ({
  selectedMake,
  selectedPrice,
  onMakeChange,
  onPriceChange,
  searchQuery,
  onSearchChange,
}: HeroSearchProps) => {
  return (
    <section className="bg-primary py-16 px-4">
      <div className="container mx-auto text-center">
        <h1 className="font-display text-3xl md:text-4xl font-extrabold text-primary-foreground mb-2">
          Find Your Perfect Vehicle
        </h1>
        <p className="text-primary-foreground/70 font-body mb-8 text-lg">
          Browse thousands of cars from trusted sellers
        </p>

        <div className="bg-card rounded-lg p-4 max-w-3xl mx-auto shadow-xl flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search make, model, or keyword..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-3 h-10 rounded-md border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring font-body"
            />
          </div>

          <select
            value={selectedMake}
            onChange={(e) => onMakeChange(e.target.value)}
            className="h-10 rounded-md border bg-background text-foreground text-sm px-3 focus:outline-none focus:ring-2 focus:ring-ring font-body"
          >
            {makes.map((make) => (
              <option key={make} value={make}>{make}</option>
            ))}
          </select>

          <select
            value={selectedPrice}
            onChange={(e) => onPriceChange(Number(e.target.value))}
            className="h-10 rounded-md border bg-background text-foreground text-sm px-3 focus:outline-none focus:ring-2 focus:ring-ring font-body"
          >
            {priceRanges.map((range, i) => (
              <option key={range.label} value={i}>{range.label}</option>
            ))}
          </select>

          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 h-10 px-6 font-display font-semibold">
            Search
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSearch;
