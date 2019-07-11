export default class Menu {
    constructor(icon, name) {
      this.icon = icon;
      this.name = name;
    }
  
    setFromObject(ob) {
      this.icon = ob.icon;
      this.name = ob.name;
    }
  
    static fromObject(ob) {
      let c = new Menu(ob.icon, ob.name);
      c.setFromObject(ob);
      return c;
    }   
  }