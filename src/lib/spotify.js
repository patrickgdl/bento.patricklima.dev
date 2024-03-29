const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token,
      }),
    });

    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};

export const getNowPlaying = async () => {
  try {
    const { access_token } = await getAccessToken();

    return fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const getTopTracks = async () => {
  try {
    const { access_token } = await getAccessToken();

    return fetch(TOP_TRACKS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};
