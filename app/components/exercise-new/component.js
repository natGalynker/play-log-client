import Ember from 'ember';

export default Ember.Component.extend({

exercise: {},
actions: {

  clear(){
    this.set('exercise', {});
  },
    // sends the action of create exercise to the exercise route
  createExercise(){
    this.sendAction('createExercise', this.get('exercise'));
  }
}

});
