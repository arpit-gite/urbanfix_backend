import { GoogleGenerativeAI } from "@google/generative-ai";

export const generateAIResponse = async (prompt) => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }]
        }
      ]
    });

    return result.response.text();

  } catch (error) {
    console.error("Gemini AI Error:", error);
    throw new Error("AI service unavailable");
  }
};
