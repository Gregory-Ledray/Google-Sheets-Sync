# Google-Sheets-Sync
Synchronize changes between different Sheets in Google Sheets.

# What is this good for?
This is a demonstration of how to synchronize changes between different Google Sheets using Google Apps Script.

# Why Google Apps Script?
It is dead-simple for people to run Google Apps Scripts. Let's look at some advantages over Python:
1. Where desktop scripts like Python would require authentication or credential storage to improve security, Google Apps Scripts are running in a secure environment already. This eliminates at least one setup step (managing credentials) and eliminates one thing which can go wrong.

Now let's look at some advantages over a compiled language which runs on a server:
1. No need to acquire credentials and store them on the server because Google Apps Script already runs in a trusted environment.

# How do I Test this?
1. Go here: https://script.google.com/create
2. Replace the contents of that script with the the the contents of the file in this repository titled 'main.gs'.
3. Save the script.
4. [Enable the Google Sheets API advanced service](https://developers.google.com/apps-script/guides/services/advanced#enabling_advanced_services) in your script. Make sure you enable access to Google Sheets.
5. In the Apps Script editor click Run > Run Function > Test \_\_\_\_. This will run the program. You will have to authorize it to run the first time.
6. To see any output the script produces, click View > Logs. In most of the test cases you can also verify that the function works by opening up the Sheet and checking if the data has copied into the destination.

# How do I use this in real life?
The goal is usually to synchronize cells or rows in different Google Sheets automatically when a "source" sheet is modified. To do that, you need to set up a function which does the work you want when you Run the function manually. Then you can create a Trigger which runs that function automatically when something else happens. The best way to set up a Trigger is via an [Installable Trigger](https://developers.google.com/apps-script/guides/triggers/installable). To learn more about adding such a tirgger, look at Google's [Managing triggers manually documentation](https://developers.google.com/apps-script/guides/triggers/installable#managing_triggers_manually).

# How does logging work?
Google Apps Script has a dashboard: https://script.google.com/home/
