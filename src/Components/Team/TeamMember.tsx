import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface TeamMemberProps {
  member: {
    id: number;
    name: string;
    position: string;
    department: string;
    image: string;
    linkedin: string;
    email: string;
    bio: string;
  };
  index: number;
  isFeatured?: boolean;
}

export const TeamMember: React.FC<TeamMemberProps> = ({
  member,
  index,
  isFeatured = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  if (isFeatured) {
    return (
      <div className="group relative">
        <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 sm:p-10 md:p-12 hover:border-white/30 transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto lg:mx-0 rounded-3xl overflow-hidden border-2 border-white/30 bg-white/10 backdrop-blur-sm shadow-2xl">
                  <LazyLoadImage
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-white/20 rounded-lg rotate-45 opacity-60"></div>
                <div className="absolute -top-2 -left-4 w-4 h-4 bg-white/30 rounded-full opacity-80"></div>
              </div>
            </div>

            <div className="lg:col-span-3 text-center lg:text-left space-y-6">
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-poppins mb-3 leading-tight">
                  {member.name}
                </h3>
                <p className="text-xl sm:text-2xl text-gray-200 font-semibold font-poppins mb-2">
                  {member.position}
                </p>
                <p className="text-gray-300 text-base font-poppins opacity-90 mb-4">
                  Department of {member.department}
                </p>
                <p className="text-gray-200 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {member.bio}
                </p>
              </div>

              {/* Enhanced Contact Links - Fixed hover visibility */}
              <div className="flex justify-center lg:justify-start space-x-4">
                <a
                  href={member.linkedin}
                  className="group/link w-12 h-12 bg-white/10 hover:bg-blue-600 text-white hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-blue-600 hover:shadow-lg hover:scale-110"
                >
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover/link:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="group/link w-12 h-12 bg-white/10 hover:bg-red-600 text-white hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-red-600 hover:shadow-lg hover:scale-110"
                >
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover/link:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-8 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 relative h-full flex flex-col group-hover:transform group-hover:scale-[1.02] pt-12">
        {/* Enhanced Number Badge */}
        <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/25 shadow-lg">
          <span className="text-white text-sm font-bold font-poppins">
            {(index + 2).toString().padStart(2, "0")}
          </span>
        </div>

        {/* Member Image */}
        <div className="relative mb-6 flex justify-center">
          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-white/25 bg-white/10 shadow-xl">
            <LazyLoadImage
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Decorative corner elements */}
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-white/25 rounded-full opacity-60"></div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white/20 rounded-lg rotate-45 opacity-50"></div>
        </div>

        {/* Member Info */}
        <div className="text-center space-y-3 flex-grow">
          <h3 className="text-xl sm:text-2xl font-bold text-white font-poppins leading-tight">
            {member.name}
          </h3>
          <p className="text-gray-200 text-base font-semibold font-poppins">
            {member.position}
          </p>
          <p className="text-gray-300 text-sm font-poppins opacity-90">
            {member.department}
          </p>

          {/* Decorative line */}
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto"></div>

          {/* Bio - Enhanced with better transitions */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isHovered ? "max-h-20 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pt-3 border-t border-white/15">
              <p className="text-gray-300 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Contact Links - Fixed hover visibility */}
        <div
          className={`flex justify-center space-x-3 transition-all duration-300 ${
            isHovered ? "mt-6" : "mt-4"
          }`}
        >
          <a
            href={member.linkedin}
            className="group/link w-10 h-10 bg-white/15 hover:bg-blue-600 text-white hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/25 hover:border-blue-600 hover:shadow-md hover:scale-110"
          >
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover/link:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href={`mailto:${member.email}`}
            className="group/link w-10 h-10 bg-white/15 hover:bg-red-600 text-white hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/25 hover:border-red-600 hover:shadow-md hover:scale-110"
          >
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover/link:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
