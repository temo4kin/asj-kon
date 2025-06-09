import { ErrorRepository } from '../errorRepository.js';

describe('ErrorRepository', () => {
  let errorRepo = new ErrorRepository();;
  errorRepo.addError(1, 'Ошибка1');
  errorRepo.addError(2, 'Ошибка2');

  test('Проверка размера имеющегося репозитория ошибок', () => {
    expect(errorRepo.errors.size).toBe(2);
  });

  test('Добавление ошибок в репозиторий', () => {
    expect(errorRepo.errors.get(1)).toBe('Ошибка1');
  });

  test('Добавление ошибок в репозиторий', () => {
    expect(errorRepo.errors.get(2)).toBe('Ошибка2');
  });

  test('Текстовая расшифровка известных кодов ошибок', () => {
    expect(errorRepo.translate(1)).toBe('Ошибка1');
  });

  test('Текстовая расшифровка известных кодов ошибок', () => {
    expect(errorRepo.translate(2)).toBe('Ошибка2');
  });

  test('Возврат "Ошибка неизвестна" при незнакомом коде ошибке(3)', () => {
    expect(errorRepo.translate(3)).toBe('Unknown error');
  });

  test('Возврат "Ошибка неизвестна" при незнакомом коде ошибке', () => {
    expect(errorRepo.translate(0)).toBe('Unknown error');
  });

  test('Возврат "Ошибка неизвестна" при незнакомом коде ошибке', () => {
    expect(errorRepo.translate('abc')).toBe('Unknown error');
  });

  test('Проверка репозитория на пустоту', () => {
    const emptyRepo = new ErrorRepository();
    expect(emptyRepo.translate(1)).toBe('Unknown error');
  });
});