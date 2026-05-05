interface ExperienceTimelineItemProps {
  dates: string;
  type: string;
  position: string;
  bullets: string;
}

export default function ExperienceTimelineItem({
  dates,
  type,
  position,
  bullets,
}: ExperienceTimelineItemProps) {
  const bulletList = bullets
    .split(",")
    .map((b) => b.trim())
    .filter(Boolean);

  return (
    <div className="relative pl-8 pb-10 group last:pb-0">
      {/* Vertical line */}
      <div className="absolute left-[7px] top-2 bottom-0 w-px bg-gray-300 dark:bg-white/10 group-last:hidden" />

      {/* Dot */}
      <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-gray-300 dark:border-white/20 bg-white dark:bg-surface group-hover:border-accent/60 transition-colors duration-300" />

      {/* Content */}
      <div>
        <div className="flex flex-col mob:flex-row mob:items-center gap-1 mob:gap-3 mb-2">
          <span className="text-xs text-gray-400 dark:text-white/30">{dates}</span>
          <span className="hidden mob:block text-gray-300 dark:text-white/10">·</span>
          <span className="text-xs text-gray-400 dark:text-white/30">{type}</span>
        </div>
        <p className="text-base font-semibold text-gray-800 dark:text-white/90 mb-3">{position}</p>
        <ul className="space-y-1.5">
          {bulletList.map((bullet, i) => (
            <li
              key={i}
              className="text-sm text-gray-500 dark:text-white/50 leading-relaxed flex items-start gap-2"
            >
              <span className="text-gray-300 dark:text-white/20 mt-1.5 block w-1 h-1 rounded-full bg-gray-300 dark:bg-white/20 flex-shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
