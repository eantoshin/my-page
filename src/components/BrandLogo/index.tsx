import './styles.scss';

interface IBrandLogoProps {
  image: string;
  alt?: string;
}

const BrandLogo = ({ image, alt = '' }: IBrandLogoProps) => (
  <img className="brand-logo" src={image} alt={alt} />
);

export default BrandLogo;
