import {ExcelComponent} from '@/core/ExcelComponent';
import {createTable} from '@/components/table/table.template';

// eslint-disable-next-line require-jsdoc
export class Table extends ExcelComponent {
  static className = 'excel_table'
  // eslint-disable-next-line require-jsdoc
  toHTML() {
    // eslint-disable-next-line no-undef
    return createTable();
  }
}
