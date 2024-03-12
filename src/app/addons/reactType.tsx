"use client"
import { TypeAnimation } from 'react-type-animation';

const ReactTypeAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Front-end Developer',
        900, // wait 1s before replacing "Mice" with "Hamsters"
        'Back-end Developer',
        900,
        'Mobile Developer',
        900,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};
export default ReactTypeAnimation;