import Ember from 'ember';

export default Ember.Route.extend({


  model(){
    return this.get('store').createRecord('exercise', {});
},

  createExercise(data){
    let exercise = this.get('store').createRecord('exercise', data);
    exercise.save();
    // .then(() => this.transitionTo('exercise', data));
  },
    // reset(){
    //
    // }

  });
