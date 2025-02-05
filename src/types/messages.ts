import { ComponentChildren } from 'preact';

export type MessageOrder = 'first' | 'middle' | 'last';

export interface IMessage {
  id: number;
  render: () => ComponentChildren;
}

export interface IMessageProps {
  order: MessageOrder;
  children: ComponentChildren;
} 
