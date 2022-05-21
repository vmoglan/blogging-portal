import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AuthenticatedRoute extends Route {
    @service router;
    @service user;

    beforeModel(/* */) {
        if (!this.user.isAuthenticated) {
            this.router.transitionTo('/');
        }
    }
}