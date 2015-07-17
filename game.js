var GameModel = Backbone.Model.extend({
  // most of the methods will pass through here as this is the connection point between the characters and enemies

  initialize: function(){}

});



var GameView = Backbone.View.extend({

  className: "gameView",

  initialize: function(params){
    this.characterGroupView = new CharacterGroupView({collection: this.model.get('characters')});
    this.enemyGroupView = new EnemyGroupView({collection: this.model.get('enemies')});
  },

  render: function(){
    return this.$el.html([
      this.characterGroupView.$el,
      this.enemyGroupView.$el
    ]);
  }

});