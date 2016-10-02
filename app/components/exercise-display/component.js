import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
      done () {
        this.sendAction('done', this.get('exercise'));
      },
      delete(){
        this.sendAction('delete', this.get('exercise'));
        console.log('word');
      }
    },
});
