import Ember from 'ember';
import ActiveModelAdapter from 'active-model-adapter';
// import ENV from 'ga-wdi-boston.ember-auth/config/environment';

export default ActiveModelAdapter.extend({
  auth: Ember.inject.service(),
  // host: ENV.apiHost,
  headers: Ember.computed('auth.credentials.token', {
    get () {
      let headers = {};
      const token = this.get('auth.credentials.token');
      if (token) {
        headers.Authorization = `Token token=${token}`;
      }

      return headers;
    },
  }),
});
