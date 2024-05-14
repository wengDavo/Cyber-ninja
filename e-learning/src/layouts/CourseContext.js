// CourseContext.js
import React, { createContext, useState, useEffect } from "react";

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [selectedCourseId, setSelectedCourseId] = useState(() => {
    // Initialize the selected course ID from local storage
    return localStorage.getItem("selectedCourseId") || null;
  });

  
  useEffect(() => {
    // Save the selected course ID to local storage whenever it changes
    localStorage.setItem("selectedCourseId", selectedCourseId);
  }, [selectedCourseId]);

  return (
    <CourseContext.Provider value={{ selectedCourseId, setSelectedCourseId }}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseContext;
