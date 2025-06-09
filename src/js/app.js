// TODO: write your code here
class Team {
    constructor() {
        this.members = new Set();
    }
    add(character) {
        if (this.members.has(character)) {
            throw new Error('Такой персонаж уже есть в команде');
        }
        this.members.add(character);
    }
    addAll(...characters) {
        characters.forEach(character => this.members.add(character));
    }
    toArray() {
        return Array.from(this.members);
    }
}

const team = new Team();
team.add('Лучник');
team.add('Маг');
team.add('Воин');
team.add('Маг');
team.addAll('Мечник', 'Лучник');
team.addAll('Король', 'Королева');
console.log(team.toArray());