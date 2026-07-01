import { coinConfig } from "../config/coinConfig";

export const FAQ = () => {
  return (
    <section id="faq" className="py-4 w-3/4 mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">FAQ</h2>
      <div className="flex flex-col gap-3">
        {coinConfig.faq.questions.map((item, index) => (
          <div key={index} className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-bold">{item.q}</div>
            <div className="collapse-content">
              <p className="text-sm opacity-75">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
