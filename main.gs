// could also set this up as 'sourceRange' like 'destinationRangeA1Notation' is set up.
var copyFromRangeA1Notation = 'A1';

var destinationSpreadsheetId = '18Xg1GM_CnGJeilHWnXwh0EQPo4vbyTHQ3V_Ju5EJ_MI';
var destinationSheetName = 'Sheet1';
var destinationSheet = SpreadsheetApp.openById(destinationSpreadsheetId).getSheetByName(destinationSheetName);
var destinationRangeA1Notation = 'A5';

// onEdit(Event) is set up to copy the change into another Sheet.
function onEdit(e) {
  var range = e.range;
  var copyFromRange = e.source.getActiveSheet().getRange(copyFromRangeA1Notation);
  if (range.getRow() >= copyFromRange.getRow() && range.getColumn() >= copyFromRange.getColumn()) {
    var destinationRange = destinationSheet.getRange(destinationRangeA1Notation);
    var destinationRow = destinationRange.getRow() + range.getRow() - copyFromRange.getRow();
    var destinationColumn = destinationRange.getColumn() + range.getColumn() - copyFromRange.getColumn();
    var numRows = range.getNumRows();
    var numColumns = range.getNumColumns();
    
    crossSpreadsheetCopyTo(range, destinationSheet.getRange(destinationRow, destinationColumn, numRows, numColumns));
  }
}

// crossSpreadsheetCopyTo copies similarly to 'range.copyTo' but it does so across different spreadsheets.
// Not all formatting is transferred between sheets - only number formatting.
function crossSpreadsheetCopyTo(sourceRange, destinationRange) {
  var sourceData = sourceRange.getValues();
  var numberFormat = sourceRange.getNumberFormat();
  destinationRange.clear();
  destinationRange.setValues(sourceData);
  destinationRange.setNumberFormat(numberFormat);
}
