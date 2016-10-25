import Ember from 'ember';

export default Ember.Route.extend({

  model(params){
    console.log(params.exercise_id);
      // looks in the DS store for a record of exercise with an exercise id which
      //it knows to expect because of the route we set up

  return this.get('store').findRecord('exercise', params.exercise_id);
  },
  actions: {

    deleteExercise(exercise){
      return exercise.destroyRecord();
      // .then(() => this.transitionTo('exercises'));
    },
    // this is the action which sends the data. This is what handles the
    //form data. This communicated to the DS store and creates a new instance
    //of exercise and returns to us an object called exercise with that data
    createExercise(data) {
  let exercise = this.get('store').createRecord('exercise', data);
  return exercise.save();
},
  },
});
