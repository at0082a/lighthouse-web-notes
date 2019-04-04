var library = {
    tracks: { t01: { id: "t01",
                     name: "Code Monkey",
                     artist: "Jonathan Coulton",
                     album: "Thing a Week Three" },
              t02: { id: "t02",
                     name: "Model View Controller",
                     artist: "James Dempsey",
                     album: "WWDC 2003"},
              t03: { id: "t03",
                     name: "Four Thirty-Three",
                     artist: "John Cage",
                     album: "Woodstock 1952"}
            },
    playlists: { p01: { id: "p01",
                        name: "Coding Music",
                        tracks: ["t01", "t02"]
                      },
                 p02: { id: "p02",
                        name: "Other Playlist",
                        tracks: ["t03"]
                      }
               },

printPlaylists : function () {

    for (var playlist in this.playlists) {
        var playlistId = this.playlists[playlist].id;
        var playlistName = this.playlists[playlist].name;
        var playlistTracks = this.playlists[playlist].tracks.length
        var text = playlistId + ": " + playlistName + " - " + playlistTracks + " tracks";
        console.log(text);
      }
    },

printTracks : function () {
       
    for (track in this.tracks) {
            var trackId = this.tracks[track].id;
            var trackName = this.tracks[track].name;
            var artistName = this.tracks[track].artist;
            var artistAlbum = this.tracks[track].album;
            var text = trackId + ": " + trackName + " by " + artistName + " " + "(" + artistAlbum + ")";
            console.log(text)
        }
      },

printPlaylist : function hello (playlistId) {
   
for (playlist in this.playlists) {
  var text = this.playlists[playlistId];
  var textId = text.id;
  var textName = text.name;
  var textTrackLength = text.tracks.length;
  var trackwords = textId + ": " + textName + " " + textTrackLength + " tracks"  
}     
    console.log(trackwords);
    
var trackValues = this.playlists[playlistId].tracks;
    
 for (i = 0; i < trackValues.length; i++) {
    var track = this.tracks[trackValues[i]];
    var trackText = track.id + ": " + track.name + " " + track.artist + " " + "(" + track.album + ")";
    console.log(trackText);    
  } 
     
 },

addTrackToPlaylist : function hi (trackId, playlistId) {
    var plist = this.playlists[playlistId].tracks;
    plist.push(trackId);
    console.log(plist); 
},

uid : function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

addTrack : function goodbye (name, artist, album) {
    var newTrackId = "t04"
    var newTrack = { id : this.uid(),
                    name: name,
                    artist: artist,
                    album: album }

    this.tracks[newTrackId] = newTrack
    console.log(library);
  },

addPlaylist : function newPlaylist (name) {
    var newPlaylistId = "p03"
    var newPlaylist = { id: this.uid(),
                       name: name,
                       tracks: ["t04", "t05", "t06"] } 
    
    this.playlists[newPlaylistId] = newPlaylist;
    console.log(library);                     
  }

}

library.addPlaylist("greatest hits");
  
