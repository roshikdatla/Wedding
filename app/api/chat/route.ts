import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const WEDDING_CONTEXT = `You are a helpful wedding assistant for Priya and Rohan's proposal celebration. Here are the details:

EVENT INFORMATION:
- Event: Proposal Celebration
- Couple: Priya and Rohan
- Date: May 9, 2026
- Time: 4:00 PM (Proposal), 6:00 PM (Reception)
- Location: New York City, New York
- Hashtag: #PRoposal

DRESS CODE:
- Formal attire requested
- Suggested colors: Navy Blue, Gold, Champagne, Ivory
- Any formal attire is welcome

FUTURE EVENTS:
- Engagement: TBD (Summer 2026, location to be announced)
- Wedding: TBD (Fall 2026, location to be announced)

INSTRUCTIONS:
- Answer questions politely and concisely
- If asked about something not mentioned above, politely say you don't have that information yet
- Encourage guests to RSVP through the website
- Be warm and friendly, matching the celebratory tone
- Don't make up information - only provide what's listed above
`;

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const response = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20240620",
      max_tokens: 500,
      system: WEDDING_CONTEXT,
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    });

    const textContent = response.content.find((block) => block.type === "text");
    const reply = textContent && textContent.type === "text" ? textContent.text : "I apologize, I couldn't generate a response.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
