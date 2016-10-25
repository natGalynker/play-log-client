import DS from 'ember-data';

export default DS.Model.extend({
<<<<<<< HEAD
  category: DS.attr('string'),
  name: DS.attr('string'),
  user: DS.belongsTo('user'),
  description: DS.attr('string'),
  duration: DS.attr('string'),
  done: DS.attr('boolean'),
  editable: DS.attr('boolean')
=======
category: DS.attr('string'),
name: DS.attr('string'),
user: DS.belongsTo('user'),
description: DS.attr('string'),
duration: DS.attr('string'),
done: DS.attr('boolean'),
editable: DS.attr('boolean')
>>>>>>> fix-errors

});
