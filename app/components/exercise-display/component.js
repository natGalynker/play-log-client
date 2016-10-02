import Ember from 'ember';

export default Ember.Component.extend({
  // classNameBindings: ['exerciseCompleted'],
  // exerciseCompleted: Ember.computed.alias('exercise.done'),
    actions: {
      // done () {
      //   this.sendAction('done', this.get('exercise'));
      // },
      delete(){
        this.sendAction('delete', this.get('exercise'));
        console.log('word');
      }
    },
});
