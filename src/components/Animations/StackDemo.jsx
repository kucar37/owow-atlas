import Stack from './Stack';

import stack1 from '../../assets/fonts/slack1.gif';
import stack2 from '../../assets/fonts/slack2.gif';
import stack3 from '../../assets/fonts/slack3.gif';
import stack4 from '../../assets/fonts/slack4.gif';

const images = [stack1, stack2, stack3, stack4];

export default function StackDemo() {
  return (
    <div style={{ width: '130px', height: '130px', margin: '0 auto' }}>
      <Stack
        randomRotation={true}
        sensitivity={140}
        sendToBackOnClick={true}
        autoplay={true}
        autoplayDelay={3500}
        pauseOnHover={true}
        cards={images.map((src, i) => (
          <img 
            key={i} 
            src={src} 
            alt={`stack${i + 1}`} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} 
          />
        ))}
      />
    </div>
  );
}