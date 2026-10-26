import React from "react";

const page = () => {
  const sections = [
    {
      title: "Music Composition & Arrangement",
      description:
        "Original scores and custom tracks that align with your story’s tone and emotion—across all genres.",
      items: [
        "Original Music & Soundtracks",
        "Songwriting & Lyrics",
        "Arrangement & Orchestration",
      ],
    },
    {
      title: "Sound Design & Foley",
      description:
        "Immersive soundscapes and effects that breathe life into every scene.",
      items: [
        "Custom Sound Effects",
        "Foley Recording",
        "Ambient Sound & Atmosphere",
      ],
    },
    {
      title: "Audio Editing & Mixing",
      description:
        "Clean, balanced, and broadcast-ready audio for every platform.",
      items: ["Dialogue Cleanup", "Music & Sound Mixing", "Mastering"],
    },
    {
      title: "Voiceover & Vocal Production",
      description:
        "Powerful voiceovers and vocals that deliver the right message and emotion.",
      items: ["Voiceover Recording", "Vocal Editing & Processing"],
    },
    {
      title: "Post-Production & Licensing",
      description:
        "From final mix to ready-to-use soundtracks, we handle it all.",
      items: ["Post-Production Audio Services", "Stock Music Licensing"],
    },
  ];

  return (
    <div className="service-template">
      <div className="service-shell">
        <header className="service-header">
          <span className="section-kicker">Music & sound</span>
          <h1>Sound that shapes the emotion of every story.</h1>
          <p>
            From idea to final master, we craft sound that speaks. Whether it’s
            for film, games, podcasts, ads, or music, our team delivers
            high-quality audio that elevates your project.
          </p>
        </header>

        <section className="service-section">
          <h2>What we offer</h2>
          <div className="service-grid">
            {sections.map((section, index) => (
              <article key={index} className="service-card">
                <h3>{section.title}</h3>
                <p>{section.description}</p>
                <ul>
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="service-section service-section--compact">
          <div className="service-highlight">
            <h3>Why choose us?</h3>
            <ul>
              <li>Tailored approach for every project</li>
              <li>Expert team with multi-industry experience</li>
              <li>Industry-standard gear for premium output</li>
              <li>On-time delivery without compromising quality</li>
            </ul>
          </div>
          <div className="service-highlight">
            <h3>Who we work with</h3>
            <p>Film & TV · Games · Brands & Ads · Podcasts · Artists · Corporates</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
