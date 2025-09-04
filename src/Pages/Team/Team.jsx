import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  Github,
  Twitter,
} from "lucide-react";

const Team = () => {
  // Sample team data - replace with your actual team data
  const teamMembers = [
    {
      id: 1,
      name: "Asmit Shaw",
      position: "President",
      image: "/teams/1.png",
      description:
        "Leading innovation and driving excellence in entrepreneurship",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
        instagram: "#",
        email: "asmit@ecell.com",
      },
      category: "Leadership",
    },
    {
      id: 2,
      name: "Rahul Kumar",
      position: "Vice President",
      image: "/teams/2.png",
      description: "Strategic planning and operational excellence",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
        instagram: "#",
        email: "rahul@ecell.com",
      },
      category: "Leadership",
    },
    {
      id: 3,
      name: "Priya Sharma",
      position: "Secretary",
      image: "/teams/3.png",
      description: "Organizing events and managing communications",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
        instagram: "#",
        email: "priya@ecell.com",
      },
      category: "Management",
    },
    {
      id: 4,
      name: "Amit Patel",
      position: "Treasurer",
      image: "/teams/4.png",
      description: "Financial management and budget optimization",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
        instagram: "#",
        email: "amit@ecell.com",
      },
      category: "Finance",
    },
    {
      id: 5,
      name: "Neha Singh",
      position: "Event Coordinator",
      image: "/teams/5.png",
      description: "Creating memorable experiences through events",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
        instagram: "#",
        email: "neha@ecell.com",
      },
      category: "Events",
    },
    {
      id: 6,
      name: "Karan Malhotra",
      position: "Technical Lead",
      image: "/teams/6.png",
      description: "Driving technological innovation and development",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
        instagram: "#",
        email: "karan@ecell.com",
      },
      category: "Technical",
    },
  ];

  const categories = [
    "All",
    "Leadership",
    "Management",
    "Finance",
    "Events",
    "Technical",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMembers =
    selectedCategory === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.category === selectedCategory);

  const TeamCard = ({ member, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm p-6 h-96 transition-all duration-500 hover:border-white/40 hover:bg-white/15">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Profile Image Section */}
        <div className="relative z-10 text-center mb-6">
          <div className="relative w-32 h-32 mx-auto mb-4">
            {/* Image Container */}
            <div className="w-full h-full rounded-full bg-gradient-to-br from-white/20 to-white/10 border-2 border-white/30 overflow-hidden group-hover:border-white/50 transition-all duration-500">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="hidden w-full h-full bg-gradient-to-br from-white/30 to-white/20 flex items-center justify-center text-4xl font-bold text-white">
                {member.name.charAt(0)}
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-2 -right-2 bg-white/20 border border-white/30 text-white text-xs px-3 py-1 rounded-full font-semibold">
              {member.category}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 text-center">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-white/70 font-semibold mb-3 text-sm">
            {member.position}
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            {member.description}
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-3">
            {Object.entries(member.social).map(([platform, link]) => {
              const Icon = {
                linkedin: Linkedin,
                github: Github,
                twitter: Twitter,
                instagram: Instagram,
                email: Mail,
              }[platform];

              if (!Icon) return null;

              return (
                <motion.a
                  key={platform}
                  href={platform === "email" ? `mailto:${link}` : link}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-300 group-hover:bg-white/20"
                >
                  <Icon className="w-4 h-4 text-white" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            TEAMS
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed">
              Meet the brilliant minds behind our success. Our team is dedicated
              to fostering innovation, entrepreneurship, and excellence in
              everything we do.
            </p>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 font-semibold ${
                selectedCategory === category
                  ? "bg-white text-black border-transparent"
                  : "bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/30"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
            <p className="text-gray-300 mb-6">
              Ready to make a difference? We're always looking for passionate
              individuals to join our mission.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
              Apply Now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
