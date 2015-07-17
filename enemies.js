var EnemyModel = Backbone.Model.extend({
  // will control updating enemy information such as hp and mp

  initialize: function(){}

});



var EnemyView = Backbone.View.extend({

  className: "enemy",

  initialize: function(){},

  render: function(){
    return this.$el;
  }

});



var EnemyGroup = Backbone.Collection.extend({

  model: EnemyModel,

  initialize: function(){}

});



var EnemyGroupView = Backbone.View.extend({

  className: "enemyGroup",

  initialize: function(){
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<h1>Enemies</h1>').append(
      this.collection.map(function(enemy){
        return new EnemyView({model: enemy}).render();
      })
    );
  }

});
