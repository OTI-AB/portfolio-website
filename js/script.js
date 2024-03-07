// Add custom JavaScript here
function runTypingEffect() {
	const text = 'My name is Phillip.';
	const typingEl = document.getElementById('typing-text');
	const typingDelay = 100;

	typeText(text, typingEl, typingDelay);
}

function typeText(text, typingEl, typingDelay) {
	for (let i = 0; i < text.length; i++) {
		setTimeout(() => {
			typingEl.textContent += text.charAt(i);
		}, typingDelay * i);
	}
}

document.addEventListener('DOMContentLoaded', runTypingEffect);
