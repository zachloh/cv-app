import React, { useState } from 'react';
import CvForm from './CvForm/CvForm';
import CvPreview from './CvPreview/CvPreview';
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    profession: '',
    address: '',
    contact: '',
    email: '',
    description: '',
  });
  const [experience, setExperience] = useState([{ id: uuidv4() }]);
  const [education, setEducation] = useState([{ id: uuidv4() }]);

  const handlePersonalInfoChange = (prop, newInput) => {
    setPersonalInfo((prevPersonalInfo) => {
      return {
        ...prevPersonalInfo,
        [prop]: newInput,
      };
    });
  };

  const handleExperienceChange = (id, prop, newInput) => {
    setExperience((prevExp) => {
      const newExp = prevExp.map((exp) => {
        if (exp.id === id) {
          return {
            ...exp,
            [prop]: newInput,
          };
        }
        return exp;
      });

      return newExp;
    });
  };

  const handleDeleteExperience = (id) => {
    setExperience((prevExp) => {
      return prevExp.filter((exp) => exp.id !== id);
    });
  };

  const handleAddExperience = () => {
    setExperience((prevExp) => {
      return [
        ...prevExp,
        {
          id: uuidv4(),
        },
      ];
    });
  };

  const handleEducationChange = (id, prop, newInput) => {
    setEducation((prevEdu) => {
      const newEdu = prevEdu.map((edu) => {
        if (edu.id === id) {
          return {
            ...edu,
            [prop]: newInput,
          };
        }
        return edu;
      });

      return newEdu;
    });
  };

  const handleDeleteEducation = (id) => {
    setEducation((prevEdu) => {
      return prevEdu.filter((edu) => edu.id !== id);
    });
  };

  const handleAddEducation = () => {
    setEducation((prevEdu) => {
      return [
        ...prevEdu,
        {
          id: uuidv4(),
        },
      ];
    });
  };

  const handleReset = () => {
    setPersonalInfo({
      firstName: '',
      lastName: '',
      profession: '',
      address: '',
      contact: '',
      email: '',
      description: '',
    });

    setExperience([
      {
        id: uuidv4(),
      },
    ]);

    setEducation([
      {
        id: uuidv4(),
      },
    ]);
  };

  return (
    <main>
      <CvForm
        personalInfo={personalInfo}
        onPersonalInfoChange={handlePersonalInfoChange}
        experience={experience}
        onExperienceChange={handleExperienceChange}
        onDeleteExperience={handleDeleteExperience}
        onAddExperience={handleAddExperience}
        education={education}
        onEducationChange={handleEducationChange}
        onDeleteEducation={handleDeleteEducation}
        onAddEducation={handleAddEducation}
        onReset={handleReset}
      />
      <CvPreview
        personalInfo={personalInfo}
        experience={experience}
        education={education}
      />
    </main>
  );
};

export default Main;
