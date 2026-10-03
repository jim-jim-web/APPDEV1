// Callback Approach
function fetchTeletraanDataMock(callback) {
  setTimeout(() => {
    callback({ station: "Teletraan-1", status: "Operational" });
  }, 1000);
}

fetchTeletraanDataMock((data) => {
  console.log("Callback Data Received:", data);
});

// Promise & Async / Await Approach
function fetchCybertronDatabase() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ archives: "Matrix of Leadership Records", recordsFound: 500 });
    }, 1000);
  });
}

async function loadMainframeData() {
  try {
    const data = await fetchCybertronDatabase();
    console.log("Async/Await Database Result:", data);
  } catch (err) {
    console.log("Failed to query mainframe:", err.message);
  }
}

loadMainframeData();