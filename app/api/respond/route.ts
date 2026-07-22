import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { ResponseSubmission } from "@/types";

async function saveToGoogleSheets(data: ResponseSubmission) {
  const credentials = JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS || "{}");

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

  if (!spreadsheetId) {
    throw new Error("Google Sheets ID not configured");
  }

  const address = data.address;

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Responses!A:I",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          data.firstName,
          data.response,
          address?.line1 || "",
          address?.line2 || "",
          address?.city || "",
          address?.state || "",
          address?.zip || "",
          address?.country || "",
        ],
      ],
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const data: ResponseSubmission = await request.json();

    if (!data.firstName || !data.response) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (data.response === "yes") {
      const address = data.address;
      if (!address?.line1 || !address?.city || !address?.state || !address?.zip || !address?.country) {
        return NextResponse.json({ error: "Missing address fields" }, { status: 400 });
      }
    }

    await saveToGoogleSheets(data);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error saving response:", error);
    return NextResponse.json({ error: "Failed to save response" }, { status: 500 });
  }
}
