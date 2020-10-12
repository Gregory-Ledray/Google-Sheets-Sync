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
