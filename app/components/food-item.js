import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleAvailability(food){
      food.toggleProperty('isAvailable');
      food.save();
    }
  }
});
