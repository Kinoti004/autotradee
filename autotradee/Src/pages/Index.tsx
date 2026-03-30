import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import HeroSearch from "@/components/HeroSearch";
import VehicleCard from "@/components/VehicleCard";
import VehicleDetail from "@/components/VehicleDetail";
import { vehicles, priceRanges, Vehicle } from "@/data/vehicles";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMake, setSelectedMake] = useState("All Makes");
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const filtered = useMemo(() => {
    return vehicles.filter((v) => {
      const matchesSearch =
        !searchQuery ||
        v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.model.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesMake = selectedMake === "All Makes" || v.make === selectedMake;

      const range = priceRanges[selectedPrice];
      const matchesPrice = v.price >= range.min && v.price < range.max;

      return matchesSearch && matchesMake && matchesPrice;
    });
  }, [searchQuery, selectedMake, selectedPrice]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSearch
        selectedMake={selectedMake}
        selectedPrice={selectedPrice}
        onMakeChange={setSelectedMake}
        onPriceChange={setSelectedPrice}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="container mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-xl font-bold text-foreground">
            {filtered.length} Vehicle{filtered.length !== 1 ? "s" : ""} Found
          </h2>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((vehicle, i) => (
              <div key={vehicle.id} style={{ animationDelay: `${i * 60}ms` }}>
                <VehicleCard vehicle={vehicle} onClick={setSelectedVehicle} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-muted-foreground font-body">
            <p className="text-lg">No vehicles match your search.</p>
            <p className="text-sm mt-1">Try adjusting your filters.</p>
          </div>
        )}
      </main>

      <footer className="border-t py-8 mt-10">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground font-body">
          © 2026 AutoTrade. All rights reserved.
        </div>
      </footer>

      {selectedVehicle && (
        <VehicleDetail vehicle={selectedVehicle} onClose={() => setSelectedVehicle(null)} />
      )}
    </div>
  );
};

export default Index;
