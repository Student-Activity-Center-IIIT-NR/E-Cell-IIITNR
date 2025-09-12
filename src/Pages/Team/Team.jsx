"use client";
import { ECellHeader } from "../../components/Header";
import { ECellFooter } from "../../components/Footer";
import { TeamHero } from "../../Components/Team/TeamHero";
import { TeamIntro } from "../../Components/Team/TeamIntro";
import { TeamMember } from "../../Components/Team/TeamMember";

export default function Teams() {
  const teamMembers = [
    {
      id: 1,
      name: "Asmit Shaw",
      position: "President",
      image: "/team/2.png",
      linkedin: "#",
      email: "asmit24101@iiitnr.edu.in",
    },
    {
      id: 2,
      name: "Ananya R Nair",
      position: "Vice President",
      image: "/team/3.png",
      linkedin: "#",
      email: "ananya24101@iiitnr.edu.in",
    },
    {
      id: 3,
      name: "Fahmin Mohammed K K",
      position: "Web Dev Head",
      image: "/team/1.png",
      linkedin: "#",
      email: "fahmin24101@iiitnr.edu.in",
    },
    {
      id: 4,
      name: "Varun Bhargava",
      position: "Core",
      image: "/team/4.png",
      linkedin: "https://www.linkedin.com/in/varunbhargava22",
      email: "varun24101@iiitnr.edu.in",
    },
    {
      id: 5,
      name: "Divyansh Rangari",
      position: "Core",
      image: "/team/5.png",
      linkedin:
        "https://www.linkedin.com/in/divyansh-rangari-2b2196326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      email: "divyansh24100@iiitnr.edu.in",
    },
    {
      id: 6,
      name: "Himanshu Deshmukh",
      position: "Senior Team",
      image: "/team/6.png",
      linkedin:
        "https://www.linkedin.com/in/himanshu-deshmukh-2591a9325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "himanshu24100@iiitnr.edu.in",
    },
    {
      id: 7,
      name: "Siddhant Singh",
      position: "Senior Team",
      image: "/team/7.png",
      linkedin:
        "https://www.linkedin.com/in/siddhant-singh-b5ab99314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "siddhant24100@iiitnr.edu.in",
    },
    {
      id: 8,
      name: "Shreyash Rai",
      position: "Senior Team",
      image: "/team/8.png",
      linkedin:
        "https://www.linkedin.com/in/shreyash-rai-3aa123251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "shreyash24101@iiitnr.edu.in",
    },
    {
      id: 9,
      name: "Asmit Shaw",
      position: "President",
      image: "/team/9.png",
      linkedin: "https://in.linkedin.com/in/asmit-shaw-6a09a2315",
      email: "asmit24101@iiitnr.edu.in",
    },
    {
      id: 10,
      name: "Srijan Kapoor",
      position: "Senior Team",
      image: "/team/10.png",
      linkedin:
        "https://www.linkedin.com/in/srijan-kapoor-4425b6326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "srijan24102@iiitnr.edu.in",
    },
    {
      id: 11,
      name: "Shashank Bhoi",
      position: "Core",
      image: "/team/11.png",
      linkedin: "https://linkedin.com/in/shashank-bhoi-01b637334",
      email: "shashank24101@iiitnr.edu.in",
    },
    {
      id: 12,
      name: "Aditya Goyal",
      position: "Senior Team",
      image: "/team/12.png",
      linkedin:
        "https://www.linkedin.com/in/aditya-goyal-3835b8326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      email: "aditya24100@iiitnr.edu.in",
    },
    {
      id: 13,
      name: "Srishti Tripathi",
      position: "Senior Team",
      image: "/team/13.png",
      linkedin: "https://www.linkedin.com/in/srishti-tripathi-509a4a332/",
      email: "srishti24100@iiitnr.edu.in",
    },
    {
      id: 14,
      name: "Soumya Awasthi",
      position: "Senior Team",
      image: "/team/14.png",
      linkedin:
        "https://www.linkedin.com/in/soumya-awasthi-714323332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "soumya24101@iiitnr.edu.in",
    },
    {
      id: 15,
      name: "Navyansh Singh",
      position: "Senior Team",
      image: "/team/15.png",
      linkedin:
        "https://www.linkedin.com/in/navyansh-singh-a0125632a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "navyansh24102@iiitnr.edu.in",
    },
    {
      id: 16,
      name: "Rahul Barma",
      position: "Senior Team",
      image: "/team/16.png",
      linkedin: "https://www.linkedin.com/in/rahulbarma",
      email: "rahul24102@iiitnr.edu.in",
    },
    {
      id: 17,
      name: "Fahmin Mohammed K K",
      position: "Core",
      image: "/team/17.png",
      linkedin:
        "https://www.linkedin.com/in/fahminmohammed?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "fahmin24101@iiitnr.edu.in",
    },
    {
      id: 18,
      name: "Pranjali Upadhyay",
      position: "Core",
      image: "/team/18.png",
      linkedin:
        "https://www.linkedin.com/in/pranjali-upadhyay-a981a0304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      email: "pranjali24101@iiitnr.edu.in",
    },
    {
      id: 19,
      name: "Tanishq Bhattacharjee",
      position: "Senior Team",
      image: "/team/19.png",
      linkedin: "https://www.linkedin.com/in/tanishq-bhattacharjee-44ba7b325/",
      email: "tanishq24102@iiitnr.edu.in",
    },
    {
      id: 20,
      name: "Palak",
      position: "Senior Team",
      image: "/team/20.png",
      linkedin: "https://www.linkedin.com/in/tanishq-bhattacharjee-44ba7b325/",
      email: "tanishq24102@iiitnr.edu.in",
    },
    {
      id: 21,
      name: "Thomas Sajeev Varghese",
      position: "Senior Team",
      image: "/team/21.png",
      linkedin: "https://www.linkedin.com/in/tanishq-bhattacharjee-44ba7b325/",
      email: "tanishq24102@iiitnr.edu.in",
    },
    {
      id: 22,
      name: "Swastik Yadav",
      position: "Senior Team",
      image: "/team/22.png",
      linkedin: "https://www.linkedin.com/in/tanishq-bhattacharjee-44ba7b325/",
      email: "tanishq24102@iiitnr.edu.in",
    },
    {
      id: 23,
      name: "Arpita Dash",
      position: "Senior Team",
      image: "/team/23.png",
      linkedin: "https://www.linkedin.com/in/tanishq-bhattacharjee-44ba7b325/",
      email: "tanishq24102@iiitnr.edu.in",
    },
    {
      id: 24,
      name: "Rudraprakash Dahariya",
      position: "Senior Team",
      image: "/team/24.png",
      linkedin: "https://www.linkedin.com/in/tanishq-bhattacharjee-44ba7b325/",
      email: "tanishq24102@iiitnr.edu.in",
    },
    {
      id: 25,
      name: "Karan Ramdas Jadhav",
      position: "Senior Team",
      image: "/team/25.png",
      linkedin: "https://www.linkedin.com/in/tanishq-bhattacharjee-44ba7b325/",
      email: "tanishq24102@iiitnr.edu.in",
    },
    {
      id: 26,
      name: "Karishma Singh Roy",
      position: "Senior Team",
      image: "/team/26.png",
      linkedin: "https://www.linkedin.com/in/tanishq-bhattacharjee-44ba7b325/",
      email: "tanishq24102@iiitnr.edu.in",
    },
    {
      id: 27,
      name: "Abhay Yadav",
      position: "Senior Team",
      image: "/team/27.png",
      linkedin: "https://www.linkedin.com/in/tanishq-bhattacharjee-44ba7b325/",
      email: "tanishq24102@iiitnr.edu.in",
    },
    {
      id: 28,
      name: "Ayush Singh  ",
      position: "Senior Team",
      image: "/team/28.png",
      linkedin: "https://www.linkedin.com/in/tanishq-bhattacharjee-44ba7b325/",
      email: "tanishq24102@iiitnr.edu.in",
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
                  />{" "}
                  <TeamMember
                    member={teamMembers[1]}
                    index={1}
                    isFeatured={true}
                  />
                </div>
                <div className="h-16"></div>

                {/* Website Team Section */}
                <div>
                  <div className="text-center mb-16 sm:mb-20 md:mb-24">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-poppins mb-6">
                      Website Team
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 sm:gap-12 md:gap-16 lg:gap-20">
                    {teamMembers.slice(2, 5).map((member, index) => (
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
                <div className="h-16"></div>

                {/* Design Team Section */}
                <div>
                  <div className="text-center mb-16 sm:mb-20 md:mb-24">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-poppins mb-6">
                      Design Team
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 sm:gap-12 md:gap-16 lg:gap-20">
                    {teamMembers.slice(5, 8).map((member, index) => (
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
                <div className="h-16"></div>
                {/* Documentation Team Section */}
                <div>
                  <div className="text-center mb-16 sm:mb-20 md:mb-24">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-poppins mb-6">
                      Documentation Team
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 sm:gap-12 md:gap-16 lg:gap-20">
                    {teamMembers.slice(8, 11).map((member, index) => (
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
                <div className="h-16"></div>
                {/* Events and PR Team Section */}
                <div>
                  <div className="text-center mb-16 sm:mb-20 md:mb-24">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-poppins mb-6">
                      Events and PR Team
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 sm:gap-12 md:gap-16 lg:gap-20">
                    {teamMembers.slice(11, 14).map((member, index) => (
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
                <div className="h-16"></div>
                {/* Events Operations Team Section */}
                <div>
                  <div className="text-center mb-16 sm:mb-20 md:mb-24">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-poppins mb-6">
                      Events Operations Team
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 sm:gap-12 md:gap-16 lg:gap-20">
                    {teamMembers.slice(14, 17).map((member, index) => (
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
                <div className="h-16"></div>
                {/* Social Media Team Section */}
                <div>
                  <div className="text-center mb-16 sm:mb-20 md:mb-24">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-poppins mb-6">
                      Social Media Team
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 sm:gap-12 md:gap-16 lg:gap-20">
                    {teamMembers.slice(17, 21).map((member, index) => (
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
          <div className="h-16"></div>
          <ECellFooter />
        </div>
      </main>
    </div>
  );
}
