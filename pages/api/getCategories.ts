import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';

export type Category = {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: 'category';
  slug: {
    _type: 'slug';
    current: string;
  };
  title: string;
};

type Data = {
  categories: Category[];
};

const query = groq`*[_type == "category"] {
  _id,
    ...
  }`;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const categories = await sanityClient.fetch(query);
  res.status(200).json({ categories });
}
