"use client";
import React, { useState, useEffect } from "react";

interface FormData {
  [key: string]: string;
  name: string;
  phone: string;
  email: string;
  category: string;
  message: string;
}

const googleFormEntries: { [key: string]: string } = {
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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false); // Track submission status
  const [submissionMessage, setSubmissionMessage] = useState<string>(""); // Success/Error message

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
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
    setIsSubmitted(false); // Reset submission state when form changes
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = "الاسم مطلوب";
    if (!formData.phone) newErrors.phone = "رقم الهاتف مطلوب";
    if (!formData.email) newErrors.email = "البريد الإلكتروني مطلوب";
    if (!formData.category) newErrors.category = "الرجاء اختيار فئة";
    if (!formData.message) newErrors.message = "الرسالة مطلوبة";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    let url =
      "https://docs.google.com/forms/d/e/1FAIpQLSc14podGZFjpmWE4Sc4Z5GOIlLSSF2ZbeqsoKFbLg-MsWBmVA/formResponse?submit=Submit&usp=pp_url";
    for (let key of Object.keys(formData)) {
      url += `&entry.${googleFormEntries[key]}=${formData[key]}`;
    }

    try {
      await fetch(url, {
        method: "POST",
        mode: "no-cors", // <-- This line enables 'no-cors' mode
      });

      // Clear the form after successful submission
      setFormData({
        name: "",
        phone: "",
        email: "",
        category: "",
        message: "",
      });
      setSubmissionMessage("تم إرسال الرسالة بنجاح! شكراً لك.");
      setIsSubmitted(true); // Update submission state
    } catch (error) {
      setSubmissionMessage("حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى.");
      setIsSubmitted(true); // Update submission state
      console.error("Error submitting the form:", error);
    }
  };

  // Check if all fields are filled
  useEffect(() => {
    const isValid =
      formData.name &&
      formData.phone &&
      formData.email &&
      formData.category &&
      formData.message;
    setIsFormValid(Boolean(isValid));
  }, [formData]);

  return (
    <div className={`max-w-lg lg:max-w-xl px-6 lg:px-0 mx-auto py-20`}>
      <h1 className="text-center text-2xl lg:text-[40px] font-bold mb-3">
        ساهم او اطلب مساعدة
      </h1>
      <p className="text-center font-medium text-base lg:text-[20px] mb-8">
        تفضل اخي و اعرض علينا ما عندك و أفدنا جزاك الله عنا خير الجزاء
      </p>

      <form dir="rtl" onSubmit={handleSubmit} className="space-y-4">
        <div className="w-full flex flex-col lg:flex-row gap-6 ">
          <input
            type="text"
            name="name"
            aria-label="الاسم"
            placeholder="الاسم"
            value={formData.name}
            onChange={handleChange}
            className="w-full lg:w-1/2 px-4 py-2.5 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 placeholder:text-[#afafaf] bg-[#f5f5f5] text-black lg:font-bold placeholder:lg:font-bold"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
          <input
            type="text"
            name="phone"
            aria-label="رقم الهاتف"
            placeholder="رقم الهاتف"
            value={formData.phone}
            onChange={handleChange}
            className="w-full lg:w-1/2 px-4 py-2.5 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 placeholder:text-[#afafaf] bg-[#f5f5f5] text-black lg:font-bold placeholder:lg:font-bold"
          />
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}
        </div>

        <input
          type="email"
          name="email"
          aria-label="البريد الالكتروني"
          placeholder="البريد الالكتروني"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 placeholder:text-[#afafaf] bg-[#f5f5f5] text-black lg:font-bold placeholder:lg:font-bold"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        <select
          name="category"
          aria-label="فئة"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 placeholder:text-[#afafaf] bg-[#f5f5f5] text-[#afafaf] lg:font-bold placeholder:lg:font-bold"
        >
          <option value="">ماذا تود أن تفعل</option>
          <option value="help">طلب مساعدة</option>
          <option value="contribute">مساهمة</option>
        </select>
        {errors.category && <p className="text-red-500">{errors.category}</p>}

        <textarea
          name="message"
          aria-label="الرسالة"
          placeholder={MsgPlaceholder}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 placeholder:text-[#afafaf] bg-[#f5f5f5] text-black lg:font-bold placeholder:lg:font-bold"
          rows={4}
        />
        {errors.message && <p className="text-red-500">{errors.message}</p>}

        <button
          type="submit"
          className={`w-full px-4 py-2.5 border border-[#D9D9D9] rounded-lg bg-purple-600 text-white lg:font-bold placeholder:lg:font-bold shadow active:shadow-inner hover:bg-purple-700 ${
            !isFormValid ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!isFormValid}
        >
          ارسال
        </button>

        {/* Display success or error message */}
        {isSubmitted && (
          <p className="text-center text-green-500 mt-4">{submissionMessage}</p>
        )}
      </form>
    </div>
  );
};

export default Form;
