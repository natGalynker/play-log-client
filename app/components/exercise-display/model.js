import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr('string'),
  name: DS.attr('string'),
  user: DS.belongsTo('user'),
  description: DS.attr('string'),
  duration: DS.attr('string'),
  done: DS.attr('boolean')

});