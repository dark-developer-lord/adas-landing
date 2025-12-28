"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { uploadFile } from "@/lib/upload";

// --- Helper to check admin role ---
async function checkAdmin() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }
  return session.user;
}

// --- Blog Posts ---

export async function createPost(formData: FormData) {
  const user = await checkAdmin();
  
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const excerpt = formData.get("excerpt") as string;
  const content = formData.get("content") as string;
  const category = formData.get("category") as string;
  const published = formData.get("published") === "on";
  
  const coverImageFile = formData.get("coverImage") as File | null;
  const coverImage = await uploadFile(coverImageFile);

  await prisma.post.create({
    data: {
      title,
      slug,
      excerpt,
      content,
      category,
      published,
      authorId: user.id,
      coverImage,
    },
  });

  revalidatePath("/admin");
  revalidatePath("/blog");
}

export async function deletePost(id: string) {
  await checkAdmin();
  await prisma.post.delete({ where: { id } });
  revalidatePath("/admin");
  revalidatePath("/blog");
}

export async function updatePost(id: string, formData: FormData) {
  await checkAdmin();
  
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const excerpt = formData.get("excerpt") as string;
  const content = formData.get("content") as string;
  const category = formData.get("category") as string;
  const published = formData.get("published") === "on";

  // Handle optional image update
  const coverImageFile = formData.get("coverImage") as File | null;
  const coverImage = await uploadFile(coverImageFile);

  const data: any = {
    title,
    slug,
    excerpt,
    content,
    category,
    published,
  };

  if (coverImage) {
    data.coverImage = coverImage;
  }

  await prisma.post.update({
    where: { id },
    data,
  });

  revalidatePath("/admin");
  revalidatePath("/blog");
}

// --- Pages ---

export async function createPage(formData: FormData) {
  await checkAdmin();

  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const category = formData.get("category") as string;
  const description = formData.get("description") as string;
  const content = formData.get("content") as string;
  const features = formData.get("features") as string; // Expecting JSON string or comma-separated

  await prisma.page.create({
    data: {
      title,
      slug,
      category,
      description,
      content,
      features: features || "[]",
    },
  });

  revalidatePath("/admin");
  // Revalidate the specific page path if possible, or just general
}

export async function deletePage(id: string) {
  await checkAdmin();
  await prisma.page.delete({ where: { id } });
  revalidatePath("/admin");
}

// --- Inquiries (Contact/Jobs) ---

export async function deleteContactSubmission(id: string) {
  await checkAdmin();
  await prisma.contactSubmission.delete({ where: { id } });
  revalidatePath("/admin");
}

export async function deleteJobApplication(id: string) {
  await checkAdmin();
  await prisma.jobApplication.delete({ where: { id } });
  revalidatePath("/admin");
}

// --- Orders ---

export async function updateOrderStatus(id: string, status: string) {
  await checkAdmin();
  await prisma.order.update({
    where: { id },
    data: { status },
  });
  revalidatePath("/admin");
}

export async function updateOrderTracking(id: string, trackingNumber: string) {
  await checkAdmin();
  await prisma.order.update({
    where: { id },
    data: { trackingNumber },
  });
  revalidatePath("/admin");
}

export async function updateOrderNotes(id: string, notes: string) {
  await checkAdmin();
  await prisma.order.update({
    where: { id },
    data: { notes },
  });
  revalidatePath("/admin");
}

export async function deleteOrder(id: string) {
  await checkAdmin();
  await prisma.order.delete({ where: { id } });
  revalidatePath("/admin");
}

export async function updatePaymentStatus(id: string, paymentStatus: string) {
  await checkAdmin();
  await prisma.order.update({
    where: { id },
    data: { paymentStatus },
  });
  revalidatePath("/admin");
}

// --- Pre-Orders ---

export async function updatePreOrderStatus(id: string, status: string) {
  await checkAdmin();
  await prisma.preOrder.update({
    where: { id },
    data: { status },
  });
  revalidatePath("/admin");
}

export async function updatePreOrderNotes(id: string, notes: string) {
  await checkAdmin();
  await prisma.preOrder.update({
    where: { id },
    data: { notes },
  });
  revalidatePath("/admin");
}

export async function deletePreOrder(id: string) {
  await checkAdmin();
  await prisma.preOrder.delete({ where: { id } });
  revalidatePath("/admin");
}

export async function convertPreOrderToOrder(preOrderId: string) {
  await checkAdmin();
  
  const preOrder = await prisma.preOrder.findUnique({
    where: { id: preOrderId },
  });
  
  if (!preOrder) {
    throw new Error("Pre-order not found");
  }
  
  const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substring(7).toUpperCase()}`;
  
  await prisma.order.create({
    data: {
      orderNumber,
      customerName: preOrder.customerName,
      customerEmail: preOrder.customerEmail,
      customerPhone: preOrder.customerPhone,
      product: preOrder.product,
      plan: preOrder.plan,
      planPrice: preOrder.estimatedPrice,
      batteries: 0,
      batteryPrice: 0,
      care: false,
      carePrice: 0,
      totalAmount: preOrder.estimatedPrice,
      paymentMethod: "pre-order-conversion",
      paymentStatus: "pending",
      status: "pending",
      notes: `Converted from pre-order. Original notes: ${preOrder.notes || 'None'}`,
    },
  });
  
  await prisma.preOrder.update({
    where: { id: preOrderId },
    data: { status: "converted" },
  });
  
  revalidatePath("/admin");
}

