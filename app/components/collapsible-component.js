import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: true,
  actions: {
    toggleOpen() {
      this.toggleProperty('isOpen');
    }
  }
});
