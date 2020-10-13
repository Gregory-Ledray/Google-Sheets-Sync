// copyRow from a source spreadsheet row into a destination spreadsheet row. Whatever was in the destination row is cleared before writing.
function copyRow(sourceSpreadsheetId, sourceSheetName, sourceRow, destinationSpreadsheetId, destinationSheetName, destinationRow) {
  var sourceSpreadsheet = SpreadsheetApp.openById(sourceSpreadsheetId);
  var destinationSpreadsheet = SpreadsheetApp.openById(destinationSpreadsheetId);
  var sourceSheet = sourceSpreadsheet.getSheetByName(sourceSheetName);
  var destinationSheet = destinationSpreadsheet.getSheetByName(destinationSheetName);
  var sourceRange = sourceSheet.getRange(sourceRow, 1, 1, sourceSheet.getMaxColumns());
  var sourceData = sourceRange.getValues();
  
  var destinationRange = destinationSheet.getRange(destinationRow, 1, 1, sourceSheet.getMaxColumns());
  destinationRange.clear();
  destinationRange.setValues(sourceData);
}

function TestCopyRow() {
  copyRow('1sOofnRwH6BgYQkjEqSEahSBYDZ3PJbIS72o1Mf-fH0g', 'Sheet1', 3, '18Xg1GM_CnGJeilHWnXwh0EQPo4vbyTHQ3V_Ju5EJ_MI', 'Sheet1', 2);
}

// detectChange takes a Range. If one or more Cells in the range are part of the Range which defines the cells we are watching for changes, then it returns
// the original Range cut to only include those Cells which are in the part of the Range we are watching for changes.
//
// startRow is the first Row we are watching for changes (Integer).
// endRow is the last Row we are watching for changes (or -1 if watching all subsequent rows).
// startColumn is the first Column we are watching for changes (Integer).
// endColumn is the last Column we are watching for changes (or -1 if watching all subsequent columns).
//
// For example, if we are watching the Range A1:A4 and a change is submitted for A4:A6, then it returns a Range containing A4 only.
// If the range we are watching is A1:A4 and a change is submitted for B1:B6, then it returns null.
// If the range we are watching is A1:A4 and a change is submitted for A1:A3, then it returns A1:A3.
function detectChange(range, startRow, endRow, startColumn, endColumn) {
  var endRowIn = range.getLastRow();
  var startRowIn = endRowIn - range.getNumRows() + 1;
  var endColIn = range.getLastColumn();
  var startColIn = endColIn - range.getNumColumns() + 1;
  if (endRow < 0) {
    endRow = endRowIn;
  }
  if (endColumn < 0) {
    endColumn = endColIn;
  }
  
  // build up the new Range dimensions
  var finalEndCol = endColumn;
  if (endColIn < finalEndCol) {
    finalEndCol = endColIn;
  }
  var finalStartCol = startColumn;
  if (startColIn > finalStartCol) {
    finalStartCol = startColIn;
  }
  var finalEndRow = endRow;
  if (endRowIn < finalEndRow) {
    finalEndRow = endRowIn;
  }
  var finalStartRow = startRow;
  if (startRowIn > finalStartRow) {
    finalStartRow = startRowIn;
  }
  
  // Make sure the Range contains >= 1 cell.
  if (finalEndCol < finalStartCol) {
    return null;
  }
  if (finalEndRow < finalStartRow) {
    return null;
  }
  
  // create the new range as a subset of the original input range.
  
}
