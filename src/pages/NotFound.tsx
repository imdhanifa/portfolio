import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function TypingText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const i = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (i.current < text.length) {
        setDisplayed((prev) => prev + text.charAt(i.current));
        i.current += 1;
      } else {
        clearInterval(interval);
      }
    }, 150); 

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black">
      <h1 className="font-mono text-4xl text-red-500 tracking-widest">
        {displayed}
        <span className="animate-pulse">_</span>
      </h1>
    </div>
  );
}

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 1500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return <TypingText text="4004 PAGE NOT FOUND" />;
}
