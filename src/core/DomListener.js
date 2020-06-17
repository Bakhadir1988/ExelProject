import {capitalize} from '@/core/utils';

// eslint-disable-next-line require-jsdoc
export class DomListener {
  // eslint-disable-next-line require-jsdoc
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root for DomListener`)
    }
    this.$root = $root;
    this.listeners = listeners
  }

  initDOMListeners() {
    this.listeners.forEach(listener => {
      // eslint-disable-next-line no-unused-vars
      const method = getMethodName(listener)
      console.log(this[method])
      // Тоже самое что и addEventListener
      this[method] = this[method].bind(this)
      this.$root.on(listener, this[method])
    })
  }

  removeDOMListener() {
    this.listeners.forEach(listener => {
      // eslint-disable-next-line no-unused-vars
      const method = getMethodName(listener)
      // Тоже самое что и addEventListener
      this.$root.off(listener, this[method])
    })
  }
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}
