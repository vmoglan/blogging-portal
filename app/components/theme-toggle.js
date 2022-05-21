import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ThemeToggleComponent extends Component {
    @service theme;

    @tracked isDarkModeEnabled;

    constructor() {
        super(...arguments);

        this.theme.initialize();
        this.isDarkModeEnabled = this.theme.currentTheme === 'dark';
    }

    @action onChange(e) {
        const isDarkModeEnabled = e.target.checked;

        if (isDarkModeEnabled) {
            this.theme.setTheme('dark');
        } else {
            this.theme.setTheme('light');
        }
    }
}