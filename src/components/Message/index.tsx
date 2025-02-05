import { ComponentChildren } from 'preact';
import { useEffect, useState, useCallback } from 'preact/hooks';

import TypingIndicator from 'components/TypingIndicator';
import time from 'constants/time';
import { MessageOrder } from 'types/messages';

import './styles.scss';

interface IMessageProps {
  order: MessageOrder;
  children: ComponentChildren;
}

const Message = ({ order, children }: IMessageProps) => {
  const [isTyping, setIsTyping] = useState(true);

  const stopTyping = useCallback(() => {
    setIsTyping(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(stopTyping, time.typingDuration);
    return () => clearTimeout(timer);
  }, [stopTyping]);

  if (isTyping) {
    return <TypingIndicator />;
  }

  return (
    <div className="message">
      <div className={`message__body message__body--${order}`}>{children}</div>
    </div>
  );
};

export default Message;
