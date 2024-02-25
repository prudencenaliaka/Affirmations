// List of positive affirmations
const affirmations = [
    "You got it figured out",
    "You are capable of amazing things.",
    "You are a unique and valuable individual, with your own gifts and talents to offer the world.",
    "You are a source of strength and inspiration for your community.",
    "Today, you’ll do your best to stay in the present moment, and you won’t worry about the future. ", 
    "You are full of vitality. Your confidence, positive attitude, and self-belief are your biggest assets to take you a step closer to your success. ",
    "You are turning DOWN the volume of negativity in your life, while simultaneously turning UP the volume of positivity. ",
    "Through the power of your thoughts and words, incredible transformations are happening in you and within your life right now.",
    "Whatever you do,you will give it 100 percent of your energy ",
    "You possess the qualities needed to be extremely successful, and you have the confidence to apply those skills in ways that will enable your success.",
    "Not everything will be easy drew, but you will persevere because your goals are worth pursuing. ",
    "Progress is to make small steps towards big goals. ",
    "You are self sufficient",
    "You don’t compare yourself to others. The only person you compare yourself to is the person you were yesterday. And as long as the person you are today is even the tiniest bit better than the person you were yesterday—You are meeting your own definition of success.",
    "What you have done today was the best you were able to do today. And for that, you are thankful.",
    "Every day is a new opportunity.",
    "You are worthy of love and happiness.",
    "You are stronger than you think.",
    "You are making a difference in the world.",
    "You are enough just as you are.",
    "You have the power to create change.",
    "Your potential is limitless.",
    "You are surrounded by love and support.",
    "You are on the right path."
];

function generateRandomIndex() {
    return Math.floor(Math.random() * affirmations.length);
}

function generateAffirmation() {
    var affirmationElement = document.getElementById("affirmation");
    var randomIndex = generateRandomIndex();
    affirmationElement.textContent = affirmations[randomIndex];
}

// Initial generation of affirmation when the page loads
generateAffirmation();
