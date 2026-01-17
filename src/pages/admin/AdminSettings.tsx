import { Settings, Store, CreditCard, Bell, Shield, Palette } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { AdminLayout } from "@/components/layout/AdminLayout";

export default function AdminSettings() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div><h1 className="text-2xl font-display font-bold">Settings</h1><p className="text-muted-foreground">Configure your store</p></div>
        
        <div className="grid gap-6">
          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><Store className="w-5 h-5" />Business Details</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div><Label>Business Name</Label><Input defaultValue="Sathvik Salad" /></div>
                <div><Label>Contact Email</Label><Input defaultValue="support@satviksalad.com" /></div>
                <div><Label>Phone Number</Label><Input defaultValue="+91 98765 43210" /></div>
                <div><Label>GST Number</Label><Input defaultValue="27AABCT1234A1ZT" /></div>
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><CreditCard className="w-5 h-5" />Payment Settings</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {[{ label: "UPI Payments", enabled: true }, { label: "Credit/Debit Cards", enabled: true }, { label: "Net Banking", enabled: true }, { label: "Wallets", enabled: false }].map((method) => (
                <div key={method.label} className="flex items-center justify-between p-3 border rounded-lg"><span>{method.label}</span><Switch defaultChecked={method.enabled} /></div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><Bell className="w-5 h-5" />Notifications</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {[{ label: "Email notifications for new orders", enabled: true }, { label: "SMS alerts for low inventory", enabled: true }, { label: "Push notifications", enabled: false }].map((notif) => (
                <div key={notif.label} className="flex items-center justify-between p-3 border rounded-lg"><span>{notif.label}</span><Switch defaultChecked={notif.enabled} /></div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
