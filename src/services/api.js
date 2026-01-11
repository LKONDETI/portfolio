import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getProfile = async () => {
    const response = await axios.get(`${API_URL}/profile`);
    return response.data;
};

export const getSkills = async () => {
    const response = await axios.get(`${API_URL}/skills`);
    return response.data;
};

export const getExperience = async () => {
    const response = await axios.get(`${API_URL}/experience`);
    return response.data;
};

export const getProjects = async () => {
    const response = await axios.get(`${API_URL}/projects`);
    return response.data;
};

export const getEducation = async () => {
    const response = await axios.get(`${API_URL}/education`);
    return response.data;
};

export const getCertifications = async () => {
    const response = await axios.get(`${API_URL}/certifications`);
    return response.data;
};

export const getStats = async () => {
    const response = await axios.get(`${API_URL}/stats`);
    return response.data;
};

export const getAllData = async () => {
    const [profile, stats, skills, experience, projects, education, certifications] = await Promise.all([
        getProfile(),
        getStats(),
        getSkills(),
        getExperience(),
        getProjects(),
        getEducation(),
        getCertifications()
    ]);
    return { profile, stats, skills, experience, projects, education, certifications };
};
