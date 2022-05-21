import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class UserFeedComponent extends Component {
    @tracked content = 'Learning Ember.js.';
}