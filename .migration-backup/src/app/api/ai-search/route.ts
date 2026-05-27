import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { supabase } from '@/lib/supabase'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json()

    if (!query || query.trim().length === 0) {
      return NextResponse.json({ tracks: [] })
    }

    const { data: allTracks, error } = await supabase
      .from('tracks')
      .select('*')

    if (error) throw error

    const prompt = `You are a music recommendation AI. Analyze this search query: "${query}"

Extract these attributes:
- mood (e.g., confident, calm, energetic, sophisticated, mysterious, uplifting)
- energy_level (low, medium, or high)
- genre preferences (ambient, hip hop, electronic, pop, etc.)
- use_case (e.g., tech startup, spa, workout, luxury brand)

Here are the available tracks:
${JSON.stringify(allTracks.map(t => ({ 
  title: t.title, 
  artist: t.artist, 
  genre: t.genre, 
  mood: t.mood, 
  energy_level: t.energy_level,
  bpm: t.bpm 
})))}

Return ONLY a JSON array of track titles that match, ranked by relevance. Format: ["Track 1", "Track 2", ...]
If no tracks match well, return an empty array.`

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are a music search assistant. Return ONLY a JSON array of matching track titles, nothing else.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.3,
    })

    const responseText = completion.choices[0].message.content || '[]'
    const matchedTitles = JSON.parse(responseText)

    const matchedTracks = matchedTitles
      .map((title: string) => allTracks.find(t => t.title === title))
      .filter(Boolean)

    return NextResponse.json({ tracks: matchedTracks })
  } catch (error) {
    console.error('AI Search error:', error)
    return NextResponse.json({ error: 'Search failed' }, { status: 500 })
  }
}
