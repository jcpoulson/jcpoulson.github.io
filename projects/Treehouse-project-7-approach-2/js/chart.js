//Trafic Chart
const trafficCanvas = document.getElementById("traffic-chart");
let trafficData1 = {
   labels: ["16-22", "23-29", "30-6", "14-9", "20-26", "27-3", "4-10", "12-20", "17-31"],
   datasets: [{
    data: [750, 1250, 1000, 1500, 1750, 1850, 2250, 1500, 2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};

// Daily
let trafficData2 = {
    labels: ["5-20", "30-25", "6-10", "20-20", "7-31", "26-7", "10-25", "15-6", "28-30"],
    datasets: [{
     data: [150, 1050, 2500, 500, 1550, 1050, 1550, 2400, 1000],
     backgroundColor: 'rgba(116, 119, 191, .3)',
     borderWidth: 1,
   }]
 };

//  Weekly
 let trafficData3 = {
    labels: ["10-25", "8-10", "30-27", "20-9", "13-31", "7-15", "20-10", "24-30", "4-24"],
    datasets: [{
     data: [550, 2250, 1450, 1700, 1200, 2050, 1550, 1050, 2000],
     backgroundColor: 'rgba(116, 119, 191, .3)',
     borderWidth: 1,
   }]
 };

// Monthly
 let trafficData4 = {
    labels: ["5-26", "25-25", "6-31", "29-17", "20-6", "10-27", "15-3", "14-25", "10-30"],
    datasets: [{
     data: [1750, 350, 1400, 1350, 2200, 1250, 1750, 700, 1200],
     backgroundColor: 'rgba(116, 119, 191, .3)',
     borderWidth: 1,
   }]
 };

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 1000
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend : {
        display: false
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: "line",
    data: trafficData1,
    options: trafficOptions
});

// Loading Traffic Charts

let trafficTime = document.getElementsByClassName("traffic-nav")[0];
trafficTime.addEventListener("click", (e) => {
  let selectedTime = e.target.innerHTML;
  if (selectedTime === "Hourly") {
    let trafficChart = new Chart(trafficCanvas, {
      type: "line",
      data: trafficData1,
      options: trafficOptions,
    });
  } else if (selectedTime === "Daily") {
    let trafficChart = new Chart(trafficCanvas, {
      type: "line",
      data: trafficData2,
      options: trafficOptions,
    });
  } else if (selectedTime === "Weekly") {
    let trafficChart = new Chart(trafficCanvas, {
      type: "line",
      data: trafficData3,
      options: trafficOptions,
    });
  } else if (selectedTime === "Monthly") {
    let trafficChart = new Chart(trafficCanvas, {
      type: "line",
      data: trafficData4,
      options: trafficOptions,
    });
  }
});

// Daily Traffic Bar Graph

const dailyCanvas = document.getElementById("daily-chart");
const dailyData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [{
        label: '# of Hits',
        data: [45, 225, 125, 200, 225, 175, 75],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
              beginAtZero:true
            }
        }]
    },
    legend : {
      display: false
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// Mobile Chart

const mobileCanvas = document.getElementById("mobile-chart");
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 400],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions  = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});