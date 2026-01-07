import { ComponentChildren } from 'preact';

import BrandLogo from 'components/BrandLogo';
import CustomLink from 'components/CustomLink';
import links from 'constants/links';
import logoGitHub from 'images/github.svg';
import logoTelegram from 'images/telegram.svg';
import logoHabr from 'images/habr.png';

import getLastMessageText from './getLastMessageText';

export interface IMessage {
  id: number;
  render: () => ComponentChildren;
}

const getMessages = (currentDate: Date): IMessage[] => [
  {
    id: 1,
    render: () => 'Привет! Я Женя',
  },
  {
    id: 2,
    render: () => (
      <>
        В команде<CustomLink to={links.beeline}>beeline</CustomLink>я занимаюсь созданием frontend
        части внутреннего сервиса Финансовой информации на React и сопутствующих технологиях
      </>
    ),
  },
  {
    id: 3,
    render: () => (
      <>
        С открытыми примерами кода можно ознакомиться на
        <CustomLink to={links.github}>
          <BrandLogo image={logoGitHub} alt="GitHub" />
          GitHub
        </CustomLink>
      </>
    ),
  },
  {
    id: 4,
    render: () => (
      <>
        С подробным резюме можно ознакомиться на
        <CustomLink to={links.habr} isLast>
          <BrandLogo image={logoHabr} alt="Habr" />
          Habr
        </CustomLink>
      </>
    ),
  },
  {
    id: 5,
    render: () => (
      <>
        Связаться со мной можно через
        <CustomLink to={links.telegram}>
          <BrandLogo image={logoTelegram} alt="Telegram" />
          Telegram
        </CustomLink>
      </>
    ),
  },
  {
    id: 6,
    render: () => getLastMessageText(currentDate),
  },
];

export default getMessages;
