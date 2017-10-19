//This is the form for posts, it is pushing the data from the form to the Firebase DB through the model/post.js. 

import Ember from 'ember';

export default Ember.Controller.extend({
postsSorting: ['publishedDate'],
sortedPosts: Ember.computed.sort('post', 'postsSorting'), // sorts post by timestamp
  actions: {
    publishPost: function() {
      var newPost = this.store.createRecord('post', {
        title: this.get('title'),
        body: this.get('body'),
		  author: this.get('author'),
        timestamp: new Date().getTime()
      });
	
      newPost.save();
    }
  }
});

