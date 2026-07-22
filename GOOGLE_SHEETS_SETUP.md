# Google Sheets Setup Guide

Follow these steps to have every "I'm In!" / "Can't Make It" response (plus mailing address, when given) save to a Google Sheet.

## Step 1: Create a Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click "Blank" to create a new spreadsheet
3. Name it "Groomsman Responses" (or whatever you prefer)
4. In the first sheet, rename the tab to `Responses` (click the tab at the bottom — this must match exactly, it's case-sensitive)
5. Add headers in the first row:
   - A1: `Timestamp`
   - B1: `First Name`
   - C1: `Response`
   - D1: `Address Line 1`
   - E1: `Address Line 2`
   - F1: `City`
   - G1: `State`
   - H1: `ZIP`
   - I1: `Country`

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
   - Name it "groomsman-responses" (or whatever you prefer)
   - Click "Create and Continue"
   - Skip the optional steps and click "Done"

5. Create a key for the service account:
   - Click on the service account you just created
   - Go to "Keys" tab
   - Click "Add Key" > "Create new key"
   - Choose "JSON" format
   - Click "Create" — this will download a JSON file

## Step 3: Share the Spreadsheet

1. Open the JSON file you downloaded
2. Find the `client_email` field (looks like `groomsman-responses@project-name.iam.gserviceaccount.com`)
3. Go back to your Google Spreadsheet
4. Click "Share" (top right)
5. Paste the `client_email` and give it "Editor" access
6. Uncheck "Notify people" and click "Share"

## Step 4: Set Environment Variables

1. Open the JSON file you downloaded from Google Cloud
2. Copy the entire contents (it should be a single line of JSON)
3. Create `.env.local` in the project root (it's gitignored, so it stays out of version control)
4. Add these lines (replace with your actual values):

```
GOOGLE_SHEETS_ID=your-spreadsheet-id-from-step-1
GOOGLE_SHEETS_CREDENTIALS={"type":"service_account","project_id":"...paste the entire JSON here..."}
```

**Important:** `GOOGLE_SHEETS_CREDENTIALS` should be the entire JSON content on one line.

5. If deploying (e.g. Vercel), add both variables in the hosting provider's environment variable settings too.

## Step 5: Restart Your Dev Server

```bash
npm run dev
```

## Test It

1. Go to the site, tap through the envelope, and respond "I'm In!" or "Can't Make It"
2. Check your Google Spreadsheet — a new row should appear

## Troubleshooting

**Error: "Google Sheets ID not configured"**
- Make sure `GOOGLE_SHEETS_ID` is set in `.env.local`

**Error: "The caller does not have permission"**
- Make sure you shared the spreadsheet with the service account's `client_email`
- Check that you gave "Editor" access

**Error: "Unable to parse range"**
- Make sure your sheet tab is named `Responses` (case-sensitive)
- Or update the range in `app/api/respond/route.ts` to match your sheet name

**Data not appearing**
- Check the browser console for errors
- Check your terminal/server logs for errors
- Verify the JSON credentials are valid
