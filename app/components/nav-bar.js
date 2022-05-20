import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NavBar extends Component {
  @service('theme') theme;

  @action toggleTheme() {
    this.theme.toggle();
  }
}
