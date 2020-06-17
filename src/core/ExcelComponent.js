/* eslint-disable require-jsdoc */
import {DomListener} from '@/core/DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
  }

  // Возврщает шаблон компонента
  toHTML() {
    return ' '
  }

  init() {
    this.initDOMListeners()
  }

  destroy() {
    this.removeDOMListener()
  }
}
