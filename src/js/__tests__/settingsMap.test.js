import { Settings } from '../settingsMap.js';


describe('ErrorRepository', () => {
    let settings = new Settings();
    test('Проверяем инициальзацию настроек по умолчанию (размер)', () => {
        expect(settings.defaultSettings.size).toBe(3);
    });

    test('Проверяем инициальзацию настроек по умолчанию (тема)', () => {
        expect(settings.defaultSettings.get('theme')).toBe('dark');
    });

    test('Проверяем инициальзацию настроек по умолчанию (музыка)', () => {
        expect(settings.defaultSettings.get('music')).toBe('trance');
    });

    test('Проверяем инициальзацию настроек по умолчанию (уровень)', () => {
        expect(settings.defaultSettings.get('difficulty')).toBe('easy');
    });

    test('При инициализации пользовательские настройки нулевые', () => {
        expect(settings.userSettings.size).toBe(0);
    });
})

  describe('setSetting', () => {
    let settings = new Settings();
    test('Проверка пользовательских настроек (тема)', () => {
      settings.setSetting('theme', 'light');
      expect(settings.userSettings.get('theme')).toBe('light');
    });

    test('Проверка пользовательских настроек (музыка', () => {
      settings.setSetting('music', 'rock');
      expect(settings.userSettings.get('music')).toBe('rock');
    });

    test('Проверка пользовательских настроек (уровень)', () => {
      settings.setSetting('difficulty', 'hard');
      expect(settings.userSettings.get('difficulty')).toBe('hard');
    });

    test('Валидность имени настройки', () => {
      expect(() => settings.setSetting('invalid', 'value')).toThrow('Неверное имя настройки');
    });

    test('should throw error for invalid theme value', () => {
      expect(() => settings.setSetting('theme', 'invalid')).toThrow('Неверное значение настройки');
    });

    test('should throw error for invalid music value', () => {
      expect(() => settings.setSetting('music', 'invalid')).toThrow('Неверное значение настройки');
    });

    test('should throw error for invalid difficulty value', () => {
      expect(() => settings.setSetting('difficulty', 'invalid')).toThrow('Неверное значение настройки');
    });
  });

describe('Получение текущих настроек', () => {
    let settings = new Settings();
    test('Проверка настроек по умолчанию (тема)', () => {
        const currentSettings = settings.settings;
        expect(currentSettings.get('theme')).toBe('dark');
    });

    test('Проверка настроек по умолчанию (музыка)', () => {
        const currentSettings = settings.settings;
        expect(currentSettings.get('music')).toBe('trance');
    });

    test('Проверка настроек по умолчанию (уровень)', () => {
        const currentSettings = settings.settings;
        expect(currentSettings.get('difficulty')).toBe('easy');
    });
})

describe('Получение текущих настроек', () => {
    let settings = new Settings();
    settings.setSetting('theme', 'gray');
    settings.setSetting('difficulty', 'nightmare');
    const currentSettings = settings.settings;

    test('Объединение пользовательских настроек и настроек по умолчанию', () => {
        expect(currentSettings.get('theme')).toBe('gray');
    });

    test('Объединение пользовательских настроек и настроек по умолчанию', () => {
        expect(currentSettings.get('music')).toBe('trance'); // осталось по умолчанию
    });

    test('Объединение пользовательских настроек и настроек по умолчанию', () => {
        expect(currentSettings.get('difficulty')).toBe('nightmare');
    });

    test('Сохранность настроек по умолчанию при изменении пользовательских настроек', () => {
        settings.setSetting('theme', 'light');
        expect(settings.defaultSettings.get('theme')).toBe('dark');
    });
})