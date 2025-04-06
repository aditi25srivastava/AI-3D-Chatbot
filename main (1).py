from stt_script import transcribe_audio, record_audio
from gpt_script import chat_with_gpt
from tts_script import speak_text

print("Say something...")
audio_file = record_audio()
user_text = transcribe_audio(audio_file)
print("You said:", user_text)

ai_response = chat_with_gpt(user_text)
print("AI:", ai_response)

speak_text(ai_response)