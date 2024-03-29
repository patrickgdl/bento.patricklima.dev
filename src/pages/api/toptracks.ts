import { NextApiRequest, NextApiResponse } from "next";
import { getTopTracks } from "../../lib/spotify";

const topTracks = async (_: NextApiRequest, res: NextApiResponse) => {
  const response = await getTopTracks();
  const { items } = await response.json();

  const tracks = items.slice(0, 10).map((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(", "),
    songUrl: track.external_urls.spotify,
    title: track.name,
  }));

  return res.status(200).json({ tracks });
};

export default topTracks;
