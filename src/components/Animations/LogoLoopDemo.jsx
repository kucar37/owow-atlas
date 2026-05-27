import LogoLoop from './LogoLoop';
import img1 from '../../assets/fonts/image1.jpg';
import img2 from '../../assets/fonts/image2.jpg';
import img3 from '../../assets/fonts/image3.jpg';
import img4 from '../../assets/fonts/image4.jpg';
import img5 from '../../assets/fonts/image5.jpg';

const logos = [
  { src: img1, alt: 'Logo 1' },
  { src: img2, alt: 'Logo 2' },
  { src: img3, alt: 'Logo 3' },
  { src: img4, alt: 'Logo 4' },
  { src: img5, alt: 'Logo 5' },
];

export default function LogoLoopDemo() {
    return (
      <div style={{ width: '100%', height: '140px', display: 'flex', alignItems: 'center' }}>
        <LogoLoop
          logos={logos}
          speed={80}
          direction="left"
          logoHeight={120}
          gap={24}
          hoverSpeed={0}
          fadeOut
          fadeOutColor="#2a2a2a"
        />
      </div>
    );
  }
``