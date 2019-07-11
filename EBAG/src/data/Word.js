import md5 from 'md5';

export default class Word {
  constructor(name) {
    this.name = name;
    this.totalCards = 0;
    this.dueCards = 0;
    this.id = md5(name);
  }

  setFromObject(ob) {
    this.name = ob.name;
    this.totalCards = ob.totalCards;
    this.dueCards = ob.dueCards;
    this.id = ob.id;
  }

  resetCounts() {
    this.totalCards = 0;
    this.dueCards = 0;
  }

  static fromObject(ob) {
    let d = new Word(ob.name);
    d.setFromObject(ob);
    return d;
  }
}
