import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    // go to the data store and return all the instances of exercise
    return this.get('store').findAll('exercise');
  },

  actions: {
    //this handles the button action of being clicked
    //and changing that exercise back and forth from true and false
    toggleDone (exercise) {
    exercise.toggleProperty('done');
    return exercise.save();
    },
    // handles the removal and deletion of an instance. It goes to the DS and
    //removes that instance
    deleteExercise(exercise){
      return exercise.destroyRecord();
    }
  },
});
