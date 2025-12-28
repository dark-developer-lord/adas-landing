"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Package, Search, Truck, CheckCircle2, Clock, 
  MapPin, Calendar, Mail, Phone, AlertCircle 
} from "lucide-react";
import Link from "next/link";

type Order = {
  id: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string | null;
  customerAddress: string | null;
  customerCity: string | null;
  customerCountry: string | null;
  customerZip: string | null;
  product: string;
  plan: string;
  totalAmount: number;
  status: string;
  paymentStatus: string;
  trackingNumber: string | null;
  createdAt: string;
  updatedAt: string;
};

export default function TrackOrderPage() {
  const [searchType, setSearchType] = useState<"orderNumber" | "email">("orderNumber");
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setOrders([]);

    try {
      const params = new URLSearchParams();
      if (searchType === "email") {
        params.append("email", searchValue);
      } else {
        params.append("orderNumber", searchValue);
      }

      const response = await fetch(`/api/orders?${params.toString()}`);
      const data = await response.json();

      if (data.success) {
        if (data.orders && data.orders.length > 0) {
          setOrders(data.orders);
        } else if (data.order) {
          setOrders([data.order]);
        } else {
          setError("No orders found. Please check your order number or email.");
        }
      } else {
        setError(data.error || "Failed to find order");
      }
    } catch (err) {
      setError("Failed to track order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getStatusProgress = (status: string): number => {
    const statusMap: Record<string, number> = {
      pending: 25,
      processing: 50,
      shipped: 75,
      delivered: 100,
      cancelled: 0,
    };
    return statusMap[status.toLowerCase()] || 0;
  };

  const getStatusColor = (status: string): string => {
    const colorMap: Record<string, string> = {
      pending: "text-yellow-500",
      processing: "text-blue-500",
      shipped: "text-purple-500",
      delivered: "text-green-500",
      cancelled: "text-red-500",
    };
    return colorMap[status.toLowerCase()] || "text-muted-foreground";
  };

  const getStatusIcon = (status: string) => {
    const iconMap: Record<string, any> = {
      pending: Clock,
      processing: Package,
      shipped: Truck,
      delivered: CheckCircle2,
      cancelled: AlertCircle,
    };
    const Icon = iconMap[status.toLowerCase()] || Clock;
    return <Icon className={`h-8 w-8 ${getStatusColor(status)}`} />;
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 md:px-6 container mx-auto">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Package className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Track Your Order</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enter your order number or email address to track your shipment
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="glass-card depth-card border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Find Your Order
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="flex gap-2 mb-4">
                  <Button
                    type="button"
                    variant={searchType === "orderNumber" ? "default" : "outline"}
                    onClick={() => setSearchType("orderNumber")}
                    className="flex-1"
                  >
                    Order Number
                  </Button>
                  <Button
                    type="button"
                    variant={searchType === "email" ? "default" : "outline"}
                    onClick={() => setSearchType("email")}
                    className="flex-1"
                  >
                    Email Address
                  </Button>
                </div>

                <div className="flex gap-2">
                  <Input
                    type={searchType === "email" ? "email" : "text"}
                    placeholder={
                      searchType === "email"
                        ? "Enter your email address"
                        : "Enter your order number (e.g., ORD-123456)"
                    }
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button type="submit" disabled={loading} size="lg">
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Searching...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Search className="h-4 w-4" />
                        Track
                      </span>
                    )}
                  </Button>
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-lg text-sm">
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    {error}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Order Results */}
        {orders.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {orders.map((order, index) => (
              <Card key={order.id} className="glass-card depth-card border-2">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">
                        Order #{order.orderNumber}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Placed on {new Date(order.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">
                        ${order.totalAmount.toLocaleString()}
                      </p>
                      <p className="text-sm text-muted-foreground capitalize">
                        Payment: {order.paymentStatus}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Status Progress */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(order.status)}
                        <div>
                          <p className="font-semibold text-lg capitalize">
                            {order.status}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Current Status
                          </p>
                        </div>
                      </div>
                      {order.trackingNumber && (
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Tracking #</p>
                          <p className="font-mono font-semibold">
                            {order.trackingNumber}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Progress Bar */}
                    {order.status !== "cancelled" && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className={getStatusProgress(order.status) >= 25 ? "text-primary font-medium" : "text-muted-foreground"}>
                            Order Placed
                          </span>
                          <span className={getStatusProgress(order.status) >= 50 ? "text-primary font-medium" : "text-muted-foreground"}>
                            Processing
                          </span>
                          <span className={getStatusProgress(order.status) >= 75 ? "text-primary font-medium" : "text-muted-foreground"}>
                            Shipped
                          </span>
                          <span className={getStatusProgress(order.status) === 100 ? "text-primary font-medium" : "text-muted-foreground"}>
                            Delivered
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${getStatusProgress(order.status)}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Order Details Grid */}
                  <div className="grid md:grid-cols-2 gap-6 pt-4 border-t">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                          <Package className="h-4 w-4" />
                          Product Details
                        </h3>
                        <div className="space-y-1 text-sm">
                          <p className="font-medium">{order.product}</p>
                          <p className="text-muted-foreground">{order.plan}</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          Contact Information
                        </h3>
                        <div className="space-y-1 text-sm">
                          <p>{order.customerEmail}</p>
                          {order.customerPhone && <p>{order.customerPhone}</p>}
                        </div>
                      </div>
                    </div>

                    {order.customerAddress && (
                      <div>
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          Shipping Address
                        </h3>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p>{order.customerAddress}</p>
                          <p>
                            {order.customerCity}, {order.customerZip}
                          </p>
                          <p>{order.customerCountry}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Estimated Delivery */}
                  {order.status === "shipped" && (
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-semibold">Estimated Delivery</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(
                              new Date(order.updatedAt).getTime() + 5 * 24 * 60 * 60 * 1000
                            ).toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </motion.div>
        )}

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center space-y-4 pt-8"
        >
          <p className="text-muted-foreground">
            Need help with your order?
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
