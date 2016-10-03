import Ember from 'ember';

export default Ember.Route.extend({

  model(params){
    console.log(params.exercise_id);
  return this.get('store').findRecord('exercise', params.exercise_id);
  },
  actions: {

    deleteExercise(exercise){
      console.log('word');
      return exercise.destroyRecord();
      // .then(() => this.transitionTo('exercises'));
    },

    createExercise(data) {
  let exercise = this.get('store').createRecord('exercise', data);
  return exercise.save();
},
  },
});
