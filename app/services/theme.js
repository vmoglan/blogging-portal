import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class ThemeService extends Service {
  @service cookies;

  _toggleDarkMode() {
    if (!document.body.classList.contains('dark')) {
      document.body.classList.add('dark');
    }

    this.theme = 'dark';
  }

  _toggleLightMode() {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
    }

    this.theme = 'light';
  }

  initialize() {
    const cookies = this.cookies;

    if (!cookies.exists('theme')) {
      this._toggleLightMode();
    } else {
      const theme = cookies.read('theme');

      if (theme === 'dark') {
        this._toggleDarkMode();
      } else {
        this._toggleLightMode();
      }
    }
  }

  toggle() {
    if (this.theme === 'dark') {
      this._toggleLightMode();
    } else {
      this._toggleDarkMode();
    }

    this.cookies.write('theme', this.theme);
  }
}
