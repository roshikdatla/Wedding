# Google Sheets RSVP Setup Guide

Follow these steps to set up Google Sheets integration for your RSVP form.

## Step 1: Create a Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click "Blank" to create a new spreadsheet
3. Name it "Wedding RSVPs" (or whatever you prefer)
4. In the first sheet, rename it to "RSVPs" (click the tab at the bottom)
5. Add headers in the first row:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Attendance`
   - E1: `Guest Count`
   - F1: `Dietary Restrictions`
   - G1: `Message`

6. Copy the spreadsheet ID from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
   - Copy the `SPREADSHEET_ID` part

## Step 2: Create a Google Cloud Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project (or select an existing one)
3. Enable the Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

4. Create a service account:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "Service Account"
   - Name it "wedding-rsvp" (or whatever you prefer)
   - Click "Create and Continue"
   - Skip the optional steps and click "Done"

5. Create a key for the service account:
   - Click on the service account you just created
   - Go to "Keys" tab
   - Click "Add Key" > "Create new key"
   - Choose "JSON" format
   - Click "Create" - this will download a JSON file

## Step 3: Share the Spreadsheet

1. Open the JSON file you downloaded
2. Find the `client_email` field (looks like `wedding-rsvp@project-name.iam.gserviceaccount.com`)
3. Go back to your Google Spreadsheet
4. Click "Share" button (top right)
5. Paste the `client_email` and give it "Editor" access
6. Uncheck "Notify people" and click "Share"

## Step 4: Update Environment Variables

1. Open the JSON file you downloaded from Google Cloud
2. Copy the entire contents (it should be a single line of JSON)
3. Open `.env.local` in your project
4. Add these lines (replace with your actual values):

```
GOOGLE_SHEETS_ID=your-spreadsheet-id-from-step-1
GOOGLE_SHEETS_CREDENTIALS={"type":"service_account","project_id":"...paste the entire JSON here..."}
```

**Important:** The `GOOGLE_SHEETS_CREDENTIALS` should be the entire JSON content on one line.

## Step 5: Restart Your Dev Server

If your dev server is running, restart it:
```bash
npm run dev
```

## Test It!

1. Go to your website
2. Fill out the RSVP form
3. Submit it
4. Check your Google Spreadsheet - you should see the data appear!

## Troubleshooting

**Error: "Google Sheets ID not configured"**
- Make sure `GOOGLE_SHEETS_ID` is in your `.env.local` file

**Error: "The caller does not have permission"**
- Make sure you shared the spreadsheet with the service account email
- Check that you gave "Editor" access

**Error: "Unable to parse range"**
- Make sure your sheet is named "RSVPs" (case-sensitive)
- Or update the range in `app/api/rsvp/route.ts` to match your sheet name

**Data not appearing**
- Check the browser console for errors
- Check your terminal/server logs for errors
- Verify the JSON credentials are valid
