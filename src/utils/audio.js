const uploadAudioForTranscription = async (audioBlob) => {
  const arrayBuffer = await audioBlob.arrayBuffer();
  const base64Audio = btoa(
    new Uint8Array(arrayBuffer).reduce((data, byte) => data + String.fromCharCode(byte), "")
  );

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=AIzaSyBhiAwfa1JaiytGYvcEYIX0YaZ4Du7eFqU",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              { text: "Transcribe this audio to text:" },
              { inline_data: { mime_type: "audio/wav", data: base64Audio } }
            ]
          }
        ]
      }),
    }
  );

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || "No transcript available";
};

export default uploadAudioForTranscription
