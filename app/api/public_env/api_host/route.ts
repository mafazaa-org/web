import { NextRequest, NextResponse } from "next/server";

const resInit = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers":
      "Access-Control-Allow-Origin, Access-Control-Allow-Methods, Content-Type, Authorization",
  },
};

export async function GET(req: NextRequest) {
  return NextResponse.json(process.env.NEXT_PUBLIC_API_HOST, resInit);
}

export async function OPTIONS(req: NextRequest) {
  return NextResponse.json("", resInit);
}
