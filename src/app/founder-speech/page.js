import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const page = () => {
  const sections = [
    {
      title: "Introduction",
      text:
        "My name is Sanni Dhikrulah Olaniyi, a film producer and storyteller, and the founder of Signature Pictures Network. Inspired by classic soap operas like Super Story and productions by Wale Adenuga (WAP), I’ve been driven to create compelling African stories—like the masterpiece ÌLẸ̀KẸ̀ - The Hidden Heir.",
    },
    {
      title: "About Ileke",
      text:
        "ÌLẸ̀KẸ̀ - The Hidden Heir is my open letter to Nollywood and the global film industry—a powerful, original story deeply rooted in Yoruba spirituality, fashion, and culture.",
    },
    {
      title: "Working With the Director",
      text:
        "Collaborating with Director Gafar Amoo has been transformative. From pre-production to post, his creative direction, VFX vision, and collaboration with every department made this project extraordinary.",
    },
    {
      title: "Cast & Crew Experience",
      text:
        "Working with veterans brought wisdom and elite talent to the set. The young actors also exceeded expectations with passionate performances—an experience I look forward to repeating.",
    },
    {
      title: "Sound & Music",
      text:
        "Taiwo “Taiyewo” Sanni and her team brought our vision to life through poetic, message-driven music. Huge thanks to Mr. Henry for professional sound engineering and mastering.",
    },
    {
      title: "Budget & Execution",
      text:
        "Every penny was intentionally spent. While film production is costly, strategic financial decisions helped us deliver excellence without waste.",
    },
    {
      title: "Closing Words",
      text:
        "I’m proud of this journey and grateful to everyone who contributed to bringing ÌLẸ̀KẸ̀ - The Hidden Heir to life. I’ll continue championing authentic African stories that reflect our identity and creativity.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="founder-speech-page">
        <div className="founder-speech-shell">
          <header className="founder-speech-hero">
            <span className="section-kicker">Founder speech</span>
            <h1>Storytelling is at the heart of everything we build.</h1>
          </header>

          <div className="founder-speech-content">
            {sections.map((section) => (
              <section key={section.title} className="founder-speech-section">
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;
