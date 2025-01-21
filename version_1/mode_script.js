// script.js (add at the end)
const ctx = document.getElementById('swotChart').getContext('2d');
const swotChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Strengths', 'Weaknesses', 'Opportunities', 'Threats'],
        datasets: [{
            label: 'SWOT Analysis',
            data: [strengths.length, weaknesses.length, opportunities.length, threats.length],
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
