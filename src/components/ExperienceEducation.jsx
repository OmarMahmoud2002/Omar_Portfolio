import React from "react";
import { GraduationCap, Briefcase } from "lucide-react";

const SectionHeader = ({ icon: Icon, title }) => (
  <div className="flex items-center justify-center gap-3 mb-6">
    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold underline decoration-green-500 text-center">
      {title}
    </h2>
  </div>
);

const Item = ({ title, subtitle, time, place, points = [] }) => (
  <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-green-500/30 rounded-lg p-5 sm:p-6 hover:border-green-500 transition-all duration-300">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
      <h3 className="text-xl sm:text-2xl font-bold text-white">{title}</h3>
      {time && <span className="text-green-400 font-mono text-sm">{time}</span>}
    </div>
    {subtitle && <p className="text-gray-300 mt-1">{subtitle}</p>}
    {place && <p className="text-gray-400 text-sm">{place}</p>}
    {points.length > 0 && (
      <ul className="list-disc list-inside mt-3 space-y-1 text-gray-300 text-sm">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    )}
  </div>
);

const ExperienceEducation = () => {
  return (
    <section className="bg-black text-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Education */}
        <div>
          <SectionHeader icon={GraduationCap} title="Education" />
          <div className="grid grid-cols-1 gap-6">
            <Item
              title="9-Month Professional Diploma, Open-Source Track"
              subtitle="Information Technology Institute (ITI) - Assiut Branch"
              time="Oct 2024 – July 2025"
            />
            <Item
              title="BSc in Computer Science"
              subtitle="Egyptian E-Learning University (EELU), Egypt"
              time="Jul 2020 – June 2024"
              place="Grade: Very Good"
            />
          </div>
        </div>

        {/* Experience */}
        <div>
          <SectionHeader icon={Briefcase} title="Work Experience" />
          <div className="grid grid-cols-1 gap-6">
            <Item
              title="Full-Time Web Developer (Full Stack)"
              subtitle="Optomatica, Remote"
              time="Jul 2025 – Nov 2025"
              points={[
                "Developed and maintained web applications using PHP and Laravel.",
                "Implemented backend services and APIs with Java and Spring Boot.",
                "Collaborated with cross-functional teams to deliver scalable and efficient solutions.",
              ]}
            />
            <Item
              title="Freelance Web Developer"
              subtitle="Remote"
              time="Mar 2025 – Apr 2025"
              points={[
                "Developed a Python-based web scraping tool to automate data extraction for clients.",
                "Designed responsive websites using HTML, CSS, JavaScript.",
                "Created a PHP application to extract and process data from Excel files.",
                "Built and customized WordPress sites to meet client-specific requirements.",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
