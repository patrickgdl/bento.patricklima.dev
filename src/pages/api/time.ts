import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=-25.595741253638806&lng=-49.38783252703905&formatted=0`
  ).then((res) => res.json());

  res.status(200).json(response);
};

export default handler;
