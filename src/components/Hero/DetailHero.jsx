import "./Hero.css";

export default function DetailHero({
  category = "Transition",
  platform = "Web",
  name = "animation",
  title = "Animation",
  description = "Description of the animation",
}) {
  return (
    <section className="atlas-detail-hero">
      <div className="atlas-detail-tags">
        <span className="atlas-tag atlas-tag-green">{category}</span>
        <span className="atlas-tag">{platform}</span>
        <span className="atlas-tag">{name}</span>
      </div>

      <h1 className="atlas-detail-title">{title}</h1>

      <p className="atlas-detail-description">{description}</p>
    </section>
  );
}