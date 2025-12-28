import OrderClient from "./order-client";

export default async function OrderPage({
  searchParams,
}: {
  searchParams?: Promise<{ product?: string }>;
}) {
  const resolved = (await searchParams) ?? {};
  const product = resolved.product ?? "adas-x1";
  return <OrderClient product={product} />;
}
