import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

async function handler(req: NextRequest) {
  let body = null;
  try {
    body = await req.json();
    const data = await prisma.user.findMany();
  } catch {}

  return NextResponse.json({
    ok: true,
    method: req.method,
    body,
  });
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;
