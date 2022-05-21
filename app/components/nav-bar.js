import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class NavBar extends Component { 
    @service user;

    get showUserMenu() { return this.user.isAuthenticated; }
}
