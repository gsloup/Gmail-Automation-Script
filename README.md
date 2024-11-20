# Gmail-Automation-Script
## How to use this code
This script will purge/delete any Social or Promotions Categories emails older than 3 months old.  I'll be adding to this function on my personal script to further delete specific, data sensitive emails.
> [!WARNING]  
> Writing scripts to delete data comes with a risk.  Double check your script and check your "Trash" folder after running any script to check for your script's accuracy.  Any deleted email will remain in your "Trash" for 30 days.

### Step 1: Open Google Apps Script
* https://script.google.com/home
* Create a New Project

### Step 2: Add the Script
* Copy and Paste code from `Code.js` in this Github repo to your new Apps Script code file

### Step 3: (Optional) Edit any specifics for your gmail cleansing needs
* If you have any different queries or criteria, add them to the script
* Remember that deleting data has risks, so check your "Trash" after running script

### Step 4: Save & Authorize
* Save/name the script
* Click the Run (play button) in your App Script to execute it
* It will prompt you to authorize the script in order to access your Gmail account
  * Click "Review Permissions"
  * Select your Google Account
  * Click "Allow"
* You'll next get a "Google hasn't verified this app" message
   * Click on the "Advanced" link
   * Click "Go to {Apps Script Project Name} (unsafe)"
   * "{Apps Script Project Name} wants to access your Google Account" - click "Allow"

### Step 5: Set up a Trigger/Cron
* On the left hand menu, click on "Triggers"
* Click "Add Trigger"
  * `Choose which function to run: {yourFunctionName}`
  * `Deployment: Head`
  * `Event Source: Time-driven` (Feel free to set the frequency as you choose.  I'm choosing once a week)
  * `Type of Time-based Trigger: Week timer`
  * `Day of week: Every Sunday`
  * `Time of day: Midnight to 1am`
  * `Failure notification settings: Notify me weekly`
* Click "Save"



