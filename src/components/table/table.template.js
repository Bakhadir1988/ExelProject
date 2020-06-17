/* eslint-disable no-unused-vars */
const CODES = {
  A: 65,
  Z: 90
}

function createCell(num) {
  return `
    <div class="cell" contenteditable>${num}</div>
  `
}

function createCol(col) {
  return `
    <div class="column">${col}</div>
  `
}

function createRows(index, content) {
  return `
    <div class="row">
      <div class="row_info">${index ? index : ''}</div>
      <div class="row_data">${content}</div>
    </div>
  `
}

export function createTable(rowsCount = 15) {
  const colsCounts = CODES.Z - CODES.A + 1
  console.log(colsCounts);
  const rows = []
  const cols = new Array(colsCounts).fill('').map((el, index) => {
    return String.fromCharCode(CODES.A + index)
  }).map(el => createCol(el)).join('')
  rows.push(createRows(null, cols))
  for (let i = 0; i < rowsCount; i++) {
    const cell = new Array(colsCounts).fill('').map(createCell).join('')
    rows.push(createRows(i + 1, cell))
  }
  return rows.join('')
}
