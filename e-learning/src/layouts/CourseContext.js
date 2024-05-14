// CourseContext.js
import React, { createContext, useState, useEffect } from "react";

const generateTabId = () => {
  // Generate a random alphanumeric string as the tab ID
  return Math.random().toString(36).substring(7);
};

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [tabId] = useState(generateTabId()); // Generate a unique tab ID for each tab
  const storageKey = `selectedCourseId_${tabId}`;

   // Initialize the selected course ID from sessionStorage with the tab ID
   const [selectedCourseId, setSelectedCourseId] = useState(() => {
    return sessionStorage.getItem(storageKey) || null;
  });

  // Save the selected course ID to sessionStorage with the tab ID whenever it changes
  useEffect(() => {
    sessionStorage.setItem(storageKey, selectedCourseId);
  }, [selectedCourseId, storageKey]);

  return (
    <CourseContext.Provider value={{ selectedCourseId, setSelectedCourseId }}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseContext;
