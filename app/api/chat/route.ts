import { HfInference } from '@huggingface/inference';
import { NextResponse } from 'next/server';

// Use a free token if available, otherwise rely on public API limits
const HUGGINGFACE_API_KEY = process.env.HUGGINGFACE_API_KEY;
const hf = new HfInference(HUGGINGFACE_API_KEY);

// Using Phi-3-mini which is fast and capable for instruction following
const MODEL_NAME = 'microsoft/Phi-3-mini-4k-instruct';

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        if (!message) {
            return NextResponse.json({ error: 'Message is required' }, { status: 400 });
        }

        console.log(`[AI] Generating tasks for goal: "${message}" using ${MODEL_NAME}`);

        const prompt = `<|user|>
You are an expert project manager and productivity coach.
Break down the following goal into 6-10 actionable, specific, and sequential tasks.
Goal: "${message}"

Rules:
1. Each task must be clear and actionable.
2. Start each task with a verb.
3. Keep tasks concise (under 10 words).
4. Return ONLY the list of tasks, numbered 1 to 10.
5. Do not include any intro or outro text.
<|end|>
<|assistant|>`;

        try {
            const response = await hf.textGeneration({
                model: MODEL_NAME,
                inputs: prompt,
                parameters: {
                    max_new_tokens: 400,
                    temperature: 0.7,
                    return_full_text: false,
                }
            });

            let generatedText = response.generated_text.trim();
            console.log('[AI] Raw response:', generatedText);

            // Clean up response if it contains the prompt or extra text
            if (generatedText.includes('<|assistant|>')) {
                generatedText = generatedText.split('<|assistant|>')[1].trim();
            }

            // Ensure we have a numbered list
            if (!generatedText.match(/^\d+\./m)) {
                console.warn('[AI] Response not a list, attempting to format');
                // Fallback: try to split by newlines and add numbers if missing
                generatedText = generatedText.split('\n')
                    .filter(line => line.trim().length > 0)
                    .map((line, i) => `${i + 1}. ${line.replace(/^[-*•]\s*/, '')}`)
                    .join('\n');
            }

            return NextResponse.json({
                response: generatedText,
                source: 'dynamic-ai'
            });

        } catch (apiError: any) {
            console.error('[AI] Hugging Face API Error:', apiError);

            // Provide a helpful fallback response when API is unavailable
            const fallbackResponse = `I'm having trouble connecting to the AI service right now. Here's a basic task breakdown to get you started:

1. Define your main goal clearly
2. Break it down into smaller milestones
3. List specific actions for each milestone
4. Set realistic deadlines
5. Identify resources you'll need
6. Create a timeline
7. Start with the first action item

Feel free to add these tasks manually or try again later when the AI service is available.`;

            return NextResponse.json({
                response: fallbackResponse,
                source: 'fallback',
                note: 'AI service temporarily unavailable. Using fallback response.'
            });
        }

    } catch (error: any) {
        console.error('[AI] General Error:', error);
        return NextResponse.json({
            response: 'I apologize, but I encountered an unexpected error. Please try again or add your tasks manually.',
            error: 'Internal Server Error',
            source: 'error'
        }, { status: 500 });
    }
}
