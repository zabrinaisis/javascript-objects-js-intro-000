var playlist = {Artist:"Singing"};
delete playlist.Artist;

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
}
