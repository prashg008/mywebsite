import { TypeAnimation } from 'react-type-animation';

const SubTitle = () => {
  return (
    <TypeAnimation
      sequence={[
        'I like to code',
        1000,
        'I like to create',
        1000,
        'I like to play',
        1000,
        'I like to listen',
        1000,
      ]}
      wrapper="div"
      className="subtitle"
      repeat={Infinity}
    />
  );
};

export default SubTitle;