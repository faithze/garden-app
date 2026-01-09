// Refactored gardening logic into reusable functions (Issue #3)

/**
 * Determines and returns gardening advice based on the season provided.
 * This function isolates seasonal logic to improve readability and reusability.
 *
 * @param {string} season - The current season (e.g. "summer" or "winter")
 * @returns {string} - Advice related to seasonal plant care
 */
function getSeasonAdvice(season) {
    // Check if the season is summer
    if (season === "summer") {
        return "Water your plants regularly and provide some shade.\n";
    }
    // Check if the season is winter
    else if (season === "winter") {
        return "Protect your plants from frost with covers.\n";
    }
    // Fallback advice if the season is unrecognised
    else {
        return "No advice for this season.\n";
    }
}

/**
 * Determines and returns gardening advice based on the type of plant.
 * This function keeps plant-specific logic separate from seasonal logic.
 *
 * @param {string} plantType - The type of plant (e.g. "flower" or "vegetable")
 * @returns {string} - Advice related to plant-specific care
 */
function getPlantAdvice(plantType) {
    // Advice for flowering plants
    if (plantType === "flower") {
        return "Use fertiliser to encourage blooms.";
    }
    // Advice for vegetable plants
    else if (plantType === "vegetable") {
        return "Keep an eye out for pests!";
    }
    // Fallback advice if the plant type is unrecognised
    else {
        return "No advice for this type of plant.";
    }
}

/**
 * Prompt the user to input the current season.
 * The input is converted to lowercase to ensure consistent comparisons.
 */
let season = prompt("Enter the season (summer/winter):").toLowerCase();

/**
 * Prompt the user to input the plant type.
 * The input is converted to lowercase to avoid case-sensitivity issues.
 */
let plantType = prompt("Enter plant type (flower/vegetable):").toLowerCase();

/**
 * Combine the advice returned from both functions into a single message.
 * This keeps output logic separate from decision-making logic.
 */
let advice = getSeasonAdvice(season) + getPlantAdvice(plantType);

/**
 * Output the final gardening advice to the browser console.
 */
console.log(advice);
