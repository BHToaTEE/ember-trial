// this is supposed to create a record via sign up, but I was having difficulty with it. I ran a git stash on the branch "sign-up"

import Ember from 'ember';

export default Ember.Controller.extend({
  firebase: Ember.inject.service(),
  actions: {

  signUp(email, pass) {
    const auth = this.get('firebaseApp').auth();
    auth.createUserWithEmailAndPassword(email, pass).then((userResponse) => {
      const user = this.store.createRecord('user', {
        id: userResponse.uid,
        email: userResponse.email
      });
      return user.save();
    });
  }

}
});