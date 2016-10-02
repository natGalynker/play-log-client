import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.get('store').createRecord('exercise', {});
},

  createExercise(exercise){
    exercise.save();
  },


    // reset(){
    //
    // }

  });
