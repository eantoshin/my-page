import { useEffect, useState, useCallback } from 'preact/hooks';

import Container from 'components/Container';
import Message from 'components/Message';
import time from 'constants/time';
import getMessages from 'helpers/getMessages';
import { IMessage, MessageOrder } from 'types/messages';

const CURRENT_DATE = new Date();
const MESSAGES_LIST = getMessages(CURRENT_DATE);

const App = () => {
  const [messages, setMessages] = useState<IMessage[]>([MESSAGES_LIST[0]]);
  
  const addNewMessage = useCallback(() => {
    setMessages((prevMessages) => {
      if (prevMessages.length < MESSAGES_LIST.length) {
        return [...prevMessages, MESSAGES_LIST[prevMessages.length]];
      }

      return prevMessages;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(
      addNewMessage, 
      time.basicDelay + time.typingDuration
    );

    return () => clearInterval(timer);
  }, [addNewMessage]);

  const getMessageOrder = useCallback((messageId: number): MessageOrder => {
    if (messageId === 1) return 'first';
    if (messageId === messages.length) return 'last';
    
    return 'middle';
  }, [messages.length]);

  return (
    <Container date={CURRENT_DATE}>
      {messages.map((message) => (
        <Message 
          key={`message-${message.id}`} 
          order={getMessageOrder(message.id)}
        >
          {message.render()}
        </Message>
      ))}
    </Container>
  );
};

export default App;
