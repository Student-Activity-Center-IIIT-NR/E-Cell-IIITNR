"use client";
import { ECellHeader } from "../../components/Header";
import { ECellFooter } from "../../components/Footer";
import { TeamHero } from "../../components/Team/TeamHero";
import { TeamIntro } from "../../components/Team/TeamIntro";
import { TeamMember } from "../../components/Team/TeamMember";

export default function Teams() {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      position: "President",
      department: "Computer Science",
      image: "https://i.pravatar.cc/200?img=1",
      linkedin: "#",
      email: "alex@ecell.com",
      bio: "Leading innovation with vision and passion for entrepreneurship.",
    },
    {
      id: 2,
      name: "Sarah Chen",
      position: "Vice President",
      department: "Business Administration",
      image: "https://i.pravatar.cc/200?img=2",
      linkedin: "#",
      email: "sarah@ecell.com",
      bio: "Strategic thinker driving organizational excellence.",
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      position: "Technical Lead",
      department: "Engineering",
      image: "https://i.pravatar.cc/200?img=3",
      linkedin: "#",
      email: "michael@ecell.com",
      bio: "Tech innovator building the future of digital solutions.",
    },
    {
      id: 4,
      name: "Emily Davis",
      position: "Marketing Head",
      department: "Marketing",
      image: "https://i.pravatar.cc/200?img=4",
      linkedin: "#",
      email: "emily@ecell.com",
      bio: "Creative storyteller connecting brands with audiences.",
    },
    {
      id: 5,
      name: "David Kim",
      position: "Finance Manager",
      department: "Finance",
      image: "https://i.pravatar.cc/200?img=5",
      linkedin: "#",
      email: "david@ecell.com",
      bio: "Financial strategist ensuring sustainable growth.",
    },
    {
      id: 6,
      name: "Lisa Thompson",
      position: "Events Coordinator",
      department: "Management",
      image: "https://i.pravatar.cc/200?img=6",
      linkedin: "#",
      email: "lisa@ecell.com",
      bio: "Event orchestrator creating memorable experiences.",
    },
  ];

  return (
    <div className="w-full min-h-screen font-poppins">
      <main className="bg-black text-white selection:bg-neutral-800 selection:text-white w-full relative min-h-screen overflow-hidden">
        {/* Enhanced Background Elements - Same as Events Page */}
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

        {/* Enhanced Hexagonal Elements - Responsive - Same as Events Page */}
        <div className="absolute inset-0 pointer-events-none z-5">
          {/* Mobile Hexagonal Elements */}
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

          {/* Tablet Hexagonal Elements */}
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

          {/* Desktop Hexagonal Elements */}
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
                {/* Featured President */}
                <div className="mb-28 sm:mb-32 md:mb-40 lg:mb-48">
                  <TeamMember
                    member={teamMembers[0]}
                    index={0}
                    isFeatured={true}
                  />
                </div>

                {/* Enhanced Elegant Divider with More Space */}
                <div className="relative flex items-center justify-center my-24 sm:my-28 md:my-32">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/15"></div>
                  </div>
                  <div className="relative bg-black px-8">
                    <div className="flex space-x-3">
                      <div className="w-3 h-3 bg-white/25 rounded-full animate-pulse"></div>
                      <div
                        className="w-3 h-3 bg-white/40 rounded-full animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-3 h-3 bg-white/25 rounded-full animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Executive Team Section */}
                <div>
                  <div className="text-center mb-16 sm:mb-20 md:mb-24">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-poppins mb-6">
                      Executive Team
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
                  </div>

                  {/* Enhanced Grid Layout with More Space */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 sm:gap-12 md:gap-16 lg:gap-20">
                    {teamMembers.slice(1).map((member, index) => (
                      <div
                        key={member.id}
                        className={`
                          transform transition-all duration-500 hover:scale-105
                          ${index % 3 === 0 ? "xl:translate-y-0" : ""}
                          ${index % 3 === 1 ? "xl:translate-y-6" : ""}
                          ${index % 3 === 2 ? "xl:translate-y-12" : ""}
                        `}
                        style={{
                          animationDelay: `${index * 0.15}s`,
                        }}
                      >
                        <TeamMember member={member} index={index} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ECellFooter />
        </div>
      </main>
    </div>
  );
}
