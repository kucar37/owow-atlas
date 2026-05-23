import AnimationCard from './components/AnimationCard/AnimationCard';
import FadeIn from './components/Animations/FadeIn';
import CherryBlossom from './components/Animations/CherryBlossom';

function App() {
  return (
    <div style={{ padding: '40px 24px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 340px))',
        gap: '20px',
      }}>
        <AnimationCard
          name="Fade_In"
          category="Transition"
          platform="Web"
          library="CSS"
          description="A simple opacity transition from 0 to 1 with easing."
        >
          <FadeIn />
        </AnimationCard>

        <AnimationCard
          name="Cherry_Blossom"
          category="Entrance"
          platform="Web"
          library="CSS"
          description="Falling cherry blossom petals with a swaying branch."
        >
          <CherryBlossom />
        </AnimationCard>
      </div>
    </div>
  );
}

export default App;