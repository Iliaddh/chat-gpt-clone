// import axios from "axios";

// const sendMessage = (message) => {
//     const url = "https://api.openai.com/v1/chat/completions";
//     const headers = {
//       'Content-type': 'application/json',
//       'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
//     }
//     const data ={
//       model: "gpt-3.5-turbo",
//       messages: [{"role": "user", "content" : message} ]
//     };
//     // setIsLoading(true);
//     axios.post(url, data, {headers:headers}).then((response) => {
//       console.log(response);
//       setChatLog((prevChatLog) => [...prevChatLog, {type:'bot', message:response.data.choices[0].message.content}]);
//     //   setIsLoading(false);

//     }).catch((error) => {
//     //   setIsLoading(false);
//       console.log(error)
//     })
//   }

//   export  {sendMessage}