import { ECellHeader } from "../../components/Header";
import { ECellFooter } from "../../components/Footer";

export default function Events() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <ECellHeader />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-12 text-center">
        <h1 className="text-[10vw] leading-none font-extrabold tracking-[0.15em] md:text-8xl">
          EVENTS
        </h1>
        <div className="mx-auto mt-8 h-10 w-6 rounded bg-neutral-700" />
      </section>

      {/* Timeline */}
      <section className="relative">
        {/* True vertical line down the center */}
        <div className="pointer-events-none absolute left-1/2 top-0 -ml-[1px] h-full w-[2px] bg-neutral-700" />

        <div className="mx-auto max-w-6xl px-4 py-8">
          {/* Sequential list — each item is a row on the timeline */}
          <ol className="relative space-y-28">
            <TimelineItem
              side="left"
              title="E-SUMMIT"
              subtitle="Disrupt"
              desc="A platform where you compete in teams to pitch your ideas and sell the products that are given to you on spot"
              date="23 JUNE 2022"
            />

            <TimelineItem
              side="right"
              title="HACKATHON"
              subtitle="Disrupt"
              desc="A platform where you compete in teams to pitch your ideas and sell the products that are given to you on spot"
              date="23 JUNE 2022"
            />

            <TimelineItem
              side="left"
              title="WORKSHOP"
              subtitle="Disrupt"
              desc="A platform where you compete in teams to pitch your ideas and sell the products that are given to you on spot"
              date="23 JUNE 2022"
            />

            <TimelineItem
              side="right"
              title="CONFERENCE"
              subtitle="Keynote Session"
              desc="Inspiring keynote speaker session, where industry insights and innovative ideas will shape your future success"
              date="23 JUNE 2026"
            />
          </ol>
        </div>
      </section>

      <ECellFooter />
    </div>
  );
}

/**
 * TimelineItem — sequential row with center date, dashed connector and side card.
 */
function TimelineItem({
  side,
  title,
  subtitle,
  desc,
  date,
}: {
  side: "left" | "right",
  title: string,
  subtitle: string,
  desc: string,
  date: string,
}) {
  const isLeft = side === "left";

  return (
    <li className="relative">
      {/* Row layout: two halves; content appears on one side only */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-0">
        {/* Left side */}
        <div className={`${isLeft ? "order-1" : "order-2"} md:order-1`}>
          {isLeft && <Card title={title} subtitle={subtitle} desc={desc} />}
        </div>

        {/* Right side */}
        <div
          className={`${isLeft ? "order-2" : "order-1"
            } md:order-2 flex md:justify-end`}
        >
          {!isLeft && (
            <Card title={title} subtitle={subtitle} desc={desc} align="right" />
          )}
        </div>
      </div>

      {/* Center dot */}
      <span
        className="absolute left-1/2 top-8 -ml-[6px] h-3 w-3 rounded-full bg-white"
        aria-hidden
      />

      {/* Date badge next to the center line */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
        <div className="flex items-center gap-3 text-lg font-semibold md:text-xl">
          <span
            className="inline-block h-5 w-5 rounded bg-neutral-700"
            aria-hidden
          />
          <span>{date}</span>
        </div>
      </div>

      {/* Dashed connector from line to the card — matches timeline thickness */}
      <div
        className={`absolute top-10 h-0 border-t-2 border-neutral-700 border-dashed ${isLeft
          ? "left-1/2 -translate-x-1/2 md:w-[44%]"
          : "right-1/2 translate-x-1/2 md:w-[44%]"
          } w-[40%]`}
        aria-hidden
      />
    </li>
  );
}

function Card({
  title,
  subtitle,
  desc,
  align = "left",
}: {
  title: string,
  subtitle: string,
  desc: string,
  align?: "left" | "right",
}) {
  const alignClass = align === "right" ? "md:ml-16" : "md:mr-16";
  return (
    <article
      className={`w-full max-w-xl rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-xl ${alignClass}`}
    >
      <h3 className="text-3xl font-extrabold tracking-wider">{title}</h3>
      <div className="mt-2 h-[2px] w-24 bg-neutral-700" />
      <p className="mt-4 text-sm uppercase tracking-widest text-neutral-400">
        {subtitle}
      </p>
      <p className="mt-2 leading-relaxed text-neutral-300">{desc}</p>
      <div className="mt-6">
        <button
          className="group inline-flex items-center gap-3 rounded-md border border-neutral-700 px-4 py-2 text-sm font-semibold tracking-wider hover:bg-neutral-800"
          type="button"
        >
          READ MORE{" "}
          <span className="font-mono text-neutral-400">-----&gt;</span>
        </button>
      </div>
    </article>
  );
}
