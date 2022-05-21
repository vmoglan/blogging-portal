import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ThemeService extends Service {
  @service cookies;
  
  @tracked currentTheme;

  initialize() {
    const theme = this._getPreferredTheme();
    this.setTheme(theme, false);
  }

  _getPreferredTheme() {
    const cookies = this.cookies;

    if (cookies.exists('theme')) {
      const theme = cookies.read('theme');

      if (theme === 'dark' || theme === 'light') {
        return theme;
      } else {
        return 'light';
      }
    }

    return 'light';
  }

  toggleTheme() {
    if (this.theme === 'dark') {
      this.setTheme('light')
    } else {
      this.setTheme('dark');
    }
  }

  setTheme(theme, setCookies = true) {
    if (theme === 'dark') {
      this._enableDarkMode();
    } else {
      this._disableDarkMode();
    }

    if (setCookies) {
      this.cookies.write('theme', this.currentTheme);
    }
  }

  _enableDarkMode() {
    if (!document.body.classList.contains('dark')) {
      document.body.classList.add('dark');
    }

    this.currentTheme = 'dark';
  }

  _disableDarkMode() {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
    }

    this.currentTheme = 'light';
  }
}
