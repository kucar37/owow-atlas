import ImageTrail from './ImageTrail';
import trail1 from '../../assets/fonts/trail1.jpg';
import trail2 from '../../assets/fonts/trail2.jpg';
import trail3 from '../../assets/fonts/trail3.jpg';
import trail4 from '../../assets/fonts/trail4.jpg';
import trail5 from '../../assets/fonts/trail5.jpg';
import trail6 from '../../assets/fonts/trail6.jpg';
import trail7 from '../../assets/fonts/trail7.jpg';
import trail8 from '../../assets/fonts/trail8.jpg';

const items = [trail1, trail2, trail3, trail4, trail5, trail6, trail7, trail8];

export default function ImageTrailDemo() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
      <ImageTrail items={items} variant={1} />
    </div>
  );
}