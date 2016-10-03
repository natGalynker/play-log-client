import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // goes to the data store and creates an instance of exercise
    return this.store.createRecord('exercise');
  },

  actions: {
    // returns an exercise from the data store and saves that instance
    //once it is created and saved navigates to the exercises route
    // return is very important here
    saveExercise(createExercise) {
      return createExercise.save()
      .then(() => this.transitionTo('exercises'));
    },
  }

});
