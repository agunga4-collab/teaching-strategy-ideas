import { GoogleGenAI, Type } from "@google/genai";
import { RoutineDetail } from "../types";
import { getSlug } from "../data";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getRoutineDetail(routineName: string): Promise<RoutineDetail> {
  const slug = getSlug(routineName);
  const prompt = `Anda adalah pakar pendidikan dari Harvard Project Zero. 
Berikan penjelasan mendalam tentang Visible Thinking Routine berikut: "${routineName}".

Berikan respon dalam Bahasa Indonesia yang inspiratif dan praktis untuk guru.

STRUKTUR RESPON:
1. Nama Routine
2. Tujuan (Purpose): Mengapa routine ini digunakan? Apa jenis pemikiran yang didorong?
3. Kapan & Di Mana Digunakan (Application): Konteks apa yang paling cocok?
4. Langkah-langkah Implementasi: Panduan langkah demi langkah yang jelas.
5. Tips untuk Pemula: Hal-hal yang perlu diperhatikan agar sukses.
6. Contoh Penerapan di Kelas: Skenario singkat penerapan di mata pelajaran tertentu.
7. Link Referensi: https://pz.harvard.edu/resources/${slug}

FORMAT RESPON: JSON OBJECT`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            purpose: { type: Type.STRING },
            application: { type: Type.STRING },
            steps: { type: Type.ARRAY, items: { type: Type.STRING } },
            tips: { type: Type.ARRAY, items: { type: Type.STRING } },
            example: { type: Type.STRING },
            referenceLink: { type: Type.STRING }
          },
          required: ["name", "purpose", "application", "steps", "tips", "example", "referenceLink"]
        }
      },
    });

    return JSON.parse(response.text || "{}");
  } catch (error: any) {
    console.error("Failed to fetch routine detail:", error);
    throw new Error("Gagal mengambil detail rutinitas. Silakan coba lagi nanti.");
  }
}
