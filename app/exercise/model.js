import DS from 'ember-data';

export default DS.Model.extend({
category: DS.attr('string'),
name: DS.attr('string'),
description: DS.attr('string'),
duration: DS.attr('string'),

});
