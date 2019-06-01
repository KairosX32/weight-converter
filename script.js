const $output = document.getElementById("output");
const $unit = document.querySelector("#unit");
const $lbsinput = document.getElementById("lbsinput");
const $kginput = document.getElementById("kginput");
const $switch = document.getElementById("switch");
const $gramsOutput = document.querySelector("#gramsOutput");
const $kgOutput = document.querySelector("#kgOutput");
const $ozOutput = document.querySelector("#ozOutput");

$output.style.visibility = "hidden";
$kginput.style.display = "none";

// Determine which unit the user wants to convert
function which() {
  if ($unit.options[$unit.selectedIndex].value === "kg") {
    $kginput.style.display = "block";
    $lbsinput.style.display = "none";
    $output.style.visibility = "hidden";    // clearing output onchange
  } else {
    $lbsinput.style.display = "block";
    $kginput.style.display = "none";
    $output.style.visibility = "hidden";
  }
}

// Convert lbs to g, kg, oz
function convertPounds(e) {
  let lbs = e.target.value;
  $output.style.visibility = "visible";
  if (lbs === "") {
    return ($output.style.visibility = "hidden"); // removing output if blank
  }
  $gramsOutput.innerHTML = (lbs / 0.0022046).toFixed(2);
  $kgOutput.innerHTML = (lbs / 2.205).toFixed(2);
  $ozOutput.innerHTML = (lbs * 16).toFixed(2);
}

// convert kg to g, lbs, oz
function convertKg(e) {
  let kg = e.target.value;
  $output.style.visibility = "visible";
  if (kg === "") {
    return ($output.style.visibility = "hidden");
  }

  $switch.textContent = "Pounds";
  $gramsOutput.innerHTML = (kg * 1000).toFixed(2);
  $kgOutput.innerHTML = (kg * 2.205).toFixed(2);
  $ozOutput.innerHTML = (kg * 35.274).toFixed(2);
}

// Execute conversions
$lbsinput.addEventListener("input", convertPounds);
$kginput.addEventListener("input", convertKg);


