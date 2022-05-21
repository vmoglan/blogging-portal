import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class UserService extends Service {
    // mock for now
    @service cookies;

    @tracked isAuthenticated = false;

    @tracked username;

    constructor() {
        super(...arguments);

        const user = this._readUserFromCookies();

        if (user) {
            this.isAuthenticated = true;
            this.username = user;
        }
    }

    async login(credentials) {  
        if (credentials.username === 'vlad.moglan@gmail.com' && credentials.password === 'Secret123!') {
            this.isAuthenticated = true;
            this.username = credentials.username;
            this.cookies.write('user', 'vlad.moglan@gmail.com');
            return;
        }

        throw 'Invalid credentials.';
    }

    async logout() { 
        this.isAuthenticated = false;
        this.username = null;
        this.cookies.clear('user');
    }

    _readUserFromCookies() {
        if (!this.cookies.exists('user')) return null;
        return this.cookies.read('user');
    }
}