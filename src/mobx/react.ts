import { onUpdate } from "./mobx";

const observedComponents = [];

onUpdate(() => {
  observedComponents.forEach((oc) => oc.forceUpdate());
});

const observer = (component) => {
  return class extends component {
    constructor(props) {
      super(props);
      observedComponents.push(this);
    }
  };
};

export { observer };
