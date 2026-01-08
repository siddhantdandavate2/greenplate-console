import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Check,
  CreditCard,
  MapPin,
  Calendar,
  Clock,
  Shield,
  ChevronRight,
  Smartphone,
  Building2,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomerLayout } from "@/components/layout/CustomerLayout";
import { useToast } from "@/hooks/use-toast";

const deliverySlots = [
  { id: "morning", label: "Morning", time: "7:00 AM - 10:00 AM" },
  { id: "afternoon", label: "Afternoon", time: "12:00 PM - 3:00 PM" },
  { id: "evening", label: "Evening", time: "6:00 PM - 9:00 PM" },
];

const orderTypes = [
  { id: "one-time", label: "One-Time Order", description: "Single delivery" },
  { id: "weekly", label: "Weekly Subscription", description: "₹2,499/week - Save 15%" },
  { id: "monthly", label: "Monthly Subscription", description: "₹8,999/month - Save 25%" },
];

const paymentMethods = [
  { id: "upi", label: "UPI", icon: Smartphone, description: "Google Pay, PhonePe, Paytm" },
  { id: "card", label: "Credit/Debit Card", icon: CreditCard, description: "Visa, Mastercard, RuPay" },
  { id: "netbanking", label: "Net Banking", icon: Building2, description: "All major banks" },
  { id: "wallet", label: "Wallets", icon: Wallet, description: "Paytm, Amazon Pay" },
];

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });
  const [selectedSlot, setSelectedSlot] = useState("morning");
  const [selectedDate, setSelectedDate] = useState("");
  const [orderType, setOrderType] = useState("one-time");
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [couponApplied] = useState(true);
  const { toast } = useToast();

  const subtotal = 1696;
  const discount = couponApplied ? 339 : 0;
  const deliveryFee = 0;
  const total = subtotal - discount + deliveryFee;

  const handlePlaceOrder = () => {
    toast({
      title: "Order Placed Successfully! 🎉",
      description: "You will receive a confirmation email shortly.",
    });
  };

  const steps = [
    { id: 1, label: "Delivery Details", icon: MapPin },
    { id: 2, label: "Delivery Slot", icon: Calendar },
    { id: 3, label: "Order Type", icon: Clock },
    { id: 4, label: "Payment", icon: CreditCard },
  ];

  return (
    <CustomerLayout cartItemCount={4} showAnnouncement={false}>
      <div className="bg-muted/30 min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 md:gap-8">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`flex items-center gap-2 ${
                      currentStep >= step.id ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        currentStep > step.id
                          ? "bg-primary text-primary-foreground"
                          : currentStep === step.id
                          ? "bg-primary/10 border-2 border-primary"
                          : "bg-muted"
                      }`}
                    >
                      {currentStep > step.id ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <step.icon className="w-5 h-5" />
                      )}
                    </div>
                    <span className="hidden md:block text-sm font-medium">{step.label}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <ChevronRight className="w-5 h-5 text-muted-foreground mx-2" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step 1: Delivery Details */}
                {currentStep === 1 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        Delivery Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            value={deliveryDetails.name}
                            onChange={(e) =>
                              setDeliveryDetails({ ...deliveryDetails, name: e.target.value })
                            }
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            placeholder="+91 98765 43210"
                            value={deliveryDetails.phone}
                            onChange={(e) =>
                              setDeliveryDetails({ ...deliveryDetails, phone: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={deliveryDetails.email}
                          onChange={(e) =>
                            setDeliveryDetails({ ...deliveryDetails, email: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="address">Delivery Address</Label>
                        <Input
                          id="address"
                          placeholder="Flat/House No., Building, Street"
                          value={deliveryDetails.address}
                          onChange={(e) =>
                            setDeliveryDetails({ ...deliveryDetails, address: e.target.value })
                          }
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            placeholder="Mumbai"
                            value={deliveryDetails.city}
                            onChange={(e) =>
                              setDeliveryDetails({ ...deliveryDetails, city: e.target.value })
                            }
                          />
                        </div>
                        <div>
                          <Label htmlFor="pincode">Pincode</Label>
                          <Input
                            id="pincode"
                            placeholder="400001"
                            value={deliveryDetails.pincode}
                            onChange={(e) =>
                              setDeliveryDetails({ ...deliveryDetails, pincode: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      <Button className="w-full" onClick={() => setCurrentStep(2)}>
                        Continue to Delivery Slot
                        <ChevronRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                )}

                {/* Step 2: Delivery Slot */}
                {currentStep === 2 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        Choose Delivery Slot
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <Label>Select Date</Label>
                        <Input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          min={new Date().toISOString().split("T")[0]}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label>Select Time Slot</Label>
                        <RadioGroup
                          value={selectedSlot}
                          onValueChange={setSelectedSlot}
                          className="grid md:grid-cols-3 gap-4 mt-2"
                        >
                          {deliverySlots.map((slot) => (
                            <Label
                              key={slot.id}
                              htmlFor={slot.id}
                              className={`flex flex-col items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                selectedSlot === slot.id
                                  ? "border-primary bg-primary/5"
                                  : "border-border hover:border-primary/50"
                              }`}
                            >
                              <RadioGroupItem value={slot.id} id={slot.id} className="sr-only" />
                              <Clock className="w-6 h-6 mb-2 text-primary" />
                              <span className="font-medium">{slot.label}</span>
                              <span className="text-sm text-muted-foreground">{slot.time}</span>
                            </Label>
                          ))}
                        </RadioGroup>
                      </div>
                      <div className="flex gap-4">
                        <Button variant="outline" onClick={() => setCurrentStep(1)}>
                          Back
                        </Button>
                        <Button className="flex-1" onClick={() => setCurrentStep(3)}>
                          Continue
                          <ChevronRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Step 3: Order Type */}
                {currentStep === 3 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        Select Order Type
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <RadioGroup
                        value={orderType}
                        onValueChange={setOrderType}
                        className="space-y-4"
                      >
                        {orderTypes.map((type) => (
                          <Label
                            key={type.id}
                            htmlFor={type.id}
                            className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all ${
                              orderType === type.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <RadioGroupItem value={type.id} id={type.id} />
                              <div>
                                <p className="font-medium">{type.label}</p>
                                <p className="text-sm text-muted-foreground">{type.description}</p>
                              </div>
                            </div>
                            {type.id !== "one-time" && (
                              <span className="text-xs bg-success/10 text-success px-2 py-1 rounded">
                                Best Value
                              </span>
                            )}
                          </Label>
                        ))}
                      </RadioGroup>
                      <div className="flex gap-4">
                        <Button variant="outline" onClick={() => setCurrentStep(2)}>
                          Back
                        </Button>
                        <Button className="flex-1" onClick={() => setCurrentStep(4)}>
                          Continue to Payment
                          <ChevronRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Step 4: Payment */}
                {currentStep === 4 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5" />
                        Payment Method
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <RadioGroup
                        value={paymentMethod}
                        onValueChange={setPaymentMethod}
                        className="space-y-4"
                      >
                        {paymentMethods.map((method) => (
                          <Label
                            key={method.id}
                            htmlFor={method.id}
                            className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                              paymentMethod === method.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <RadioGroupItem value={method.id} id={method.id} />
                            <method.icon className="w-6 h-6 text-primary" />
                            <div>
                              <p className="font-medium">{method.label}</p>
                              <p className="text-sm text-muted-foreground">{method.description}</p>
                            </div>
                          </Label>
                        ))}
                      </RadioGroup>

                      <div className="bg-muted/50 rounded-lg p-4 flex items-center gap-3">
                        <Shield className="w-5 h-5 text-success" />
                        <p className="text-sm text-muted-foreground">
                          Your payment is secured with 256-bit SSL encryption
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <Button variant="outline" onClick={() => setCurrentStep(3)}>
                          Back
                        </Button>
                        <Button className="flex-1" size="lg" onClick={handlePlaceOrder}>
                          Place Order - ₹{total}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            </div>

            {/* Order Summary Sidebar */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Mediterranean Quinoa Bowl × 2</span>
                      <span>₹698</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Grilled Chicken Power Bowl × 1</span>
                      <span>₹449</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Salmon Poke Bowl × 1</span>
                      <span>₹549</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-success">
                        <span>Discount (FIRST20)</span>
                        <span>-₹{discount}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Delivery</span>
                      <span className="text-success">FREE</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </CustomerLayout>
  );
}
