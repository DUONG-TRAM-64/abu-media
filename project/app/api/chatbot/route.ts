import { NextResponse } from "next/server";
import { chatbotAnswersBasicQuestions } from "@/app/ai/flow/chatbot-answers-basic-questions";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { question, conversationHistory } = body;

    if (!question || typeof question !== "string") {
      return NextResponse.json(
        { error: "Question is required and must be a string" },
        { status: 400 }
      );
    }

    // Prepare input for the chatbot function
    const chatbotInput: any = { question };
    if (conversationHistory && Array.isArray(conversationHistory)) {
      chatbotInput.conversationHistory = conversationHistory;
    }

    const result = await chatbotAnswersBasicQuestions(chatbotInput);

    return NextResponse.json({
      answer: result.answer,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Chatbot error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Chatbot API is running",
    endpoints: {
      POST: "/api/chatbot - Send a question to get an answer",
    },
  });
}