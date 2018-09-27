var playlist = {[key]: value}

function updatePlaylist(obj, artiste, title){
  // updatedList = Object.assign( {}, playlist, {[artiste]: [title] })
  obj.artiste = [title];
  return obj
}