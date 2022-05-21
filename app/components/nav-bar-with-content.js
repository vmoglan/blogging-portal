import Component from '@glimmer/component';

export default class NavBarWithContent extends Component {
    get content() { return this.args.content; }
}