import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Gavel, Clock, TrendingUp, DollarSign } from "lucide-react";

interface Auction {
  id: string;
  vehicleTitle: string;
  currentBid: number;
  startingBid: number;
  endTime: string;
  bidCount: number;
  status: "active" | "ending soon" | "ended";
  image?: string;
}

const mockAuctions: Auction[] = [
  {
    id: "1",
    vehicleTitle: "2020 BMW 328i",
    currentBid: 18500,
    startingBid: 15000,
    endTime: "2 hours",
    bidCount: 12,
    status: "ending soon",
  },
  {
    id: "2",
    vehicleTitle: "2019 Toyota Camry",
    currentBid: 16200,
    startingBid: 14000,
    endTime: "1 day",
    bidCount: 8,
    status: "active",
  },
  {
    id: "3",
    vehicleTitle: "2021 Honda Civic",
    currentBid: 19500,
    startingBid: 17000,
    endTime: "3 days",
    bidCount: 15,
    status: "active",
  },
];

const AuctioningDashboard = () => {
  const [activeTab, setActiveTab] = useState("active");

  const filteredAuctions = mockAuctions.filter((auction) => {
    if (activeTab === "active") return auction.status === "active" || auction.status === "ending soon";
    if (activeTab === "ended") return auction.status === "ended";
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "ending soon":
        return "bg-orange-100 text-orange-800";
      case "ended":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">Auctioning Dashboard</h1>
          <p className="text-muted-foreground">Manage and track vehicle auctions in real-time</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Auctions</p>
                  <p className="font-display text-2xl font-bold">{mockAuctions.filter(a => a.status !== "ended").length}</p>
                </div>
                <Gavel className="h-8 w-8 text-primary opacity-50" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Bids</p>
                  <p className="font-display text-2xl font-bold">{mockAuctions.reduce((sum, a) => sum + a.bidCount, 0)}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-primary opacity-50" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Highest Bid</p>
                  <p className="font-display text-2xl font-bold">${Math.max(...mockAuctions.map(a => a.currentBid)).toLocaleString()}</p>
                </div>
                <DollarSign className="h-8 w-8 text-primary opacity-50" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Ending Soon</p>
                  <p className="font-display text-2xl font-bold">{mockAuctions.filter(a => a.status === "ending soon").length}</p>
                </div>
                <Clock className="h-8 w-8 text-primary opacity-50" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Auctions List */}
        <Card>
          <CardHeader>
            <CardTitle>Active Auctions</CardTitle>
            <CardDescription>Real-time auction listings</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="active" onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="ended">Ended</TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab} className="space-y-4">
                {filteredAuctions.length > 0 ? (
                  filteredAuctions.map((auction) => (
                    <div key={auction.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-display font-bold text-foreground">{auction.vehicleTitle}</h3>
                          <Badge className={`mt-2 ${getStatusColor(auction.status)}`}>{auction.status}</Badge>
                        </div>
                        <Button variant="outline" size="sm">
                          Place Bid
                        </Button>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Current Bid</p>
                          <p className="font-bold text-foreground">${auction.currentBid.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Starting Bid</p>
                          <p className="font-bold text-foreground">${auction.startingBid.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Time Left</p>
                          <p className="font-bold text-foreground">{auction.endTime}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Bids</p>
                          <p className="font-bold text-foreground">{auction.bidCount}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No auctions in this category</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AuctioningDashboard;
