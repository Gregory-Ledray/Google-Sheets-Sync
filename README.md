# Google-Sheets-Sync
Synchronize changes between different Sheets in Google Sheets.

# What is this good for?
This is a demonstration of how to synchronize changes between different Google Sheets using Google Apps Script.

# Why Google Apps Script?
1. Where desktop scripts like Python would require authentication or credential storage to improve security, Google Apps Scripts are running in a secure environment already. This eliminates at least one setup step (managing credentials) and eliminates one thing which can go wrong.
2. It's free to deploy and run the scripts with a Google account.
3. It's fast and easy to deploy new versions - just save the file and you're done. If the service runs on a server, you have to manage the server and the service.
4. It's easy to set up ways to trigger the service - just use Google's Triggers from the Google Apps Script console: https://script.google.com

# How do I Test / Use this?
To test, create a script bound to the source spreadsheet, paste in this source, adjust variables, set up a trigger to run the script, and then trigger the trigger by editing the source file. Step by step instructions are below.
1. Create 2 new spreadsheets. In the first spreadsheet (the source spreadsheet), type out information in a couple of cells.
2. In the first spreadsheet (the source spreadsheet), click Tools > Script Editor. This will open a new script.
3. Paste in the code from this repository's .gs file. Save it with Ctrl + S.
4. In the pasted file there is a line that starts with "var destinationSpreadsheetId". Delete the long string of numbers and letters between '' on that line. In its place, paste in the ID of the second spreadsheet. How do you get the ID of the second spreadsheet? Open the spreadsheet and copy the part of the URL between "/d/" and "/edit". Then paste it into the script.
5. Save the script.
6. In the script, Go to Edit > Current project's triggers.
7. Click "Add Trigger".
8. Set up the trigger to trigger the "onEdit" function when a user edits the spreadsheet. Therefore, run the "onEdit" function. On deployment "Head". From event source "From spreadsheet". On Event Type "On edit". And Failure Notification Settings "immediately". You may be asked to authorize this script after it has been set up.

It should now work. Go to the source spreadsheet and type in the range which is specified for copying over to the destination. If you haven't adjusted any other parameters then the source range is every row and every column (configure with var copyFromRangeA1Notation). The destinationRange should start at A5 (configure with destinationRangeA1Notation).

# Limitations
* Copy and paste works. Copying, pressing the delete key, and then pasting works. But if you Cut and Paste, the source line is not deleted in the destination script. This *seems* to be a limitation of Google Sheet's onEdit event, but I haven't done much investigating.

# How does logging work?
Google Apps Script has a dashboard: https://script.google.com/home/
