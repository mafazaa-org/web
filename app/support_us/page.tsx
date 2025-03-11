"use client";

import { useState, useEffect } from "react";
import { CenterSection } from "mafazaa-react-ui";
import fundImage from "@/assets/coins.jpg";

const description = `مفازا هو مشروع دعوي إسلامي يهدف إلى حجب المواقع الإباحية
و توفير محتوى هادف للأطفال و غيرها الكثير من المنتجات إن شاء الله التي تخدم الإسلام و المسلمين`;

const SupportPage = () => {
  const [formData, setFormData] = useState({
    amount: "",
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submissionMessage, setSubmissionMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));
    setIsSubmitted(false);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.amount) newErrors.amount = "المبلغ مطلوب";
    if (
      formData.email &&
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)
    ) {
      newErrors.email = "البريد الإلكتروني غير صالح";
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setTimeout(() => {
      setFormData({ amount: "", name: "", email: "", message: "" });
      setErrors({});
      setSubmissionMessage("تم إرسال التبرع بنجاح! جزاك الله خيرًا 🌟");
      setIsSubmitted(true);
    }, 1000);
  };

  useEffect(() => {
    setIsFormValid(!!formData.amount);
  }, [formData]);

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

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Donation Amount */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                المبلغ (جنيه مصري)
              </label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="أدخل المبلغ"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg bg-gray-100 text-black 
  font-medium transition duration-200 focus:bg-secondary-color/25 outline-none"
                min="1"
                step="any"
              />
              {errors.amount && (
                <p className="text-red-500 text-sm mt-1">{errors.amount}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary-color text-white 
              rounded-lg text-lg font-bold transition duration-300 hover:scale-105 hover:shadow-xl 
              active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!isFormValid}
            >
              إرسال التبرع 💖
            </button>

            {/* Display success message */}
            {isSubmitted && (
              <p className="text-center text-green-600 text-lg font-semibold mt-6 animate-fade-in">
                {submissionMessage}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
};

export default SupportPage;
