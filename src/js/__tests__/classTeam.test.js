import { Team } from '../app.js';

let team;
const bowman = 'Лучник';
const swordsman = 'Мечник';
const magician = 'Маг';

// beforeEach(() => {
//   team = new Team();
//   team.add(swordsman);
//   team.add(magician);
// });

describe('Создание новой команды', () => {
  let team = new Team();

  team.add(swordsman);
  team.add(magician);

  test('Добавление нового персонажа', () => {
    team.add(bowman);
    expect(team.members.has(bowman)).toBe(true);
  });

  test('Дублирование имеющегося персонажа', () => {
    team.add(bowman);
    expect(() => team.add(bowman)).toThrow("Персонаж уже существует в команде");
  });
})

describe('Массовое создание команды', () => {
  let team = new Team();

  team.add(swordsman);
  team.add(magician);

  test('Добавление нескольких персонажей', () => {
    team.addAll(bowman, swordsman, magician, bowman);
    expect(team.members.size).toBe(3);
  });

  test('Добавление нескольких персонажей', () => {
    expect(team.members.has(bowman)).toBe(true);
  });

  test('Добавление нескольких персонажей', () => {
    expect(team.members.has(swordsman)).toBe(true);
  });

  test('Добавление нескольких персонажей', () => {
    expect(team.members.has(magician)).toBe(true);
  });

  test('Конвертация в массив', () => {
    const array = team.toArray();
    expect(Array.isArray(array)).toBeTruthy();
  })
})