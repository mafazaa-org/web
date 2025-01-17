import { NextRequest, NextResponse } from "next/server"
import { GET } from "../join/route"

export async GET(req: NextRequest) {
    return NextResponse.redirect("https://chat.whatsapp.com/GpVDyjVulTgArIyEhZ75HO")
}