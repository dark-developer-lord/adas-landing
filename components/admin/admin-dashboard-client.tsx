"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  FileText, Layers, Users, MessageSquare, Briefcase, 
  Plus, Trash2, Edit, Check, X, Search, ShoppingCart, Clock, Package 
} from "lucide-react";
import { createPost, deletePost, createPage, deletePage, deleteContactSubmission, deleteJobApplication, updateOrderStatus, updateOrderTracking, updatePaymentStatus, deleteOrder, updatePreOrderStatus, convertPreOrderToOrder, deletePreOrder } from "@/app/actions/admin";
import { LogoutButton } from "@/components/admin/logout-button";
import { PageConstructor } from "@/components/admin/page-constructor";

// Types (mirroring Prisma models for client usage)
type Post = { id: string; title: string; slug: string; category: string; published: boolean; createdAt: Date };
type Page = { id: string; title: string; slug: string; category: string; description: string; createdAt: Date };
type Contact = { id: string; name: string; email: string; subject: string | null; message: string; createdAt: Date };
type Application = { id: string; name: string; email: string; jobTitle: string; createdAt: Date };
type Order = {
  id: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  product: string;
  plan: string;
  totalAmount: number;
  paymentStatus: string;
  status: string;
  trackingNumber: string | null;
  createdAt: Date;
};
type PreOrder = {
  id: string;
  customerName: string;
  customerEmail: string;
  product: string;
  plan: string;
  estimatedPrice: number;
  status: string;
  createdAt: Date;
};

interface AdminDashboardProps {
  userEmail: string | null | undefined;
  stats: {
    totalPages: number;
    contactCount: number;
    applicationCount: number;
    postCount: number;
    orderCount: number;
    preOrderCount: number;
  };
  posts: Post[];
  pages: Page[];
  contacts: Contact[];
  applications: Application[];
  orders: Order[];
  preOrders: PreOrder[];
}

export function AdminDashboardClient({ 
  userEmail, stats, posts, pages, contacts, applications, orders, preOrders 
}: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [editingTracking, setEditingTracking] = useState<string | null>(null);
  const [trackingNumbers, setTrackingNumbers] = useState<Record<string, string>>({});

  return (
    <div className="space-y-8 p-6 md:p-8 pt-24 container mx-auto min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-border/50">
        <div>
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-2 text-lg">Manage your content, blog, and inquiries.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm text-muted-foreground hidden md:block px-4 py-2 rounded-full bg-muted/50">
            Logged in as <span className="font-semibold text-foreground">{userEmail}</span>
          </div>
          <LogoutButton />
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-7 lg:w-auto bg-muted/50 p-1 rounded-lg">
          <TabsTrigger value="overview" className="data-[state=active]:bg-background data-[state=active]:shadow-md">Overview</TabsTrigger>
          <TabsTrigger value="orders" className="data-[state=active]:bg-background data-[state=active]:shadow-md">Orders</TabsTrigger>
          <TabsTrigger value="pre-orders" className="data-[state=active]:bg-background data-[state=active]:shadow-md">Pre-Orders</TabsTrigger>
          <TabsTrigger value="blog" className="data-[state=active]:bg-background data-[state=active]:shadow-md">Blog</TabsTrigger>
          <TabsTrigger value="pages" className="data-[state=active]:bg-background data-[state=active]:shadow-md">Pages</TabsTrigger>
          <TabsTrigger value="inquiries" className="data-[state=active]:bg-background data-[state=active]:shadow-md">Inquiries</TabsTrigger>
          <TabsTrigger value="settings" className="data-[state=active]:bg-background data-[state=active]:shadow-md">Settings</TabsTrigger>
        </TabsList>

        {/* OVERVIEW TAB */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-6">
            <StatsCard title="Total Pages" value={stats.totalPages} icon={Layers} />
            <StatsCard title="Blog Posts" value={stats.postCount} icon={FileText} />
            <StatsCard title="Orders" value={stats.orderCount} icon={ShoppingCart} />
            <StatsCard title="Pre-Orders" value={stats.preOrderCount} icon={Clock} />
            <StatsCard title="Inquiries" value={stats.contactCount} icon={MessageSquare} />
            <StatsCard title="Applications" value={stats.applicationCount} icon={Briefcase} />
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 glass-card">
              <CardHeader>
                <CardTitle>Recent Inquiries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contacts.slice(0, 5).map((contact) => (
                    <div key={contact.id} className="flex items-center justify-between border-b border-border/50 pb-2 last:border-0">
                      <div>
                        <p className="font-medium">{contact.name}</p>
                        <p className="text-sm text-muted-foreground">{contact.email}</p>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                  {contacts.length === 0 && <p className="text-muted-foreground text-sm">No inquiries yet.</p>}
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-3 glass-card">
              <CardHeader>
                <CardTitle>Recent Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applications.slice(0, 5).map((app) => (
                    <div key={app.id} className="flex items-center justify-between border-b border-border/50 pb-2 last:border-0">
                      <div>
                        <p className="font-medium">{app.name}</p>
                        <p className="text-sm text-muted-foreground">{app.jobTitle}</p>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(app.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                  {applications.length === 0 && <p className="text-muted-foreground text-sm">No applications yet.</p>}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* ORDERS TAB */}
        <TabsContent value="orders" className="space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-border/50">
            <div>
              <h2 className="text-3xl font-bold">Orders</h2>
              <p className="text-sm text-muted-foreground mt-1">Manage customer orders and shipments</p>
            </div>
            <div className="flex items-center gap-2">
              <Input type="text" placeholder="Search orders..." className="w-64" />
              <Button variant="outline" size="icon"><Search className="h-4 w-4" /></Button>
            </div>
          </div>

          <div className="grid gap-4">
            {orders.map((order) => (
              <Card key={order.id} className="glass-card hover-lift border-border/50 hover:border-primary/30 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-bold text-lg">Order #{order.orderNumber}</h3>
                        <StatusBadge status={order.status} />
                        <PaymentStatusBadge status={order.paymentStatus} />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Customer</p>
                          <p className="font-medium">{order.customerName}</p>
                          <p className="text-muted-foreground">{order.customerEmail}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Product</p>
                          <p className="font-medium">{order.product}</p>
                          <p className="text-muted-foreground">{order.plan}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 text-sm">
                        <div>
                          <p className="text-muted-foreground">Total Amount</p>
                          <p className="font-bold text-lg text-primary">${order.totalAmount.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Order Date</p>
                          <p className="font-medium">{new Date(order.createdAt).toLocaleDateString()}</p>
                        </div>
                        <div className="flex-1">
                          <p className="text-muted-foreground mb-1">Tracking Number</p>
                          {editingTracking === order.id ? (
                            <form
                              action={async (formData) => {
                                await updateOrderTracking(order.id, formData.get("tracking") as string);
                                setEditingTracking(null);
                              }}
                              className="flex gap-2"
                            >
                              <Input
                                name="tracking"
                                placeholder="Enter tracking number"
                                defaultValue={order.trackingNumber || ""}
                                className="h-8 text-sm"
                                autoFocus
                              />
                              <Button type="submit" size="sm" className="h-8">
                                Save
                              </Button>
                              <Button
                                type="button"
                                size="sm"
                                variant="ghost"
                                className="h-8"
                                onClick={() => setEditingTracking(null)}
                              >
                                Cancel
                              </Button>
                            </form>
                          ) : (
                            <div className="flex items-center gap-2">
                              <p className="font-medium font-mono">
                                {order.trackingNumber || "Not set"}
                              </p>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 px-2"
                                onClick={() => setEditingTracking(order.id)}
                              >
                                <Edit className="h-3 w-3" />
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <form action={updateOrderStatus.bind(null, order.id, "processing")}>
                          <Button variant="outline" size="sm" disabled={order.status === "processing"}>
                            Mark Processing
                          </Button>
                        </form>
                        <form action={updateOrderStatus.bind(null, order.id, "shipped")}>
                          <Button variant="outline" size="sm" disabled={order.status === "shipped"}>
                            Mark Shipped
                          </Button>
                        </form>
                        <form action={updateOrderStatus.bind(null, order.id, "delivered")}>
                          <Button variant="outline" size="sm" disabled={order.status === "delivered"}>
                            Mark Delivered
                          </Button>
                        </form>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" title="Edit"><Edit className="h-4 w-4" /></Button>
                      <form action={deleteOrder.bind(null, order.id)}>
                        <Button variant="destructive" size="icon" title="Delete">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </form>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {orders.length === 0 && (
              <Card className="glass-card">
                <CardContent className="p-12 text-center">
                  <ShoppingCart className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
                  <p className="text-muted-foreground">No orders yet</p>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        {/* PRE-ORDERS TAB */}
        <TabsContent value="pre-orders" className="space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-border/50">
            <div>
              <h2 className="text-3xl font-bold">Pre-Orders</h2>
              <p className="text-sm text-muted-foreground mt-1">Manage pre-orders and convert to full orders</p>
            </div>
          </div>

          <div className="grid gap-4">
            {preOrders.map((preOrder) => (
              <Card key={preOrder.id} className="glass-card hover-lift border-border/50 hover:border-primary/30 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-bold text-lg">{preOrder.customerName}</h3>
                        <StatusBadge status={preOrder.status} />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Contact</p>
                          <p className="font-medium">{preOrder.customerEmail}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Product Interest</p>
                          <p className="font-medium">{preOrder.product}</p>
                          <p className="text-muted-foreground">{preOrder.plan}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 text-sm">
                        <div>
                          <p className="text-muted-foreground">Estimated Price</p>
                          <p className="font-bold text-lg text-primary">${preOrder.estimatedPrice.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Submitted</p>
                          <p className="font-medium">{new Date(preOrder.createdAt).toLocaleDateString()}</p>
                        </div>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <form action={convertPreOrderToOrder.bind(null, preOrder.id)}>
                          <Button variant="default" size="sm" disabled={preOrder.status === "converted"}>
                            <Check className="h-4 w-4 mr-1" /> Convert to Order
                          </Button>
                        </form>
                        <form action={updatePreOrderStatus.bind(null, preOrder.id, "contacted")}>
                          <Button variant="outline" size="sm" disabled={preOrder.status === "contacted"}>
                            Mark Contacted
                          </Button>
                        </form>
                        <form action={updatePreOrderStatus.bind(null, preOrder.id, "cancelled")}>
                          <Button variant="outline" size="sm" disabled={preOrder.status === "cancelled"}>
                            Cancel
                          </Button>
                        </form>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <form action={deletePreOrder.bind(null, preOrder.id)}>
                        <Button variant="destructive" size="icon" title="Delete">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </form>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {preOrders.length === 0 && (
              <Card className="glass-card">
                <CardContent className="p-12 text-center">
                  <Clock className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
                  <p className="text-muted-foreground">No pre-orders yet</p>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        {/* BLOG TAB */}
        <TabsContent value="blog" className="space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-border/50">
            <div>
              <h2 className="text-3xl font-bold">Blog Posts</h2>
              <p className="text-sm text-muted-foreground mt-1">Create and manage your blog content</p>
            </div>
            <Button onClick={() => document.getElementById('create-post-form')?.classList.toggle('hidden')} size="lg" className="shadow-lg hover:shadow-xl transition-all">
              <Plus className="mr-2 h-4 w-4" /> New Post
            </Button>
          </div>

          {/* Create Post Form (Hidden by default) */}
          <Card id="create-post-form" className="hidden glass-card border-primary/30 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 border-b border-border/50">
              <CardTitle className="text-xl">Create New Post</CardTitle>
              <CardDescription>Write and publish a new blog post</CardDescription>
            </CardHeader>
            <CardContent>
              <form action={createPost} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input name="title" placeholder="Post Title" required />
                  <Input name="slug" placeholder="Slug (e.g., my-new-post)" required />
                </div>
                <Input name="excerpt" placeholder="Short excerpt" required />
                <div className="grid grid-cols-2 gap-4">
                  <Input name="category" placeholder="Category" defaultValue="General" />
                  <Input type="file" name="coverImage" accept="image/*" />
                </div>
                <Textarea name="content" placeholder="Post content (Markdown supported)" className="min-h-[200px]" required />
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="published" id="published" className="rounded border-gray-300" />
                  <label htmlFor="published">Publish immediately</label>
                </div>
                <Button type="submit">Create Post</Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            {posts.map((post) => (
              <Card key={post.id} className="glass-card hover-lift border-border/50 hover:border-primary/30 transition-all">
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{post.title}</h3>
                    <div className="flex gap-2 text-sm text-muted-foreground mt-1">
                      <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">{post.category}</span>
                      <span>{post.published ? "Published" : "Draft"}</span>
                      <span>• {new Date(post.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon"><Edit className="h-4 w-4" /></Button>
                    <form action={deletePost.bind(null, post.id)}>
                      <Button variant="destructive" size="icon"><Trash2 className="h-4 w-4" /></Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* PAGES TAB */}
        <TabsContent value="pages" className="space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-border/50">
            <div>
              <h2 className="text-3xl font-bold">Pages</h2>
              <p className="text-sm text-muted-foreground mt-1">Manage dynamic pages with the page constructor</p>
            </div>
            <Button onClick={() => document.getElementById('create-page-form')?.classList.toggle('hidden')} size="lg" className="shadow-lg hover:shadow-xl transition-all">
              <Plus className="mr-2 h-4 w-4" /> New Page
            </Button>
          </div>

          {/* Create Page Form */}
          <Card id="create-page-form" className="hidden glass-card border-primary/20">
            <CardHeader>
              <CardTitle>Create New Page</CardTitle>
            </CardHeader>
            <CardContent>
              <form action={createPage} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input name="title" placeholder="Page Title" required />
                  <Input name="slug" placeholder="Slug" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input name="category" placeholder="Category (e.g., industries)" required />
                  <Input name="description" placeholder="SEO Description" required />
                </div>
                <PageConstructor />
                <Input name="features" placeholder='Features JSON (e.g., ["Feature 1", "Feature 2"])' />
                <Button type="submit">Create Page</Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            {pages.map((page) => (
              <Card key={page.id} className="glass-card">
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{page.title}</h3>
                    <div className="flex gap-2 text-sm text-muted-foreground mt-1">
                      <span className="bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded">{page.category}/{page.slug}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <form action={deletePage.bind(null, page.id)}>
                      <Button variant="destructive" size="icon"><Trash2 className="h-4 w-4" /></Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* INQUIRIES TAB */}
        <TabsContent value="inquiries" className="space-y-4">
          <div className="grid gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Submissions</h3>
              <div className="space-y-2">
                {contacts.map((contact) => (
                  <Card key={contact.id} className="glass-card">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-bold">{contact.subject || "No Subject"}</p>
                          <p className="text-sm text-muted-foreground">From: {contact.name} ({contact.email})</p>
                          <p className="mt-2 text-sm">{contact.message}</p>
                        </div>
                        <form action={deleteContactSubmission.bind(null, contact.id)}>
                          <Button variant="ghost" size="icon" className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
                        </form>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Job Applications</h3>
              <div className="space-y-2">
                {applications.map((app) => (
                  <Card key={app.id} className="glass-card">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-bold">{app.jobTitle}</p>
                          <p className="text-sm text-muted-foreground">Applicant: {app.name} ({app.email})</p>
                        </div>
                        <form action={deleteJobApplication.bind(null, app.id)}>
                          <Button variant="ghost" size="icon" className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
                        </form>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        {/* SETTINGS TAB */}
        <TabsContent value="settings">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Admin Settings</CardTitle>
              <CardDescription>Manage your admin account settings.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Settings functionality coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function StatsCard({ title, value, icon: Icon }: { title: string, value: number, icon: any }) {
  return (
    <Card className="glass-card hover-lift border-border/50 hover:border-primary/30 overflow-hidden group">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{title}</CardTitle>
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">Total count</p>
      </CardContent>
    </Card>
  );
}

function StatusBadge({ status }: { status: string }) {
  const statusColors: Record<string, string> = {
    pending: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    processing: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    shipped: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    delivered: "bg-green-500/10 text-green-500 border-green-500/20",
    cancelled: "bg-red-500/10 text-red-500 border-red-500/20",
    contacted: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    converted: "bg-green-500/10 text-green-500 border-green-500/20",
  };

  return (
    <span className={`px-2 py-1 rounded-md text-xs font-semibold border ${statusColors[status] || "bg-muted text-muted-foreground"}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

function PaymentStatusBadge({ status }: { status: string }) {
  const statusColors: Record<string, string> = {
    pending: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    completed: "bg-green-500/10 text-green-500 border-green-500/20",
    failed: "bg-red-500/10 text-red-500 border-red-500/20",
    refunded: "bg-gray-500/10 text-gray-500 border-gray-500/20",
  };

  return (
    <span className={`px-2 py-1 rounded-md text-xs font-semibold border ${statusColors[status] || "bg-muted text-muted-foreground"}`}>
      Payment: {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

