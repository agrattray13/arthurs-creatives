import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file');

  if (!file || typeof file === 'string') {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  const fileName = file.name;
  const fileData = Buffer.from(await file.arrayBuffer());
  const imagesDir = path.join(process.cwd(), 'public', 'images');

  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  const filePath = path.join(imagesDir, fileName);
  fs.writeFileSync(filePath, fileData);

  return NextResponse.json({ url: `/images/${fileName}` });
}
