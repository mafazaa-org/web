import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";

export const MID = "MID-20177-897";

export async function POST(req: NextRequest) {
	const orderId = randomUUID();
	const amount = (await req.formData()).get("amount");
	const hash = createHmac("sha256", process.env.KASHEIR_API_KEY as string)
		.update(`/?payment=${MID}.${orderId}.${amount}.EGP`)
		.digest("hex");
	return NextResponse.json({
		orderId,
		hash,
	});
}
