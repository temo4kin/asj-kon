export class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy']
    ]);
    this.userSettings = new Map();
  }

  setSetting(key, value) {
    if (!this.defaultSettings.has(key)) {
      throw new Error(`Неверное имя настройки`);
    }

    const validValues = {
      theme: ['dark', 'light', 'gray'],
      music: ['trance', 'pop', 'rock', 'chillout', 'off'],
      difficulty: ['easy', 'normal', 'hard', 'nightmare']
    };

    if (!validValues[key].includes(value)) {
      throw new Error(`Неверное значение настройки`);
    }

    this.userSettings.set(key, value);
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}