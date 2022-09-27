import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';

export type Image = {
  _key: string;
  _type: 'image';
  asset: {
    url: string;
  };
};

export type Product = {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: 'product';
  title: string;
  price: number;
  slug: {
    _type: 'slug';
    current: string;
  };
  description: string;
  category: {
    _type: 'reference';
    _ref: string;
  };
  image: Image[];
};

type Data = {
  products: Product[];
};

const query = groq`*[_type == "product"] {
  _id,
    ...
  } | order(price asc)`;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const products: Product[] = await sanityClient.fetch(query);
  res.status(200).json({ products });
}
