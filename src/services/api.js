import data from '../data/db.json';

// Simulating async behavior to keep the interface consistent
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getProfile = async () => {
    // await delay(100); // Optional: simulate network delay
    return data.profile;
};

export const getSkills = async () => {
    return data.skills;
};

export const getExperience = async () => {
    return data.experience;
};

export const getProjects = async () => {
    return data.projects;
};

export const getEducation = async () => {
    return data.education;
};

export const getCertifications = async () => {
    return data.certifications;
};

export const getStats = async () => {
    return data.stats;
};

export const getAllData = async () => {
    // Since we have all data locally, we can just return it directly
    // but we'll keep the Promise.all structure if you want to perform independent "fetches"
    // or just return the object directly wrapped in a promise.

    return {
        profile: data.profile,
        stats: data.stats,
        skills: data.skills,
        experience: data.experience,
        projects: data.projects,
        education: data.education,
        certifications: data.certifications
    };
};
