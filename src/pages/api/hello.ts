import type { NextApiRequest, NextApiResponse } from "next";

export const hello = (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};

export default hello;
