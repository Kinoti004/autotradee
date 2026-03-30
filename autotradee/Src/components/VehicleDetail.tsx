import { X, Phone, Star, MapPin, Fuel, Gauge, Calendar, Settings2 } from "lucide-react";
import { Vehicle } from "@/data/vehicles";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface VehicleDetailProps {
  vehicle: Vehicle;
  onClose: () => void;
}

const VehicleDetail = ({ vehicle, onClose }: VehicleDetailProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-foreground/40 flex items-start justify-center pt-8 pb-8 overflow-y-auto">
      <div className="bg-card rounded-lg max-w-4xl w-full mx-4 shadow-2xl animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-display font-bold text-lg text-foreground">{vehicle.title}</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="md:flex">
          {/* Image */}
          <div className="md:w-3/5">
            <img src={vehicle.image} alt={vehicle.title} className="w-full aspect-[4/3] object-cover" />
          </div>

          {/* Details */}
          <div className="md:w-2/5 p-6 flex flex-col gap-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className={vehicle.condition === "New" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}>
                  {vehicle.condition}
                </Badge>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {vehicle.location}
                </span>
              </div>
              <p className="font-display text-2xl font-extrabold text-price">${vehicle.price.toLocaleString()}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm font-body">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" /> <span>{vehicle.year}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Gauge className="h-4 w-4" /> <span>{vehicle.mileage.toLocaleString()} mi</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Fuel className="h-4 w-4" /> <span>{vehicle.fuelType}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Settings2 className="h-4 w-4" /> <span>{vehicle.transmission}</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground font-body leading-relaxed">{vehicle.description}</p>

            {/* Seller */}
            <div className="border rounded-md p-4 bg-muted/50">
              <div className="flex items-center justify-between mb-2">
                <span className="font-display font-semibold text-foreground text-sm">{vehicle.seller.name}</span>
                <span className="flex items-center gap-1 text-sm text-accent">
                  <Star className="h-3.5 w-3.5 fill-accent" /> {vehicle.seller.rating}
                </span>
              </div>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 gap-2 font-display font-semibold">
                <Phone className="h-4 w-4" />
                Contact Seller
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;
