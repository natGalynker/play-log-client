import Ember from 'ember';

export default Ember.Route.extend({

  model(params){
    console.log(params.exercise_id);
  return this.get('store').findRecord('exercise', params.exercise_id);
  },
  actions: {
    deleteExercise(exercise){
      console.log('word');
      exercise.destroyRecord();
      // .then(() => this.transitionTo('exercises'));
    },
  },
});
