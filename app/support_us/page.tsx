"use client";

import { CenterSection } from "mafazaa-react-ui";
import React, { useEffect, useRef, useState } from "react";
import fundImage from "@/assets/front-view-plant-growing-from-golden-coins.jpg";
import Script from "next/script";

const description = `مفازا هو مشروع دعوي إسلامي يهدف إلى حجب المواقع الإباحية
 و توفير محتوى هادف للأطفال و غيرها الكثير من المنتجات إن شاء الله التي تخدم الإسلام و المسلمين
 `;

const SupportPage = () => {
	const [trxData, setTrxData] = useState(null);
	const [amount, setAmount] = useState(0);
	const [changed, setChanged] = useState(false);
	return (
		<main>
			<CenterSection
				{...{
					title: "ادعم مفازا",
					description,
					backgroundImage: fundImage,
					buttons: [],
					textColor: "#f2f2f2",
				}}
			/>
			<section className=" w-full p-30 flex items-center flex-row justify-center space-x-5 align-beforepeew">
				<form
					action={
						process.env.NEXT_PUBLIC_HOST + "/api/payments/create"
					}
					method="POST"
				>
					<label>ادعمنا بـ:</label>
					<input
						id="amount"
						name="amount"
						value={amount}
						type="number"
						placeholder="EGP"
					/>
					<button type="submit">ادعم</button>
				</form>
			</section>
		</main>
	);
};

export default SupportPage;
