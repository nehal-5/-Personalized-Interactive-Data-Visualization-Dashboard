// DOM Elements
const dataLabel = document.getElementById('dataLabel');
const dataValue = document.getElementById('dataValue');
const addDataBtn = document.getElementById('addDataBtn');
const ctx = document.getElementById('myChart').getContext('2d');

// Initialize Chart.js with default data
const chart = new Chart(ctx, {
  type: 'bar', // Bar chart
  data: {
    labels: [],  // Data labels (e.g., Movie Names)
    datasets: [{
      label: 'My Data',
      data: [],  // Data values (e.g., Ratings)
      backgroundColor: '#4CAF50',
      borderColor: '#388E3C',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Event listener for the "Add Data" button
addDataBtn.addEventListener('click', function() {
  const label = dataLabel.value.trim();
  const value = parseInt(dataValue.value.trim());

  if (label && !isNaN(value)) {
    // Add data to chart
    chart.data.labels.push(label);
    chart.data.datasets[0].data.push(value);

    // Update the chart
    chart.update();

    // Clear input fields
    dataLabel.value = '';
    dataValue.value = '';
  } else {
    alert('Please enter valid data.');
  }
});
