export type StripeProduct = {
  id: string;
  amount_discount: number;
  amount_subtotal: number;
  amount_tax: number;
  amount_total: number;
  currency: string;
  description: string;
  object: string;
  quantity: number;
  price: {
    unit_amount: number;
  };
};

export const fetchLineItems = async (sessionId: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSession?session_id=${sessionId}`);

  if (!res.ok) return;

  const data = await res.json();
  const products = data.session.data;

  return products;
};
