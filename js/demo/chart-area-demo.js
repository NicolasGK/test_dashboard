// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["1", "5", "10", "15", "20", "25", "30"],
    datasets: [{
      label: "Impressions (déc) ",
      lineTension: 0.2,
      backgroundColor: "rgba(42,109,171,0.1)",
      borderColor: "#2A6DAB",
      pointRadius: 0,
      pointBackgroundColor: "#2A6DAB",
      pointBorderColor: "#2A6DAB",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [100, 30, 300, 150, 200, 200, 150],
    },{
      label: "Impressions (nov) ",
      lineTension: 0.2,
      backgroundColor: "rgba(80,190,168,0.1)",
      borderColor: "#50BEA8",
      pointRadius: 0,
      pointBackgroundColor: "#50BEA8",
      pointBorderColor: "#50BEA8",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [200, 50, 200, 200, 100, 150, 1000],
    }
  ]
  },

  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return '' + number_format(value);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: true,
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});


// test // 
var ctx = document.getElementById("myAreaChart2");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["1", "5", "10", "15", "20", "25", "30"],
    datasets: [{
  label: "Impressions (nov)",
  lineTension: 0.2,
  backgroundColor: "rgba(80,190,168,0.23855479691876746)",
  borderColor: "#50BEA8",
  pointRadius: 0,
  pointBackgroundColor: "#50BEA8",
  pointBorderColor: "#50BEA8",
  pointHoverRadius: 3,
  pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
  pointHoverBorderColor: "rgba(78, 115, 223, 1)",
  pointHitRadius: 10,
  pointBorderWidth: 2,
  data: [80, 50, 200, 250, 100, 300, 250, 0, 500],
}],
},

options: {
  maintainAspectRatio: false,
  layout: {
    padding: {
      left: 10,
      right: 25,
      top: 25,
      bottom: 0
    }
  },
  scales: {
    xAxes: [{
      time: {
        unit: 'date'
      },
      gridLines: {
        display: false,
        drawBorder: false
      },
      ticks: {
        maxTicksLimit: 7
      }
    }],
    yAxes: [{
      ticks: {
        maxTicksLimit: 5,
        padding: 10,
        // Include a dollar sign in the ticks
        callback: function(value, index, values) {
          return '' + number_format(value);
        }
      },
      gridLines: {
        color: "rgb(234, 236, 244)",
        zeroLineColor: "rgb(234, 236, 244)",
        drawBorder: false,
        borderDash: [2],
        zeroLineBorderDash: [2]
      }
    }],
  },
  legend: {
    display: true,
  },
  tooltips: {
    backgroundColor: "rgb(255,255,255)",
    bodyFontColor: "#858796",
    titleMarginBottom: 10,
    titleFontColor: '#6e707e',
    titleFontSize: 14,
    borderColor: '#dddfeb',
    borderWidth: 1,
    xPadding: 15,
    yPadding: 15,
    displayColors: false,
    intersect: false,
    mode: 'index',
    caretPadding: 10,
    callbacks: {
      label: function(tooltipItem, chart) {
        var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
        return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
      }
    }
  }
}
});

var ctx = document.getElementById("myAreaChart3");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["1", "5", "10", "15", "20", "25", "30"],
    datasets: [{
  label: "Impressions (déc)",
  lineTension: 0.2,
  backgroundColor: "rgba(42,109,171,0.23855479691876746)",
  borderColor: "#2A6DAB",
  pointRadius: 0,
  pointBackgroundColor: "#50BEA8",
  pointBorderColor: "#50BEA8",
  pointHoverRadius: 3,
  pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
  pointHoverBorderColor: "rgba(78, 115, 223, 1)",
  pointHitRadius: 10,
  pointBorderWidth: 2,
  data: [200, 150, 180, 140, 200, 150, 170, 0, 300],
}],
},

options: {
  maintainAspectRatio: false,
  layout: {
    padding: {
      left: 10,
      right: 25,
      top: 25,
      bottom: 0
    }
  },
  scales: {
    xAxes: [{
      time: {
        unit: 'date'
      },
      gridLines: {
        display: false,
        drawBorder: false
      },
      ticks: {
        maxTicksLimit: 8
      }
    }],
    yAxes: [{
      ticks: {
        maxTicksLimit: 10,
        padding: 10,
        // Include a dollar sign in the ticks
        callback: function(value, index, values) {
          return '' + number_format(value);
        }
      },
      gridLines: {
        color: "rgb(234, 236, 244)",
        zeroLineColor: "rgb(234, 236, 244)",
        drawBorder: false,
        borderDash: [2],
        zeroLineBorderDash: [2]
      }
    }],
  },
  legend: {
    display: true,
  },
  tooltips: {
    backgroundColor: "rgb(255,255,255)",
    bodyFontColor: "#858796",
    titleMarginBottom: 10,
    titleFontColor: '#6e707e',
    titleFontSize: 14,
    borderColor: '#dddfeb',
    borderWidth: 1,
    xPadding: 15,
    yPadding: 15,
    displayColors: false,
    intersect: false,
    mode: 'index',
    caretPadding: 10,
    callbacks: {
      label: function(tooltipItem, chart) {
        var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
        return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
      }
    }
  }
}
});


let draggableElem = document.getElementById("draggable-elem");
let initialX = 0,
  initialY = 0;
let moveElement = false;

//Events Object
let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
};

let deviceType = "";

//Detech touch device
const isTouchDevice = () => {
  try {
    //We try to create TouchEvent (it would fail for desktops and throw error)
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

isTouchDevice();

//Start (mouse down / touch start)
draggableElem.addEventListener(events[deviceType].down, (e) => {
  e.preventDefault();
  //initial x and y points
  initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
  initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

  //Start movement
  moveElement = true;
});

//Move
draggableElem.addEventListener(events[deviceType].move, (e) => {
  //if movement == true then set top and left to new X andY while removing any offset
  if (moveElement) {
    e.preventDefault();
    let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
    draggableElem.style.top =
      draggableElem.offsetTop - (initialY - newY) + "px";
    draggableElem.style.left =
      draggableElem.offsetLeft - (initialX - newX) + "px";
    initialX = newX;
    initialY = newY;
  }
});

//mouse up / touch end
draggableElem.addEventListener(
  events[deviceType].up,
  (stopMovement = (e) => {
    moveElement = false;
  })
);

draggableElem.addEventListener("mouseleave", stopMovement);
draggableElem.addEventListener(events[deviceType].up, (e) => {
  moveElement = false;
});


let display = document.getElementById("display");
let display2 = document.getElementById("display2");
let myAreaChart = document.getElementById("myAreaChart");
let myAreaChart2 = document.getElementById("myAreaChart2");
display.addEventListener("click", () => {
  if(getComputedStyle(myAreaChart).display != "none"){
    myAreaChart.style.display = "none";
  } else {
    myAreaChart.style.display = "block";
  }
})

function displaytest(){
  if(getComputedStyle(myAreaChart2).display != "none"){
    myAreaChart2.style.display = "none";
  } else {
    myAreaChart2.style.display = "block";
  }
};
display2.onclick = displaytest;
// fin test//


