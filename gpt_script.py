import openai

openai.api_key = "YOUR_OPENAI_API_KEY"

def chat_with_gpt(prompt):
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}]
    )
    return response["choices"][0]["message"]["content"]

# Test
if __name__ == "__main__":
    user_input = "What is AI?"
    response = chat_with_gpt(user_input)
    print("AI says:", response)