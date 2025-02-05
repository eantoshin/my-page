import './styles.scss';

const TypingIndicator = () => (
  <div className="spinner">
    <div className="spinner__body">
      <div className="spinner__dot spinner__dot--1" />
      <div className="spinner__dot spinner__dot--2" />
      <div className="spinner__dot spinner__dot--3" />
    </div>
  </div>
);

export default TypingIndicator; 
