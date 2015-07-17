var GameModel = Backbone.Model.extend({
  // most of the methods will pass through here as this is the connection point between the characters and enemies

  initialize: function(){}

});



var GameView = Backbone.View.extend({

  className: "gameView",

  initialize: function(params){
    this.enemyGroupView = new EnemyGroupView({collection: this.model.get('enemies')});
    this.characterGroupView = new CharacterGroupView({collection: this.model.get('characters')});
  },

  render: function(){
    return this.$el.html([
      this.enemyGroupView.$el,
      this.characterGroupView.$el
    ]);
  }

});