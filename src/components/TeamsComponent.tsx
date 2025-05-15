import { motion } from "framer-motion";
import teamMembers from "../data/teams";

export default function TeamsComponent({maxItems = teamMembers.length}: { maxItems?: number}) {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <div className="text-center mb-12">
        <p className="text-[#fdbe33] text-lg">Our Team</p>
        <h2 className="text-4xl font-semibold text-yellow-500">
          Meet Our Engineer
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.slice(0,maxItems).map((member, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.3,
              ease: "easeOut",
            }}
            className="relative team-item overflow-hidden border border-gray-300 bg-[#121518] group hover:bg-[#FDBE33] transition-all duration-300"
          >
            {/* Social Icons - Appear on hover */}
            <div className="absolute top-0 left-0 flex flex-col bg-[#121518] group-hover:opacity-100 opacity-0 transition-opacity duration-300 z-10">
              <a href={member.social.twitter} target="_blank">
                <div className="w-10 h-10 flex items-center justify-center hover:bg-[#FDBE33] transition">
                  <i className="fab fa-twitter text-white" />
                </div>
              </a>
              <a href={member.social.facebook} target="_blank">
                <div className="w-10 h-10 flex items-center justify-center hover:bg-[#FDBE33] transition">
                  <i className="fab fa-facebook-f text-white" />
                </div>
              </a>
              <a href={member.social.linkedin} target="_blank">
                <div className="w-10 h-10 flex items-center justify-center hover:bg-[#FDBE33] transition">
                  <i className="fab fa-linkedin-in text-white" />
                </div>
              </a>
              <a href={member.social.instagram} target="_blank">
                <div className="w-10 h-10 flex items-center justify-center hover:bg-[#FDBE33] transition">
                  <i className="fab fa-instagram text-white" />
                </div>
              </a>
            </div>

            {/* Image */}
            <div className="team-img">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Text */}
            <div className="team-text text-center m-4">
              <p className="text-xl font-bold py-2 text-[#FDBE33] group-hover:text-[#121518] transition-all duration-300">
                {member.name}
              </p>
              <p className="text-white">{member.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}