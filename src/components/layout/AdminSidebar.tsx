import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingBag,
  RefreshCcw,
  UtensilsCrossed,
  Users,
  CreditCard,
  Truck,
  Megaphone,
  Package,
  Star,
  BarChart3,
  HeadphonesIcon,
  UserCog,
  Settings,
  Leaf,
  ChevronDown,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const mainMenuItems = [
  { title: "Dashboard", url: "/admin", icon: LayoutDashboard },
  { title: "Orders", url: "/admin/orders", icon: ShoppingBag },
  { title: "Subscriptions", url: "/admin/subscriptions", icon: RefreshCcw },
  { title: "Menu Management", url: "/admin/menu", icon: UtensilsCrossed },
  { title: "Customers", url: "/admin/customers", icon: Users },
  { title: "Payments", url: "/admin/payments", icon: CreditCard },
];

const operationsItems = [
  { title: "Delivery & Slots", url: "/admin/delivery", icon: Truck },
  { title: "Inventory", url: "/admin/inventory", icon: Package },
];

const marketingItems = [
  { title: "Marketing & Ads", url: "/admin/marketing", icon: Megaphone },
  { title: "Reviews", url: "/admin/reviews", icon: Star },
  { title: "Analytics", url: "/admin/analytics", icon: BarChart3 },
];

const settingsItems = [
  { title: "Support", url: "/admin/support", icon: HeadphonesIcon },
  { title: "Staff & Roles", url: "/admin/staff", icon: UserCog },
  { title: "Settings", url: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const location = useLocation();
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/admin") {
      return location.pathname === "/admin";
    }
    return location.pathname.startsWith(path);
  };

  const renderMenuItem = (item: { title: string; url: string; icon: any }) => (
    <SidebarMenuItem key={item.url}>
      <SidebarMenuButton
        asChild
        isActive={isActive(item.url)}
        tooltip={collapsed ? item.title : undefined}
      >
        <Link to={item.url} className="flex items-center gap-3">
          <item.icon className="h-4 w-4 shrink-0" />
          {!collapsed && <span>{item.title}</span>}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <Link to="/admin" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
            <Leaf className="w-4 h-4 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm">Lovable Greens</span>
              <span className="text-xs text-muted-foreground">Admin Console</span>
            </div>
          )}
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        {/* Main Menu */}
        <SidebarGroup>
          {!collapsed && <SidebarGroupLabel>Main Menu</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map(renderMenuItem)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Operations */}
        <SidebarGroup>
          {!collapsed && <SidebarGroupLabel>Operations</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {operationsItems.map(renderMenuItem)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Marketing */}
        <SidebarGroup>
          {!collapsed && <SidebarGroupLabel>Marketing</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {marketingItems.map(renderMenuItem)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings */}
        <SidebarGroup>
          {!collapsed && <SidebarGroupLabel>Settings</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map(renderMenuItem)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
