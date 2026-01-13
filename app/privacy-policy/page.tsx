import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "مفازا - سياسة الخصوصية",
  description: "سياسة الخصوصية لمشروع مفازا - تعرف على كيفية جمع واستخدام وحماية بياناتك الشخصية",
};

function PrivacyPolicyPage() {
  return (
    <div dir="rtl" className="min-h-screen w-full mt-24 px-4 md:px-10 lg:px-32 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-bold text-3xl lg:text-5xl mb-8 text-center">
          سياسة الخصوصية
        </h1>
        
        <div className="space-y-6 text-lg leading-relaxed">
          <section>
            <p className="text-gray-600 mb-4">
              آخر تحديث: {new Date().toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="mb-4">
              نرحب بكم في مفازا. نحن ملتزمون بحماية خصوصيتك وضمان أمان معلوماتك الشخصية. 
              توضح هذه السياسة كيفية جمع واستخدام وحماية بياناتك عند استخدام خدماتنا.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-2xl mb-4 mt-8">1. المعلومات التي نجمعها</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-xl mb-2">1.1 المعلومات التي تقدمها لنا</h3>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>الاسم والعنوان البريدي وعنوان البريد الإلكتروني</li>
                  <li>معلومات الاتصال مثل رقم الهاتف</li>
                  <li>المعلومات التي تقدمها عند التسجيل أو استخدام خدماتنا</li>
                  <li>المحتوى الذي تشاركه معنا من خلال النماذج أو التواصل</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">1.2 المعلومات التي نجمعها تلقائياً</h3>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>عنوان IP وجهازك ومتصفحك</li>
                  <li>معلومات حول كيفية استخدامك لموقعنا</li>
                  <li>ملفات تعريف الارتباط (Cookies) وبيانات مماثلة</li>
                  <li>معلومات حول الجهاز ونظام التشغيل</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-bold text-2xl mb-4 mt-8">2. كيفية استخدامنا لمعلوماتك</h2>
            <p className="mb-3">نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>توفير وتحسين خدماتنا</li>
              <li>الرد على استفساراتك وطلباتك</li>
              <li>إرسال التحديثات والمعلومات المتعلقة بخدماتنا</li>
              <li>ضمان أمان موقعنا ومنع الاحتيال</li>
              <li>الامتثال للالتزامات القانونية</li>
              <li>تحليل استخدام الموقع لتحسين تجربة المستخدم</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-2xl mb-4 mt-8">3. مشاركة المعلومات</h2>
            <p className="mb-3">نحن لا نبيع معلوماتك الشخصية. قد نشارك معلوماتك في الحالات التالية فقط:</p>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>مع مقدمي الخدمات الذين يساعدوننا في تشغيل موقعنا (مع ضمان حماية بياناتك)</li>
              <li>عندما يكون ذلك مطلوباً بموجب القانون أو بناءً على طلب السلطات المختصة</li>
              <li>لحماية حقوقنا وممتلكاتنا ومستخدمينا</li>
              <li>في حالة دمج أو بيع أصولنا، مع إشعارك مسبقاً</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-2xl mb-4 mt-8">4. ملفات تعريف الارتباط (Cookies)</h2>
            <p className="mb-3">
              نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. يمكنك التحكم في ملفات تعريف الارتباط 
              من خلال إعدادات متصفحك، ولكن قد يؤثر ذلك على وظائف معينة في الموقع.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-2xl mb-4 mt-8">5. أمان البيانات</h2>
            <p className="mb-3">
              نتخذ إجراءات أمنية مناسبة لحماية معلوماتك من الوصول غير المصرح به أو التغيير أو الكشف أو التدمير. 
              ومع ذلك، لا يمكن ضمان الأمان المطلق لأي معلومات عبر الإنترنت.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-2xl mb-4 mt-8">6. حقوقك</h2>
            <p className="mb-3">لديك الحقوق التالية فيما يتعلق بمعلوماتك الشخصية:</p>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>الحق في الوصول إلى معلوماتك الشخصية</li>
              <li>الحق في تصحيح المعلومات غير الدقيقة</li>
              <li>الحق في حذف معلوماتك الشخصية</li>
              <li>الحق في الاعتراض على معالجة معلوماتك</li>
              <li>الحق في نقل بياناتك</li>
            </ul>
            <p className="mt-3">
              لتنفيذ أي من هذه الحقوق، يرجى الاتصال بنا من خلال صفحة التواصل.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-2xl mb-4 mt-8">7. روابط لمواقع خارجية</h2>
            <p className="mb-3">
              قد يحتوي موقعنا على روابط لمواقع خارجية. نحن لسنا مسؤولين عن ممارسات الخصوصية 
              أو محتوى هذه المواقع. ننصحك بمراجعة سياسات الخصوصية الخاصة بهم.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-2xl mb-4 mt-8">8. تغييرات على سياسة الخصوصية</h2>
            <p className="mb-3">
              قد نحدث هذه السياسة من وقت لآخر. سنقوم بإشعارك بأي تغييرات جوهرية من خلال نشر 
              السياسة المحدثة على هذه الصفحة وتحديث تاريخ "آخر تحديث" في الأعلى.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-2xl mb-4 mt-8">9. الاتصال بنا</h2>
            <p className="mb-3">
              إذا كان لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية هذه أو ممارساتنا، 
              يرجى الاتصال بنا من خلال:
            </p>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>صفحة التواصل على موقعنا</li>
              <li>البريد الإلكتروني المذكور في صفحة التواصل</li>
            </ul>
          </section>

          <section className="mt-8 pt-6 border-t border-gray-300">
            <p className="text-gray-600">
              باستخدام موقعنا وخدماتنا، فإنك توافق على سياسة الخصوصية هذه. 
              إذا كنت لا توافق على هذه السياسة، يرجى عدم استخدام موقعنا.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
