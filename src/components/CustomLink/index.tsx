import { ComponentChildren } from 'preact';

import './styles.scss';

interface ICustomLinkProps {
  to: string;
  children: ComponentChildren;
  isLast?: boolean;
}

const CustomLink = ({ to, children, isLast = false }: ICustomLinkProps) => (
  <a
    className={`custom-link ${isLast ? 'custom-link--last' : ''}`.trim()}
    href={to}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export default CustomLink;
