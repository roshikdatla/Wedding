import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { RSVPFormData } from "@/types";

async function saveToGoogleSheets(data: RSVPFormData) {
  try {
    // Parse the service account key from environment variable
    const credentials = JSON.parse(
      process.env.GOOGLE_SHEETS_CREDENTIALS || "{}"
    );

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

    if (!spreadsheetId) {
      throw new Error("Google Sheets ID not configured");
    }

    // Append the data to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "RSVPs!A:G", // Sheet name and range
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            data.name,
            data.email,
            data.attendance,
            data.guestCount,
            data.dietaryRestrictions || "",
            data.message || "",
          ],
        ],
      },
    });
  } catch (error) {
    console.error("Error saving to Google Sheets:", error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: RSVPFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.attendance || !data.guestCount) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log the RSVP data
    console.log("New RSVP received:", {
      name: data.name,
      email: data.email,
      attendance: data.attendance,
      guestCount: data.guestCount,
      dietaryRestrictions: data.dietaryRestrictions || "None",
      message: data.message || "No message",
      timestamp: new Date().toISOString(),
    });

    // Save to Google Sheets
    await saveToGoogleSheets(data);

    return NextResponse.json(
      {
        success: true,
        message: "RSVP received successfully"
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing RSVP:", error);
    return NextResponse.json(
      { error: "Failed to process RSVP" },
      { status: 500 }
    );
  }
}
