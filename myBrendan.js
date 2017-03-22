var myBrendan = {

  name: "Brendan Eich",
  weapon: "Computer",
  creativityLevel: 0,
  favDrink: "Whisky",

  drink: function(whisky){
    if (whisky == this.favDrink) {
      this.creativityLevel += 100;
    };
    
  },

  create: function(){
    return this.name + " intoxicatedly creates JavaScript ";
  }
}





module.exports = myBrendan; 
