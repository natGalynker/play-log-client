import Ember from 'ember';

export default Ember.Component.extend({

exercise: {},
actions: {

  clear(){
    this.set('exercise', {});
  },
<<<<<<< HEAD
    // sends the action of create exercise to the exercise route
=======
  // sends the action of create exercise to the exercise route
>>>>>>> fix-errors
  createExercise(){
    this.sendAction('createExercise', this.get('exercise'));
  }
}

});
