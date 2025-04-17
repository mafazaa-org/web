import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";
import { redirect, RedirectType } from "next/navigation";

const MID = "MID-20177-897";

export async function POST(req: NextRequest) {
	const orderId = randomUUID();
	const amount = (await req.formData()).get("amount");
	const hash = createHmac("sha256", process.env.KASHEIR_API_KEY as string)
		.update(`/?payment=${MID}.${orderId}.${amount}.EGP`)
		.digest("hex");

	const url =
		`https://checkout.kashier.io/?merchantId=${MID}&` +
		`orderId=${orderId}&` +
		`amount=${amount}&` +
		`currency=EGP&` +
		`hash=${hash}&` +
		`mode=${process.env.KASHEIR_MODE}&` +
		`merchantRedirect=${encodeURI(
			process.env.NEXT_PUBLIC_HOST + "/support_us/"
		)}&` +
		`allowedMethods=card,wallet&` +
		`defaultMethod=wallet` +
		`failureRedirect=true&` +
		`redirectMethod=get&` +
		`brandColor=%23ffe600&` +
		`display=ar`;
	console.log(url);
	redirect(url, RedirectType.replace);
}
