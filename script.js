document.addEventListener('DOMContentLoaded', () => {
    // Map team members to their designations
    const teamDesignations = {
        "Arnab Biswas": "FullStack Developer, 3D Animation,API Integration",
        "Rajdeep Das": "UX/UI, Frontend Developer",
        "Arya Kundu": "PPT-designer.",
        "Sayantani": "Researcher",
        "Prolay Mondal": "UX/UI-designer"
    };

    // Get the select element and the span
    const teamSelect = document.getElementById("team-members-select");
    const designationSpan = document.getElementById("designation");

    // Update span when selection changes
    teamSelect.addEventListener("change", () => {
        const selectedMember = teamSelect.value;
        designationSpan.textContent = teamDesignations[selectedMember] || "XXXXXX";
    });

    // Optionally, set initial designation on page load
    designationSpan.textContent = teamDesignations[teamSelect.value] || "XXXXXX";



    const simulateBtn = document.getElementById('simulate-btn');
    simulateBtn.addEventListener('click', () => {
        const sizeInput = document.getElementById('size-input');
        const velocityInput = document.getElementById('velocity-input');
        const simulationOutput = document.getElementById('simulation-output');

        const asteroidSize = parseFloat(sizeInput.value);
        const asteroidVelocity = parseFloat(velocityInput.value);

        if (isNaN(asteroidSize) || isNaN(asteroidVelocity)) {
            simulationOutput.innerHTML = `<p style="color: #ff4d4d;">Please enter valid numbers for both asteroid size and velocity.</p>`;
            return;
        }

        // Simple mock calculations
        const energy = 0.5 * asteroidSize * asteroidVelocity ** 2;
        const craterSize = 0.5 * Math.cbrt(energy);

        simulationOutput.innerHTML = `
            <p><strong>Asteroid Mass:</strong> ${asteroidSize.toLocaleString()} kg</p>
            <p><strong>Impact Velocity:</strong> ${asteroidVelocity.toLocaleString()} km/s</p>
            <hr style="border-color: #6e6e9bff;">
            <p>This is just a simple prediction 👇</p>
            <p><strong>Estimated Impact Energy:</strong> ${energy.toFixed(0)} megatons</p>
            <p><strong>Estimated Crater Size:</strong> ~${craterSize.toFixed(1)} km in diameter</p>
        `;
    });

});

