import Ember from 'ember';

export default Ember.Route.extend({

  model(params){
    console.log(params.exercise_id);
  return this.get('store').findRecord('exercise', params.exercise_id);
  },
  actions: {
    // toggleDone (exercise) {
    //   console.log('yo');
    // exercise.toggleProperty('done');
    // return exercise.save();
    // },
    deleteExercise(exercise){
      console.log('word');
      exercise.destroyRecord();
      // .then(() => this.transitionTo('exercises'));
    },
  },
});
