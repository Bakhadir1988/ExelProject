import {ExcelComponent} from '@/core/ExcelComponent';
// eslint-disable-next-line require-jsdoc
export class Header extends ExcelComponent {
  static className = 'excel_header'
  // eslint-disable-next-line require-jsdoc
  toHTML() {
    return `
      <input type="text" class="input" value="Новая таблица">
      <div class="buttons">
          <div class="button button_delete">
              <i class="material-icons">delete</i>
          </div>
          <div class="button button_exit">
              <i class="material-icons">exit_to_app</i>
          </div>
      </div>
    `
  }
}
