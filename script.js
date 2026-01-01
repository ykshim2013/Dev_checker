// Developmental milestones based on CDC "Learn the Signs. Act Early" guidelines
// Source: https://www.cdc.gov/ncbddd/actearly/milestones/index.html
const milestones = [
    {
        ageRange: "2 months",
        minMonths: 0,
        maxMonths: 2,
        categories: {
            "Social & Emotional": [
                "Calms down when spoken to or picked up",
                "Looks at your face",
                "Seems happy to see you when you walk up to them",
                "Smiles when you talk to or smile at them"
            ],
            "Language & Communication": [
                "Makes sounds other than crying",
                "Reacts to loud sounds"
            ],
            "Cognitive": [
                "Watches you as you move",
                "Looks at a toy for several seconds"
            ],
            "Motor Skills": [
                "Holds head up when on tummy",
                "Moves both arms and both legs",
                "Briefly opens fingers when hand is relaxed"
            ]
        }
    },
    {
        ageRange: "4 months",
        minMonths: 3,
        maxMonths: 5,
        categories: {
            "Social & Emotional": [
                "Smiles on their own to get your attention",
                "Chuckles (not yet a full laugh) when you try to make them laugh",
                "Looks at you, moves, or makes sounds to get or keep your attention"
            ],
            "Language & Communication": [
                "Makes sounds like 'oooo', 'aahh' (cooing)",
                "Makes sounds back when you talk to them",
                "Turns head towards the sound of your voice"
            ],
            "Cognitive": [
                "If hungry, opens mouth when they see breast or bottle",
                "Looks at their hands with interest"
            ],
            "Motor Skills": [
                "Holds head steady without support when you are holding them",
                "Holds a toy when you put it in their hand",
                "Uses their arm to swing at toys",
                "Brings hands to mouth",
                "Pushes up onto elbows/forearms when on tummy"
            ]
        }
    },
    {
        ageRange: "6 months",
        minMonths: 5,
        maxMonths: 7,
        categories: {
            "Social & Emotional": [
                "Knows familiar people",
                "Likes to look at self in a mirror",
                "Laughs"
            ],
            "Language & Communication": [
                "Takes turns making sounds with you",
                "Blows 'raspberries' (sticks tongue out and blows)",
                "Makes squealing noises"
            ],
            "Cognitive": [
                "Puts things in their mouth to explore them",
                "Reaches to grab a toy they want",
                "Closes lips to show they don't want more food"
            ],
            "Motor Skills": [
                "Rolls from tummy to back",
                "Pushes up with straight arms when on tummy",
                "Leans on hands to support themselves when sitting"
            ]
        }
    },
    {
        ageRange: "9 months",
        minMonths: 8,
        maxMonths: 10,
        categories: {
            "Social & Emotional": [
                "Is shy, clingy, or fearful around strangers",
                "Shows several facial expressions, like happy, sad, angry, and surprised",
                "Looks when you call their name",
                "Reacts when you leave (looks, reaches for you, or cries)",
                "Smiles or laughs when you play peek-a-boo"
            ],
            "Language & Communication": [
                "Makes different sounds like 'mamamama' and 'bababababa'",
                "Lifts arms up to be picked up"
            ],
            "Cognitive": [
                "Looks for objects when dropped out of sight (like their spoon or toy)",
                "Bangs two things together"
            ],
            "Motor Skills": [
                "Gets to a sitting position by themselves",
                "Moves things from one hand to their other hand",
                "Uses fingers to 'rake' food towards themselves",
                "Sits without support"
            ]
        }
    },
    {
        ageRange: "12 months (1 year)",
        minMonths: 11,
        maxMonths: 13,
        categories: {
            "Social & Emotional": [
                "Plays games with you, like pat-a-cake"
            ],
            "Language & Communication": [
                "Waves 'bye-bye'",
                "Calls a parent 'mama' or 'dada' or another special name",
                "Understands 'no' (pauses briefly or stops when you say it)"
            ],
            "Cognitive": [
                "Puts something in a container, like a block in a cup",
                "Looks for things they see you hide, like a toy under a blanket"
            ],
            "Motor Skills": [
                "Pulls up to stand",
                "Walks, holding on to furniture",
                "Drinks from a cup without a lid, as you hold it",
                "Picks things up between thumb and pointer finger, like small bits of food"
            ]
        }
    },
    {
        ageRange: "15 months",
        minMonths: 14,
        maxMonths: 16,
        categories: {
            "Social & Emotional": [
                "Copies other children while playing, like taking toys out of a container when another child does",
                "Shows you an object they like",
                "Claps when excited",
                "Hugs stuffed doll or other toy",
                "Shows you affection (hugs, cuddles, or kisses you)"
            ],
            "Language & Communication": [
                "Tries to say one or two words besides 'mama' or 'dada', like 'ba' for ball or 'da' for dog",
                "Looks at a familiar object when you name it",
                "Follows directions given with both a gesture and words",
                "Points to ask for something or to get help"
            ],
            "Cognitive": [
                "Tries to use things the right way, like a phone, cup, or book",
                "Stacks at least two small objects, like blocks"
            ],
            "Motor Skills": [
                "Takes a few steps on their own",
                "Uses fingers to feed themselves some food"
            ]
        }
    },
    {
        ageRange: "18 months",
        minMonths: 17,
        maxMonths: 20,
        categories: {
            "Social & Emotional": [
                "Moves away from you, but looks to make sure you are close by",
                "Points to show you something interesting",
                "Puts hands out for you to wash them",
                "Looks at a few pages in a book with you",
                "Helps you dress them by pushing arm through sleeve or lifting up foot"
            ],
            "Language & Communication": [
                "Tries to say three or more words besides 'mama' or 'dada'",
                "Follows one-step directions without any gestures, like giving you the toy when you say 'Give it to me'"
            ],
            "Cognitive": [
                "Copies you doing chores, like sweeping with a broom",
                "Plays with toys in a simple way, like pushing a toy car"
            ],
            "Motor Skills": [
                "Walks without holding on to anyone or anything",
                "Scribbles",
                "Drinks from a cup without a lid, as you hold it",
                "Feeds themselves with their fingers",
                "Tries to use a spoon",
                "Climbs on and off a couch or chair without help"
            ]
        }
    },
    {
        ageRange: "2 years",
        minMonths: 21,
        maxMonths: 27,
        categories: {
            "Social & Emotional": [
                "Notices when others are hurt or upset, like pausing or looking sad when someone is crying",
                "Looks at your face to see how to react in a new situation"
            ],
            "Language & Communication": [
                "Points to things in a book when you ask, like 'Where is the bear?'",
                "Says at least two words together, like 'More milk'",
                "Points to at least two body parts when you ask them to show you",
                "Uses more gestures than just waving and pointing, like blowing a kiss or nodding yes"
            ],
            "Cognitive": [
                "Holds something in one hand while using the other hand; for example, holding a container and taking the lid off",
                "Tries to use switches, knobs, or buttons on a toy",
                "Plays with more than one toy at the same time, like putting toy food on a toy plate"
            ],
            "Motor Skills": [
                "Kicks a ball",
                "Runs",
                "Walks (not climbs) up a few stairs with or without help",
                "Eats with a spoon"
            ]
        }
    },
    {
        ageRange: "30 months (2.5 years)",
        minMonths: 28,
        maxMonths: 33,
        categories: {
            "Social & Emotional": [
                "Plays next to other children and sometimes plays with them",
                "Shows you what they can do by saying, 'Look at me!'",
                "Follows simple routines when told, like helping to pick up toys when you say, 'It's clean-up time'"
            ],
            "Language & Communication": [
                "Says about 50 words",
                "Says two or more words together, with one action word, like 'Doggie run'",
                "Names things in a book when you point and ask, 'What is this?'",
                "Says words like 'I,' 'me,' or 'we'"
            ],
            "Cognitive": [
                "Uses things to pretend, like feeding a block to a doll as if it were food",
                "Shows simple problem-solving skills, like standing on a small stool to reach something",
                "Follows two-step instructions such as 'Put the toy down and close the door'",
                "Shows they know at least one color, like pointing to a red crayon when you ask, 'Which one is red?'"
            ],
            "Motor Skills": [
                "Uses hands to twist things, like turning doorknobs or unscrewing lids",
                "Takes some clothes off by themselves, like loose pants or an open jacket",
                "Jumps off the ground with both feet",
                "Turns book pages, one at a time, when you read to them"
            ]
        }
    },
    {
        ageRange: "3 years",
        minMonths: 34,
        maxMonths: 42,
        categories: {
            "Social & Emotional": [
                "Calms down within 10 minutes after you leave them, like at a childcare drop off",
                "Notices other children and joins them to play"
            ],
            "Language & Communication": [
                "Talks with you in conversation using at least two back-and-forth exchanges",
                "Asks 'who,' 'what,' 'where,' or 'why' questions, like 'Where is mommy/daddy?'",
                "Says what action is happening in a picture or book when asked, like 'running,' 'eating,' or 'playing'",
                "Says first name, when asked",
                "Talks well enough for others to understand, most of the time"
            ],
            "Cognitive": [
                "Draws a circle, when you show them how",
                "Avoids touching hot objects, like a stove, when you warn them"
            ],
            "Motor Skills": [
                "Strings items together, like large beads or macaroni",
                "Puts on some clothes by themselves, like loose pants or a jacket",
                "Uses a fork"
            ]
        }
    },
    {
        ageRange: "4 years",
        minMonths: 43,
        maxMonths: 54,
        categories: {
            "Social & Emotional": [
                "Pretends to be something else during play (teacher, superhero, dog)",
                "Asks to go play with children if none are around, like 'Can I play with Alex?'",
                "Comforts others who are hurt or sad, like hugging a crying friend",
                "Avoids danger, like not jumping from tall heights at the playground",
                "Likes to be a 'helper'",
                "Changes behavior based on where they are (place of worship, library, playground)"
            ],
            "Language & Communication": [
                "Says sentences with four or more words",
                "Says some words from a song, story, or nursery rhyme",
                "Talks about at least one thing that happened during their day, like 'I played soccer'",
                "Answers simple questions like 'What is a coat for?' or 'What is a crayon for?'"
            ],
            "Cognitive": [
                "Names a few colors of items",
                "Tells what comes next in a well-known story",
                "Draws a person with three or more body parts"
            ],
            "Motor Skills": [
                "Catches a large ball most of the time",
                "Serves themselves food or pours water, with adult supervision",
                "Unbuttons some buttons",
                "Holds crayon or pencil between fingers and thumb (not a fist)"
            ]
        }
    },
    {
        ageRange: "5 years",
        minMonths: 55,
        maxMonths: 72,
        categories: {
            "Social & Emotional": [
                "Follows rules or takes turns when playing games with other children",
                "Sings, dances, or acts for you",
                "Does simple chores at home, like matching socks or clearing the table after eating"
            ],
            "Language & Communication": [
                "Tells a story they heard or made up with at least two events",
                "Answers simple questions about a book or story after you read or tell it to them",
                "Keeps a conversation going with more than three back-and-forth exchanges",
                "Uses or recognizes simple rhymes (bat-cat, ball-tall)"
            ],
            "Cognitive": [
                "Counts to 10",
                "Names some numbers between 1 and 5 when you point to them",
                "Uses words about time, like 'yesterday,' 'tomorrow,' 'morning,' or 'night'",
                "Pays attention for 5 to 10 minutes during activities",
                "Writes some letters in their name",
                "Names some letters when you point to them"
            ],
            "Motor Skills": [
                "Buttons some buttons",
                "Hops on one foot"
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
        showError(t('error-valid-age'));
        return;
    }

    // Convert to months
    let ageInMonths = age;
    if (unit === 'years') {
        ageInMonths = age * 12;
    }

    // Validate age range
    if (ageInMonths > 72) {
        showError(t('error-age-limit'));
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

        let ageDisplay = `${originalAge} ${t('option-' + unit)}`;

        const heading = document.createElement('h2');
        heading.textContent = t('developmental-milestones');

        const ageRange = document.createElement('div');
        ageRange.className = 'age-range';
        ageRange.textContent = `${t('age')}: ${ageDisplay} (${milestone.ageRange})`;

        card.appendChild(heading);
        card.appendChild(ageRange);

        // Add each category
        for (const [categoryName, items] of Object.entries(milestone.categories)) {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'milestone-category';

            const categoryHeading = document.createElement('h3');
            categoryHeading.textContent = getCategoryIcon(categoryName) + ' ' + t(categoryName);

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
            <p>${t('no-milestones-found')}</p>
        </div>
    `;
}

// Initialize - focus on input
ageInput.focus();

// ==================== LANGUAGE SWITCHING ====================

// Update all text elements with translations
function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = t(key, lang);
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = t(key, lang);
    });

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Clear results to avoid showing mixed languages
    resultsDiv.innerHTML = '';
    const milestoneResults = document.getElementById('milestone-results');
    if (milestoneResults) {
        milestoneResults.innerHTML = '';
    }
}

// Language button click handlers
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        updateLanguage(lang);
    });
});

// Initialize language on page load
updateLanguage(currentLanguage);

// ==================== REVERSE MILESTONE LOOKUP ====================

// Build reverse lookup: milestone text -> age info
const milestoneMap = new Map();

milestones.forEach(ageGroup => {
    for (const [category, items] of Object.entries(ageGroup.categories)) {
        items.forEach(milestoneText => {
            const key = milestoneText.toLowerCase();
            if (!milestoneMap.has(key)) {
                milestoneMap.set(key, {
                    text: milestoneText,
                    ageRange: ageGroup.ageRange,
                    minMonths: ageGroup.minMonths,
                    maxMonths: ageGroup.maxMonths,
                    category: category
                });
            }
        });
    }
});

// Get all milestone texts for autocomplete
const allMilestoneTexts = Array.from(milestoneMap.values()).map(m => m.text);

// Tab switching
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');

        // Update active states
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});

// Milestone lookup elements
const milestoneInput = document.getElementById('milestone-input');
const milestoneSuggestions = document.getElementById('milestone-suggestions');
const achievedAgeInput = document.getElementById('achieved-age');
const achievedUnitSelect = document.getElementById('achieved-unit');
const checkMilestoneBtn = document.getElementById('check-milestone-btn');
const milestoneResultsDiv = document.getElementById('milestone-results');

// Check if all elements exist before adding event listeners
if (!milestoneInput || !milestoneSuggestions || !achievedAgeInput || !achievedUnitSelect || !checkMilestoneBtn || !milestoneResultsDiv) {
    console.error('Milestone lookup elements not found:', {
        milestoneInput: !!milestoneInput,
        milestoneSuggestions: !!milestoneSuggestions,
        achievedAgeInput: !!achievedAgeInput,
        achievedUnitSelect: !!achievedUnitSelect,
        checkMilestoneBtn: !!checkMilestoneBtn,
        milestoneResultsDiv: !!milestoneResultsDiv
    });
} else {
    // Autocomplete functionality
    milestoneInput.addEventListener('input', () => {
    const searchText = milestoneInput.value.toLowerCase().trim();

    if (searchText.length < 2) {
        milestoneSuggestions.classList.remove('active');
        milestoneSuggestions.innerHTML = '';
        return;
    }

    // Find matching milestones
    const matches = allMilestoneTexts.filter(text =>
        text.toLowerCase().includes(searchText)
    ).slice(0, 10); // Limit to 10 suggestions

    if (matches.length > 0) {
        milestoneSuggestions.innerHTML = matches.map(text =>
            `<div class="suggestion-item">${text}</div>`
        ).join('');
        milestoneSuggestions.classList.add('active');

        // Add click handlers to suggestions
        milestoneSuggestions.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                milestoneInput.value = item.textContent;
                milestoneSuggestions.classList.remove('active');
            });
        });
    } else {
        milestoneSuggestions.classList.remove('active');
    }
});

// Close suggestions when clicking outside
document.addEventListener('click', (e) => {
    if (!milestoneInput.contains(e.target) && !milestoneSuggestions.contains(e.target)) {
        milestoneSuggestions.classList.remove('active');
    }
});

// Check milestone button
checkMilestoneBtn.addEventListener('click', checkMilestoneAge);
milestoneInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkMilestoneAge();
    }
});

function checkMilestoneAge() {
    const searchText = milestoneInput.value.trim();

    if (!searchText) {
        showMilestoneError(t('error-enter-milestone'));
        return;
    }

    // Find the milestone
    const milestoneKey = searchText.toLowerCase();
    let milestoneInfo = milestoneMap.get(milestoneKey);

    // If exact match not found, try partial match
    if (!milestoneInfo) {
        const partialMatches = Array.from(milestoneMap.entries())
            .filter(([key]) => key.includes(milestoneKey));

        if (partialMatches.length === 1) {
            milestoneInfo = partialMatches[0][1];
        } else if (partialMatches.length > 1) {
            showMilestoneError(t('error-multiple-found'));
            return;
        } else {
            showMilestoneError(t('error-not-found'));
            return;
        }
    }

    // Get achieved age if provided
    const achievedAge = parseFloat(achievedAgeInput.value);
    const achievedUnit = achievedUnitSelect.value;

    displayMilestoneInfo(milestoneInfo, achievedAge, achievedUnit);
}

function displayMilestoneInfo(milestoneInfo, achievedAge, achievedUnit) {
    milestoneResultsDiv.innerHTML = '';

    const card = document.createElement('div');
    card.className = 'milestone-card';

    const heading = document.createElement('h2');
    heading.textContent = milestoneInfo.text;

    const category = document.createElement('div');
    category.className = 'age-range';
    category.textContent = `${getCategoryIcon(milestoneInfo.category)} ${t(milestoneInfo.category)}`;

    const ageInfo = document.createElement('div');
    ageInfo.className = 'comparison-info';

    const typicalMinMonths = milestoneInfo.minMonths;
    const typicalMaxMonths = milestoneInfo.maxMonths;
    const avgMonths = (typicalMinMonths + typicalMaxMonths) / 2;

    ageInfo.innerHTML = `
        <strong>${t('typical-age-range')}:</strong> ${milestoneInfo.ageRange}
        (${typicalMinMonths}-${typicalMaxMonths} ${t('months')})
    `;

    card.appendChild(heading);
    card.appendChild(category);
    card.appendChild(ageInfo);

    // If achieved age is provided, add comparison
    if (achievedAge && achievedAge > 0) {
        let achievedMonths = achievedAge;
        if (achievedUnit === 'years') {
            achievedMonths = achievedAge * 12;
        }

        const comparison = document.createElement('div');
        comparison.className = 'comparison-info';

        let status = '';
        let statusClass = '';
        let message = '';

        // Calculate difference
        const diffFromAvg = achievedMonths - avgMonths;
        const diffFromMax = achievedMonths - typicalMaxMonths;

        if (achievedMonths <= typicalMaxMonths) {
            // Within or before typical range
            if (achievedMonths < typicalMinMonths) {
                status = t('status-early');
                statusClass = 'status-early';
                const monthsEarly = typicalMinMonths - achievedMonths;
                message = `${t('achieved')} ${monthsEarly.toFixed(1)} ${t('month(s)')} ${t('earlier-than-typical')}.`;
            } else {
                status = t('status-on-track');
                statusClass = 'status-on-track';
                message = t('within-typical-range');
            }
        } else {
            // After typical range
            const monthsLate = achievedMonths - typicalMaxMonths;

            if (monthsLate <= 3) {
                status = t('status-delayed');
                statusClass = 'status-delayed';
                message = `${t('achieved')} ${monthsLate.toFixed(1)} ${t('month(s)')} ${t('after-typical-range')}`;
            } else {
                status = t('status-concern');
                statusClass = 'status-concern';
                message = `${t('achieved')} ${monthsLate.toFixed(1)} ${t('month(s)')} ${t('after-typical-concern')}`;
            }
        }

        comparison.innerHTML = `
            <strong>${t('age-achieved')}:</strong> ${achievedAge} ${t('option-' + achievedUnit)} (${achievedMonths} ${t('months')})<br>
            <div class="status-badge ${statusClass}">${status}</div>
            <p style="margin-top: 10px;">${message}</p>
        `;

        card.appendChild(comparison);
    } else {
        const hint = document.createElement('div');
        hint.className = 'comparison-info';
        hint.innerHTML = `<em>${t('tip-enter-age')}</em>`;
        card.appendChild(hint);
    }

    milestoneResultsDiv.appendChild(card);
}

function showMilestoneError(message) {
    milestoneResultsDiv.innerHTML = `
        <div class="error-message">
            <strong>Error:</strong> ${message}
        </div>
    `;
}

// Close the else block for milestone elements check
}
