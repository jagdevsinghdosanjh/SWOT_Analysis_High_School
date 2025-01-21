// script.js
const strengths = [
    'Experienced Faculty',
    'Infrastructure',
    'Curriculum',
    'Accessibility',
    'Subsidized Education',
    'Extracurricular Activities'
];

const weaknesses = [
    'Funding Constraints',
    'Teacher-Student Ratio',
    'Outdated Teaching Methods',
    'Maintenance',
    'Limited Extracurricular Resources',
    'Administrative Challenges'
];

const opportunities = [
    'Government Funding and Grants',
    'Community Engagement',
    'Technological Integration',
    'Professional Development',
    'Inclusive Education Policies',
    'Extracurricular Expansion'
];

const threats = [
    'Budget Cuts',
    'Competition with Private Schools',
    'Policy Changes',
    'Technological Disparities',
    'Socio-Economic Factors',
    'Teacher Shortages'
];

const populateList = (id, items) => {
    const ul = document.getElementById(id);
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
};

populateList('strengths-list', strengths);
populateList('weaknesses-list', weaknesses);
populateList('opportunities-list', opportunities);
populateList('threats-list', threats);
