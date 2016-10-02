import Ember from 'ember';

export default Ember.Component.extend({

exercise: {},
actions: {
  clear(){
    this.set('exercise', {});
  },

  create(){
    this.sendAction('create', this.get('exercise'));
  }
}

});

//     this.set('exercise.category', null);
//     this.set('exercise.name', null);
//     this.set('exercise.description', null);
//     this.set('exercise.duration', null);
//   },
