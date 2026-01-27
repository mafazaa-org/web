const EXCALIDRAW_URL =
  "https://excalidraw.com/#json=ZmgHi0uKPxF0bGCRBFnvB,V-FmcPJpLiSsqh_UTSUPiQ";

export default function ManhajPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-color via-dark-one to-secondary-color text-bright-one flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full">
        {/* Subtle background halo */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(13,48,158,0.20),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(96,20,140,0.18),_transparent_55%)]" />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-one/60 via-dark-two/50 to-dark-one/60"></div>

        <section className="relative mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 bg-clip-padding p-8 sm:p-10 shadow-2xl shadow-primary-color/40 backdrop-blur-xl">
          {/* Accent bar */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-color/40 bg-accent-color/10 px-4 py-1 text-xs font-medium text-bright-one">
            <span className="h-2 w-2 rounded-full bg-accent-color shadow-[0_0_12px_rgba(24,202,211,0.9)]" />
            منهج لصناعة جيلٍ رباني
          </div>

          <header className="space-y-3 text-center">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-bright-one">
              المنهج المقترح{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-color via-accent-color to-secondary-color">
                لصناعة الرجال
              </span>
            </h1>
          </header>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-bright-two text-right">
            هذا منهجٌ مقترح للمحاضن التربوية، بل و يصلح إن شاء الله للمدارس والجامعات أيضًا،
            مُصمَّمٌ لصناعة رجالٍ قريبين – قدر المستطاع – من مستوى الصحابة
            رضوان الله عليهم؛ عقيدةً، وعبادةً، وأخلاقًا، وحملًا لهمِّ هذه الأمة.
          </p>

          {/* Info chips */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-bright-two">
            <span className="inline-flex items-center gap-1 rounded-full bg-dark-one/60 px-3 py-1 border border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-color" />
              رؤية متكاملة للمحضن التربوي
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-dark-one/60 px-3 py-1 border border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-color" />
              مناسبة للمدارس والجامعات
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-dark-one/60 px-3 py-1 border border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary-color" />
              قابلة للتطوير والتخصيص
            </span>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={EXCALIDRAW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-color to-secondary-color px-7 py-3 text-sm sm:text-base font-semibold text-bright-one shadow-lg shadow-primary-color/40 hover:opacity-90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-color focus:ring-offset-2 focus:ring-offset-dark-one transition-transform"
            >
              الاطلاع على المنهج
              <span className="mr-2 text-base" aria-hidden="true">
                ↗
              </span>
            </a>

          </div>
        </section>
      </div>
    </main>
  );
}