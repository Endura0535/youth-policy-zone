import axios from "axios";

export default async function createMessage(conversation) {
  const requestBody = {
    messages: conversation,
    max_tokens: 150,
    temperature: 0,
    model: "gpt-3.5-turbo-0613",
  };

  const response = await axios.post("https://api.openai.com/v1/chat/completions", requestBody, {
    headers: {
      Authorization: "Bearer " + process.env.REACT_APP_OPENAI_API_KEY,
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 200) {
    console.log("Error: ", response.data.error);
    alert("Error: " + response.data.error);
    return conversation;
  }
  conversation.push({ role: "assistant", content: response.data.choices[0].message.content });
  return conversation;
}
