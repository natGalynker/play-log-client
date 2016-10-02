import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
  createExercise(data){
    let exercise = this.get('store').createRecord('exercise', data);
    console.log(data);
    console.log('slut');
    exercise.save()
    .then(()=> this.transitionTo('exercises'));
  }
}
});

//     model () {
//   return this.get('store').createRecord('exercise', {});
// },
//
// actions: {
//   createExercise(exercise) {
//     console.log(exercise);
//     exercise.save()
//       .then(()=>this.transitionTo('exercises'));

    // reset(){
    //
    // }
