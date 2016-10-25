import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
      // this is the send action which travels down to the exercises route. It
<<<<<<< HEAD
      //targets each separate instance of an exercise
=======
     //targets each separate instance of an exercise
>>>>>>> fix-errors
      done () {
        this.sendAction('done', this.get('exercise'));
      },
      delete(){
        this.sendAction('delete', this.get('exercise'));
      },
    },
});
