//Challenge 1 

function questionName(input) {
  let value = 201;
  switch (value) {
    case 200:
      "PASS - OK: Request successful";
      break;
    case 201:
      "PASS - Created: Resource created successfully";
      break; 
    default:
      "UNKNOWN - Unhandled status code";
  }

  return value;
}

//Challenge 2

function questionName(input) {
  let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]

  let count = 0;
  for (let i = 0; i < testResults.length; i++){
    if (testResults[i] === "Pass") {
      count = count + 1;
    }
  }
  return count;
}
