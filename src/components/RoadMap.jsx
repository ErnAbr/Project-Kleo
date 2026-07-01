import { coinConfig } from "../config/coinConfig";

export const Roadmap = () => {
  return (
    <section id="roadmap" className="py-8 w-3/4 mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Roadmap</h2>
      <ul className="timeline timeline-vertical">
        {coinConfig.roadmap.phases.map((phase, index) => (
          <li key={index}>
            {index !== 0 && <hr />}

            {index % 2 === 0 ? (
              <>
                <div className="timeline-start mb-10 text-right">
                  <time className="font-mono italic text-sm opacity-60">
                    {phase.phase}
                  </time>
                  <div className="text-lg font-black">{phase.title}</div>
                  <ul className="mt-2 space-y-1">
                    {phase.items.map((item, i) => (
                      <li key={i} className="text-sm opacity-75">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="timeline-middle">
                  <span className="text-xl">{coinConfig.roadmap.icon}</span>
                </div>
              </>
            ) : (
              <>
                <div className="timeline-middle">
                  <span className="text-xl">{coinConfig.roadmap.icon}</span>
                </div>
                <div className="timeline-end mb-10 text-left">
                  <time className="font-mono italic text-sm opacity-60">
                    {phase.phase}
                  </time>
                  <div className="text-lg font-black">{phase.title}</div>
                  <ul className="mt-2 space-y-1">
                    {phase.items.map((item, i) => (
                      <li key={i} className="text-sm opacity-75">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            <hr />
          </li>
        ))}
      </ul>
    </section>
  );
};
