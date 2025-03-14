"use client";

import fundImage from "@/assets/coins.jpg";
import { CenterSection } from "mafazaa-react-ui";
import { useState } from "react";
// Import an icon (example using a common icon library)


const description = `مفازا هو مشروع دعوي إسلامي يهدف إلى حجب المواقع الإباحية
و توفير محتوى هادف للأطفال و غيرها الكثير من المنتجات إن شاء الله التي تخدم الإسلام و المسلمين`;

const SupportUsPage = () => {
  const [customAmount, setCustomAmount] = useState<string>("");
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const quickAmounts = [50, 100, 200, 500];

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    // Only allow numbers (digits) and empty string
    if (inputValue === '' || /^\d*$/.test(inputValue)) {
      setCustomAmount(inputValue);
      setSelectedAmount("custom");
      setError("");
    }
  };

  const handleAmountSelect = (value: number) => {
    setSelectedAmount(value.toString());
    setCustomAmount("");
    setError("");
  };

  const getFinalAmount = (): string => {
    if (selectedAmount === "custom") {
      return customAmount;
    }
    return selectedAmount;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const amount = getFinalAmount();
    if (!amount || Number(amount) < 10) {
      setError("المبلغ يجب أن يكون 10 جنيه على الأقل");
      return;
    }

    setIsSubmitting(true);
    
    // Add hidden input with the final amount value
    const form = document.getElementById("donationForm") as HTMLFormElement;
    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.name = "amount";
    hiddenInput.value = amount;
    form.appendChild(hiddenInput);
    
    // Submit the form
    setTimeout(() => {
      if (form) {
        form.submit();
      }
    }, 500);
  };

  return (
    <main className="min-h-screen relative flex flex-col p-10">
      {/* Background Image - Full Page */}
      <div 
        className="absolute inset-0 w-full h-full z-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${fundImage.src})` }}
      >
        {/* Add a dark overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Hero Section */}
   

      {/* Form Section - with transparent backdrop */}
      <section className="flex items-center justify-center md:px-6 md:py-16 lg:py-24 relative z-10">
        {/* Donation Form with higher transparency */}
        <div className="w-full md:w-full max-w-2xl  backdrop-blur-sm p-6 md:p-12 md:rounded-3xl md:shadow-2xl border border-white/30">
          <h2 className="text-[3.5rem] font-bold text-center mb-6 text-white flex items-center justify-center gap-2">
            <span>ساهم في دعم المشروع</span>
          </h2>
          <p className="text-center text-white mb-8 text-lg drop-shadow-md">
            بارك الله فيك، يمكنك التبرع بالمبلغ الذي تريده
          </p>

          <form
            id="donationForm"
            action="/support_us/pay"
            method="post"
            className="space-y-8"
            onSubmit={handleSubmit}
          >
            {/* Amount Selection Section */}
            <div>
              <label className="block text-white font-medium mb-4 text-right text-lg drop-shadow-md">
                المبلغ (جنيه مصري)
              </label>
              
              {/* Quick Amount Radio Options */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {quickAmounts.map((amount) => (
                  <div key={amount} className="relative">
                    <input 
                      type="radio"
                      id={`amount-${amount}`}
                      name="amount-option"
                      className="sr-only peer"
                      checked={selectedAmount === amount.toString()}
                      onChange={() => handleAmountSelect(amount)}
                    />
                    <label 
                      htmlFor={`amount-${amount}`}
                      className="flex items-center justify-center py-3 px-2 rounded-xl transition-colors duration-200 
                        font-medium backdrop-blur-sm text-lg cursor-pointer text-center w-full
                        peer-checked:bg-secondary-color/60 peer-checked:text-white peer-checked:border-secondary-color/60
                        bg-white/30 text-white hover:bg-white/40 border border-white/30
                        peer-checked:border peer-checked:shadow-md"
                    >
                      {amount}
                    </label>
                  </div>
                ))}
              </div>
              
              {/* Custom Amount Option */}
              <div className="relative">
                <input 
                  type="radio"
                  id="amount-custom"
                  name="amount-option"
                  className="sr-only peer"
                  checked={selectedAmount === "custom"}
                  onChange={() => setSelectedAmount("custom")}
                />
                <label 
                  htmlFor="amount-custom"
                  className="flex items-center justify-between py-3 px-4 rounded-xl transition-colors duration-200 
                    font-medium backdrop-blur-sm text-lg cursor-pointer w-full
                    peer-checked:bg-secondary-color/40 peer-checked:border-secondary-color/60
                    bg-white/30 text-white hover:bg-white/40 border border-white/30
                    peer-checked:border peer-checked:shadow-md"
                >
                  <span className="text-right">مبلغ آخر</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    onClick={() => setSelectedAmount("custom")}
                    placeholder="أدخل المبلغ"
                    className="w-1/2 px-3 py-1 bg-white/80 rounded-lg text-right text-gray-800 focus:outline-none focus:ring-1 focus:ring-secondary-color"
                  />
                </label>
              </div>
              
              {error && (
                <p className="text-yellow-300 text-sm mt-2 text-right font-medium drop-shadow-md">
                  {error}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary-color text-white 
                rounded-xl text-xl font-bold transition duration-300 hover:scale-105 hover:shadow-xl 
                active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 mt-8"
              disabled={isSubmitting || (!selectedAmount)}
            >
              {isSubmitting ? (
                <>
                  <span className="inline-block h-6 w-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  <span>جاري الإرسال...</span>
                </>
              ) : (
                <>
                  <span>ادعمنا</span>
                  <span className="animate-pulse w-6 h-6">💖</span>
                </>
              )}
            </button>
          </form>
          
          <div className="mt-8 text-center text-white text-base drop-shadow-md">
            <p>جميع التبرعات تساهم في استمرار المشروع وتطويره</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SupportUsPage;