import { NextResponse } from 'next/server';


export async function GET() {
    const res = await fetch('https://github-readme-stats.vercel.app/api?username=SBasu-7870&theme=algolia&show_icons=true');

    const svgData = await res.text();
   
    return NextResponse.json({ svgData });
  }