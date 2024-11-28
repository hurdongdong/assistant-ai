import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
export async function getAssistantResponse(prompt: string) {
  const response = await openai.completions.create({
    model: 'text-davinci-003',
    prompt: `Assistant ID: ${process.env.ASSISTANT_ID}\n${prompt}`,
    max_tokens: 150,
  });
  return response.choices[0].text;
} 