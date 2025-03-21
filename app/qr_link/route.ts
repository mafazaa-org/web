import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	return NextResponse.redirect("https://ainaa.mafazaa.com/gen1/setupguide");
}
