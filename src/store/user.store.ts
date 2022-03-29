import { observable } from "../mobx/mobx";

export default {
  /** V MobX 6 to dela metoda makeAutoObservable nebo decorator - @ */
  user: observable({
    name: ""
  }),
  setName(name) {
    this.user.name = name;
  }
};
