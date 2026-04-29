const excelCtx = document.getElementById("excelChart");
new Chart(excelCtx, {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [{
      label: "Tasks Completed",
      data: [18, 24, 32, 29, 41, 47],
      backgroundColor: "#f97316",
      borderRadius: 8
    }, {
      label: "Open Requests",
      data: [12, 10, 9, 14, 8, 6],
      backgroundColor: "#2563eb",
      borderRadius: 8
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom" }
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
});

const dashboardData = {
  "2023": {
    "East": {
      "Technology": { sales: 248450, profit: 62300, orders: 520, trend: [18, 22, 25, 30, 36, 39], note: "Technology led the East region with steady growth through the year." },
      "Office Supplies": { sales: 184200, profit: 40200, orders: 610, trend: [12, 16, 18, 21, 24, 26], note: "Office Supplies had more orders but a lower profit margin." },
      "Furniture": { sales: 136900, profit: 24100, orders: 290, trend: [9, 11, 15, 14, 18, 20], note: "Furniture showed slower movement but still had consistent demand." }
    },
    "West": {
      "Technology": { sales: 315700, profit: 80400, orders: 690, trend: [22, 28, 32, 35, 42, 48], note: "The West region performed strongest in Technology." },
      "Office Supplies": { sales: 206350, profit: 47100, orders: 720, trend: [15, 18, 21, 26, 27, 31], note: "Office Supplies produced stable activity across the West." },
      "Furniture": { sales: 168400, profit: 31800, orders: 340, trend: [11, 13, 17, 19, 21, 24], note: "Furniture improved gradually in the West." }
    },
    "Central": {
      "Technology": { sales: 276600, profit: 70600, orders: 580, trend: [20, 23, 28, 31, 37, 41], note: "Central Technology sales grew through the second half." },
      "Office Supplies": { sales: 194100, profit: 43300, orders: 650, trend: [13, 17, 20, 23, 25, 28], note: "Central Office Supplies had strong order volume." },
      "Furniture": { sales: 152800, profit: 28400, orders: 315, trend: [10, 12, 16, 18, 20, 22], note: "Central Furniture stayed consistent but trailed other categories." }
    }
  },
  "2024": {
    "East": {
      "Technology": { sales: 410900, profit: 112600, orders: 850, trend: [30, 36, 42, 47, 55, 63], note: "East Technology was the strongest performer for this filter." },
      "Office Supplies": { sales: 258700, profit: 60800, orders: 800, trend: [20, 25, 27, 32, 36, 40], note: "Office Supplies had high order volume and solid growth." },
      "Furniture": { sales: 211450, profit: 45600, orders: 430, trend: [16, 18, 22, 26, 28, 31], note: "Furniture improved compared to the previous year." }
    },
    "West": {
      "Technology": { sales: 502800, profit: 142500, orders: 980, trend: [38, 45, 52, 58, 67, 75], note: "West Technology delivered the highest sales in 2024." },
      "Office Supplies": { sales: 309400, profit: 75900, orders: 910, trend: [24, 29, 33, 39, 44, 49], note: "Office Supplies remained a reliable category in the West." },
      "Furniture": { sales: 244600, profit: 50800, orders: 480, trend: [18, 22, 25, 30, 34, 36], note: "Furniture was steady with room for more growth." }
    },
    "Central": {
      "Technology": { sales: 455250, profit: 124100, orders: 910, trend: [34, 40, 46, 53, 61, 68], note: "Central Technology showed strong year-over-year improvement." },
      "Office Supplies": { sales: 288900, profit: 70450, orders: 870, trend: [23, 27, 31, 36, 40, 45], note: "Office Supplies performed well with balanced sales and orders." },
      "Furniture": { sales: 230700, profit: 48200, orders: 460, trend: [17, 20, 24, 28, 31, 34], note: "Central Furniture continued a steady upward pattern." }
    }
  },
  "2025": {
    "East": {
      "Technology": { sales: 602750, profit: 170400, orders: 1120, trend: [48, 56, 64, 72, 80, 91], note: "East Technology had major growth in 2025." },
      "Office Supplies": { sales: 358500, profit: 88200, orders: 1020, trend: [30, 34, 39, 44, 50, 55], note: "Office Supplies kept strong volume and improved profit." },
      "Furniture": { sales: 300200, profit: 64200, orders: 590, trend: [24, 29, 33, 38, 43, 48], note: "Furniture grew into a stronger supporting category." }
    },
    "West": {
      "Technology": { sales: 710300, profit: 205800, orders: 1280, trend: [55, 65, 74, 82, 94, 106], note: "West Technology was the top result across the dashboard." },
      "Office Supplies": { sales: 405900, profit: 101400, orders: 1110, trend: [33, 38, 44, 50, 57, 63], note: "Office Supplies performed well with strong order volume." },
      "Furniture": { sales: 328700, profit: 71200, orders: 640, trend: [26, 31, 36, 41, 47, 52], note: "Furniture made clear progress in the West." }
    },
    "Central": {
      "Technology": { sales: 655150, profit: 186300, orders: 1200, trend: [50, 60, 68, 76, 86, 98], note: "Central Technology was a high-performing segment." },
      "Office Supplies": { sales: 382400, profit: 96200, orders: 1060, trend: [31, 36, 42, 48, 54, 60], note: "Office Supplies remained stable and profitable." },
      "Furniture": { sales: 341800, profit: 74800, orders: 680, trend: [28, 33, 38, 44, 50, 56], note: "Central Furniture showed steady sales growth." }
    }
  }
};

const tableauCtx = document.getElementById("tableauChart");
let tableauChart = new Chart(tableauCtx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Sales Trend",
      data: [0, 0, 0, 0, 0, 0],
      borderColor: "#f97316",
      backgroundColor: "rgba(249, 115, 22, 0.15)",
      borderWidth: 3,
      tension: 0.35,
      fill: true,
      pointRadius: 4
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
});

function money(value) {
  return "$" + value.toLocaleString();
}

function updateDashboard() {
  const year = document.getElementById("yearFilter").value;
  const region = document.getElementById("regionFilter").value;
  const category = document.getElementById("categoryFilter").value;
  const item = dashboardData[year][region][category];

  const margin = ((item.profit / item.sales) * 100).toFixed(1);

  document.getElementById("salesKpi").textContent = money(item.sales);
  document.getElementById("profitKpi").textContent = money(item.profit);
  document.getElementById("ordersKpi").textContent = item.orders.toLocaleString();
  document.getElementById("marginKpi").textContent = margin + "%";
  document.getElementById("insightText").textContent = item.note;
  document.getElementById("regionText").textContent = `${region} region view for ${category} in ${year}.`;

  tableauChart.data.datasets[0].data = item.trend;
  tableauChart.update();

  const base = Math.max(...item.trend);
  document.getElementById("progressOne").style.width = Math.max(35, (item.trend[5] / base) * 100) + "%";
  document.getElementById("progressTwo").style.width = Math.max(30, (item.trend[3] / base) * 100) + "%";
  document.getElementById("progressThree").style.width = Math.max(25, (item.trend[1] / base) * 100) + "%";
}

document.getElementById("yearFilter").addEventListener("change", updateDashboard);
document.getElementById("regionFilter").addEventListener("change", updateDashboard);
document.getElementById("categoryFilter").addEventListener("change", updateDashboard);

updateDashboard();
