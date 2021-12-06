import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { title, description, address } = req.body;

  const response = await fetch("http://localhost:3001/events", {
    method: "POST",
    body: {
      title,
      description,
      address,
    },
  });

  if (response.ok) {
    res.status(200);
  } else {
    res.status(500);
  }
}
