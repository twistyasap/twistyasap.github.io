document.addEventListener('DOMContentLoaded', () => {
    const userName = document.querySelector('.user-name');
    const sparkleCount = 5; 

    const userNameRect = userName.getBoundingClientRect(); 

    for (let i = 0; i < sparkleCount; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            
          
            const x = Math.random() * userNameRect.width; 
            const y = Math.random() * userNameRect.height;
            
            sparkle.style.left = `${x}px`;
            sparkle.style.top = `${y}px`;
            
            userName.appendChild(sparkle);
        }, Math.random() * 2000); 
    } 
}); 