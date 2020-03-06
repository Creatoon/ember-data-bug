import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
    @service store;

    async model() {
        const event = await this.store.findRecord('event', 6);
        return {
            sortedByName: await event.query('speakers', { sort: 'name' }),
            sortedById: await event.query('speakers', { sort: 'id' })
        }
    }

}
