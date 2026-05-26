// const DEFAULT_STATS = {
//   animations: 19,
//   categories: 7,
//   platforms: 2,
//   release: "v2.4",
// };

// const DEFAULT_DESC =
//   "Browse, preview and lift production-ready motion. Every entry ships with tweakable parameters and a copyable snippet for React, Vue, and bare CSS.";

// export default function LibraryHero({
//   stats = DEFAULT_STATS,
//   description = DEFAULT_DESC,
// }) {
//   const statCells = [
//     { value: stats.animations, label: "Animations" },
//     { value: stats.categories, label: "Categories" },
//     { value: stats.platforms,  label: "Platforms"  },
//     { value: stats.release,    label: "Release"    },
//   ];

//   return (
//     <section className="atlas-hero">
//       <div className="container-fluid px-3 px-md-4">
//         <div className="row align-items-center gy-5">

//           {/* ── Left: Heading ───────────────────────── */}
//           <div className="col-12 col-lg-6">
//             <h1 className="atlas-hero-heading">
//               One library
//               <br />
//               <span className="accent">for every motion</span>
//               <br />
//               we ship.
//             </h1>
//           </div>

//           {/* ── Right: Stats + Description ──────────── */}
//           <div className="col-12 col-lg-6">

//             {/* Stats grid */}
//             <div className="atlas-stats-grid mb-4">
//               {statCells.map(({ value, label }) => (
//                 <div className="atlas-stat-cell" key={label}>
//                   <span className="atlas-stat-value">{value}</span>
//                   <span className="atlas-stat-label">{label}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Description paragraph */}
//             <p className="atlas-hero-desc">{description}</p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



// import "./Hero.css";

// const DEFAULT_STATS = {
//   animations: 19,
//   categories: 7,
//   platforms: 2,
//   release: "v2.4",
// };

// const DEFAULT_DESC =
//   "Browse, preview and lift production-ready motion. Every entry ships with tweakable parameters and a copyable snippet for React, Vue, and bare CSS.";

// export default function LibraryHero({
//   stats = DEFAULT_STATS,
//   description = DEFAULT_DESC,
// }) {
//   const statCells = [
//     { value: stats.animations, label: "ANIMATIONS" },
//     { value: stats.categories, label: "CATEGORIES" },
//     { value: stats.platforms, label: "PLATFORMS" },
//     { value: stats.release, label: "RELEASE" },
//   ];

//   return (
//     <section className="atlas-hero">
//       <div className="container-fluid px-4">

//         <div className="row align-items-start gy-5">

//           {/* LEFT SIDE */}
//           <div className="col-12 col-lg-7">
//             <h1 className="atlas-hero-heading">
//               One library
//               <br />
//               <span className="accent">for every motion</span>
//               <br />
//               we ship.
//             </h1>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="col-12 col-lg-5">

//             <div className="atlas-stats-grid">
//               {statCells.map(({ value, label }) => (
//                 <div className="atlas-stat-cell" key={label}>
//                   <span className="atlas-stat-value">{value}</span>
//                   <span className="atlas-stat-label">{label}</span>
//                 </div>
//               ))}
//             </div>

//             <p className="atlas-hero-desc">
//               {description}
//             </p>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



import "./Hero.css";

const DEFAULT_DESC =
  "Browse, preview and lift production-ready motion. Every entry ships with tweakable parameters and a copyable snippet for React, Vue, and bare CSS.";

export default function LibraryHero({
  animationsCount = 19,
  categoriesCount = 7,
  platformsCount = 2,
  release = "v2.4",
  description = DEFAULT_DESC,
}) {
  const stats = [
    { value: animationsCount, label: "ANIMATIONS" },
    { value: categoriesCount, label: "CATEGORIES" },
    { value: platformsCount, label: "PLATFORMS" },
    { value: release, label: "RELEASE" },
  ];

  return (
    <section className="atlas-hero">
      <div className="atlas-hero-inner">
        <div className="atlas-hero-left">
          <h1 className="atlas-hero-heading">
            One library
            <br />
            <span>for every motion</span>
            <br />
            we ship.
          </h1>
        </div>

        <div className="atlas-hero-right">
          <div className="atlas-stats-grid">
            {stats.map((item) => (
              <div className="atlas-stat-cell" key={item.label}>
                <strong>{item.value}</strong>
                <small>{item.label}</small>
              </div>
            ))}
          </div>

          <p className="atlas-hero-desc">{description}</p>
        </div>
      </div>
    </section>
  );
}