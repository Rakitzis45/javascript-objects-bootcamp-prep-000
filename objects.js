var playlist = {
  playlist = ["alt"]
  artistName = ["Sum 41"]
  songTitle : ["Fat Lip", "In Too Deep", "Still Waiting"]
}
function updatePlaylist( playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}
