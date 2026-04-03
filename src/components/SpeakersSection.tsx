import { Mic2, Star, Calendar, Film } from "lucide-react";
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
  time?: string;
}

const hosts: Speaker[] = [
  {
    name: "Celia Kibler",
    role: "HOST, Founder, Day of Calm Foundation & BeABetterParent.com, Awarded Author",
    topic: "Opening Session: Where C.A.L.M Lives, Humanity THRIVES & Closing Session: Gratitude: The Secret Ingredient",
    initials: "CK",
    gradient: "from-primary to-soft-green",
    isHost: true,
    photo: "/images/speakers/celia-kibler.jpg",
    location: "Maryland, USA",
  },
  {
    name: "Greg Edwards",
    role: "HOST, FNMU Faculty, Professor of Comedy Therapy",
    topic: "Comedy is the Best Medicine",
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
    name: "Celia Kibler",
    role: "HOST, Founder, Day of Calm Foundation",
    topic: "Where C.A.L.M Lives, Humanity THRIVES",
    initials: "CK",
    gradient: "from-primary to-soft-green",
    photo: "/images/speakers/celia-kibler.jpg",
    location: "Maryland, USA",
    time: "10:00 AM - 11:00 AM",
  },
  {
    name: "Luke Mickelson",
    role: "Founder, Sleep in Heavenly Peace",
    topic: "The Power of Tiny Moments: How Small Acts Create Lasting Change",
    initials: "LM",
    gradient: "from-deep-green to-primary",
    photo: "/images/speakers/luke-mickelson.jpg",
    location: "USA",
    time: "11:00 AM - 12:00 PM",
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
    time: "12:00 PM - 1:00 PM",
  },
  {
    name: "Dr. Kailey Buller",
    role: "Double Board-Certified ER; Labor/Delivery Physician",
    topic: "Tired or Hangry? When Calm Feels Out of Reach",
    initials: "KB",
    gradient: "from-sky-blue to-primary",
    photo: "/images/speakers/kailey-buller.jpg",
    photoPosition: "zoom",
    location: "Canada",
    time: "1:00 PM - 2:00 PM",
  },
  {
    name: "Drasko Raicevic",
    role: "Mindset Coach",
    topic: "Calm as a Superpower: Regulating Yourself Through Chaos and Overwhelm",
    initials: "DR",
    gradient: "from-soft-green to-primary",
    photo: "/images/speakers/drasko-raicevic.png",
    location: "Canada",
    time: "2:00 PM - 3:00 PM",
  },
  {
    name: "Wendy Ologe",
    role: "Intentional Parents Academy",
    topic: "From Cultural Conditioning to Intentional Parenting: A New Path Forward",
    initials: "WO",
    gradient: "from-donate to-primary",
    photo: "/images/speakers/wendy-ologe.png",
    location: "Nigeria",
    time: "4:00 PM - 5:00 PM",
  },
  {
    name: "Robert Vetter",
    role: "Healer & Anthropologist",
    topic: "The Stories That Disturb Us",
    initials: "RV",
    gradient: "from-deep-green to-soft-green",
    photo: "/images/speakers/robert-vetter.jpeg",
    photoPosition: "zoom",
    location: "New York, USA",
    time: "5:00 PM - 6:00 PM",
  },
  {
    name: "Ernalee Shannon",
    role: "ADHD Thrive Coach",
    topic: "Unleash Your Inner Happy!",
    initials: "ES",
    gradient: "from-donate to-soft-green",
    photo: "/images/speakers/ernalee-shannon.png",
    location: "USA",
    time: "6:00 PM - 7:00 PM",
  },
];

const day2Speakers: Speaker[] = [
  {
    name: "Celia Kibler + Matthew Johnson",
    role: "HOST & FNMU Faculty",
    topic: "Stop Yelling at Your Kids Once and For All Be A Better Parent (Without the Guilt)",
    initials: "CK",
    gradient: "from-primary to-deep-green",
    photo: "/images/speakers/celia-kibler.jpg",
    location: "USA",
    time: "10:00 AM - 11:00 AM",
  },
  {
    name: "Dr. Bernetta & Cynthia Smith",
    role: "FNMU Faculty & Calm Science Speaker",
    topic: "Magnesium Sulfate and the Body's Path to Calm & Nature as Medicine: Reconnecting to Calm Through Presence and Practice",
    initials: "BC",
    gradient: "from-soft-green to-sky-blue",
    photo: "/images/speakers/bernetta-cannon.png",
    location: "USA",
    time: "11:00 AM - 12:00 PM",
  },
  {
    name: "Dr. Scott R. Lowry",
    role: "FNMU Faculty, Family Medicine",
    topic: "Aging Gracefully: Longevity and Restorative Health",
    initials: "SL",
    gradient: "from-primary to-soft-green",
    photo: "/images/speakers/scott-lawry.png",
    photoPosition: "zoom",
    location: "USA",
    time: "12:00 PM - 1:00 PM",
  },
  {
    name: "Greg Edwards",
    role: "HOST, FNMU Faculty, Professor of Comedy Therapy",
    topic: "Comedy is the Best Medicine",
    initials: "GE",
    gradient: "from-sky-blue to-primary",
    photo: "/images/speakers/greg-edwards.jpg",
    photoPosition: "object-[center_20%]",
    location: "California, USA",
    time: "1:00 PM - 2:00 PM",
  },
  {
    name: "Czarina Pasculado",
    role: "Childhood Trauma Specialist",
    topic: "Calm Isn't Quiet: Building a Home Where Kids Feel Safe",
    initials: "CP",
    gradient: "from-soft-green to-deep-green",
    photo: "/images/speakers/czarina-pasculado.jpg",
    location: "Philippines",
    time: "3:00 PM - 4:00 PM",
  },
  {
    name: "Meredith McDonald",
    role: "Speaker",
    topic: "TBD",
    initials: "MM",
    gradient: "from-primary to-donate",
    location: "USA",
    time: "4:00 PM - 5:00 PM",
  },
  {
    name: "Celia Kibler & Maddi Cheers",
    role: "HOST & Storyteller / Wisdom Activist",
    topic: "Let's Play! The Surprising Benefits for Body, Mind & Inner Peace",
    initials: "CK",
    gradient: "from-soft-green to-sky-blue",
    photo: "/images/speakers/celia-kibler.jpg",
    location: "USA / New York",
    time: "5:00 PM - 6:00 PM",
  },
];

const day3Speakers: Speaker[] = [
  {
    name: "C.L. King",
    role: "Best-Selling Author & Impact Motivator",
    topic: "F.A.T.H.E.R.H.O.O.D.",
    initials: "CK",
    gradient: "from-deep-green to-sky-blue",
    photo: "/images/speakers/cl-king.jpg",
    location: "North Carolina, USA",
    time: "11:00 AM - 12:00 PM",
  },
  {
    name: "Harry Lopez",
    role: "Mindset Coach",
    topic: "You Are The Halo: Embody your Halo Essence from Within Anywhere You Go",
    initials: "HL",
    gradient: "from-sky-blue to-deep-green",
    photo: "/images/speakers/harry-lopez.png",
    location: "Florida, USA",
    time: "12:00 PM - 1:00 PM",
  },
  {
    name: "Karyn Melko-Medeiros",
    role: "Manifestation Coach",
    topic: "The 4 Money Habits That End Stress For Good",
    initials: "KM",
    gradient: "from-donate to-sky-blue",
    photo: "/images/speakers/karyn-melko.jpg",
    photoPosition: "zoom",
    location: "Canada",
    time: "1:00 PM - 2:00 PM",
  },
];

const day4Speakers: Speaker[] = [
  {
    name: "Yaakov Andrew Cohen",
    role: "Executive Coach",
    topic: "Positive Roots. Unbreakable Future.",
    initials: "YC",
    gradient: "from-primary to-sky-blue",
    photo: "/images/speakers/yaakov-cohen.jpg",
    location: "Florida, USA",
    time: "11:00 AM - 12:00 PM",
  },
  {
    name: "Kim Russell",
    role: "Brain Health Expert",
    topic: "Measure What Matters: WHOListic Brain Health",
    initials: "KR",
    gradient: "from-soft-green to-primary",
    location: "USA",
    time: "12:00 PM - 1:00 PM",
  },
  {
    name: "Paula Jennings",
    role: "Nervous System Coach",
    topic: "From Overwhelm to Inner Calm: A Nervous System Reset",
    initials: "PJ",
    gradient: "from-deep-green to-soft-green",
    location: "USA",
    time: "1:00 PM - 2:00 PM",
  },
  {
    name: "Maddi Cheers",
    role: "Storyteller & Wisdom Activist",
    topic: "The Peacemaker's Journey: Ancient Wisdom for Calm Amid Chaos",
    initials: "MC",
    gradient: "from-soft-green to-sky-blue",
    photo: "/images/speakers/maddi-cheers.jpg",
    location: "New York, USA",
    time: "3:00 PM - 4:00 PM",
  },
  {
    name: "Minister Peace",
    role: "Child Health & Safety",
    topic: "Breaking the Cycle: Evidence-Based Solutions to Prevent Violent Crime",
    initials: "MP",
    gradient: "from-primary to-deep-green",
    photo: "/images/speakers/minister-peace.png",
    location: "New York, USA",
    time: "4:00 PM - 5:00 PM",
  },
  {
    name: "John Ploof",
    role: "Speaker",
    topic: "TBD",
    initials: "JP",
    gradient: "from-sky-blue to-donate",
    location: "USA",
    time: "5:00 PM - 6:00 PM",
  },
  {
    name: "Celia Kibler & Dr. Matthew",
    role: "HOST & FNMU Faculty (Closing)",
    topic: "Gratitude: The Secret Ingredient",
    initials: "CK",
    gradient: "from-primary to-soft-green",
    photo: "/images/speakers/celia-kibler.jpg",
    location: "USA",
    time: "6:00 PM - 7:00 PM",
  },
];

const days = [
  { label: "Day 1", date: "April 3", speakers: day1Speakers, isRecorded: false },
  { label: "Day 2", date: "April 4", speakers: day2Speakers, isRecorded: false },
  { label: "Day 3", date: "April 5", speakers: day3Speakers, isRecorded: true },
  { label: "Day 4", date: "April 6", speakers: day4Speakers, isRecorded: false },
];

const bundledSpeakerImages = import.meta.glob("/src/assets/speakers/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const resolveSpeakerPhoto = (photo?: string) => {
  if (!photo) return undefined;
  const fileName = photo.split("/").pop();
  if (!fileName) return photo;
  return bundledSpeakerImages[`/src/assets/speakers/${fileName}`] ?? photo;
};

const SpeakerImage = ({ speaker, size }: { speaker: Speaker; size: "sm" | "lg" }) => {
  const [imageError, setImageError] = useState(false);
  const dim = size === "lg" ? "w-24 h-24" : "w-14 h-14";
  const textSize = size === "lg" ? "text-2xl" : "text-base";
  const photoSrc = imageError ? undefined : resolveSpeakerPhoto(speaker.photo);

  const objectPosition =
    speaker.photoPosition === "zoom"
      ? "center 15%"
      : speaker.photoPosition === "zoomout"
        ? "center 30%"
        : speaker.photoPosition?.startsWith("object-[")
          ? speaker.photoPosition
              .replace("object-[", "")
              .replace("]", "")
              .split("_")
              .join(" ")
          : "center top";

  const imageTransform =
    speaker.photoPosition === "zoom"
      ? "scale(1.5)"
      : speaker.photoPosition === "zoomout"
        ? "scale(0.75)"
        : undefined;

  return (
    <div className={`${dim} rounded-full bg-muted/30 ring-1 ring-border/40 flex items-center justify-center overflow-hidden shrink-0`}>
      {photoSrc ? (
        <img
          src={photoSrc}
          alt={speaker.name}
          loading="eager"
          decoding="async"
          onError={() => setImageError(true)}
          className="block h-full w-full object-cover"
          style={{
            objectPosition,
            transform: imageTransform,
          }}
        />
      ) : (
        <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${speaker.gradient}`}>
          <span className={`font-display ${textSize} font-bold text-primary-foreground`}>
            {speaker.initials}
          </span>
        </div>
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
        {speaker.time && (
          <p className="font-body text-[12px] font-bold text-foreground mt-1.5 bg-secondary/50 inline-block px-2 py-0.5 rounded">🕐 {speaker.time} EST</p>
        )}
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
            World-class educators, healers, coaches, and thought leaders — united by a shared vision of calm.
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
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {days.map((day, idx) => (
            <button
              key={day.label}
              onClick={() => setActiveDay(idx)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-body text-sm font-semibold transition-all ${
                activeDay === idx
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-muted-foreground hover:bg-secondary border border-border"
              }`}
            >
              {day.isRecorded ? <Film className="w-4 h-4" /> : <Calendar className="w-4 h-4" />}
              {day.label} — {day.date}
            </button>
          ))}
        </div>

        {/* Recorded badge for Day 3 */}
        {days[activeDay].isRecorded && (
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-100 text-amber-800 font-body text-sm font-semibold border border-amber-200">
              <Film className="w-4 h-4" />
              📹 Recordings Only — Pre-recorded sessions played at scheduled times
            </div>
          </div>
        )}

        {/* VIP Breakroom note */}
        {!days[activeDay].isRecorded && days[activeDay].speakers.some((s) => s.time && parseInt(s.time, 10) >= 3) && (
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary font-body text-xs font-semibold">
              ⭐ VIP Breakroom (Speakers & Donors) between afternoon sessions
            </div>
          </div>
        )}

        {/* Active Day Speakers */}
        <div className="max-w-6xl mx-auto">
          {days.map((day, idx) => (
            <div
              key={day.label}
              className={idx === activeDay ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-5" : "hidden grid sm:grid-cols-2 lg:grid-cols-3 gap-5"}
              aria-hidden={idx !== activeDay}
            >
              {day.speakers.map((s, i) => (
                <SpeakerCard key={`${day.label}-${s.name}-${i}`} speaker={s} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
