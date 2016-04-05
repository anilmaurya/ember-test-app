import Ember from 'ember';

export default Ember.Route.extend({
	model() {
    return new Ember.RSVP.Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  }
});
