import Ember from 'ember';
export default Ember.Route.extend({
  session: Ember.inject.service(),
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signIn(provider, param1, param2) {
      let authPromise;
      if (provider === 'password') {
        authPromise = this.get('session').open('firebase', {
          provider: provider,
          email: param1,
          password: param2
        });
	  }
		
		  authPromise.then(result => console.log('session.open result:', result))
        .catch(err => console.warn('session.open error:', err));
    },
	    signOut() {
      this.get('session').close();
    }
  }
});
//        console.log(data.currentUser);
     //actions: {
//    signIn: function(provider) {
//      this.get('session').open('firebase', { provider: 'password',  email: 'test@example.com',
//  password: 'password1234'