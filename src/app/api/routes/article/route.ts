import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    method: "GET",
    message: "Hi from articles",
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  return NextResponse.json({
    method: "POST",
    message: "Created",
    body,
  });
}
