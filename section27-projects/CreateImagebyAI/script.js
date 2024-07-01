document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const promptInput = document.getElementById('prompt-input');
    const imagesContainer = document.getElementById('images');

    generateBtn.addEventListener('click', generateImage);
    promptInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') generateImage();
    });

    async function generateImage() {
        const prompt = promptInput.value.trim();
        if (!prompt) return;
        
        promptInput.disabled = true; // Wyłącza input podczas generowania obrazka 

        const Api = "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";

        const HFInference = (
            await import("https://cdn.skypack.dev/@huggingface/inference@2.0.0")
        ).HfInference;

        const hf = new HFInference(Api);
        
        try {
            const blob = await hf.textToImage({
                inputs: prompt,
                parameters: {negative_prompt: "easynegative"},
                model: "prompthero/openjourney-v4",
            });
            
            const imageUrl = URL.createObjectURL(blob);
            displayImage(imageUrl, prompt); 
        } catch (error) {
            console.error('Error generating image:', error);
        } finally {
            promptInput.disabled = false; 
            promptInput.value = ''; 
        }
    }

    function displayImage(imageUrl, prompt) {
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');
        
        const img = document.createElement('img');
        img.src = imageUrl;

        const promptText = document.createElement('div');
        promptText.classList.add('image-prompt');
        promptText.textContent = `Prompt: ${prompt}`;

        imageContainer.appendChild(img);
        imageContainer.appendChild(promptText);
        imagesContainer.appendChild(imageContainer);
    }
});



