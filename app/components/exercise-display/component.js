import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
      // this is the send action which travels down to the exercises route. It
     //targets each separate instance of an exercise

      done () {
        this.sendAction('done', this.get('exercise'));
      },
      delete(){
        this.sendAction('delete', this.get('exercise'));
      },
    },
});
