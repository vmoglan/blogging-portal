import AuthenticatedRoute from './authenticated-route';
import { inject as service } from '@ember/service';

export default class LogoutRoute extends AuthenticatedRoute {
    @service user;
    @service router;

    beforeModel() {
        this.user.logout();
        this.router.transitionTo('/');
    }
}