
import axios from "axios";

export const askAi=async (messages)=>{
    try{
        if(!messages || !Array.isArray(messages)|| messages.length===0){
            throw new Error("Message array is empty. ");
        }
    
    const response=await axios.post("https://openrouter.ai/api/v1/chat/completions",
        {
            model:"openai/gpt-4o-mini",
            messages:messages
        },
        {
             headers:{
             Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
               'Content-Type':'application/json',
  },});
//   console.log(JSON.stringify(response.data, null, 2));

  const content=response?.data?.choices?.[0]?.message?.content;

//   console.log("OpenRouter API Key: ", process.env.OPENROUTER_API_KEY);

  if(!content || !content.trim()){
    throw new Error("AI returned empty response. ");
  }

  // return content
  return content
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();
}

catch(error){
    console.error("Error in askAi function: ",error.response?.data || error.message);
    throw new Error("OpenRouter API Error");

}
}
