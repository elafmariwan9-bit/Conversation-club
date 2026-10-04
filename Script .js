// ======================================================
// THE CONVERSATION CLUB — SCRIPT.JS
// ======================================================

// ------------------------------
// STORAGE
// ------------------------------

const FAVORITES_KEY = "conversationClubFavorites";
const SAVED_ANSWERS_KEY = "conversationClubSavedAnswers";
const USED_QUESTIONS_KEY = "conversationClubUsedQuestions";


// ------------------------------
// APP STATE
// ------------------------------

let currentCategory = "all";
let currentDepth = "any";
let currentMode = "solo";
let currentQuestion = null;


// ------------------------------
// DOM ELEMENTS
// ------------------------------

const questionText = document.getElementById("questionText");
const questionCategory = document.getElementById("questionCategory");
const questionNumber = document.getElementById("questionNumber");
const followUpText = document.getElementById("followUpText");

const answerInput = document.getElementById("answerInput");

const favoriteButton = document.getElementById("favoriteButton");
const saveAnswerButton = document.getElementById("saveAnswerButton");
const clearAnswerButton = document.getElementById("clearAnswerButton");
const showFollowUpButton = document.getElementById("showFollowUpButton");
const newQuestionButton = document.getElementById("newQuestionButton");

const depthFilter = document.getElementById("depthFilter");
const modeSelect = document.getElementById("modeSelect");

const remainingCount = document.getElementById("remainingCount");
const favoritesCount = document.getElementById("favoritesCount");

const favoritesList = document.getElementById("favoritesList");
const savedAnswersList = document.getElementById("savedAnswersList");

const toast = document.getElementById("toast");


// ------------------------------
// LOAD SAVED DATA
// ------------------------------

let favorites = JSON.parse(
    localStorage.getItem(FAVORITES_KEY) || "[]"
);

let savedAnswers = JSON.parse(
    localStorage.getItem(SAVED_ANSWERS_KEY) || "[]"
);

let usedQuestions = JSON.parse(
    sessionStorage.getItem(USED_QUESTIONS_KEY) || "{}"
);


// ------------------------------
// SAVE DATA
// ------------------------------

function saveFavorites() {
    localStorage.setItem(
        FAVORITES_KEY,
        JSON.stringify(favorites)
    );
}

function saveAnswers() {
    localStorage.setItem(
        SAVED_ANSWERS_KEY,
        JSON.stringify(savedAnswers)
    );
}

function saveUsedQuestions() {
    sessionStorage.setItem(
        USED_QUESTIONS_KEY,
        JSON.stringify(usedQuestions)
    );
}


// ------------------------------
// QUESTION FILTERING
// ------------------------------

function getQuestionPool() {
    return QUESTIONS.filter(question => {

        const categoryMatches =
            currentCategory === "all" ||
            question.category === currentCategory;

        const depthMatches =
            currentDepth === "any" ||
            question.depth === currentDepth;

        return categoryMatches && depthMatches;
    });
}


// ------------------------------
// CURRENT FILTER KEY
// ------------------------------

function getSelectionKey() {
    return `${currentCategory}|${currentDepth}`;
}


// ------------------------------
// GET USED QUESTION IDS
// ------------------------------

function getUsedIds() {

    const key = getSelectionKey();

    if (!Array.isArray(usedQuestions[key])) {
        usedQuestions[key] = [];
    }

    return usedQuestions[key];
}


// ------------------------------
// CATEGORY DISPLAY NAMES
// ------------------------------

function formatCategory(category) {

    const names = {
        icebreaker: "Icebreakers",
        fun: "Fun",
        deep: "Deep",
        dreams: "Dreams",
        memories: "Memories",
        relationships: "Relationships",
        life: "Life"
    };

    return names[category] || category;
}


// ------------------------------
// SHOW A NEW QUESTION
// ------------------------------

function showNewQuestion() {

    const pool = getQuestionPool();

    if (pool.length === 0) {
        showToast("No questions match these filters.");
        return;
    }

    const key = getSelectionKey();

    let usedIds = getUsedIds();

    // Remove IDs that no longer exist in this pool
    usedIds = usedIds.filter(id =>
        pool.some(question => question.id === id)
    );

    usedQuestions[key] = usedIds;

    // Questions that haven't appeared yet
    let availableQuestions = pool.filter(
        question => !usedIds.includes(question.id)
    );

    // If everything has been used, start a new round
    if (availableQuestions.length === 0) {

        usedQuestions[key] = [];
        usedIds = [];

        availableQuestions = [...pool];

        showToast(
            "You've completed this set! Starting a new round."
        );
    }

    // Pick a random question
    const randomIndex = Math.floor(
        Math.random() * availableQuestions.length
    );

    currentQuestion = availableQuestions[randomIndex];

    // Mark it as used
    usedIds.push(currentQuestion.id);
    usedQuestions[key] = usedIds;

    saveUsedQuestions();

    renderQuestion();
    updateStats();
}


// ------------------------------
// DISPLAY QUESTION
// ------------------------------

function renderQuestion() {

    if (!currentQuestion) return;

    if (questionText) {
        questionText.textContent =
            currentQuestion.question;
    }

    if (questionCategory) {
        questionCategory.textContent =
            formatCategory(currentQuestion.category);
    }

    if (questionNumber) {

        const pool = getQuestionPool();
        const used = getUsedIds();

        questionNumber.textContent =
            `Question ${used.length} of ${pool.length}`;
    }

    if (followUpText) {

        followUpText.textContent =
            currentQuestion.followUp || "";

        followUpText.hidden = true;
    }

    if (answerInput) {
        answerInput.value = "";
    }

    if (showFollowUpButton) {
        showFollowUpButton.textContent =
            "Show Follow-up";
    }

    updateFavoriteButton();
}


// ------------------------------
// FAVORITES
// ------------------------------

function isFavorite(questionId) {
    return favorites.includes(questionId);
}


function toggleFavorite() {

    if (!currentQuestion) return;

    const id = currentQuestion.id;

    if (isFavorite(id)) {

        favorites = favorites.filter(
            favoriteId => favoriteId !== id
        );

        showToast("Removed from favorites.");

    } else {

        favorites.push(id);

        showToast("Added to favorites.");
    }

    saveFavorites();
    updateFavoriteButton();
    renderFavorites();
    updateStats();
}


function updateFavoriteButton() {

    if (!favoriteButton || !currentQuestion) return;

    const favorite =
        isFavorite(currentQuestion.id);

    favoriteButton.classList.toggle(
        "active",
        favorite
    );

    favoriteButton.setAttribute(
        "aria-pressed",
        favorite ? "true" : "false"
    );

    favoriteButton.textContent =
        favorite ? "♥" : "♡";

    favoriteButton.title =
        favorite
            ? "Remove from favorites"
            : "Add to favorites";
}


// ------------------------------
// SAVE ANSWER
// ------------------------------

function saveCurrentAnswer() {

    if (!currentQuestion || !answerInput) return;

    const answer =
        answerInput.value.trim();

    if (!answer) {
        showToast("Write an answer first.");
        return;
    }

    const existingIndex =
        savedAnswers.findIndex(
            item =>
                item.questionId ===
                currentQuestion.id
        );

    const answerData = {
        questionId: currentQuestion.id,
        question: currentQuestion.question,
        category: currentQuestion.category,
        depth: currentQuestion.depth,
        answer: answer,
        savedAt: new Date().toISOString()
    };

    if (existingIndex !== -1) {

        savedAnswers[existingIndex] =
            answerData;

        showToast(
            "Your answer has been updated."
        );

    } else {

        savedAnswers.unshift(answerData);

        showToast(
            "Your answer has been saved."
        );
    }

    saveAnswers();
    renderSavedAnswers();
}


// ------------------------------
// DELETE SAVED ANSWER
// ------------------------------

function deleteSavedAnswer(questionId) {

    savedAnswers =
        savedAnswers.filter(
            item =>
                item.questionId !== questionId
        );

    saveAnswers();
    renderSavedAnswers();

    showToast("Saved answer deleted.");
}


// ------------------------------
// RENDER FAVORITES
// ------------------------------

function renderFavorites() {

    if (!favoritesList) return;

    const favoriteQuestions =
        QUESTIONS.filter(
            question =>
                favorites.includes(question.id)
        );

    if (favoriteQuestions.length === 0) {

        favoritesList.innerHTML = `
            <div class="empty-state">
                <p>You haven't added any favorites yet.</p>
            </div>
        `;

        return;
    }

    favoritesList.innerHTML =
        favoriteQuestions.map(question => `

        <div class="saved-card">

            <div class="saved-card-category">
                ${formatCategory(question.category)}
            </div>

            <p>
                ${escapeHTML(question.question)}
            </p>

            <button
                type="button"
                class="small-button"
                data-load-question="${question.id}"
            >
                Open Question
            </button>

            <button
                type="button"
                class="small-button"
                data-remove-favorite="${question.id}"
            >
                Remove
            </button>

        </div>

    `).join("");
}


// ------------------------------
// RENDER SAVED ANSWERS
// ------------------------------

function renderSavedAnswers() {

    if (!savedAnswersList) return;

    if (savedAnswers.length === 0) {

        savedAnswersList.innerHTML = `
            <div class="empty-state">
                <p>You haven't saved any answers yet.</p>
            </div>
        `;

        return;
    }

    savedAnswersList.innerHTML =
        savedAnswers.map(item => `

        <div class="saved-card">

            <div class="saved-card-category">
                ${formatCategory(item.category)}
            </div>

            <h3>
                ${escapeHTML(item.question)}
            </h3>

            <p>
                ${escapeHTML(item.answer)}
            </p>

            <button
                type="button"
                class="small-button"
                data-load-question="${item.questionId}"
            >
                Open Question
            </button>

            <button
                type="button"
                class="small-button"
                data-delete-answer="${item.questionId}"
            >
                Delete
            </button>

        </div>

    `).join("");
}


// ------------------------------
// UPDATE STATISTICS
// ------------------------------

function updateStats() {

    const pool = getQuestionPool();
    const used = getUsedIds();

    const remaining =
        Math.max(
            pool.length - used.length,
            0
        );

    if (remainingCount) {
        remainingCount.textContent =
            remaining;
    }

    if (favoritesCount) {
        favoritesCount.textContent =
            favorites.length;
    }
}


// ------------------------------
// LOAD A SPECIFIC QUESTION
// ------------------------------

function loadQuestionById(id) {

    const question =
        QUESTIONS.find(
            item =>
                item.id === Number(id)
        );

    if (!question) return;

    currentQuestion = question;

    if (questionText) {
        questionText.textContent =
            question.question;
    }

    if (questionCategory) {
        questionCategory.textContent =
            formatCategory(question.category);
    }

    if (questionNumber) {
        questionNumber.textContent =
            "Favorite / Saved Question";
    }

    if (followUpText) {

        followUpText.textContent =
            question.followUp || "";

        followUpText.hidden = true;
    }

    if (answerInput) {
        answerInput.value = "";
    }

    if (showFollowUpButton) {
        showFollowUpButton.textContent =
            "Show Follow-up";
    }

    updateFavoriteButton();

    document
        .getElementById("play")
        ?.scrollIntoView({
            behavior: "smooth"
        });
}


// ------------------------------
// FOLLOW-UP TOGGLE
// ------------------------------

function toggleFollowUp() {

    if (!followUpText) return;

    const isHidden =
        followUpText.hidden;

    followUpText.hidden =
        !isHidden;

    if (showFollowUpButton) {

        showFollowUpButton.textContent =
            isHidden
                ? "Hide Follow-up"
                : "Show Follow-up";
    }
}


// ------------------------------
// CATEGORY BUTTONS
// ------------------------------

const categoryButtons =
    document.querySelectorAll(
        "[data-category]"
    );

categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            currentCategory =
                button.dataset.category;

            categoryButtons.forEach(item => {
                item.classList.remove(
                    "active"
                );
            });

            button.classList.add("active");

            showNewQuestion();
        }
    );
});


// ------------------------------
// DEPTH FILTER
// ------------------------------

if (depthFilter) {

    depthFilter.addEventListener(
        "change",
        () => {

            currentDepth =
                depthFilter.value;

            showNewQuestion();
        }
    );
}


// ------------------------------
// MODE SELECTOR
// ------------------------------

if (modeSelect) {

    modeSelect.addEventListener(
        "change",
        () => {

            currentMode =
                modeSelect.value;

            showToast(
                `Mode changed to ${formatMode(
                    currentMode
                )}.`
            );
        }
    );
}


function formatMode(mode) {

    const modes = {
        solo: "Solo",
        friends: "Friends",
        group: "Group",
        partner: "Partner"
    };

    return modes[mode] || mode;
}


// ------------------------------
// BUTTON EVENTS
// ------------------------------

if (favoriteButton) {

    favoriteButton.addEventListener(
        "click",
        toggleFavorite
    );
}

if (saveAnswerButton) {

    saveAnswerButton.addEventListener(
        "click",
        saveCurrentAnswer
    );
}

if (clearAnswerButton) {

    clearAnswerButton.addEventListener(
        "click",
        () => {

            if (answerInput) {
                answerInput.value = "";
                answerInput.focus();
            }
        }
    );
}

if (showFollowUpButton) {

    showFollowUpButton.addEventListener(
        "click",
        toggleFollowUp
    );
}

if (newQuestionButton) {

    newQuestionButton.addEventListener(
        "click",
        showNewQuestion
    );
}


// ------------------------------
// FAVORITE / SAVED CARD EVENTS
// ------------------------------

document.addEventListener(
    "click",
    event => {

        const loadButton =
            event.target.closest(
                "[data-load-question]"
            );

        if (loadButton) {

            const id =
                loadButton.dataset.loadQuestion;

            loadQuestionById(id);

            return;
        }


        const removeFavoriteButton =
            event.target.closest(
                "[data-remove-favorite]"
            );

        if (removeFavoriteButton) {

            const id =
                Number(
                    removeFavoriteButton
                        .dataset
                        .removeFavorite
                );

            favorites =
                favorites.filter(
                    favoriteId =>
                        favoriteId !== id
                );

            saveFavorites();
            renderFavorites();
            updateFavoriteButton();
            updateStats();

            showToast(
                "Removed from favorites."
            );

            return;
        }


        const deleteAnswerButton =
            event.target.closest(
                "[data-delete-answer]"
            );

        if (deleteAnswerButton) {

            const id =
                Number(
                    deleteAnswerButton
                        .dataset
                        .deleteAnswer
                );

            deleteSavedAnswer(id);
        }
    }
);


// ------------------------------
// TOAST MESSAGE
// ------------------------------

function showToast(message) {

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(
        showToast.timeout
    );

    showToast.timeout =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 2500);
}


// ------------------------------
// ESCAPE HTML
// ------------------------------

function escapeHTML(value) {

    const div =
        document.createElement("div");

    div.textContent = value;

    return div.innerHTML;
}


// ------------------------------
// INITIALIZE APP
// ------------------------------

function initializeApp() {

    renderFavorites();
    renderSavedAnswers();
    updateStats();

    showNewQuestion();
}

initializeApp();
