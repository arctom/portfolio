export default function SkillGroup({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <div className="mb-6 last:mb-0">
      <p className="text-xs font-medium text-gray-400 dark:text-white/30 uppercase tracking-wider mb-3">
        {title}
      </p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/60 hover:bg-gray-200 dark:hover:bg-white/10 hover:border-gray-400 dark:hover:border-white/20 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
