export default function Footer({ profile }) {
  return (
    <footer className="mt-8 text-center pb-8 pt-8 border-t border-slate-200/80 dark:border-slate-800">
      <p className="font-medium text-cyan-700 dark:text-cyan-300">{profile.tagline}</p>
      <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
        Copyright {new Date().getFullYear()} {profile.name}.
      </p>
    </footer>
  );
}
