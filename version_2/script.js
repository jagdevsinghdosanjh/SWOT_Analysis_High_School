// script.js
const swotData = {
    strengths: [
        { name: 'Experienced Faculty', impact: 5, likelihood: 5, priority: 4 },
        { name: 'Infrastructure', impact: 4, likelihood: 4, priority: 3 },
        // Add more strengths as needed
    ],
    weaknesses: [
        { name: 'Funding Constraints', impact: 3, likelihood: 5, priority: 5 },
        { name: 'Teacher-Student Ratio', impact: 4, likelihood: 4, priority: 4 },
        // Add more weaknesses as needed
    ],
    opportunities: [
        { name: 'Government Funding and Grants', impact: 5, likelihood: 4, priority: 3 },
        { name: 'Community Engagement', impact: 4, likelihood: 4, priority: 4 },
        // Add more opportunities as needed
    ],
    threats: [
        { name: 'Budget Cuts', impact: 5, likelihood: 4, priority: 4 },
        { name: 'Competition with Private Schools', impact: 4, likelihood: 5, priority: 4 },
        // Add more threats as needed
    ]
};

const createInputField = (idPrefix, item) => {
    return `
        <div class="parameter-input">
            <span>${item.name}</span>
            <input type="number" id="${idPrefix}-impact" value="${item.impact}" min="1" max="5" />
            <input type="number" id="${idPrefix}-likelihood" value="${item.likelihood}" min="1" max="5" />
            <input type="number" id="${idPrefix}-priority" value="${item.priority}" min="1" max="5" />
        </div>
    `;
};

const populateSection = (sectionId, items) => {
    const section = document.getElementById(sectionId);
    section.innerHTML = '';
    items.forEach((item, index) => {
        section.innerHTML += createInputField(`${sectionId}-${index}`, item);
    });
};

populateSection('strengths-list', swotData.strengths);
populateSection('weaknesses-list', swotData.weaknesses);
populateSection('opportunities-list', swotData.opportunities);
populateSection('threats-list', swotData.threats);

const calculateWeightedScores = () => {
    const categories = ['strengths', 'weaknesses', 'opportunities', 'threats'];
    const scores = [];
    categories.forEach(category => {
        const items = swotData[category];
        let totalScore = 0;
        items.forEach((item, index) => {
            const impact = parseInt(document.getElementById(`${category}-list-${index}-impact`).value);
            const likelihood = parseInt(document.getElementById(`${category}-list-${index}-likelihood`).value);
            const priority = parseInt(document.getElementById(`${category}-list-${index}-priority`).value);
            totalScore += (impact * 2 + likelihood + priority);
        });
        scores.push(totalScore);
    });
    return scores;
};

const updateChart = () => {
    const scores = calculateWeightedScores();
    swotChart.data.datasets[0].data = scores;
    swotChart.update();
};

const ctx = document.getElementById('swotChart').getContext('2d');
const swotChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Strengths', 'Weaknesses', 'Opportunities', 'Threats'],
        datasets: [{
            label: 'SWOT Analysis',
            data: calculateWeightedScores(),
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', updateChart);
});
