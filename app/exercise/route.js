import Ember from 'ember';

export default Ember.Route.extend({

  model(params){
    console.log(params.exercise_id);
  return this.get('store').findRecord('exercise', params.exercise_id);
  },
});
