// Comprehensive developmental milestones database
const milestones = [
    {
        ageRange: "2 months",
        minMonths: 0,
        maxMonths: 2,
        categories: {
            "Social & Emotional": [
                "Begins to smile at people",
                "Can briefly calm themselves (may bring hands to mouth)",
                "Tries to look at parent"
            ],
            "Language & Communication": [
                "Coos and makes gurgling sounds",
                "Turns head toward sounds"
            ],
            "Cognitive": [
                "Pays attention to faces",
                "Begins to follow things with eyes",
                "Recognizes people at a distance"
            ],
            "Motor Skills": [
                "Can hold head up",
                "Begins to push up when lying on tummy",
                "Makes smoother movements with arms and legs"
            ]
        }
    },
    {
        ageRange: "4 months",
        minMonths: 3,
        maxMonths: 5,
        categories: {
            "Social & Emotional": [
                "Smiles spontaneously, especially at people",
                "Likes to play with people",
                "Copies some movements and facial expressions"
            ],
            "Language & Communication": [
                "Begins to babble",
                "Babbles with expression and copies sounds heard",
                "Cries in different ways to show hunger, pain, or being tired"
            ],
            "Cognitive": [
                "Lets you know if they are happy or sad",
                "Responds to affection",
                "Reaches for toy with one hand",
                "Uses hands and eyes together"
            ],
            "Motor Skills": [
                "Holds head steady, unsupported",
                "Pushes down on legs when feet are on a hard surface",
                "May be able to roll over from tummy to back",
                "Can hold a toy and shake it"
            ]
        }
    },
    {
        ageRange: "6 months",
        minMonths: 5,
        maxMonths: 7,
        categories: {
            "Social & Emotional": [
                "Knows familiar faces and begins to know if someone is a stranger",
                "Likes to play with others, especially parents",
                "Responds to other people's emotions",
                "Likes to look at self in a mirror"
            ],
            "Language & Communication": [
                "Responds to sounds by making sounds",
                "Strings vowels together when babbling",
                "Responds to own name",
                "Makes sounds to show joy and displeasure"
            ],
            "Cognitive": [
                "Looks around at things nearby",
                "Brings things to mouth",
                "Shows curiosity and tries to get things that are out of reach",
                "Begins to pass things from one hand to the other"
            ],
            "Motor Skills": [
                "Rolls over in both directions",
                "Begins to sit without support",
                "Supports weight on legs and might bounce",
                "Rocks back and forth"
            ]
        }
    },
    {
        ageRange: "9 months",
        minMonths: 8,
        maxMonths: 10,
        categories: {
            "Social & Emotional": [
                "May be afraid of strangers",
                "May be clingy with familiar adults",
                "Has favorite toys"
            ],
            "Language & Communication": [
                "Understands 'no'",
                "Makes many different sounds like 'mamamama' and 'bababababa'",
                "Copies sounds and gestures of others",
                "Uses fingers to point at things"
            ],
            "Cognitive": [
                "Watches the path of something as it falls",
                "Looks for things they see you hide",
                "Plays peek-a-boo",
                "Puts things in mouth"
            ],
            "Motor Skills": [
                "Stands, holding on",
                "Can get into sitting position",
                "Sits without support",
                "Pulls to stand",
                "Crawls"
            ]
        }
    },
    {
        ageRange: "12 months (1 year)",
        minMonths: 11,
        maxMonths: 13,
        categories: {
            "Social & Emotional": [
                "Is shy or nervous with strangers",
                "Cries when parent leaves",
                "Has favorite things and people",
                "Shows fear in some situations",
                "Hands you a book when wanting to hear a story"
            ],
            "Language & Communication": [
                "Responds to simple spoken requests",
                "Uses simple gestures, like shaking head 'no' or waving 'bye-bye'",
                "Makes sounds with changes in tone",
                "Says 'mama' and 'dada' and exclamations like 'uh-oh!'",
                "Tries to say words you say"
            ],
            "Cognitive": [
                "Explores things in different ways",
                "Finds hidden things easily",
                "Looks at the right picture or thing when it's named",
                "Copies gestures",
                "Puts things in and takes things out of containers"
            ],
            "Motor Skills": [
                "Gets to a sitting position without help",
                "Pulls up to stand, walks holding on to furniture",
                "May take a few steps without holding on",
                "May stand alone"
            ]
        }
    },
    {
        ageRange: "18 months",
        minMonths: 14,
        maxMonths: 20,
        categories: {
            "Social & Emotional": [
                "Likes to hand things to others as play",
                "May have temper tantrums",
                "May be afraid of strangers",
                "Shows affection to familiar people",
                "Plays simple pretend games"
            ],
            "Language & Communication": [
                "Says several single words",
                "Says and shakes head 'no'",
                "Points to show someone what they want"
            ],
            "Cognitive": [
                "Knows what ordinary things are for",
                "Points to get the attention of others",
                "Shows interest in a doll or stuffed animal by pretending to feed",
                "Points to one body part",
                "Scribbles on their own"
            ],
            "Motor Skills": [
                "Walks alone",
                "May walk up steps and run",
                "Pulls toys while walking",
                "Can help undress themselves",
                "Drinks from a cup",
                "Eats with a spoon"
            ]
        }
    },
    {
        ageRange: "2 years",
        minMonths: 21,
        maxMonths: 30,
        categories: {
            "Social & Emotional": [
                "Copies others, especially adults and older children",
                "Gets excited when with other children",
                "Shows more and more independence",
                "Shows defiant behavior",
                "Plays mainly beside other children"
            ],
            "Language & Communication": [
                "Points to things or pictures when they are named",
                "Knows names of familiar people and body parts",
                "Says sentences with 2 to 4 words",
                "Follows simple instructions",
                "Repeats words overheard in conversation"
            ],
            "Cognitive": [
                "Finds things even when hidden under two or three covers",
                "Begins to sort shapes and colors",
                "Completes sentences and rhymes in familiar books",
                "Plays simple make-believe games",
                "Builds towers of 4 or more blocks"
            ],
            "Motor Skills": [
                "Stands on tiptoe",
                "Kicks a ball",
                "Begins to run",
                "Climbs onto and down from furniture without help",
                "Walks up and down stairs holding on",
                "Throws ball overhand"
            ]
        }
    },
    {
        ageRange: "3 years",
        minMonths: 31,
        maxMonths: 42,
        categories: {
            "Social & Emotional": [
                "Copies adults and friends",
                "Shows affection for friends without prompting",
                "Takes turns in games",
                "Shows concern for crying friend",
                "Understands the idea of 'mine' and 'his' or 'hers'",
                "Shows a wide range of emotions"
            ],
            "Language & Communication": [
                "Follows instructions with 2 or 3 steps",
                "Can name most familiar things",
                "Understands words like 'in,' 'on,' and 'under'",
                "Says first name, age, and sex",
                "Names a friend",
                "Uses pronouns (I, you, me, we, they)"
            ],
            "Cognitive": [
                "Can work toys with buttons, levers, and moving parts",
                "Plays make-believe with dolls, animals, and people",
                "Does puzzles with 3 or 4 pieces",
                "Understands what 'two' means",
                "Copies a circle with pencil or crayon",
                "Turns book pages one at a time"
            ],
            "Motor Skills": [
                "Climbs well",
                "Runs easily",
                "Pedals a tricycle",
                "Walks up and down stairs, one foot on each step"
            ]
        }
    },
    {
        ageRange: "4 years",
        minMonths: 43,
        maxMonths: 54,
        categories: {
            "Social & Emotional": [
                "Enjoys doing new things",
                "Plays 'Mom' and 'Dad'",
                "Is more and more creative with make-believe play",
                "Would rather play with other children than by themselves",
                "Cooperates with other children",
                "Talks about what they like and are interested in"
            ],
            "Language & Communication": [
                "Knows some basic rules of grammar",
                "Sings a song or says a poem from memory",
                "Tells stories",
                "Can say first and last name"
            ],
            "Cognitive": [
                "Names some colors and some numbers",
                "Understands the idea of counting",
                "Starts to understand time",
                "Remembers parts of a story",
                "Understands the idea of 'same' and 'different'",
                "Draws a person with 2 to 4 body parts"
            ],
            "Motor Skills": [
                "Hops and stands on one foot up to 2 seconds",
                "Catches a bounced ball most of the time",
                "Pours, cuts with supervision, and mashes own food"
            ]
        }
    },
    {
        ageRange: "5 years",
        minMonths: 55,
        maxMonths: 72,
        categories: {
            "Social & Emotional": [
                "Wants to please friends",
                "Wants to be like friends",
                "More likely to agree with rules",
                "Likes to sing, dance, and act",
                "Is aware of gender",
                "Can tell what's real and what's make-believe"
            ],
            "Language & Communication": [
                "Speaks very clearly",
                "Tells a simple story using full sentences",
                "Uses future tense",
                "Says name and address"
            ],
            "Cognitive": [
                "Counts 10 or more things",
                "Can draw a person with at least 6 body parts",
                "Can print some letters or numbers",
                "Copies a triangle and other geometric shapes",
                "Knows about things used every day, like money and food"
            ],
            "Motor Skills": [
                "Stands on one foot for 10 seconds or longer",
                "Hops and may be able to skip",
                "Can do a somersault",
                "Uses a fork and spoon and sometimes a table knife",
                "Can use the toilet on their own"
            ]
        }
    }
];

// Get references to DOM elements
const ageInput = document.getElementById('age-input');
const unitSelect = document.getElementById('unit-select');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results');

// Event listeners
checkBtn.addEventListener('click', checkMilestones);
ageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkMilestones();
    }
});

function checkMilestones() {
    const age = parseFloat(ageInput.value);
    const unit = unitSelect.value;

    // Validate input
    if (!age || age < 0) {
        showError('Please enter a valid age.');
        return;
    }

    // Convert to months
    let ageInMonths = age;
    if (unit === 'years') {
        ageInMonths = age * 12;
    }

    // Validate age range
    if (ageInMonths > 72) {
        showError('This tool covers developmental milestones up to 6 years (72 months).');
        return;
    }

    // Find matching milestones
    const matchingMilestones = milestones.filter(milestone =>
        ageInMonths >= milestone.minMonths && ageInMonths <= milestone.maxMonths
    );

    if (matchingMilestones.length === 0) {
        showNoResults();
        return;
    }

    displayMilestones(matchingMilestones, ageInMonths, unit, age);
}

function displayMilestones(matchingMilestones, ageInMonths, unit, originalAge) {
    resultsDiv.innerHTML = '';

    matchingMilestones.forEach(milestone => {
        const card = document.createElement('div');
        card.className = 'milestone-card';

        let ageDisplay = `${originalAge} ${unit}`;

        const heading = document.createElement('h2');
        heading.textContent = 'Developmental Milestones';

        const ageRange = document.createElement('div');
        ageRange.className = 'age-range';
        ageRange.textContent = `Age: ${ageDisplay} (${milestone.ageRange})`;

        card.appendChild(heading);
        card.appendChild(ageRange);

        // Add each category
        for (const [categoryName, items] of Object.entries(milestone.categories)) {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'milestone-category';

            const categoryHeading = document.createElement('h3');
            categoryHeading.textContent = getCategoryIcon(categoryName) + ' ' + categoryName;

            const itemsList = document.createElement('ul');
            items.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                itemsList.appendChild(li);
            });

            categoryDiv.appendChild(categoryHeading);
            categoryDiv.appendChild(itemsList);
            card.appendChild(categoryDiv);
        }

        resultsDiv.appendChild(card);
    });
}

function getCategoryIcon(categoryName) {
    const icons = {
        'Social & Emotional': '😊',
        'Language & Communication': '💬',
        'Cognitive': '🧠',
        'Motor Skills': '🏃'
    };
    return icons[categoryName] || '📋';
}

function showError(message) {
    resultsDiv.innerHTML = `
        <div class="error-message">
            <strong>Error:</strong> ${message}
        </div>
    `;
}

function showNoResults() {
    resultsDiv.innerHTML = `
        <div class="no-results">
            <p>No milestones found for this age range.</p>
        </div>
    `;
}

// Initialize - focus on input
ageInput.focus();
