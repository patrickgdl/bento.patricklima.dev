import { NextApiRequest, NextApiResponse } from "next";
import { getNowPlaying } from "../../lib/spotify";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await getNowPlaying();

    if (response.status === 204 || response.status > 400) {
      res.status(200).json({ isPlaying: false });
      return;
    }

    const song = await response.json();

    if (song.item === null) {
      res.status(200).json({ isPlaying: false });
      return;
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    // headers: {
    //   "content-type": "application/json",
    //   "cache-control": "public, s-maxage=60, stale-while-revalidate=30",
    // },
    res
      .status(200)
      .json({ isPlaying, title, artist, album, albumImageUrl, songUrl });

    return;
  } catch (error) {
    console.log("Something went wrong!", error);
    res.status(500).json({ error: error });
  }
}
