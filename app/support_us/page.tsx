"use client";

import { useState, useEffect } from "react";
import { CenterSection } from "mafazaa-react-ui";
import fundImage from "@/assets/coins.jpg";

const description = `مفازا هو مشروع دعوي إسلامي يهدف إلى حجب المواقع الإباحية
و توفير محتوى هادف للأطفال و غيرها الكثير من المنتجات إن شاء الله التي تخدم الإسلام و المسلمين`;

const SupportUsPage = () => {
	return (
		<main className="min-h-screen bg-gradient-to-b from-bright-one to-gray-100 flex flex-col">
			{/* Hero Section */}
			<CenterSection
				title="ادعم مفازا"
				description={description}
				backgroundImage={fundImage}
				buttons={[]}
				textColor="white"
			/>

			{/* Form Section */}
			<section className="flex items-center justify-center md:px-6 md:py-16 lg:py-20">
				<div className="w-full md:w-full max-w-lg bg-white p-4 md:p-10 md:rounded-3xl md:shadow-2xl border border-gray-200">
					<h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
						ساهم في دعم المشروع 🌟
					</h2>
					<p className="text-center text-gray-600 mb-6">
						بارك الله فيك، يمكنك التبرع بالمبلغ الذي تريده
					</p>

					<form
						action="/support_us/pay"
						method="post"
						className="space-y-6"
					>
						{/* Donation Amount */}
						<div>
							<label className="block text-gray-700 font-medium mb-1">
								المبلغ (جنيه مصري)
							</label>
							<input
								type="number"
								name="amount"
								placeholder="أدخل المبلغ"
								className="w-full px-5 py-3 border border-gray-300 rounded-lg bg-gray-100 text-black 
  font-medium transition duration-200 focus:bg-secondary-color/25 outline-none"
								min="10"
								step="any"
							/>
							{/* {errors.amount && (
								<p className="text-red-500 text-sm mt-1">
									{errors.amount}
								</p>
							)} */}
						</div>

						{/* Submit Button */}
						<button
							type="submit"
							className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary-color text-white 
              rounded-lg text-lg font-bold transition duration-300 hover:scale-105 hover:shadow-xl 
              active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
							disabled={false}
						>
							ادعمنا 💖
						</button>
					</form>
				</div>
			</section>
		</main>
	);
};

export default SupportUsPage;
