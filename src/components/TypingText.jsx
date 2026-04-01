import { useEffect, useState } from 'react';

export default function TypingText({ words }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex] || '';
    const speed = deleting ? 45 : 85;

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = currentWord.slice(0, displayText.length + 1);
        setDisplayText(next);

        if (next === currentWord) {
          setTimeout(() => setDeleting(true), 900);
        }
      } else {
        const next = currentWord.slice(0, displayText.length - 1);
        setDisplayText(next);

        if (next === '') {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, deleting, wordIndex, words]);

  return (
    <span>
      {displayText}
      <span className="ml-0.5 animate-pulse text-teal-500">|</span>
    </span>
  );
}
