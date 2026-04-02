import { Mic2, Star, Calendar } from "lucide-react";
import { useState } from "react";

interface Speaker {
  name: string;
  role: string;
  topic: string;
  initials: string;
  gradient: string;
  isHost?: boolean;
  photo?: string;
  photoPosition?: string;
  location?: string;
}

const hosts: Speaker[] = [
  {
    name: "Celia Kibler",
    role: "HOST, Founder, Day of Calm Foundation & BeABetterParent.com, Awarded Author",
    topic: "Opening Session: Where CALM Lives & Closing Session: Gratitude: The Secret Ingredient",
    initials: "CK",
    gradient: "from-primary to-soft-green",
    isHost: true,
    photo: "/images/speakers/celia-kibler.jpg",
    location: "Maryland, USA",
  },
  {
    name: "Greg Edwards",
    role: "HOST, FNMU Faculty, Professor of Comedy Therapy",
    topic: "Laughter: The Best Medicine",
    initials: "GE",
    gradient: "from-sky-blue to-primary",
    isHost: true,
    photo: "/images/speakers/greg-edwards.jpg",
    photoPosition: "object-[center_20%]",
    location: "California, USA",
  },
];

const day1Speakers: Speaker[] = [
  {
    name: "Dr. Scott R. Lowry",
    role: "FNMU Faculty, Family Medicine",
    topic: "Aging Gracefully and Staying Calm Under Fire",
    initials: "SL",
    gradient: "from-primary to-soft-green",
    photo: "/images/speakers/scott-lawry.png",
    photoPosition: "zoom",
    location: "USA",
  },
  {
    name: "Bernetta Cannon",
    role: "FNMU Faculty, Registered Nurse",
    topic: "What Is Calm & How to Get It",
    initials: "BC",
    gradient: "from-soft-green to-sky-blue",
    photo: "/images/speakers/bernetta-cannon.png",
    location: "USA",
  },
  {
    name: "Robert Vetter",
    role: "Healer & Anthropologist",
    topic: "The Roles Emotions Play in Healing",
    initials: "RV",
    gradient: "from-deep-green to-soft-green",
    photo: "/images/speakers/robert-vetter.jpeg",
    photoPosition: "zoom",
    location: "New York, USA",
  },
  {
    name: "Wendy Ologe",
    role: "Intentional Parents Academy",
    topic: "From Cultural Conditioning to Intentional Parenting: A New Path Forward",
    initials: "WO",
    gradient: "from-donate to-primary",
    photo: "/images/speakers/wendy-ologe.png",
    location: "Nigeria",
  },
  {
    name: "Maddi Cheers",
    role: "Storyteller & Wisdom Activist",
    topic: "The Peacemaker's Journey: Ancient Wisdom for Calm Amid Chaos",
    initials: "MC",
    gradient: "from-soft-green to-sky-blue",
    photo: "/images/speakers/maddi-cheers.jpg",
    location: "New York, USA",
  },
  {
    name: "Drasko Raicevic",
    role: "Mindset Coach",
    topic: "Calm as a Superpower: Regulating Yourself Through Chaos and Overwhelm",
    initials: "DR",
    gradient: "from-soft-green to-primary",
    photo: "/images/speakers/drasko-raicevic.png",
    location: "Canada",
  },
  {
    name: "Ernalee Shannon",
    role: "ADHD Thrive Coach",
    topic: "Unleash Your Inner Happy!",
    initials: "ES",
    gradient: "from-donate to-soft-green",
    photo: "/images/speakers/ernalee-shannon.png",
    location: "USA",
  },
];

const day2Speakers: Speaker[] = [
  {
    name: "Czarina Pasculado",
    role: "Childhood Trauma Specialist",
    topic: "Calm Isn't Quiet: Building a Home Where Kids Feel Safe",
    initials: "CP",
    gradient: "from-soft-green to-deep-green",
    photo: "/images/speakers/czarina-pasculado.jpg",
    location: "Philippines",
  },
  {
    name: "Jennie Potter",
    role: "Self-Sabotage Coach",
    topic: "Understanding and Neutralizing Reactive Emotions",
    initials: "JP",
    gradient: "from-sky-blue to-soft-green",
    photo: "/images/speakers/jennie-potter.jpg",
    photoPosition: "zoom",
    location: "USA",
  },
  {
    name: "Dr. Kailey Buller",
    role: "Double Board-Certified ER; Labor/Delivery Physician",
    topic: "Tired or Hangry? Why Calm Can Feel Out of Reach",
    initials: "KB",
    gradient: "from-sky-blue to-primary",
    photo: "/images/speakers/kailey-buller.jpg",
    photoPosition: "zoom",
    location: "Canada",
  },
  {
    name: "Luke Mickelson",
    role: "Founder, Sleep in Heavenly Sleep",
    topic: "TBA",
    initials: "LM",
    gradient: "from-deep-green to-primary",
    photo: "/images/speakers/luke-mickelson.jpg",
    location: "USA",
  },
  {
    name: "Cynthia Smith",
    role: "Calm Science Speaker",
    topic: "Calm Isn't Quiet: Building a Home Where Kids Feel Safe",
    initials: "CS",
    gradient: "from-primary to-soft-green",
    location: "USA",
  },
];

const day3Speakers: Speaker[] = [
  {
    name: "Dr. Matthew T. Johnson",
    role: "FNMU Faculty",
    topic: "Calm Via Nature and Alternative Mind-Body Sciences",
    initials: "MJ",
    gradient: "from-deep-green to-sky-blue",
    photo: "/images/speakers/matthew-johnson.jpg",
    location: "USA",
  },
  {
    name: "Minister Peace",
    role: "Child Health & Safety",
    topic: "Breaking the Cycle: Evidence Based Solutions to Prevent Violent Crime",
    initials: "MP",
    gradient: "from-primary to-deep-green",
    photo: "/images/speakers/minister-peace.png",
    location: "New York, USA",
  },
  {
    name: "Yaakov Andrew Cohen",
    role: "Executive Coach",
    topic: "Positive Roots. Unbreakable Future.",
    initials: "YC",
    gradient: "from-primary to-sky-blue",
    photo: "/images/speakers/yaakov-cohen.jpg",
    location: "Florida, USA",
  },
  {
    name: "C.L. King",
    role: "Best-Selling Author & Impact Motivator",
    topic: "F.A.T.H.E.R.H.O.O.D.",
    initials: "CK",
    gradient: "from-deep-green to-sky-blue",
    photo: "/images/speakers/cl-king.jpg",
    location: "North Carolina, USA",
  },
  {
    name: "Harry Lopez",
    role: "Mindset Coach",
    topic: "Chanting Your Way to Calm",
    initials: "HL",
    gradient: "from-sky-blue to-deep-green",
    photo: "/images/speakers/harry-lopez.png",
    location: "Florida, USA",
  },
  {
    name: "Priti Irani",
    role: "Human Strengths Expert & Coach",
    topic: "Raising Future-Ready Kids: Confidence, Leadership, and Emotional Strength From Within",
    initials: "PI",
    gradient: "from-primary to-donate",
    photo: "/images/speakers/priti-irani.jpg",
    location: "India",
  },
  {
    name: "Karyn Melko-Medeiros",
    role: "Manifestation Coach",
    topic: "Rich Girl Money: 5 Changes That Increase Money at Home",
    initials: "KM",
    gradient: "from-donate to-sky-blue",
    photo: "/images/speakers/karyn-melko.jpg",
    photoPosition: "zoom",
    location: "Canada",
  },
];

const generalSpeakers: Speaker[] = [];

const days = [
  { label: "Day 1", date: "April 3", speakers: day1Speakers },
  { label: "Day 2", date: "April 4", speakers: day2Speakers },
  { label: "Day 3", date: "April 5", speakers: day3Speakers },
];

const SpeakerImage = ({ speaker, size }: { speaker: Speaker; size: "sm" | "lg" }) => {
  const dim = size === "lg" ? "w-24 h-24" : "w-14 h-14";
  const textSize = size === "lg" ? "text-2xl" : "text-base";

  return (
    <div className={`${dim} rounded-full ${speaker.photo ? '' : `bg-gradient-to-br ${speaker.gradient}`} flex items-center justify-center overflow-hidden shrink-0`}>
      {speaker.photo ? (
        <img
          src={speaker.photo}
          alt={speaker.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
          style={{
            objectPosition: speaker.photoPosition === 'zoom' ? 'center 15%' : speaker.photoPosition === 'zoomout' ? 'center 30%' : 'center top',
            transform: speaker.photoPosition === 'zoom' ? 'scale(1.5)' : speaker.photoPosition === 'zoomout' ? 'scale(0.75)' : undefined,
          }}
        />
      ) : (
        <span className={`font-display ${textSize} font-bold text-primary-foreground`}>
          {speaker.initials}
        </span>
      )}
    </div>
  );
};

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => (
  <div className="bg-card rounded-2xl p-6 shadow-calm hover:shadow-calm-lg transition-shadow">
    <div className="flex items-start gap-4">
      <SpeakerImage speaker={speaker} size="sm" />
      <div className="min-w-0">
        <h3 className="font-display text-base font-semibold text-card-foreground leading-tight">
          {speaker.name}
        </h3>
        <p className="font-body text-xs text-muted-foreground mt-0.5">{speaker.role}</p>
        <p className="font-body text-[10px] font-semibold text-muted-foreground mt-2 uppercase tracking-wider">Topic:</p>
        <p className="font-body text-xs font-medium text-primary leading-snug">
          {speaker.topic}
        </p>
        {speaker.location && (
          <p className="font-body text-[11px] text-muted-foreground/70 mt-1.5">📍 {speaker.location}</p>
        )}
      </div>
    </div>
  </div>
);

const SpeakersSection = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="speakers" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Speakers
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            World-class doctors, healers, coaches, and thought leaders — united by a shared vision of calm.
          </p>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-donate/10 text-donate font-body text-sm font-semibold">
            <Mic2 className="w-4 h-4" />
            + Community Voices Featured Live
          </div>
        </div>

        {/* Hosts */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mt-14 mb-12">
          {hosts.map((s) => (
            <div
              key={s.name}
              className="relative bg-card rounded-3xl p-8 shadow-calm-lg border border-primary/10 text-center"
            >
              <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary font-body text-xs font-bold uppercase tracking-wider">
                <Star className="w-3 h-3" /> Host
              </div>
              <div className="flex justify-center mb-5">
                <SpeakerImage speaker={s} size="lg" />
              </div>
              <h3 className="font-display text-xl font-bold text-card-foreground">
                {s.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground mt-1">{s.role}</p>
              <p className="font-body text-xs font-semibold text-muted-foreground mt-3 uppercase tracking-wider">Topic:</p>
              <p className="font-body text-sm font-semibold text-primary italic">
                "{s.topic}"
              </p>
              {s.location && (
                <p className="font-body text-xs text-muted-foreground/70 mt-2">📍 {s.location}</p>
              )}
            </div>
          ))}
        </div>

        {/* Day Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {days.map((day, idx) => (
            <button
              key={day.label}
              onClick={() => setActiveDay(idx)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-body text-sm font-semibold transition-all ${
                activeDay === idx
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-muted-foreground hover:bg-secondary border border-border"
              }`}
            >
              <Calendar className="w-4 h-4" />
              {day.label} — {day.date}
            </button>
          ))}
        </div>

        {/* Active Day Speakers */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {days[activeDay].speakers.map((s) => (
            <SpeakerCard key={s.name} speaker={s} />
          ))}
        </div>

        {/* General / Additional Speakers */}
        {generalSpeakers.length > 0 && (
          <div className="mt-16 max-w-6xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-foreground text-center mb-8">
              Additional Speakers
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {generalSpeakers.map((s) => (
                <SpeakerCard key={s.name} speaker={s} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SpeakersSection;
