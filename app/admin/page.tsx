import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { AdminDashboardClient } from "@/components/admin/admin-dashboard-client";

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);
  
  if (!session || session.user.role !== 'ADMIN') {
    redirect("/auth/login");
  }

  // Fetch all data in parallel
  const [
    totalPages,
    totalPosts,
    totalContacts,
    totalApplications,
    totalOrders,
    totalPreOrders,
    posts,
    pages,
    contacts,
    applications,
    orders,
    preOrders
  ] = await Promise.all([
    prisma.page.count(),
    prisma.post.count(),
    prisma.contactSubmission.count(),
    prisma.jobApplication.count(),
    prisma.order.count(),
    prisma.preOrder.count(),
    prisma.post.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.page.findMany({ orderBy: { updatedAt: 'desc' } }),
    prisma.contactSubmission.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.jobApplication.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.order.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.preOrder.findMany({ orderBy: { createdAt: 'desc' } })
  ]);

  const stats = {
    totalPages,
    postCount: totalPosts,
    contactCount: totalContacts,
    applicationCount: totalApplications,
    orderCount: totalOrders,
    preOrderCount: totalPreOrders,
  };

  return (
    <AdminDashboardClient 
      stats={stats}
      posts={posts}
      pages={pages}
      contacts={contacts}
      applications={applications}
      orders={orders}
      preOrders={preOrders}
      userEmail={session.user.email}
    />
  );
}
