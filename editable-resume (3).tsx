import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Pencil, Save, User, Mail, Phone, Globe } from 'lucide-react';

const EditableField = ({ initialValue, label, isHeading }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

  return (
    <div className="relative group">
      {isEditing ? (
        <div className="flex gap-2 w-full">
          <textarea
            className="w-full p-2 border rounded bg-gray-50 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            onClick={() => setIsEditing(false)}
            className="text-blue-500 hover:text-blue-700 transition-colors"
          >
            <Save size={16} />
          </button>
        </div>
      ) : (
        <div className="relative group">
          <div className={`mb-2 ${isHeading ? 'text-3xl font-bold text-gray-800' : ''}`}>
            {value}
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600 transition-opacity"
          >
            <Pencil size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

const ContactInfo = () => (
  <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
    <div className="flex items-center gap-2">
      <Mail size={16} />
      <EditableField initialValue="morgan.pence@colorado.edu" />
    </div>
    <div className="flex items-center gap-2">
      <Phone size={16} />
      <EditableField initialValue="(555) 555-5555" />
    </div>
    <div className="flex items-center gap-2">
      <Globe size={16} />
      <EditableField initialValue="https://mope4724.myportfolio.com/" />
    </div>
  </div>
);

const ResumeSectionTitle = ({ title }) => (
  <div className="flex items-center gap-2 mb-4">
    <h2 className="text-xl font-semibold text-blue-600 border-b-2 border-blue-200 pb-1">{title}</h2>
  </div>
);

const ResumeSection = ({ title, initialContent, className = "" }) => (
  <div className={`mb-8 ${className}`}>
    <ResumeSectionTitle title={title} />
    <div className="pl-4 border-l-2 border-gray-100">
      <EditableField initialValue={initialContent} />
    </div>
  </div>
);

const SkillsSection = ({ skills }) => {
  const [skillsList, setSkillsList] = useState(skills);

  return (
    <div className="mb-8">
      <ResumeSectionTitle title="Technical Skills" />
      <div className="flex flex-wrap gap-2">
        {skillsList.map((skill, index) => (
          <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const EditableResume = () => {
  const skills = [
    "UX Design", "Web Design", "Brand Design", "3D Modeling",
    "Product Design", "App Development", "Adobe Suite", "Figma"
  ];

  return (
    <Card className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
      <div className="mb-8 border-b pb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-blue-100 p-4 rounded-full">
            <User size={24} className="text-blue-600" />
          </div>
          <EditableField
            initialValue="Morgan Pence"
            isHeading={true}
          />
        </div>
        <ContactInfo />
      </div>

      <ResumeSection
        title="Professional Summary"
        initialContent="I am pursuing a Master of Arts in Strategic Communication Design at the University of Colorado Boulder. I recently graduated with a Bachelor of Science in Engineering, specializing in Creative Technology and Design with a Minor in Business. My expertise include UX design, web design, 3D modeling, mobile app development, and graphic design, skills honed through academic studies and professional experience. Additionally, I have as a Division 1 student-athlete during my undergraduate and graduate career."
        className="bg-gray-50 p-6 rounded-lg"
      />

      <div className="grid md:grid-cols-2 gap-8">
        <ResumeSection
          title="Education"
          initialContent={`Master of Arts in Strategic Communication Design (In Progress)
University of Colorado Boulder

Bachelor of Science in Engineering
University of Colorado Boulder
- Specialization: Creative Technology and Design
- Minor: Business
- Achievement: Division 1 Student-Athlete`}
        />

        <ResumeSection
          title="Experience"
          initialContent={`CU Athletics Creative Team Intern
• Led design initiatives for athletic department
• Created digital content for social media

3D Modeling Teaching Assistant
• Mentored students in 3D design principles
• Facilitated workshop sessions

Freelance Developer
• Developed responsive websites
• Created mobile applications`}
        />
      </div>

      <SkillsSection skills={skills} />

      <ResumeSection
        title="Interests & Passions"
        initialContent="The outdoor industry, health & wellness, emerging technologies, live music, hiking, yoga, being outside & creative, surfing, and travel."
        className="bg-blue-50 p-6 rounded-lg"
      />
    </Card>
  );
};

export default EditableResume;
