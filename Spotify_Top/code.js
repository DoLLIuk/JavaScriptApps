var ArtistW = getColumn("Top 50 Worldwide", "Artist");
var ArtistU = getColumn("Top 50 USA", "Artist"); 
var LArtists = []; // list for artists on both charts
var songsUs = getColumn("Top 50 USA", "Track Name");
var songsWorld = getColumn("Top 50 Worldwide", "Track Name");
  var songsList = [];
// getting artists on the US and worldwide charts at the same time
for (var i = 0; i < ArtistU.length; i++) {
  for (var b = 0; b < ArtistW.length; b++) {
    if (ArtistU[i] == ArtistW[b]) {
      if( ArtistU[i]!=undefined){
      appendItem(LArtists, ArtistU[i]);
      }
    }
  }
}

var RandomArtist;
onEvent("Random_Button", "click", function () {
  RandomArtist=LArtists[randomNumber(1, LArtists.length-1)];
  setProperty("Us_Button", "hidden", false);
  setProperty("Word_Button", "hidden", false);
  setText("Artis_Label", RandomArtist);
  
});

onEvent("Us_Button", "click", function () {
  setText("Top_label", "" );
  songsList=[];
  getSongsByArtist(2);
  setText("Top_label", songsList.join("\n"));

  setScreen("screen2");
  
});

onEvent("Word_Button", "click", function () {
  
  setText("Top_label2", "" );
  songsList=[];
  getSongsByArtist(1);
  setText("Top_label2", songsList.join("\n"));
  setScreen("screen3");
  
});

onEvent("BackButton", "click", function () {
  setScreen("screen1");
});

onEvent("button2", "click", function () {
  setScreen("screen1");
});

//getting all songs per one artist in two optiions for Usa and Wo
function getSongsByArtist(choose) {
if (choose == 1){
  for (var i = 0; i < songsWorld.length; i++) {
    if (ArtistW[i] == RandomArtist) {
      songsList.push(songsWorld[i]);
     

      console.log(songsList);
       console.log(i);

    }
  }
  return songsList;
}else {
  
  for (var i = 0; i < songsUs.length; i++) {
    if (ArtistU[i] == RandomArtist) {
      songsList.push(songsUs[i]);
    

      console.log(songsList);
       console.log(i);

    }
  }
  return songsList;
}


}
  
onEvent("screen2", "click", function( ) {
	console.log("screen2 clicked!");
});