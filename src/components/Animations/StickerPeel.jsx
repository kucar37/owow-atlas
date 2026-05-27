import { useRef, useState } from 'react';
import styles from './StickerPeel.module.css';
import stickerImg from '../../assets/fonts/sticker.png';

export default function StickerPeel() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [rotation, setRotation] = useState(0);
  const dragStart = useRef(null);

  const onMouseDown = (e) => {
    setDragging(true);
    dragStart.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      posX: pos.x,
      posY: pos.y,
    };
  };

  const onMouseMove = (e) => {
    if (!dragging || !dragStart.current) return;
    const dx = e.clientX - dragStart.current.mouseX;
    const dy = e.clientY - dragStart.current.mouseY;
    setPos({
      x: dragStart.current.posX + dx,
      y: dragStart.current.posY + dy,
    });
    const rot = Math.max(-20, Math.min(20, dx * 0.3));
    setRotation(rot);
  };

  const onMouseUp = () => {
    setDragging(false);
    setRotation(0);
  };

  return (
    <div
      className={styles.container}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      <div
        className={`${styles.sticker} ${dragging ? styles.dragging : ''}`}
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) rotate(${rotation}deg)`,
          cursor: dragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={onMouseDown}
      >
        <div className={styles.front}>
          <img src={stickerImg} alt="sticker" draggable={false} />
        </div>
        <div className={styles.flap}>
          <img src={stickerImg} alt="sticker" draggable={false} />
        </div>
      </div>
    </div>
  );
}