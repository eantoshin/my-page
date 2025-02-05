import { ComponentChildren } from 'preact';
import { memo } from 'preact/compat';
import { useMemo } from 'preact/hooks';

import './styles.scss';

interface IContainerProps {
  date: Date;
  children: ComponentChildren;
}

const formatTime = (date: Date): string => {
  const pad = (num: number): string => num.toString().padStart(2, '0');
  return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
};

const Container = memo(({ date, children }: IContainerProps) => {
  const formattedTime = useMemo(() => formatTime(date), [date]);

  return (
    <>
      <div className="top-line" />
      <header className="timestamp">{`Сегодня, в ${formattedTime}`}</header>

      <div className="chat-wrapper">
        <div className="container">
          <div className="avatar" />
          {children}
        </div>
      </div>

      <h1 className="aside">frontend</h1>
    </>
  );
});

export default Container;
