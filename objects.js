var playlist = {mark: "Onipa"}

function updatePlaylist(obj, artiste, title){
  // updatedList = Object.assign( {}, playlist, {[artiste]: [title] })
  playlist.artiste = title;
  return playlist
}