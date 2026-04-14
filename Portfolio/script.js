document.addEventListener('DOMContentLoaded', () => {
    
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const body = document.body;

    // The reveal function
    const revealMainContent = () => {
        // 1. Start the animation for the splash screen to slide up
        splashScreen.classList.add('reveal');
        
        // 2. Start the animation to fade in the main content
        mainContent.classList.add('reveal');
        
        // 3. Optional: Restore scrolling behavior to the body (if needed later)
        // setTimeout(() => {
        //     body.style.overflow = 'auto'; 
        // }, 1000); // Wait for the transition duration
    };

    // --- Interaction Points ---

    // A. Trigger reveal when the user clicks anywhere on the yellow screen
    splashScreen.addEventListener('click', revealMainContent);

    // B. (Optional) Trigger reveal automatically after a specific delay (e.g., 3 seconds)
    // setTimeout(revealMainContent, 3500); // Trigger after the text fades in
});