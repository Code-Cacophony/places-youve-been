function EntryList()
{
    this.entries = [],
    this.currentId = 0
}

EntryList.prototype.addEntry = function(entry){
    entry.id = this.assignId();
    this.entries.push(entry);
}

EntryList.prototype.assignId = function(){
    this.currentId += 1;
    return this.currentId;
}

EntryList.prototype.findEntry = function(id) {
    for (var i=0; i< this.entries.lenth; i++){
        if(this.entries[i]){
            if(this.entries[i].id == id){
                return this.entries[i]
            }
        }
    };
    return false;
}

EntryList.prototype.deleteEntry = function(id) {
    for (var i=0; i< this.this.entries.length; i++){
        if(this.entries[i]){
            if(this.entries[i].id == id){
                delete this.entries[i];
                return true;
            } 
        }
    };
    return false;
}


function Places(locations, landmarks, time, notes) {
    this.locations = locations;
    this.landmarks = landmarks;
    this.time = time;
    this.notes = notes;
  }



  // UI --------
  var entryList = new EntryList();
   
  function displayEntryInfo(entryBookToDisplay) {
      var travelList = $("ul#list");
      var htmlForInfo = "";
      entryBookToDisplay.entries.forEach(function(entry) {
            htmlForInfo += "<li id=>" + entry.id + ": " + "<br>" + "Country: " + entry.locations +  ", " + "<br>" + "Landmarks: " + entry.landmarks + ", "+ "<br>" + "Date: " + entry.time + ", " + "<br>" + "Notes: " + entry.notes + "</li>";
      });
      travelList.html(htmlForInfo);
  }

$(document).ready(function() {
  $("form#place-info").submit(function(event){
    event.preventDefault();
    var locationsInput = $("input#country");
    var landmarkInput = $("input#landmark");
    var timeInput = $("input#date");
    var notesInput = $("input#notes");
    var newPlaces = new Places (locationsInput.val(), landmarkInput.val(), timeInput.val(), notesInput.val());
    entryList.addEntry(newPlaces);
    // console.log(newPlaces);
    console.log(entryList.entries);
    console.log(entryList.landmark);
    displayEntryInfo(entryList);
    
    // $("#display-travels").text(entryList.entries);
    
    // $("#display-locations").text(newPlaces.locations);
    // $("#display-landmark").text(newPlaces.landmarks).hide();
    // $("#display-date").text(newPlaces.time).hide();
    // $("#display-notes").text(newPlaces.notes).hide();

    // $("#display-locations").click(function() {
    //   $("#display-landmark").show();
    //   $("#display-date").show();
    //   $("#display-notes").show();
      
    // });

  
    
    //alert(newPlaces)
  });
});

