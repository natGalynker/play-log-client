import Ember from 'ember';

export default Ember.Component.extend({
  // creates a new exercise object which data will be sent to

  exercise: {},
  // where the send actions will be
  actions: {
    clear(){
      this.set('exercise', {});
    },
    // sends the action createExercise down to the exercise route
    createExercise(){
      this.sendAction('createExercise', this.get('exercise'));
    }
  }
});
