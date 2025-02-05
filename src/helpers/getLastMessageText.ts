import { TimeOfDay, TimeGreetings } from 'types/time';

const getTimeOfDay = (hours: number): TimeOfDay => {
  if (hours < 6 || hours >= 22) return 'night';
  if (hours >= 18) return 'evening';
  return 'day';
};

const GREETINGS: TimeGreetings = {
  night: 'Доброй ночи!',
  day: 'Хорошего дня!',
  evening: 'Приятного вечера!'
};

const getLastMessageText = (currentDate: Date): string => {
  const hours = currentDate.getHours();
  const timeOfDay = getTimeOfDay(hours);
  return GREETINGS[timeOfDay];
};

export default getLastMessageText;
