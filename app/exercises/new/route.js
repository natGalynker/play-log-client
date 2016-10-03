import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('exercise');
  },

  <----starts actions: {

    saveExercise(createExercise) {
      createExercise.save()
      .then(() => this.transitionTo('exercises'));
    },
  }

});-------> ends here
