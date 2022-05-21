import Component from '@glimmer/component';

export default class LoginFormComponent extends Component {
    constructor() {
        super(...arguments);
        console.log(this.args.title);
    }
}
