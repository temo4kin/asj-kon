import { Team } from '../app.js';

describe('Validator.validateUsername', () => {
  let team = new Team();
  const bowman = 'Лучник';
  const swordsman = 'Мечник';
  const magician = 'Маг';
  
  team.add(swordsman);
  team.add(magician);

  test('Добавление нового персонажа', () => {
    team.add(bowman);
    expect(team.members.has(bowman)).toBe(true);
  });

  test('Дублирование имеющегося персонажа', () => {
    team.add(bowman);
    expect(() => team.add(bowman)).toThrow('Такой персонаж уже есть в команде');
  });

  test('Добавление нескольких персонажей', () => {
    team.addAll(bowman, swordsman, magician, bowman);
    expect(team.members.size).toBe(3);
  });

  test('Добавление нескольких персонажей', () => {
    team.addAll(bowman, swordsman, magician, bowman);
    expect(team.members.has(bowman)).toBe(true);
  });

test('Добавление нескольких персонажей', () => {
    team.addAll(bowman, swordsman, magician, bowman);
    expect(team.members.has(swordsman)).toBe(true);
  });

test('Добавление нескольких персонажей', () => {
    team.addAll(bowman, swordsman, magician, bowman);
    expect(team.members.has(magician)).toBe(true);
  });
})