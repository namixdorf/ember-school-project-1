import Ember from 'ember';

export default Ember.Controller.extend({
  restaurant: {name: "Pizza Ranch", yearsOpen: 3},
  menuLength: Ember.computed.alias('model.length'),
  availableItems: Ember.computed.filterBy('model', 'isAvailable', true),
  actions: {
    wasClicked(elementName) {
      alert(`${elementName} was clicked!`);
    },
    saveNewItem(newItem){
      this.store.createRecord('food',{
        isAvailable: false,
        name: this.get('newItem')
      }).save()
      this.set('newItem', '');
    },
    toggleAvailability(food){
      food.toggleProperty('isAvailable');
      food.save();
    }
  }
});
