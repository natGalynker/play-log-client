import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    // go to the data store and return all the instances of exercise
    return this.get('store').findAll('exercise');
  },

  actions: {

    deleteExercise(exercise){
      console.log('word');
      return exercise.destroyRecord();
    }
  },


});
