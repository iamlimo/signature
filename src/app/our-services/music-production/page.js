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
    <div className="max-w-6xl mx-auto p-6 md:p-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
        🎧 Music & Sound Production
      </h2>
      <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
        From idea to final master, we craft sound that speaks. Whether it's for
        film, games, podcasts, ads, or music, our team delivers high-quality
        audio that elevates your project.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-all"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {section.title}
            </h3>
            <p className="text-gray-600 mb-4">{section.description}</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <h4 className="text-2xl font-semibold text-gray-800 mb-4">
          Why Choose Us?
        </h4>
        <ul className="space-y-2 text-gray-600">
          <li>
            🎯 <strong>Tailored Approach</strong> – Every project gets a unique
            sound treatment.
          </li>
          <li>
            🎧 <strong>Expert Team</strong> – Trusted pros with multi-industry
            experience.
          </li>
          <li>
            🔧 <strong>Pro Gear</strong> – Industry-standard tech for premium
            results.
          </li>
          <li>
            ⏱ <strong>On-Time Delivery</strong> – Fast turnaround without
            compromising quality.
          </li>
        </ul>
      </div>
      <div className="mt-16 text-center">
        <h4 className="text-2xl font-semibold text-gray-800 mb-4">
          Who We Work With
        </h4>
        <p className="text-gray-600">
          🎬 Film & TV 🎮 Games 📢 Brands & Ads 🎙 Podcasts 🎶 Artists 🏢
          Corporates
        </p>
      </div>
      <div className="mt-16 text-center">
        <h4 className="text-2xl font-semibold text-gray-800 mb-4">
          Let’s Make Sound Matter
        </h4>
        <p className="text-gray-600 mb-6">
          Get in touch for a custom quote and let’s build your sound identity.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-xl shadow hover:bg-gray-800 transition-all">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default page;
