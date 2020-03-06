import Model from '@ember-data/model';
import attr from 'ember-data/attr';
import ModelMixin from 'ember-data-has-many-query/mixins/model';
import { belongsTo, hasMany } from 'ember-data/relationships';


export default Model.extend(ModelMixin, {
  identifier             : attr('string', { readOnly: true }),
  name                   : attr('string'),
  description            : attr('string'),
  speakers               : hasMany('speaker')
});
