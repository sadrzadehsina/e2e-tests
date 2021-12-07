import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await fetch("http://localhost:3001/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  });

  if (response.ok) {
    res.status(200).json({ success: true });
  } else {
    res.status(500);
  }
}
