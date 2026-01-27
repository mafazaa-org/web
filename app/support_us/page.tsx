"use client";
import fundImage from "@/assets/coins.jpg";

const SupportUsPage = () => {
	return (
		<main className="min-h-screen bg-gradient-to-br from-primary-color via-dark-one to-secondary-color">
			<section className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center py-20 px-4 md:px-10 lg:px-32 overflow-hidden">
				{/* Background Pattern */}
				<div
					className="absolute inset-0 opacity-20"
					style={{
						backgroundImage: `url(${fundImage.src})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
				/>
				<div className="absolute inset-0 bg-gradient-to-br from-dark-one/80 via-dark-two/70 to-dark-one/80"></div>

				{/* Donation Form */}
					<div className="w-full max-w-lg p-7 mx-auto mt-16">
						<div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/20 shadow-2xl">
							<h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-bright-one">
								ساهم في دعم المشروع 🌟
							</h2>
							<p className="text-center text-bright-two mb-8 text-lg">
								بارك الله فيك، يمكنك التبرع بالمبلغ الذي تريده
							</p>

							<form
								action="/support_us/pay"
								method="post"
								className="space-y-6"
							>
								<div>
									<label className="block text-bright-one font-semibold mb-2 text-lg">
										المبلغ (جنيه مصري)
									</label>
									<input
										type="number"
										name="amount"
										placeholder="أدخل المبلغ"
										className="w-full px-5 py-4 border-2 border-white/30 rounded-lg bg-white/20 backdrop-blur-sm text-bright-one placeholder-bright-two font-medium text-lg transition duration-200 focus:bg-white/30 focus:border-accent-color outline-none"
										min="10"
										required
										step="any"
									/>
								</div>

								<button
									type="submit"
									className="w-full px-8 py-4 bg-gradient-to-r from-primary-color to-secondary-color text-white rounded-lg text-xl font-bold transition duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
									disabled={false}
								>
									ادعمنا
								</button>
							</form>
						</div>
					</div>
				{/* Content */}
				<div className="relative z-10 w-full max-w-4xl mx-auto p-7 text-center space-y-12">
				

					{/* Description */}
					<div className="max-w-2xl mx-auto">
						<p className="text-xl md:text-2xl lg:text-3xl text-bright-two leading-relaxed font-bold">
							هذا باب الدعم المادي مفتوح إن توسمت في هذا المشروع خيرا و رأيت أنه حقا يعين على إعادة إحياء هذه الأمة
						</p>
					</div>

					
				</div>
			</section>
		</main>
	);
};

export default SupportUsPage;
