import Ember from 'ember';

export default Ember.Component.extend({

  exercise: {},
  actions: {
    clear(){
      this.set('exercise', {});
    },

    createExercise(){
      this.sendAction('createExercise', this.get('exercise'));
      console.log(this.get('exercise'));
      console.log('test');
    }
  }
});
