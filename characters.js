var CharacterModel = Backbone.Model.extend({
  // will control updating character information such as hp and mp

  initialize: function(){}

});



var CharacterView = Backbone.View.extend({

  className: "character",

  initialize: function(){},

  render: function(){
    return this.$el;
  }

});



var CharacterGroup = Backbone.Collection.extend({

  model: CharacterModel,

  initialize: function(){}

});



var CharacterGroupView = Backbone.View.extend({

  className: "characterGroup",

  initialize: function(){
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<h1>Characters</h1>').append(
      this.collection.map(function(character){
        return new CharacterView({model: character}).render();
      })
    );
  }

});
