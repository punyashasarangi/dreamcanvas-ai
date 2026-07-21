const generateBtn = document.getElementById("generateBtn");
const loading = document.getElementById("loading");
const result = document.getElementById("result");
const promptInput = document.getElementById("prompt");
const generatedImage = document.getElementById("generatedImage");


generateBtn.addEventListener("click", () => {

    const prompt = promptInput.value.trim();

    if (prompt === "") {
        alert("Please enter a prompt.");
        return;
    }

    // Show loading section
    loading.style.display = "block";

    // Hide previous result
    result.style.display = "none";

    // Create AI image URL
    const imageURL = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;

    // When the image is completely loaded
    generatedImage.onload = () => {
        loading.style.display = "none";
        result.style.display = "block";
    };

    // If something goes wrong while loading
    generatedImage.onerror = () => {
        loading.style.display = "none";
        alert("Failed to generate the image. Please try again.");
    };

    // Start generating the image
    generatedImage.src = imageURL;

});


const shareBtn = document.getElementById("shareBtn");

shareBtn.addEventListener("click", () => {

    if (navigator.share) {

        navigator.share({
            title: "DreamCanvas AI",
            text: "Check out this AI-generated image!",
            url: generatedImage.src
        });

    } else {

        alert("Sharing is not supported on this browser.");

    }

});

downloadBtn.addEventListener("click", () => {
    alert("Download feature will be available in future updates.");
});

saveBtn.addEventListener("click", () => {
    alert("Save feature will be available in future updates.");
});