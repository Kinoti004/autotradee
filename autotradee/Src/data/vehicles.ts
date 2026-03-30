export interface Vehicle {
  id: string;
  title: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  location: string;
  condition: "New" | "Used";
  image: string;
  seller: {
    name: string;
    rating: number;
    phone: string;
  };
  description: string;
}

export const vehicles: Vehicle[] = [
  {
    id: "1",
    title: "2023 Toyota Camry SE",
    make: "Toyota",
    model: "Camry",
    year: 2023,
    price: 28500,
    mileage: 12400,
    fuelType: "Petrol",
    transmission: "Automatic",
    location: "Lagos, Nigeria",
    condition: "Used",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop",
    seller: { name: "AutoMax Motors", rating: 4.8, phone: "+234 801 234 5678" },
    description: "Well-maintained Toyota Camry with full service history. Single owner, accident-free."
  },
  {
    id: "2",
    title: "2024 Honda CR-V Touring",
    make: "Honda",
    model: "CR-V",
    year: 2024,
    price: 42000,
    mileage: 3200,
    fuelType: "Hybrid",
    transmission: "CVT",
    location: "Abuja, Nigeria",
    condition: "New",
    image: "https://images.unsplash.com/photo-1568844293986-8c1a5d10b096?w=600&h=400&fit=crop",
    seller: { name: "City Honda", rating: 4.9, phone: "+234 802 345 6789" },
    description: "Brand new Honda CR-V Touring with premium features. Factory warranty included."
  },
  {
    id: "3",
    title: "2022 Mercedes-Benz C300",
    make: "Mercedes-Benz",
    model: "C300",
    year: 2022,
    price: 55000,
    mileage: 18700,
    fuelType: "Petrol",
    transmission: "Automatic",
    location: "Port Harcourt, Nigeria",
    condition: "Used",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop",
    seller: { name: "Premium Auto Hub", rating: 4.7, phone: "+234 803 456 7890" },
    description: "Luxury sedan in excellent condition. AMG styling package, panoramic roof."
  },
  {
    id: "4",
    title: "2023 Ford Ranger Wildtrak",
    make: "Ford",
    model: "Ranger",
    year: 2023,
    price: 47500,
    mileage: 8900,
    fuelType: "Diesel",
    transmission: "Automatic",
    location: "Lagos, Nigeria",
    condition: "Used",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop",
    seller: { name: "TruckWorld NG", rating: 4.6, phone: "+234 804 567 8901" },
    description: "Powerful pickup truck perfect for work and adventure. Bi-turbo diesel engine."
  },
  {
    id: "5",
    title: "2024 BMW X5 xDrive40i",
    make: "BMW",
    model: "X5",
    year: 2024,
    price: 78000,
    mileage: 1500,
    fuelType: "Petrol",
    transmission: "Automatic",
    location: "Abuja, Nigeria",
    condition: "New",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop",
    seller: { name: "Elite Motors", rating: 5.0, phone: "+234 805 678 9012" },
    description: "Brand new BMW X5 with M Sport package. Full leather interior, head-up display."
  },
  {
    id: "6",
    title: "2021 Lexus RX 350",
    make: "Lexus",
    model: "RX 350",
    year: 2021,
    price: 52000,
    mileage: 25000,
    fuelType: "Petrol",
    transmission: "Automatic",
    location: "Ibadan, Nigeria",
    condition: "Used",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
    seller: { name: "Luxury Lane Autos", rating: 4.5, phone: "+234 806 789 0123" },
    description: "Reliable luxury SUV with premium sound system. Regular maintenance at dealer."
  },
];

export const makes = ["All Makes", "Toyota", "Honda", "Mercedes-Benz", "Ford", "BMW", "Lexus"];
export const priceRanges = [
  { label: "Any Price", min: 0, max: Infinity },
  { label: "Under ₦30M", min: 0, max: 30000 },
  { label: "₦30M - ₦50M", min: 30000, max: 50000 },
  { label: "₦50M - ₦80M", min: 50000, max: 80000 },
  { label: "Over ₦80M", min: 80000, max: Infinity },
];
