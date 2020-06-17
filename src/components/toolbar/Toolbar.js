import {ExcelComponent} from '@/core/ExcelComponent';

// eslint-disable-next-line require-jsdoc
export class Toolbar extends ExcelComponent {
  static className = 'excel_toolbar'

  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click']
    })
  }
  // eslint-disable-next-line require-jsdoc
  toHTML() {
    return `
      <div class="buttons">
        <div class="button button_delete">
            <i class="material-icons">format_align_left</i>
        </div>
        <div class="button button_exit">
            <i class="material-icons">format_align_center</i>
        </div>
        <div class="button button_exit">
            <i class="material-icons">format_align_right</i>
        </div>
        <div class="button button_exit">
            <i class="material-icons">format_bold</i>
        </div>
        <div class="button button_exit">
            <i class="material-icons">format_italic</i>
        </div>
        <div class="button button_exit">
            <i class="material-icons">format_underlined</i>
        </div>
    </div>
    `
  }
  onClick(event) {
    console.log(event.target);
  }
}
