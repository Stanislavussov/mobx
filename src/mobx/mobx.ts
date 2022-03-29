/** Seznam callbacku, ktere budou sledovat store,
 *  ze sledovana hodnota se aktualizovala */
const listeners: Function[] = [];

/** Pridava v list listeners  */
const onUpdate = (fn: FunctionConstructor) => {
  listeners.push(fn);
};
/** Iteruje se po vsech listenerech a vola je  */
const runUpdaters = () => {
  setTimeout(() => {
    listeners.forEach((fn) => fn());
  }, 0);
};

/** Decorator nebo v MobX makeAutoObservable v constructor store */
const observable = (obj) => {
  /** https://javascript.info/proxy
   * let proxy = new Proxy(target, handler)
   * - Na get a na set jakekoliv vlastnosi muzeme nastavit listener
   * - Proxy funguje globalne nad nasim objectem
   * */
  return new Proxy(obj, {
    /** obj.prop = 1
     * obj - target, name - prop, value - 1 */
    set(target, name, value) {
      target[name] = value;
      runUpdaters();
      return true;
    }
  });
};

export { onUpdate, observable };
