import JSONAPIAdapter from '@ember-data/adapter/json-api';
import HasManyQueryAdapterMixin from 'ember-data-has-many-query/mixins/rest-adapter';

export default JSONAPIAdapter.extend(HasManyQueryAdapterMixin, {
    host: 'https://api.eventyay.com',
    namespace : 'v1'
})