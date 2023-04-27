// https://next-blog-isr.netlify.app/api/revalidate?secret=<token>

// http://localhost:3000/api/revalidate?path=/&secret=IrinaBlumenfeld

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const path = req.query.path as string;

  //right now it needs to be in revalidate.ts inside pages/api
  await res.revalidate(path);

  return res.json({ revalidated: true });
}
