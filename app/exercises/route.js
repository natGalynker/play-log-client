import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    // go to the data store and return all the instances of exercise
    return this.get('store').findAll('exercise');
  },

  actions: {
    toggleDone (exercise) {
      console.log('yo');
    exercise.toggleProperty('done');
    return exercise.save();
    },
    deleteExercise(exercise){
      console.log('word');
      return exercise.destroyRecord();
    }
  },


});
