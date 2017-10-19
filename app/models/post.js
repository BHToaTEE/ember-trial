 import DS from 'ember-data';

 export default DS.Model.extend({
   title: DS.attr('string'),
   author: DS.attr('string'),
   post: DS.attr('string'),
   published: DS.attr('number'),
   publishedDate: Ember.computed('published', function() {
   return moment(this.get('published')).format('MMMM Do, YYYY');
  })
});
