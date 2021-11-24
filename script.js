let topics = ['mobile app','website','product']
// The index of the currently selected letter from each word
let index = 0;
// The index of the currently selected word from topics
let currentIndex =0;
// Typing text element
const typingText = document.querySelector('.typing-text')
setTimeout(() => {
    setInterval(() => {
       
        if(index === topics[currentIndex].length - 1){
            index = 0;
            currentIndex++;
        }
        if(currentIndex === topics.length){
            currentIndex = 0;
        }

        typingText.textContent = topics[currentIndex].slice(0,++index)
    }, 200);    
}, 1000);
