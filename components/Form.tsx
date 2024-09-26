"use client";
import React, { useState } from "react";

interface FormData {
	name: string;
	phone: string;
	email: string;
	category: string;
	message: string;
}

const googleFormEntries = {
	name: "363973468",
	phone: "352758841",
	email: "1290881859",
	category: "11630139",
	message: "1905445608",
};

const Form: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		phone: "",
		email: "",
		category: "",
		message: "",
	});
	const [MsgPlaceholder, setMsgPlaceholder] =
		useState<string>("اكتب رسالتك هنا");

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		if (name === "category") {
			setMsgPlaceholder(
				value === "contribute" ? "كيف تود أن تساهم معنا" : "كيف نساعدك"
			);
		}
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission here (e.g., send data to an API or email service)
		// https://docs.google.com/forms/d/e/1FAIpQLSc14podGZFjpmWE4Sc4Z5GOIlLSSF2ZbeqsoKFbLg-MsWBmVA/formResponse?submit=Submit&usp=pp_url&entry.363973468=ahmed&entry.352758841=01003816322&entry.1290881859=ahmedelbehairy.72005@gmail.com&entry.11630139=help&entry.1905445608=hello,+world
		let url =
			"https://docs.google.com/forms/d/e/1FAIpQLSc14podGZFjpmWE4Sc4Z5GOIlLSSF2ZbeqsoKFbLg-MsWBmVA/formResponse?submit=Submit&usp=pp_url";
		for (let key of Object.keys(formData)) {
			url += `&entry.${googleFormEntries[key]}=${formData[key]}`;
		}

		console.log(
			await fetch(url, {
				method: "POST",
			})
		);
	};

	return (
		<div className={`max-w-lg lg:max-w-xl px-6 lg:px-0 mx-auto py-24`}>
			<h1 className="text-center text-2xl lg:text-[40px] font-bold mb-3">
				ساهم او اطلب مساعدة
			</h1>
			<p className="text-center font-medium text-base lg:text-[20px] mb-8">
				تفضل اخي و اعرض علينا ما عندك و أفدنا جزاك الله عنا خير الجزاء
			</p>

			<form onSubmit={handleSubmit} className="space-y-4">
				<div className="w-full flex flex-col lg:flex-row gap-6 ">
					<input
						type="text"
						name="name"
						placeholder="الاسم"
						value={formData.name}
						onChange={handleChange}
						className="w-full lg:w-1/2 px-4 py-2.5 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 placeholder:text-[#afafaf] bg-[#f5f5f5] lg:font-bold placeholder:lg:font-bold"
					/>
					<input
						type="text"
						name="phone"
						placeholder="رقم الهاتف"
						value={formData.phone}
						onChange={handleChange}
						className="w-full lg:w-1/2 px-4 py-2.5 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 placeholder:text-[#afafaf] bg-[#f5f5f5] lg:font-bold placeholder:lg:font-bold"
					/>
				</div>

				<input
					type="email"
					name="email"
					placeholder="البريد الالكتروني"
					value={formData.email}
					onChange={handleChange}
					className="w-full px-4 py-2.5 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 placeholder:text-[#afafaf] bg-[#f5f5f5] lg:font-bold placeholder:lg:font-bold"
				/>

				<select
					name="category"
					value={formData.category}
					onChange={handleChange}
					className="w-full px-4 py-2.5 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 placeholder:text-[#afafaf] bg-[#f5f5f5] text-[#afafaf] lg:font-bold placeholder:lg:font-bold"
				>
					<option value="">ماذا تود أن تفعل</option>
					<option value="help">طلب مساعدة</option>
					<option value="contribute">مساهمة</option>
				</select>

				<textarea
					name="message"
					placeholder={MsgPlaceholder}
					value={formData.message}
					onChange={handleChange}
					className="w-full px-4 py-2.5 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 placeholder:text-[#afafaf] bg-[#f5f5f5] lg:font-bold placeholder:lg:font-bold"
					rows={4}
				/>

				<button
					type="submit"
					className="w-full px-4 py-2.5 border border-[#D9D9D9] rounded-lg  placeholder:text-[#afafaf] bg-[#f5f5f5] text-[#afafaf] lg:font-bold placeholder:lg:font-bold shadow-sm active:shadow-inner"
				>
					ارسال
				</button>
			</form>
		</div>
	);
};

export default Form;
