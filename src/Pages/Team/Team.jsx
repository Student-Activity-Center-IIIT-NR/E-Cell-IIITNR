"use client";
import { ECellHeader } from "../../components/Header";
import { ECellFooter } from "../../components/Footer";
import { TeamHero } from "../../Components/Team/TeamHero";
import { TeamIntro } from "../../Components/Team/TeamIntro";
import { TeamMember } from "../../Components/Team/TeamMember";

export default function Teams() {
  const leadership = [
    {
      id: 1,
      name: "Shaily Awasthi",
      position: "President",
      department: "Executive Leadership",
      image: "/teams/shaily.jpeg",
      linkedin: "https://www.linkedin.com/",
      email: "shaily24101@iiitnr.edu.in",
      bio: "President of Entrepreneurship Cell, IIIT Naya Raipur for the tenure 2026-27.",
    },
    {
      id: 2,
      name: "Bhargava Teja",
      position: "Vice President",
      department: "Executive Leadership",
      image: "/teams/BHARGAV.jpg",
      linkedin: "https://www.linkedin.com/",
      email: "bhargava24101@iiitnr.edu.in",
      bio: "Vice President of Entrepreneurship Cell, IIIT Naya Raipur for the tenure 2026-27.",
    },
  ];

  const teamSections = [
    {
      title: "Website Team",
      members: [
        {
          id: 26,
          name: "Sumit Sahoo",
          position: "Core",
          department: "Website",
          image: "/teams/sumit.jpeg",
          linkedin: "https://www.linkedin.com/",
          email: "sumit24101@iiitnr.edu.in",
        },
        {
          id: 27,
          name: "Sandeep Sidar",
          position: "Senior Team",
          department: "Website",
          image: "/teams/sandeep.jpeg",
          linkedin: "https://www.linkedin.com/",
          email: "sandeep24101@iiitnr.edu.in",
        },
      ],
    },
    {
      title: "Event Operations Team",
      members: [
        {
          id: 18,
          name: "Kumbham Arjun",
          position: "Core",
          department: "Event Operations",
          image: "/teams/Arjun.jpg",
          linkedin: "https://www.linkedin.com/",
          email: "arjun24101@iiitnr.edu.in",
        },
        {
          id: 19,
          name: "Ayushi Bagmar",
          position: "Core",
          department: "Event Operations",
          image: "/teams/Aayushi Bagmar.jpg",
          linkedin: "https://www.linkedin.com/",
          email: "ayushi24101@iiitnr.edu.in",
        },
        {
          id: 20,
          name: "Krishna Sharma",
          position: "Senior Team",
          department: "Event Operations",
          image: "/teams/Krishna.jpg",
          linkedin: "https://www.linkedin.com/",
          email: "krishna24101@iiitnr.edu.in",
        },
        {
          id: 21,
          name: "Shivali Pandey",
          position: "Senior Team",
          department: "Event Operations",
          image: "/teams/shivali.jpg",
          linkedin: "https://www.linkedin.com/",
          email: "shivali24101@iiitnr.edu.in",
        },
      ],
    },
    {
      title: "Events and PR Team",
      members: [
        {
          id: 3,
          name: "Shubham Jaiswal",
          position: "Core",
          department: "Events and PR",
          image: "/teams/shubham.jpeg",
          linkedin: "https://www.linkedin.com/",
          email: "shubham24101@iiitnr.edu.in",
        },
        {
          id: 4,
          name: "Avishi Verma",
          position: "Core",
          department: "Events and PR",
          image: "/teams/Avishi.jpeg",
          linkedin: "https://www.linkedin.com/",
          email: "avishi24101@iiitnr.edu.in",
        },
        {
          id: 5,
          name: "Sanvee Bhale",
          position: "Senior Team",
          department: "Events and PR",
          image: "/teams/sanvee.jpg",
          linkedin: "https://www.linkedin.com/",
          email: "sanvee24101@iiitnr.edu.in",
        },
        {
          id: 6,
          name: "Trishi Thakur",
          position: "Senior Team",
          department: "Events and PR",
          image: "/teams/Trishi Thakur.jpg",
          linkedin: "https://www.linkedin.com/",
          email: "trishi24101@iiitnr.edu.in",
        },
        {
          id: 7,
          name: "Soumya Verma",
          position: "Senior Team",
          department: "Events and PR",
          image: "/teams/Soumya Verma.jpg",
          linkedin: "https://www.linkedin.com/",
          email: "soumya24101@iiitnr.edu.in",
        },
        {
          id: 8,
          name: "Vihaan Choubey",
          position: "Senior Team",
          department: "Events and PR",
          image: "/teams/Vihaan.png",
          linkedin: "https://www.linkedin.com/",
          email: "vihaan24101@iiitnr.edu.in",
        },
      ],
    },
    {
      title: "Design Team",
      members: [
        {
          id: 9,
          name: "Archit Agrawal",
          position: "Core",
          department: "Design",
          image: "/teams/Archit Agrawal.jpeg",
          linkedin: "https://www.linkedin.com/",
          email: "archit24101@iiitnr.edu.in",
        },
        {
          id: 10,
          name: "Vanya Angare",
          position: "Core",
          department: "Design",
          image: "/teams/vanya.jpg",
          linkedin: "https://www.linkedin.com/",
          email: "vanya24101@iiitnr.edu.in",
        },
        {
          id: 11,
          name: "Jaswanth Sai",
          position: "Senior Team",
          department: "Design",
          image: "/teams/jaswanth.jpg",
          linkedin: "https://www.linkedin.com/",
          email: "jaswanth24101@iiitnr.edu.in",
        },
        {
          id: 12,
          name: "Astha Kujur",
          position: "Senior Team",
          department: "Design",
          image: "/teams/Astha.jpeg",
          linkedin: "https://www.linkedin.com/",
          email: "astha24101@iiitnr.edu.in",
        },
        {
          id: 13,
          name: "Ujjwal Nishad",
          position: "Senior Team",
          department: "Design",
          image: "/teams/Ujjwal.png",
          linkedin: "https://www.linkedin.com/",
          email: "ujjwal24101@iiitnr.edu.in",
        },
        {
          id: 14,
          name: "Ritika Verma",
          position: "Senior Team",
          department: "Design",
          image: "/teams/Ritika.jpg",
          linkedin: "https://www.linkedin.com/",
          email: "ritika24101@iiitnr.edu.in",
        },
      ],
    },
    {
      title: "Documentation Team",
      members: [
        {
          id: 15,
          name: "Ankit Agarwal",
          position: "Core",
          department: "Documentation",
          image: "/teams/Ankit Agarwal.jpg",
          linkedin: "https://www.linkedin.com/",
          email: "ankit24101@iiitnr.edu.in",
        },
        {
          id: 16,
          name: "Perlin Rhooney",
          position: "Senior Team",
          department: "Documentation",
          image: "/teams/perlin.png",
          linkedin: "https://www.linkedin.com/",
          email: "perlin24101@iiitnr.edu.in",
        },
        {
          id: 17,
          name: "Niharika Kujur",
          position: "Senior Team",
          department: "Documentation",
          image: "/teams/Niharika_.jpg",
          linkedin: "https://www.linkedin.com/",
          email: "niharika24101@iiitnr.edu.in",
        },
      ],
    },
    {
      title: "Social Media Team",
      members: [
        {
          id: 22,
          name: "Vipin Rawat",
          position: "Core",
          department: "Social Media",
          image: "/teams/Vipin Rawat_.jpg",
          linkedin: "https://www.linkedin.com/",
          email: "vipin24101@iiitnr.edu.in",
        },
        {
          id: 23,
          name: "Toshika Sahu",
          position: "Senior Team",
          department: "Social Media",
          image: "/teams/TOSHIKASAHU.jpg",
          linkedin: "https://www.linkedin.com/",
          email: "toshika24101@iiitnr.edu.in",
        },
        {
          id: 24,
          name: "Ishant Thakur",
          position: "Senior Team",
          department: "Social Media",
          image: "/teams/Ishant thakur.png",
          linkedin: "https://www.linkedin.com/",
          email: "ishant24101@iiitnr.edu.in",
        },
        {
          id: 25,
          name: "Ashwin Roger Baxla",
          position: "Senior Team",
          department: "Social Media",
          image: "/teams/Ashwin_.png",
          linkedin: "https://www.linkedin.com/",
          email: "ashwin24101@iiitnr.edu.in",
        },
      ],
    },
  ];

  let memberCounter = 0;

  return (
    <div className="w-full min-h-screen font-poppins">
      <main className="bg-black text-white selection:bg-neutral-800 selection:text-white w-full relative min-h-screen overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 w-full h-full opacity-70 sm:opacity-80 md:opacity-90 pointer-events-none z-0"
          style={{
            backgroundImage: `url('/background-pattern.svg')`,
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
            backgroundPosition: "center",
            filter: "brightness(3) contrast(1.5)",
          }}
        />

        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-black/60 pointer-events-none z-1"></div>

        {/* Hexagonal Background Accents */}
        <div className="absolute inset-0 pointer-events-none z-5">
          <div className="block sm:hidden">
            <div className="absolute top-16 right-4 opacity-20">
              <div className="w-8 h-8 bg-gray-600 transform rotate-45 shadow-xl shadow-white/10"></div>
            </div>
            <div className="absolute top-32 right-8 opacity-15">
              <div className="w-6 h-6 bg-gray-500 transform rotate-45 shadow-lg shadow-white/10"></div>
            </div>
            <div className="absolute bottom-20 left-4 opacity-20">
              <div className="w-10 h-10 bg-gray-600 transform rotate-45 shadow-xl shadow-white/10"></div>
            </div>
          </div>

          <div className="hidden sm:block md:hidden">
            <div className="absolute top-20 right-8 opacity-25">
              <div className="w-12 h-12 bg-gray-600 transform rotate-45 shadow-xl shadow-white/10"></div>
            </div>
            <div className="absolute top-36 right-16 opacity-20">
              <div className="w-10 h-10 bg-gray-500 transform rotate-45 shadow-lg shadow-white/10"></div>
            </div>
            <div className="absolute bottom-24 left-8 opacity-25">
              <div className="w-14 h-14 bg-gray-600 transform rotate-45 shadow-xl shadow-white/10"></div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="absolute top-20 right-10 opacity-30">
              <div className="w-16 h-16 bg-gray-600 transform rotate-45 shadow-2xl shadow-white/10"></div>
            </div>
            <div className="absolute top-32 right-24 opacity-25">
              <div className="w-12 h-12 bg-gray-500 transform rotate-45 shadow-xl shadow-white/10"></div>
            </div>
            <div className="absolute top-44 right-16 opacity-20">
              <div className="w-20 h-20 bg-gray-700 transform rotate-45 shadow-2xl shadow-white/10"></div>
            </div>
            <div className="absolute bottom-32 left-10 opacity-30">
              <div className="w-14 h-14 bg-gray-600 transform rotate-45 shadow-2xl shadow-white/10"></div>
            </div>
            <div className="absolute bottom-20 left-24 opacity-25">
              <div className="w-18 h-18 bg-gray-500 transform rotate-45 shadow-xl shadow-white/10"></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <ECellHeader />

          {/* Hero Section */}
          <TeamHero />

          {/* Main Content */}
          <section className="relative w-full px-6 sm:px-8 md:px-12 lg:px-16 pb-24 sm:pb-28 md:pb-36">
            <div className="max-w-7xl mx-auto">
              {/* Introduction */}
              <div className="mb-20 sm:mb-24 md:mb-28">
                <TeamIntro />
              </div>

              {/* Team Members */}
              <div className="space-y-20 sm:space-y-24 md:space-y-28">
                {/* 1. Main Executive Leadership */}
                <div className="mb-28 sm:mb-32 md:mb-40 lg:mb-48 space-y-12">
                  {leadership.map((leader, index) => (
                    <TeamMember
                      key={leader.id}
                      member={leader}
                      index={index}
                      isFeatured={true}
                    />
                  ))}
                </div>

                <div className="h-16"></div>

                {/* Team Departments in exact requested order */}
                {teamSections.map((section) => (
                  <div key={section.title}>
                    <div className="text-center mb-16 sm:mb-20 md:mb-24">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-poppins mb-6">
                        {section.title}
                      </h2>
                      <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 sm:gap-12 md:gap-16 lg:gap-20">
                      {section.members.map((member, idx) => {
                        const globalIdx = memberCounter++;
                        return (
                          <div
                            key={member.id}
                            className={`
                              transform transition-all duration-500 hover:scale-105
                              ${idx % 3 === 0 ? "xl:translate-y-0" : ""}
                              ${idx % 3 === 1 ? "xl:translate-y-6" : ""}
                              ${idx % 3 === 2 ? "xl:translate-y-12" : ""}
                            `}
                            style={{
                              animationDelay: `${idx * 0.15}s`,
                            }}
                          >
                            <TeamMember member={member} index={globalIdx} />
                          </div>
                        );
                      })}
                    </div>
                    <div className="h-16"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className="h-16"></div>
          <ECellFooter />
        </div>
      </main>
    </div>
  );
}
