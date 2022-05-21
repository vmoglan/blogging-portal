import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LoginFormComponent extends Component { 
    @service user;

    @tracked username;
    @tracked password;

    @action login(/* event */) {
        this.user.login({ 
            username: this.username, 
            password: this.password 
        });
    }
}
