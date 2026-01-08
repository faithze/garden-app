/**
 * Returns gardening advice based on the season.
 * @param {string} season
 * @returns {string}
 */
function getSeasonAdvice(season) {
    if (season === "summer") {
        return "Water your plants regularly and provide some shade.\n";
    } else if (season === "winter") {
        return "Protect your plants from frost with covers.\n";
    } else {
        return "No advice for this season.\n";
    }
}

/**
 * Returns gardening advice based on the plant type.
 * @param {string} plantType
 * @returns {string}
 */
function getPlantAdvice(plantType) {
    if (plantType === "flower") {
        return "Use fertiliser to encourage blooms.";
    } else if (plantType === "vegetable") {
        return "Keep an eye out for pests!";
    } else {
        return "No advice for this type of plant.";
    }
}

// Hardcoded values remain for Issue 1
let season = "summer";
let plantType = "flower";

// Combine advice
let advice = getSeasonAdvice(season) + getPlantAdvice(plantType);

// Output advice
console.log(advice);
