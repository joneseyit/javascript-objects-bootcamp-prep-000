var playlist = {mark: "Onipa"}

function updatePlaylist(obj, artiste, title){
  // updatedList = Object.assign( {}, playlist, {[artiste]: [title] })
  obj.artiste = [title];
  return obj
}