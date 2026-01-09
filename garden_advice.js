/**
 * Returns gardening advice based on the season.
 */
function getSeasonAdvice(season) {
    if (season === "summer") {
        return "Water your plants regularly and provide some shade.\n";
    } else if (season === "winter") {
        return "Protect your plants from frost with covers.\n";
    }
    return "No advice for this season.\n";
}

/**
 * Returns gardening advice based on the plant type.
 */
function getPlantAdvice(plantType) {
    if (plantType === "flower") {
        return "Use fertiliser to encourage blooms.";
    } else if (plantType === "vegetable") {
        return "Keep an eye out for pests!";
    }
    return "No advice for this type of plant.";
}

// Get user input instead of hardcoded values
let season = prompt("Enter the season (summer/winter):").toLowerCase();
let plantType = prompt("Enter plant type (flower/vegetable):").toLowerCase();

// Combine advice from both functions
let advice = getSeasonAdvice(season) + getPlantAdvice(plantType);

// Output advice
console.log(advice);
