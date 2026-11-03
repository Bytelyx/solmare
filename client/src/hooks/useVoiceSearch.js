import { useState } from "react";
import { toast } from "sonner";

export function useVoiceSearch(onResult) {
  const [listening, setListening] = useState(false);

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition ?? window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      toast.error("Voice search isn't supported in this browser");
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = "en-IN";
      recognition.onresult = (e) => {
        const transcript = e.results[0][0].transcript;
        if (transcript && onResult) {
          onResult(transcript);
        }
      };
      recognition.onend = () => setListening(false);
      recognition.onerror = () => setListening(false);

      setListening(true);
      recognition.start();
    } catch (e) {
      console.error(e);
      setListening(false);
    }
  };

  return { listening, startListening };
}
