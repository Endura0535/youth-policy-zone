import React, { useEffect, useState } from 'react';
import createMessage from './message';

function ChatgptApi() {
  const [userInput, setUserInput] = useState('');
  const [responses, setResponses] = useState([]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async () => {

    const newResponses = [...responses, { role: "user", content: userInput }];
    
    await createMessage(newResponses).then((response) => {
      setResponses(response);
    });
    setUserInput('');
  };

  return (
    <div>
      <div>
        {responses.map((item, index) => (
          <div key={index}>
            <div>{item.role}: {item.content}</div>
          </div>
        ))}
      </div>
      <input value={userInput} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
}

export default ChatgptApi;
