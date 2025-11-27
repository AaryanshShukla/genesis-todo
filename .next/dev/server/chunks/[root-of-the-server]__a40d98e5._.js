module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/.gemini/antigravity/scratch/gand-faad-todo/app/api/chat/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$gand$2d$faad$2d$todo$2f$node_modules$2f40$huggingface$2f$inference$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/gand-faad-todo/node_modules/@huggingface/inference/dist/esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$gand$2d$faad$2d$todo$2f$node_modules$2f40$huggingface$2f$inference$2f$dist$2f$esm$2f$InferenceClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/gand-faad-todo/node_modules/@huggingface/inference/dist/esm/InferenceClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$gand$2d$faad$2d$todo$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/gand-faad-todo/node_modules/next/server.js [app-route] (ecmascript)");
;
;
// Use a free token if available, otherwise rely on public API limits
const HUGGINGFACE_API_KEY = process.env.HUGGINGFACE_API_KEY;
const hf = new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$gand$2d$faad$2d$todo$2f$node_modules$2f40$huggingface$2f$inference$2f$dist$2f$esm$2f$InferenceClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HfInference"](HUGGINGFACE_API_KEY);
// Using Phi-3-mini which is fast and capable for instruction following
const MODEL_NAME = 'microsoft/Phi-3-mini-4k-instruct';
async function POST(req) {
    try {
        const { message } = await req.json();
        if (!message) {
            return __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$gand$2d$faad$2d$todo$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Message is required'
            }, {
                status: 400
            });
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
                    return_full_text: false
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
                generatedText = generatedText.split('\n').filter((line)=>line.trim().length > 0).map((line, i)=>`${i + 1}. ${line.replace(/^[-*•]\s*/, '')}`).join('\n');
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$gand$2d$faad$2d$todo$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                response: generatedText,
                source: 'dynamic-ai'
            });
        } catch (apiError) {
            console.error('[AI] Hugging Face API Error:', apiError);
            // If API fails, we return a specific error so the UI can handle it
            // or we could try a backup model here.
            // Let's try one backup model before failing
            try {
                console.log('[AI] Retrying with backup model: google/gemma-1.1-7b-it');
                const backupResponse = await hf.textGeneration({
                    model: 'google/gemma-1.1-7b-it',
                    inputs: `Break down this goal into 8 actionable tasks: ${message}`,
                    parameters: {
                        max_new_tokens: 400,
                        temperature: 0.7,
                        return_full_text: false
                    }
                });
                return __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$gand$2d$faad$2d$todo$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    response: backupResponse.generated_text.trim(),
                    source: 'dynamic-ai-backup'
                });
            } catch (backupError) {
                console.error('[AI] Backup model failed:', backupError);
                return __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$gand$2d$faad$2d$todo$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'AI service is currently overloaded. Please try again in a moment.',
                    details: apiError.message
                }, {
                    status: 503
                });
            }
        }
    } catch (error) {
        console.error('[AI] General Error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$gand$2d$faad$2d$todo$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal Server Error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a40d98e5._.js.map