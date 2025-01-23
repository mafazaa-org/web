import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	return NextResponse.redirect(
		"https://chat.whatsapp.com/GpVDyjVulTgArIyEhZ75HO"
	);
}
