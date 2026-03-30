import { Fuel, Gauge, Calendar } from "lucide-react";
import { Vehicle } from "@/data/vehicles";
import { Badge } from "@/components/ui/badge";

interface VehicleCardProps {
  vehicle: Vehicle;
  onClick: (vehicle: Vehicle) => void;
}

const VehicleCard = ({ vehicle, onClick }: VehicleCardProps) => {
  return (
    <div
      onClick={() => onClick(vehicle)}
      className="group bg-card rounded-lg border overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200 animate-fade-in"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <Badge
          className={`absolute top-3 left-3 text-xs font-semibold ${
            vehicle.condition === "New"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground"
          }`}
        >
          {vehicle.condition}
        </Badge>
        <div className="absolute bottom-3 right-3 bg-price text-price-foreground px-3 py-1 rounded-md font-display font-bold text-sm">
          ${vehicle.price.toLocaleString()}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-display font-semibold text-foreground truncate">{vehicle.title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{vehicle.location}</p>

        <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {vehicle.year}
          </span>
          <span className="flex items-center gap-1">
            <Gauge className="h-3.5 w-3.5" />
            {vehicle.mileage.toLocaleString()} mi
          </span>
          <span className="flex items-center gap-1">
            <Fuel className="h-3.5 w-3.5" />
            {vehicle.fuelType}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
