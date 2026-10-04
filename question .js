const QUESTIONS = [

  // =========================================================
  // ICEBREAKERS — 40 QUESTIONS
  // =========================================================

  {
    id: 1,
    category: "icebreaker",
    depth: "light",
    question: "What's a small thing that always makes you smile?",
    followUp: "What makes it so enjoyable for you?"
  },
  {
    id: 2,
    category: "icebreaker",
    depth: "light",
    question: "What's your ideal way to spend a completely free day?",
    followUp: "Would you rather spend it alone or with someone?"
  },
  {
    id: 3,
    category: "icebreaker",
    depth: "light",
    question: "What's a food you could eat much more often than you probably should?",
    followUp: "What is your favorite version of it?"
  },
  {
    id: 4,
    category: "icebreaker",
    depth: "light",
    question: "Are you more of a morning person or a night person?",
    followUp: "What do you usually enjoy doing during that time?"
  },
  {
    id: 5,
    category: "icebreaker",
    depth: "light",
    question: "What's one place you've always wanted to visit?",
    followUp: "What attracts you to that place?"
  },
  {
    id: 6,
    category: "icebreaker",
    depth: "light",
    question: "What's your favorite season?",
    followUp: "What is one thing you love about it?"
  },
  {
    id: 7,
    category: "icebreaker",
    depth: "light",
    question: "What's a song you never seem to get tired of?",
    followUp: "When did you first discover it?"
  },
  {
    id: 8,
    category: "icebreaker",
    depth: "light",
    question: "What's your favorite way to relax after a long day?",
    followUp: "What helps you feel completely relaxed?"
  },
  {
    id: 9,
    category: "icebreaker",
    depth: "light",
    question: "If you could instantly learn one language, which would you choose?",
    followUp: "What would you use the language for?"
  },
  {
    id: 10,
    category: "icebreaker",
    depth: "light",
    question: "What's something you always carry with you?",
    followUp: "Why is it important or useful to you?"
  },
  {
    id: 11,
    category: "icebreaker",
    depth: "light",
    question: "What's your favorite type of movie?",
    followUp: "What is one movie you would recommend?"
  },
  {
    id: 12,
    category: "icebreaker",
    depth: "light",
    question: "Would you rather have a quiet evening or a spontaneous adventure?",
    followUp: "What would your ideal version look like?"
  },
  {
    id: 13,
    category: "icebreaker",
    depth: "light",
    question: "What's a hobby you've always been curious about?",
    followUp: "What has stopped you from trying it?"
  },
  {
    id: 14,
    category: "icebreaker",
    depth: "light",
    question: "What's your favorite drink?",
    followUp: "When do you usually like having it?"
  },
  {
    id: 15,
    category: "icebreaker",
    depth: "light",
    question: "What's something you're surprisingly good at?",
    followUp: "How did you become good at it?"
  },
  {
    id: 16,
    category: "icebreaker",
    depth: "light",
    question: "What's one thing that can instantly improve your mood?",
    followUp: "Does it work every time?"
  },
  {
    id: 17,
    category: "icebreaker",
    depth: "light",
    question: "Do you prefer planning things or seeing where the day takes you?",
    followUp: "Has that always been your personality?"
  },
  {
    id: 18,
    category: "icebreaker",
    depth: "light",
    question: "What's your favorite thing about your hometown?",
    followUp: "What is something you would change about it?"
  },
  {
    id: 19,
    category: "icebreaker",
    depth: "light",
    question: "What's a simple pleasure you really appreciate?",
    followUp: "When did you start appreciating it?"
  },
  {
    id: 20,
    category: "icebreaker",
    depth: "light",
    question: "What kind of weather makes you happiest?",
    followUp: "What do you like doing in that weather?"
  },
  {
    id: 21,
    category: "icebreaker",
    depth: "light",
    question: "What's your favorite thing to do with friends?",
    followUp: "What makes it fun?"
  },
  {
    id: 22,
    category: "icebreaker",
    depth: "light",
    question: "Would you rather live near the sea or in the mountains?",
    followUp: "What would your daily life there look like?"
  },
  {
    id: 23,
    category: "icebreaker",
    depth: "light",
    question: "What's one app you use almost every day?",
    followUp: "What do you mostly use it for?"
  },
  {
    id: 24,
    category: "icebreaker",
    depth: "light",
    question: "What's your favorite kind of dessert?",
    followUp: "Is there a specific one you remember loving?"
  },
  {
    id: 25,
    category: "icebreaker",
    depth: "light",
    question: "Do you prefer texting or talking on the phone?",
    followUp: "What makes you prefer it?"
  },
  {
    id: 26,
    category: "icebreaker",
    depth: "light",
    question: "What's something you could talk about for hours?",
    followUp: "How did you become interested in it?"
  },
  {
    id: 27,
    category: "icebreaker",
    depth: "light",
    question: "What's your favorite type of vacation?",
    followUp: "What makes a vacation feel successful to you?"
  },
  {
    id: 28,
    category: "icebreaker",
    depth: "light",
    question: "What's one thing you wish you were better at?",
    followUp: "Would you actually like to improve it?"
  },
  {
    id: 29,
    category: "icebreaker",
    depth: "light",
    question: "What's your favorite kind of music to listen to when you're alone?",
    followUp: "Does your music taste change depending on your mood?"
  },
  {
    id: 30,
    category: "icebreaker",
    depth: "light",
    question: "What's something that always makes you laugh?",
    followUp: "Who makes you laugh the most?"
  },
  {
    id: 31,
    category: "icebreaker",
    depth: "light",
    question: "Would you rather spend a day without your phone or without the internet?",
    followUp: "Which would be harder for you?"
  },
  {
    id: 32,
    category: "icebreaker",
    depth: "light",
    question: "What's your favorite place to spend time at home?",
    followUp: "What makes that spot comfortable?"
  },
  {
    id: 33,
    category: "icebreaker",
    depth: "light",
    question: "What's a small skill everyone should learn?",
    followUp: "Why do you think it is useful?"
  },
  {
    id: 34,
    category: "icebreaker",
    depth: "light",
    question: "What's your favorite way to spend a weekend?",
    followUp: "Do you usually plan your weekends?"
  },
  {
    id: 35,
    category: "icebreaker",
    depth: "light",
    question: "What's one thing you would never get bored of doing?",
    followUp: "What keeps it interesting?"
  },
  {
    id: 36,
    category: "icebreaker",
    depth: "light",
    question: "What's a smell that brings back good memories?",
    followUp: "What memory does it remind you of?"
  },
  {
    id: 37,
    category: "icebreaker",
    depth: "light",
    question: "Would you rather have unlimited books or unlimited movies?",
    followUp: "What would you choose first?"
  },
  {
    id: 38,
    category: "icebreaker",
    depth: "light",
    question: "What's something you've recently become interested in?",
    followUp: "What sparked your interest?"
  },
  {
    id: 39,
    category: "icebreaker",
    depth: "light",
    question: "What's your favorite thing about yourself?",
    followUp: "Has that always been something you liked about yourself?"
  },
  {
    id: 40,
    category: "icebreaker",
    depth: "light",
    question: "What's one random fact about you that people might not guess?",
    followUp: "When do people usually find out about it?"
  },


  // =========================================================
  // FUN — 45 QUESTIONS
  // =========================================================

  {
    id: 41,
    category: "fun",
    depth: "light",
    question: "If you could instantly become amazing at one skill, what would it be?",
    followUp: "What would you do with that skill?"
  },
  {
    id: 42,
    category: "fun",
    depth: "light",
    question: "If your life became a movie, what genre would it be?",
    followUp: "Who would you want to play you?"
  },
  {
    id: 43,
    category: "fun",
    depth: "light",
    question: "If you could have dinner with any fictional character, who would you choose?",
    followUp: "What would you ask them?"
  },
  {
    id: 44,
    category: "fun",
    depth: "light",
    question: "If animals could talk, which one would be the funniest to have a conversation with?",
    followUp: "What do you think it would complain about?"
  },
  {
    id: 45,
    category: "fun",
    depth: "light",
    question: "If you had to eat one meal for a whole week, what would you choose?",
    followUp: "Would you eventually get tired of it?"
  },
  {
    id: 46,
    category: "fun",
    depth: "light",
    question: "If you could swap lives with someone for one day, who would it be?",
    followUp: "What would you do during that day?"
  },
  {
    id: 47,
    category: "fun",
    depth: "light",
    question: "What's the strangest food combination you actually enjoy?",
    followUp: "How did you discover it?"
  },
  {
    id: 48,
    category: "fun",
    depth: "light",
    question: "If you could teleport anywhere for one hour, where would you go?",
    followUp: "What would you do there?"
  },
  {
    id: 49,
    category: "fun",
    depth: "light",
    question: "If your pet could send you one text message, what would it say?",
    followUp: "What would you reply?"
  },
  {
    id: 50,
    category: "fun",
    depth: "light",
    question: "Would you rather be able to fly or become invisible?",
    followUp: "What would be the first thing you would do?"
  },
  {
    id: 51,
    category: "fun",
    depth: "light",
    question: "If you opened a café, what would you call it?",
    followUp: "What would make your café special?"
  },
  {
    id: 52,
    category: "fun",
    depth: "light",
    question: "If you could create one holiday, what would people celebrate?",
    followUp: "What would everyone do on that day?"
  },
  {
    id: 53,
    category: "fun",
    depth: "light",
    question: "What's the funniest misunderstanding you've ever had?",
    followUp: "When did you realize what had happened?"
  },
  {
    id: 54,
    category: "fun",
    depth: "light",
    question: "If you had to choose a completely different career for one year, what would you try?",
    followUp: "What attracts you to it?"
  },
  {
    id: 55,
    category: "fun",
    depth: "light",
    question: "If you could rename yourself for a day, what name would you choose?",
    followUp: "Why that name?"
  },
  {
    id: 56,
    category: "fun",
    depth: "light",
    question: "What fictional world would you most like to visit?",
    followUp: "What would you do there?"
  },
  {
    id: 57,
    category: "fun",
    depth: "light",
    question: "If you could have a completely useless superpower, what would it be?",
    followUp: "How would you use it?"
  },
  {
    id: 58,
    category: "fun",
    depth: "light",
    question: "If your personality were a color, what color would it be?",
    followUp: "What makes that color fit you?"
  },
  {
    id: 59,
    category: "fun",
    depth: "light",
    question: "What's the most ridiculous thing you've ever been afraid of?",
    followUp: "Are you still afraid of it?"
  },
  {
    id: 60,
    category: "fun",
    depth: "light",
    question: "If you could instantly master one musical instrument, which would you pick?",
    followUp: "What would you play first?"
  },
  {
    id: 61,
    category: "fun",
    depth: "medium",
    question: "If you had to live inside one video game for a month, which would you choose?",
    followUp: "Would you try to win or just explore?"
  },
  {
    id: 62,
    category: "fun",
    depth: "light",
    question: "If you could make one everyday task disappear forever, what would it be?",
    followUp: "Why that one?"
  },
  {
    id: 63,
    category: "fun",
    depth: "light",
    question: "What's the weirdest compliment you've ever received?",
    followUp: "Did you take it as a compliment?"
  },
  {
    id: 64,
    category: "fun",
    depth: "light",
    question: "If you had a warning label, what would it say?",
    followUp: "Would your friends agree?"
  },
  {
    id: 65,
    category: "fun",
    depth: "light",
    question: "If you could only use three emojis for the rest of your life, which would you choose?",
    followUp: "Which one would you use most?"
  },
  {
    id: 66,
    category: "fun",
    depth: "light",
    question: "What would your dream amusement park attraction be?",
    followUp: "Would it be scary or relaxing?"
  },
  {
    id: 67,
    category: "fun",
    depth: "light",
    question: "If you could turn any ordinary object into a luxury product, what would you choose?",
    followUp: "How would you make it luxurious?"
  },
  {
    id: 68,
    category: "fun",
    depth: "light",
    question: "What fictional character do you think you would actually be friends with?",
    followUp: "What would you do together?"
  },
  {
    id: 69,
    category: "fun",
    depth: "light",
    question: "If you could instantly change your hairstyle without consequences, what would you try?",
    followUp: "Would you keep it?"
  },
  {
    id: 70,
    category: "fun",
    depth: "light",
    question: "If you had to choose a theme song for your entrance into a room, what would it be?",
    followUp: "Would you actually play it?"
  },
  {
    id: 71,
    category: "fun",
    depth: "medium",
    question: "If money didn't matter for one day, what completely unnecessary thing would you buy?",
    followUp: "Why would you want it?"
  },
  {
    id: 72,
    category: "fun",
    depth: "light",
    question: "If you could make one fictional invention real, what would it be?",
    followUp: "How would you use it?"
  },
  {
    id: 73,
    category: "fun",
    depth: "light",
    question: "What's a silly opinion you will defend forever?",
    followUp: "How strongly do you believe it?"
  },
  {
    id: 74,
    category: "fun",
    depth: "light",
    question: "If you had to survive a zombie apocalypse with three people you know, who would you choose?",
    followUp: "What role would each person have?"
  },
  {
    id: 75,
    category: "fun",
    depth: "light",
    question: "If you could communicate with one type of animal, which would you choose?",
    followUp: "What would you ask first?"
  },
  {
    id: 76,
    category: "fun",
    depth: "medium",
    question: "If you could erase one embarrassing moment from your memory, would you?",
    followUp: "What makes that moment memorable?"
  },
  {
    id: 77,
    category: "fun",
    depth: "light",
    question: "What would be the worst possible name for a restaurant?",
    followUp: "Would you ever actually eat there?"
  },
  {
    id: 78,
    category: "fun",
    depth: "light",
    question: "If your fridge could judge you, what would it say?",
    followUp: "Would it have a point?"
  },
  {
    id: 79,
    category: "fun",
    depth: "light",
    question: "If you had to wear one color for a year, which would you choose?",
    followUp: "Would you eventually hate it?"
  },
  {
    id: 80,
    category: "fun",
    depth: "light",
    question: "If you could make one fictional creature your pet, what would you choose?",
    followUp: "What would you name it?"
  },
  {
    id: 81,
    category: "fun",
    depth: "medium",
    question: "What would your perfect surprise party look like?",
    followUp: "Who would you want there?"
  },
  {
    id: 82,
    category: "fun",
    depth: "light",
    question: "If you had to give a TED Talk about something completely random, what would it be about?",
    followUp: "Could you actually make it interesting?"
  },
  {
    id: 83,
    category: "fun",
    depth: "light",
    question: "If you could switch bodies with your best friend for an hour, what would you do?",
    followUp: "Would they trust you?"
  },
  {
    id: 84,
    category: "fun",
    depth: "light",
    question: "What's a trend you don't understand at all?",
    followUp: "What would you replace it with?"
  },
  {
    id: 85,
    category: "fun",
    depth: "light",
    question: "If your life had achievement badges, what badge would you have earned recently?",
    followUp: "What would the badge be called?"
  },


  // =========================================================
  // DEEP — 50 QUESTIONS
  // =========================================================

  {
    id: 86,
    category: "deep",
    depth: "deep",
    question: "What is something you've learned about yourself recently?",
    followUp: "Did learning it change anything about you?"
  },
  {
    id: 87,
    category: "deep",
    depth: "deep",
    question: "What do you think people misunderstand about you?",
    followUp: "Do you usually try to correct that misunderstanding?"
  },
  {
    id: 88,
    category: "deep",
    depth: "deep",
    question: "What does a meaningful life look like to you?",
    followUp: "Has your answer changed as you've grown older?"
  },
  {
    id: 89,
    category: "deep",
    depth: "deep",
    question: "What is something you wish you could tell your younger self?",
    followUp: "What would you want them to understand?"
  },
  {
    id: 90,
    category: "deep",
    depth: "deep",
    question: "What kind of person do you hope to become?",
    followUp: "What are you doing now that moves you toward that person?"
  },
  {
    id: 91,
    category: "deep",
    depth: "deep",
    question: "What is something you find difficult to forgive?",
    followUp: "What makes forgiveness difficult for you?"
  },
  {
    id: 92,
    category: "deep",
    depth: "deep",
    question: "When do you feel most like yourself?",
    followUp: "Who are you usually with during those moments?"
  },
  {
    id: 93,
    category: "deep",
    depth: "deep",
    question: "What is a belief you have changed your mind about?",
    followUp: "What caused the change?"
  },
  {
    id: 94,
    category: "deep",
    depth: "deep",
    question: "What do you think makes someone a good person?",
    followUp: "Can someone be good while still making serious mistakes?"
  },
  {
    id: 95,
    category: "deep",
    depth: "deep",
    question: "What is something you are afraid to lose?",
    followUp: "What makes it so valuable to you?"
  },
  {
    id: 96,
    category: "deep",
    depth: "deep",
    question: "What kind of silence feels comfortable to you?",
    followUp: "Who can you comfortably share silence with?"
  },
  {
    id: 97,
    category: "deep",
    depth: "deep",
    question: "What experience changed the way you see the world?",
    followUp: "How were you different afterward?"
  },
  {
    id: 98,
    category: "deep",
    depth: "deep",
    question: "What do you think you need more of in your life?",
    followUp: "What's stopping you from having more of it?"
  },
  {
    id: 99,
    category: "deep",
    depth: "deep",
    question: "What do you think you need less of?",
    followUp: "What would change if you had less of it?"
  },
  {
    id: 100,
    category: "deep",
    depth: "deep",
    question: "What does being understood mean to you?",
    followUp: "Do you feel understood by the people closest to you?"
  },
  {
    id: 101,
    category: "deep",
    depth: "deep",
    question: "What is one part of yourself you are still trying to understand?",
    followUp: "What makes it complicated?"
  },
  {
    id: 102,
    category: "deep",
    depth: "deep",
    question: "What kind of failure has taught you the most?",
    followUp: "What did you learn from it?"
  },
  {
    id: 103,
    category: "deep",
    depth: "deep",
    question: "What does success mean to you personally?",
    followUp: "Is that definition yours or something you learned from others?"
  },
  {
    id: 104,
    category: "deep",
    depth: "deep",
    question: "What is something you wish people asked you about more often?",
    followUp: "Why does that topic matter to you?"
  },
  {
    id: 105,
    category: "deep",
    depth: "deep",
    question: "What makes you feel emotionally safe with someone?",
    followUp: "How do you know when you can trust someone?"
  },
  {
    id: 106,
    category: "deep",
    depth: "deep",
    question: "What is something you have outgrown?",
    followUp: "How did you realize you had changed?"
  },
  {
    id: 107,
    category: "deep",
    depth: "deep",
    question: "What is a difficult truth you've had to accept?",
    followUp: "Did accepting it make life easier?"
  },
  {
    id: 108,
    category: "deep",
    depth: "deep",
    question: "What do you think people owe each other?",
    followUp: "Where do you think that responsibility ends?"
  },
  {
    id: 109,
    category: "deep",
    depth: "deep",
    question: "What is something you rarely say out loud but think about often?",
    followUp: "Why do you keep it mostly to yourself?"
  },
  {
    id: 110,
    category: "deep",
    depth: "deep",
    question: "What kind of person brings out the best in you?",
    followUp: "What do they bring out in you?"
  },
  {
    id: 111,
    category: "deep",
    depth: "deep",
    question: "What does home mean to you?",
    followUp: "Is home more about a place or the people there?"
  },
  {
    id: 112,
    category: "deep",
    depth: "deep",
    question: "What is something you are proud of that people might not notice?",
    followUp: "Why are you particularly proud of it?"
  },
  {
    id: 113,
    category: "deep",
    depth: "deep",
    question: "What do you think is harder: changing yourself or accepting yourself?",
    followUp: "Which one are you currently working on?"
  },
  {
    id: 114,
    category: "deep",
    depth: "deep",
    question: "What kind of person do you find difficult to understand?",
    followUp: "Do you think understanding them would change your opinion?"
  },
  {
    id: 115,
    category: "deep",
    depth: "deep",
    question: "What is something you have learned from someone very different from you?",
    followUp: "Did it challenge one of your assumptions?"
  },
  {
    id: 116,
    category: "deep",
    depth: "deep",
    question: "What do you think makes a relationship truly strong?",
    followUp: "Which part is hardest to maintain?"
  },
  {
    id: 117,
    category: "deep",
    depth: "deep",
    question: "What is something you wish you could change about the way you handle conflict?",
    followUp: "What would you like to do differently?"
  },
  {
    id: 118,
    category: "deep",
    depth: "deep",
    question: "When was the last time you surprised yourself?",
    followUp: "What did you discover about yourself?"
  },
  {
    id: 119,
    category: "deep",
    depth: "deep",
    question: "What is something you believe is worth waiting for?",
    followUp: "How do you know when patience is worthwhile?"
  },
  {
    id: 120,
    category: "deep",
    depth: "deep",
    question: "What do you think people often regret too late?",
    followUp: "Is there anything you want to avoid regretting?"
  },
  {
    id: 121,
    category: "deep",
    depth: "deep",
    question: "What does freedom mean to you?",
    followUp: "What makes you feel most free?"
  },
  {
    id: 122,
    category: "deep",
    depth: "deep",
    question: "What kind of memories do you think stay with people the longest?",
    followUp: "What makes a memory powerful?"
  },
  {
    id: 123,
    category: "deep",
    depth: "deep",
    question: "What is something you would never want to become?",
    followUp: "Why is that important to you?"
  },
  {
    id: 124,
    category: "deep",
    depth: "deep",
    question: "What do you think makes someone emotionally mature?",
    followUp: "Is emotional maturity something people can learn?"
  },
  {
    id: 125,
    category: "deep",
    depth: "deep",
    question: "What is a lesson you had to learn the hard way?",
    followUp: "Would you choose to learn it differently if you could?"
  },
  {
    id: 126,
    category: "deep",
    depth: "deep",
    question: "What do you think people should be more honest about?",
    followUp: "Why do you think people avoid that honesty?"
  },
  {
    id: 127,
    category: "deep",
    depth: "deep",
    question: "What is something you are still learning to let go of?",
    followUp: "What makes letting go difficult?"
  },
  {
    id: 128,
    category: "deep",
    depth: "deep",
    question: "What makes you feel genuinely appreciated?",
    followUp: "Do you prefer words, actions, or something else?"
  },
  {
    id: 129,
    category: "deep",
    depth: "deep",
    question: "What is something you wish you could explain perfectly to someone?",
    followUp: "Why is it difficult to explain?"
  },
  {
    id: 130,
    category: "deep",
    depth: "deep",
    question: "What do you think is the difference between being alone and being lonely?",
    followUp: "Which kind of solitude do you prefer?"
  },
  {
    id: 131,
    category: "deep",
    depth: "deep",
    question: "What part of growing older do you think people underestimate?",
    followUp: "What are you learning as you grow?"
  },
  {
    id: 132,
    category: "deep",
    depth: "deep",
    question: "What is one thing you would like people to remember about you?",
    followUp: "Why that particular thing?"
  },
  {
    id: 133,
    category: "deep",
    depth: "deep",
    question: "What do you think makes life feel worth living?",
    followUp: "What gives your own life that feeling?"
  },
  {
    id: 134,
    category: "deep",
    depth: "deep",
    question: "What is something you have learned about love?",
    followUp: "Did you learn it through experience or observation?"
  },
  {
    id: 135,
    category: "deep",
    depth: "deep",
    question: "What is one question you wish you knew the answer to?",
    followUp: "Why is that answer important to you?" 
  },


  // =========================================================
  // DREAMS — 40 QUESTIONS
  // =========================================================

  {
    id: 136,
    category: "dreams",
    depth: "medium",
    question: "What is a dream you've had for a long time?",
    followUp: "What would achieving it mean to you?"
  },
  {
    id: 137,
    category: "dreams",
    depth: "medium",
    question: "If money were not a limitation, how would you spend your next year?",
    followUp: "What would you prioritize first?"
  },
  {
    id: 138,
    category: "dreams",
    depth: "medium",
    question: "Where would your dream home be?",
    followUp: "What would make it feel like home?"
  },
  {
    id: 139,
    category: "dreams",
    depth: "medium",
    question: "What country would you love to explore slowly rather than just visit?",
    followUp: "What would you want to experience there?"
  },
  {
    id: 140,
    category: "dreams",
    depth: "medium",
    question: "What career would you pursue if you knew you couldn't fail?",
    followUp: "What attracts you to it?"
  },
  {
    id: 141,
    category: "dreams",
    depth: "medium",
    question: "What is something you hope your future self has achieved?",
    followUp: "What would you tell that future version of yourself?"
  },
  {
    id: 142,
    category: "dreams",
    depth: "medium",
    question: "What kind of lifestyle would make you happiest?",
    followUp: "What part of that lifestyle could you start building now?"
  },
  {
    id: 143,
    category: "dreams",
    depth: "medium",
    question: "What is one adventure you really want to have?",
    followUp: "Who would you want beside you?"
  },
  {
    id: 144,
    category: "dreams",
    depth: "medium",
    question: "If you could live in another era for a year, which would you choose?",
    followUp: "What would you want to experience?"
  },
  {
    id: 145,
    category: "dreams",
    depth: "medium",
    question: "What skill would you love to master in the next five years?",
    followUp: "Why that skill?"
  },
  {
    id: 146,
    category: "dreams",
    depth: "medium",
    question: "What kind of work would feel meaningful to you?",
    followUp: "What makes work meaningful rather than simply successful?"
  },
  {
    id: 147,
    category: "dreams",
    depth: "medium",
    question: "What is one place you would love to wake up tomorrow?",
    followUp: "What would your morning there look like?"
  },
  {
    id: 148,
    category: "dreams",
    depth: "medium",
    question: "What is something you want to experience at least once in your life?",
    followUp: "Why is that experience important to you?"
  },
  {
    id: 149,
    category: "dreams",
    depth: "medium",
    question: "What would your perfect ordinary day look like?",
    followUp: "What makes it ordinary rather than extraordinary?"
  },
  {
    id: 150,
    category: "dreams",
    depth: "medium",
    question: "If you could build anything, what would you create?",
    followUp: "Who would benefit from it?"
  },
  {
    id: 151,
    category: "dreams",
    depth: "medium",
    question: "What kind of person do you want to be in ten years?",
    followUp: "What qualities would that person have?"
  },
  {
    id: 152,
    category: "dreams",
    depth: "medium",
    question: "What is a dream you haven't told many people about?",
    followUp: "Why have you kept it private?"
  },
  {
    id: 153,
    category: "dreams",
    depth: "medium",
    question: "If you could spend a month anywhere in the world, where would you go?",
    followUp: "How would you spend those weeks?"
  },
  {
    id: 154,
    category: "dreams",
    depth: "medium",
    question: "What kind of friendships do you hope to have in the future?",
    followUp: "What makes a friendship last?"
  },
  {
    id: 155,
    category: "dreams",
    depth: "medium",
    question: "What is something you hope never changes about your life?",
    followUp: "Why is it important to preserve?"
  },
  {
    id: 156,
    category: "dreams",
    depth: "medium",
    question: "What is one thing you would love to create with your own hands?",
    followUp: "What would you make?"
  },
  {
    id: 157,
    category: "dreams",
    depth: "medium",
    question: "What would your ideal weekend getaway look like?",
    followUp: "Who would you take?"
  },
  {
    id: 158,
    category: "dreams",
    depth: "medium",
    question: "If you could become an expert in any subject, what would you choose?",
    followUp: "How would you use that knowledge?"
  },
  {
    id: 159,
    category: "dreams",
    depth: "medium",
    question: "What kind of home would you love to build one day?",
    followUp: "What detail would make it uniquely yours?"
  },
  {
    id: 160,
    category: "dreams",
    depth: "medium",
    question: "What is one thing you want to do before you turn a certain age?",
    followUp: "Why did you choose that milestone?"
  },
  {
    id: 161,
    category: "dreams",
    depth: "medium",
    question: "If you could start a business with unlimited resources, what would it be?",
    followUp: "What problem would it solve?"
  },
  {
    id: 162,
    category: "dreams",
    depth: "medium",
    question: "What kind of community would you love to live in?",
    followUp: "What would people there be like?"
  },
  {
    id: 163,
    category: "dreams",
    depth: "medium",
    question: "What is a creative project you've always wanted to try?",
    followUp: "What has stopped you so far?"
  },
  {
    id: 164,
    category: "dreams",
    depth: "medium",
    question: "What would you like to learn from another culture?",
    followUp: "Why does that culture interest you?"
  },
  {
    id: 165,
    category: "dreams",
    depth: "medium",
    question: "If you could have one extraordinary experience tomorrow, what would it be?",
    followUp: "Would you want anyone with you?"
  },
  {
    id: 166,
    category: "dreams",
    depth: "medium",
    question: "What kind of legacy would you like to leave?",
    followUp: "Does legacy matter to you now?"
  },
  {
    id: 167,
    category: "dreams",
    depth: "medium",
    question: "What would you do if you knew you had unlimited time?",
    followUp: "Would your priorities change?"
  },
  {
    id: 168,
    category: "dreams",
    depth: "medium",
    question: "What is a dream you almost gave up on?",
    followUp: "What made you reconsider?"
  },
  {
    id: 169,
    category: "dreams",
    depth: "medium",
    question: "What would your ideal work-life balance look like?",
    followUp: "What would you protect most?"
  },
  {
    id: 170,
    category: "dreams",
    depth: "medium",
    question: "What kind of memories do you want to create in the next few years?",
    followUp: "Who do you want to create them with?"
  },
  {
    id: 171,
    category: "dreams",
    depth: "medium",
    question: "What is something you would love to teach someone else?",
    followUp: "Why would you enjoy teaching it?"
  },
  {
    id: 172,
    category: "dreams",
    depth: "medium",
    question: "If you could design your perfect morning, what would it include?",
    followUp: "What would you remove from your current mornings?"
  },
  {
    id: 173,
    category: "dreams",
    depth: "medium",
    question: "What kind of adventure would push you outside your comfort zone?",
    followUp: "Would you actually take the opportunity?"
  },
  {
    id: 174,
    category: "dreams",
    depth: "medium",
    question: "What is something you hope to understand better as you grow older?",
    followUp: "Why is it worth understanding?"
  },
  {
    id: 175,
    category: "dreams",
    depth: "medium",
    question: "If your future life had a feeling rather than a description, what would you want it to feel like?",
    followUp: "What would create that feeling?"
  },


  // =========================================================
  // MEMORIES — 40 QUESTIONS
  // =========================================================

  {
    id: 176,
    category: "memories",
    depth: "medium",
    question: "What childhood memory can you remember unusually clearly?",
    followUp: "Why do you think that memory stayed so vivid?"
  },
  {
    id: 177,
    category: "memories",
    depth: "medium",
    question: "What is a place from your childhood you would like to visit again?",
    followUp: "What would you look for first?"
  },
  {
    id: 178,
    category: "memories",
    depth: "medium",
    question: "What is one family memory that always makes you smile?",
    followUp: "Who else remembers it?"
  },
  {
    id: 179,
    category: "memories",
    depth: "medium",
    question: "What was your favorite thing to do as a child?",
    followUp: "Would you still enjoy it now?"
  },
  {
    id: 180,
    category: "memories",
    depth: "medium",
    question: "What is a school memory you still think about?",
    followUp: "What makes it memorable?"
  },
  {
    id: 181,
    category: "memories",
    depth: "medium",
    question: "Who was one person who made your childhood better?",
    followUp: "What did they do that you remember?"
  },
  {
    id: 182,
    category: "memories",
    depth: "medium",
    question: "What was your favorite birthday growing up?",
    followUp: "What happened that made it special?"
  },
  {
    id: 183,
    category: "memories",
    depth: "medium",
    question: "What is a smell that instantly takes you back to another time?",
    followUp: "Where does it take you?"
  },
  {
    id: 184,
    category: "memories",
    depth: "medium",
    question: "What song reminds you strongly of a particular period of your life?",
    followUp: "What was happening in your life then?"
  },
  {
    id: 185,
    category: "memories",
    depth: "medium",
    question: "What is the funniest memory you have with a friend?",
    followUp: "Would the story still be funny today?"
  },
  {
    id: 186,
    category: "memories",
    depth: "medium",
    question: "What is a trip you remember particularly well?",
    followUp: "What is the first scene you picture?"
  },
  {
    id: 187,
    category: "memories",
    depth: "medium",
    question: "What is one memory you wish you could relive for a day?",
    followUp: "Would you change anything about it?"
  },
  {
    id: 188,
    category: "memories",
    depth: "medium",
    question: "What was something you loved doing before you grew up?",
    followUp: "Why did you stop doing it?"
  },
  {
    id: 189,
    category: "memories",
    depth: "medium",
    question: "What is a meal that reminds you of home?",
    followUp: "Who usually made it?"
  },
  {
    id: 190,
    category: "memories",
    depth: "medium",
    question: "What is one piece of advice someone gave you that you still remember?",
    followUp: "Did you understand its value at the time?"
  },
  {
    id: 191,
    category: "memories",
    depth: "medium",
    question: "What was your favorite place to go when you were younger?",
    followUp: "What did you love about it?"
  },
  {
    id: 192,
    category: "memories",
    depth: "medium",
    question: "What is an old photograph you wish you could step into?",
    followUp: "What would you want to experience in that moment?"
  },
  {
    id: 193,
    category: "memories",
    depth: "medium",
    question: "What is a small childhood detail you remember that other people might forget?",
    followUp: "Why do you think you remember it?"
  },
  {
    id: 194,
    category: "memories",
    depth: "medium",
    question: "What was your first big achievement?",
    followUp: "Who celebrated it with you?"
  },
  {
    id: 195,
    category: "memories",
    depth: "medium",
    question: "What is a moment when you felt especially proud?",
    followUp: "Who knew how important that moment was to you?"
  },
  {
    id: 196,
    category: "memories",
    depth: "medium",
    question: "What is a memory that makes you laugh every time?",
    followUp: "Have you told the story many times?"
  },
  {
    id: 197,
    category: "memories",
    depth: "medium",
    question: "What is one tradition from your childhood you would like to keep?",
    followUp: "Would you pass it on to someone else?"
  },
  {
    id: 198,
    category: "memories",
    depth: "medium",
    question: "What was your favorite subject or activity at school?",
    followUp: "Do you still have an interest in it?"
  },
  {
    id: 199,
    category: "memories",
    depth: "medium",
    question: "What is a memory associated with a particular season?",
    followUp: "What details do you remember most?"
  },
  {
    id: 200,
    category: "memories",
    depth: "medium",
    question: "What was one of your happiest ordinary days?",
    followUp: "What made that ordinary day special?"
  },
  {
    id: 201,
    category: "memories",
    depth: "medium",
    question: "Who was your childhood best friend?",
    followUp: "What did you usually do together?"
  },
  {
    id: 202,
    category: "memories",
    depth: "medium",
    question: "What is something you remember learning for the first time?",
    followUp: "Do you remember who taught you?"
  },
  {
    id: 203,
    category: "memories",
    depth: "medium",
    question: "What is a memory you associate with a particular smell?",
    followUp: "Does that smell still affect you?"
  },
  {
    id: 204,
    category: "memories",
    depth: "medium",
    question: "What is the earliest movie or show you remember loving?",
    followUp: "Would you watch it again today?"
  },
  {
    id: 205,
    category: "memories",
    depth: "medium",
    question: "What is one object from your childhood you wish you had kept?",
    followUp: "What did it mean to you?"
  },
  {
    id: 206,
    category: "memories",
    depth: "medium",
    question: "What is a memory that taught you something important?",
    followUp: "Do you still follow that lesson?"
  },
  {
    id: 207,
    category: "memories",
    depth: "medium",
    question: "What is a place that feels completely different now than it did when you were younger?",
    followUp: "How has it changed?"
  },
  {
    id: 208,
    category: "memories",
    depth: "medium",
    question: "What is a celebration you remember especially well?",
    followUp: "What detail stands out most?"
  },
  {
    id: 209,
    category: "memories",
    depth: "medium",
    question: "What is a memory that makes you grateful?",
    followUp: "Who or what are you grateful for?"
  },
  {
    id: 210,
    category: "memories",
    depth: "medium",
    question: "What is something you used to believe as a child?",
    followUp: "When did you discover it wasn't true?"
  },
  {
    id: 211,
    category: "memories",
    depth: "medium",
    question: "What is a conversation from your past that stayed with you?",
    followUp: "Why did those words matter?"
  },
  {
    id: 212,
    category: "memories",
    depth: "medium",
    question: "What is a moment you wish you had taken a photograph of?",
    followUp: "Why would you want to remember it visually?"
  },
  {
    id: 213,
    category: "memories",
    depth: "medium",
    question: "What is a memory you associate with a particular person?",
    followUp: "What does that person mean to you?"
  },
  {
    id: 214,
    category: "memories",
    depth: "medium",
    question: "What is something from your past you appreciate more now than you did then?",
    followUp: "What changed your perspective?"
  },
  {
    id: 215,
    category: "memories",
    depth: "medium",
    question: "If you could send your younger self one photograph from your current life, what would you show them?",
    followUp: "What would you want them to think?"
  },


  // =========================================================
  // RELATIONSHIPS — 45 QUESTIONS
  // =========================================================

  {
    id: 216,
    category: "relationships",
    depth: "medium",
    question: "What makes you feel appreciated by someone?",
    followUp: "Do you prefer words or actions?"
  },
  {
    id: 217,
    category: "relationships",
    depth: "medium",
    question: "What quality do you value most in a friend?",
    followUp: "Why is that quality important to you?"
  },
  {
    id: 218,
    category: "relationships",
    depth: "medium",
    question: "What makes it easy for you to trust someone?",
    followUp: "What can make you lose that trust?"
  },
  {
    id: 219,
    category: "relationships",
    depth: "medium",
    question: "What is your favorite way to spend time with someone you care about?",
    followUp: "What makes that time meaningful?"
  },
  {
    id: 220,
    category: "relationships",
    depth: "medium",
    question: "What does a healthy friendship look like to you?",
    followUp: "What keeps it healthy?"
  },
  {
    id: 221,
    category: "relationships",
    depth: "medium",
    question: "What is something small that makes you feel cared for?",
    followUp: "Do you usually tell people when you appreciate it?"
  },
  {
    id: 222,
    category: "relationships",
    depth: "medium",
    question: "How do you usually show someone that you care?",
    followUp: "Is that how you prefer others to show care to you?"
  },
  {
    id: 223,
    category: "relationships",
    depth: "medium",
    question: "What makes a conversation feel genuinely comfortable?",
    followUp: "Who do you have the easiest conversations with?"
  },
  {
    id: 224,
    category: "relationships",
    depth: "medium",
    question: "What is something you think every close friendship needs?",
    followUp: "What happens when it is missing?"
  },
  {
    id: 225,
    category: "relationships",
    depth: "medium",
    question: "How do you know when you can be completely yourself around someone?",
    followUp: "Who makes you feel that way?"
  },
  {
    id: 226,
    category: "relationships",
    depth: "medium",
    question: "What makes an apology feel sincere to you?",
    followUp: "Are words enough?"
  },
  {
    id: 227,
    category: "relationships",
    depth: "medium",
    question: "What is something you find difficult to ask for in relationships?",
    followUp: "Why is it difficult to ask?"
  },
  {
    id: 228,
    category: "relationships",
    depth: "medium",
    question: "What kind of support do you appreciate most when you're having a difficult day?",
    followUp: "Do you prefer advice or simply having someone listen?"
  },
  {
    id: 229,
    category: "relationships",
    depth: "medium",
    question: "What is one thing you think people should never take for granted?",
    followUp: "Why does it matter?"
  },
  {
    id: 230,
    category: "relationships",
    depth: "medium",
    question: "What makes someone a good listener?",
    followUp: "Do you consider yourself a good listener?"
  },
  {
    id: 231,
    category: "relationships",
    depth: "medium",
    question: "How important is having separate interests in a close relationship?",
    followUp: "Why?"
  },
  {
    id: 232,
    category: "relationships",
    depth: "medium",
    question: "What is your favorite memory with a close friend?",
    followUp: "What made that moment special?"
  },
  {
    id: 233,
    category: "relationships",
    depth: "medium",
    question: "What kind of person do you naturally feel drawn toward?",
    followUp: "What usually creates that connection?"
  },
  {
    id: 234,
    category: "relationships",
    depth: "medium",
    question: "What is something you have learned from a friendship that ended?",
    followUp: "Would you handle anything differently now?"
  },
  {
    id: 235,
    category: "relationships",
    depth: "medium",
    question: "How do you prefer to resolve disagreements?",
    followUp: "What makes conflict harder for you?"
  },
  {
    id: 236,
    category: "relationships",
    depth: "deep",
    question: "What does emotional intimacy mean to you?",
    followUp: "What helps you build it with someone?"
  },
  {
    id: 237,
    category: "relationships",
    depth: "deep",
    question: "What is something you need from people but don't always ask for?",
    followUp: "What makes it difficult to ask?"
  },
  {
    id: 238,
    category: "relationships",
    depth: "deep",
    question: "What makes you feel truly seen by someone?",
    followUp: "Can you remember a time when someone made you feel that way?"
  },
  {
    id: 239,
    category: "relationships",
    depth: "deep",
    question: "What is one boundary you think every relationship should respect?",
    followUp: "How did you learn that boundary?"
  },
  {
    id: 240,
    category: "relationships",
    depth: "deep",
    question: "What makes it difficult to let someone go?",
    followUp: "What can make letting go necessary?"
  },
  {
    id: 241,
    category: "relationships",
    depth: "deep",
    question: "What is something you have forgiven someone for?",
    followUp: "Did forgiveness change the relationship?"
  },
  {
    id: 242,
    category: "relationships",
    depth: "deep",
    question: "What do you think people misunderstand about love?",
    followUp: "What has experience taught you about it?"
  },
  {
    id: 243,
    category: "relationships",
    depth: "deep",
    question: "How can someone make you feel safe enough to be vulnerable?",
    followUp: "What behavior creates that safety?"
  },
  {
    id: 244,
    category: "relationships",
    depth: "deep",
    question: "What is something you think people should communicate earlier in relationships?",
    followUp: "Why do people often wait?"
  },
  {
    id: 245,
    category: "relationships",
    depth: "deep",
    question: "What does loyalty mean to you?",
    followUp: "Can loyalty ever go too far?"
  },
  {
    id: 246,
    category: "relationships",
    depth: "medium",
    question: "What is your favorite way to make someone feel special?",
    followUp: "How do you know when it works?"
  },
  {
    id: 247,
    category: "relationships",
    depth: "medium",
    question: "What kind of friendship do you hope to have when you're older?",
    followUp: "What would keep that friendship strong?"
  },
  {
    id: 248,
    category: "relationships",
    depth: "medium",
    question: "What is a relationship lesson you learned from your family?",
    followUp: "Is it a lesson you want to keep?"
  },
  {
    id: 249,
    category: "relationships",
    depth: "medium",
    question: "How do you react when someone you care about is upset?",
    followUp: "What do you think they usually need?"
  },
  {
    id: 250,
    category: "relationships",
    depth: "medium",
    question: "What makes you feel comfortable opening up to someone?",
    followUp: "How long does it usually take?"
  },
  {
    id: 251,
    category: "relationships",
    depth: "medium",
    question: "What is something you admire in your closest friend?",
    followUp: "Have you ever told them?"
  },
  {
    id: 252,
    category: "relationships",
    depth: "medium",
    question: "What is one relationship habit you would like to improve?",
    followUp: "What would improving it look like?"
  },
  {
    id: 253,
    category: "relationships",
    depth: "medium",
    question: "What kind of attention makes you feel valued?",
    followUp: "Does it have to be intentional?"
  },
  {
    id: 254,
    category: "relationships",
    depth: "medium",
    question: "What is something you think close friends should be able to disagree about?",
    followUp: "What makes disagreement healthy?"
  },
  {
    id: 255,
    category: "relationships",
    depth: "medium",
    question: "What makes a person easy to forgive?",
    followUp: "What makes forgiveness harder?"
  },
  {
    id: 256,
    category: "relationships",
    depth: "medium",
    question: "What is one thing you hope your closest relationships never lose?",
    followUp: "How can you protect it?"
  },
  {
    id: 257,
    category: "relationships",
    depth: "medium",
    question: "What kind of memories make relationships stronger?",
    followUp: "What memory comes to mind?"
  },
  {
    id: 258,
    category: "relationships",
    depth: "medium",
    question: "How important is humor in a close relationship?",
    followUp: "What kind of humor do you enjoy together?"
  },
  {
    id: 259,
    category: "relationships",
    depth: "medium",
    question: "What makes you feel respected by someone?",
    followUp: "Is respect something that can be rebuilt?"
  },
  {
    id: 260,
    category: "relationships",
    depth: "medium",
    question: "What is one thing you think people should say more often to those they love?",
    followUp: "Why do you think they don't say it?"
  },


  // =========================================================
  // LIFE — 40 QUESTIONS
  // =========================================================

  {
    id: 261,
    category: "life",
    depth: "medium",
    question: "What does a good life mean to you?",
    followUp: "What part of your current life already fits that definition?"
  },
  {
    id: 262,
    category: "life",
    depth: "medium",
    question: "What is something you want to make more time for?",
    followUp: "Why has it been difficult to make time?"
  },
  {
    id: 263,
    category: "life",
    depth: "medium",
    question: "What is one habit that has genuinely improved your life?",
    followUp: "How did you build that habit?"
  },
  {
    id: 264,
    category: "life",
    depth: "medium",
    question: "What is something you would like to worry about less?",
    followUp: "What helps you put it into perspective?"
  },
  {
    id: 265,
    category: "life",
    depth: "medium",
    question: "What does success look like at this stage of your life?",
    followUp: "Do you think your definition will change?"
  },
  {
    id: 266,
    category: "life",
    depth: "medium",
    question: "What is something you want to become more confident about?",
    followUp: "What would confidence change for you?"
  },
  {
    id: 267,
    category: "life",
    depth: "medium",
    question: "What is one thing you would like to simplify in your life?",
    followUp: "Why has it become complicated?"
  },
  {
    id: 268,
    category: "life",
    depth: "medium",
    question: "What is something you wish you had started earlier?",
    followUp: "Would you start it now?"
  },
  {
    id: 269,
    category: "life",
    depth: "medium",
    question: "What is one thing you have become more grateful for with age?",
    followUp: "What changed your perspective?"
  },
  {
    id: 270,
    category: "life",
    depth: "medium",
    question: "What kind of day makes you feel productive?",
    followUp: "Does productivity always make you feel good?"
  },
  {
    id: 271,
    category: "life",
    depth: "medium",
    question: "What is something you want to stop postponing?",
    followUp: "What keeps getting in the way?"
  },
  {
    id: 272,
    category: "life",
    depth: "medium",
    question: "What is one decision that changed the direction of your life?",
    followUp: "Would you make the same decision again?"
  },
  {
    id: 273,
    category: "life",
    depth: "medium",
    question: "What does balance mean to you?",
    followUp: "Which part of your life currently needs more balance?"
  },
  {
    id: 274,
    category: "life",
    depth: "medium",
    question: "What is something you want to protect your time from?",
    followUp: "Why does it take so much of your time?"
  },
  {
    id: 275,
    category: "life",
    depth: "medium",
    question: "What is one lesson you hope you never forget?",
    followUp: "What reminds you of it?"
  },
  {
    id: 276,
    category: "life",
    depth: "medium",
    question: "What is something you would like to understand better about yourself?",
    followUp: "How could understanding it help you?"
  },
  {
    id: 277,
    category: "life",
    depth: "medium",
    question: "What is something you have become less willing to tolerate as you've grown older?",
    followUp: "Why has that changed?"
  },
  {
    id: 278,
    category: "life",
    depth: "medium",
    question: "What makes an ordinary day feel worthwhile?",
    followUp: "What small things contribute to that feeling?"
  },
  {
    id: 279,
    category: "life",
    depth: "medium",
    question: "What is something you want to be remembered for?",
    followUp: "How could you live that value now?"
  },
  {
    id: 280,
    category: "life",
    depth: "medium",
    question: "What is one area of your life where you've changed a lot?",
    followUp: "What caused the change?"
  },
  {
    id: 281,
    category: "life",
    depth: "medium",
    question: "What is something you think everyone should experience at least once?",
    followUp: "Why?"
  },
  {
    id: 282,
    category: "life",
    depth: "medium",
    question: "What is something you would like to learn about the world?",
    followUp: "Why does it interest you?"
  },
  {
    id: 283,
    category: "life",
    depth: "medium",
    question: "What is one thing you wish people valued more?",
    followUp: "Why do you think it is overlooked?"
  },
  {
    id: 284,
    category: "life",
    depth: "medium",
    question: "What makes you feel that you're moving forward in life?",
    followUp: "How do you measure progress?"
  },
  {
    id: 285,
    category: "life",
    depth: "medium",
    question: "What is something you have learned from a difficult period of your life?",
    followUp: "How does that lesson affect you now?"
  },
  {
    id: 286,
    category: "life",
    depth: "medium",
    question: "What does having enough mean to you?",
    followUp: "How do you know when you have enough?"
  },
  {
    id: 287,
    category: "life",
    depth: "medium",
    question: "What is one part of adulthood you didn't expect?",
    followUp: "Was it a good or difficult surprise?"
  },
  {
    id: 288,
    category: "life",
    depth: "medium",
    question: "What is something you would like to do differently next year?",
    followUp: "What would make the change possible?"
  },
  {
    id: 289,
    category: "life",
    depth: "medium",
    question: "What kind of environment helps you do your best?",
    followUp: "What can make an environment feel draining?"
  },
  {
    id: 290,
    category: "life",
    depth: "medium",
    question: "What is something you want to make a priority?",
    followUp: "Why hasn't it been a priority already?"
  },
  {
    id: 291,
    category: "life",
    depth: "medium",
    question: "What is something you think you have become better at handling?",
    followUp: "How did you develop that ability?"
  },
  {
    id: 292,
    category: "life",
    depth: "medium",
    question: "What is one thing you would like to be more present for?",
    followUp: "What distracts you from it?"
  },
  {
    id: 293,
    category: "life",
    depth: "medium",
    question: "What is something you think is worth doing slowly?",
    followUp: "Why does it benefit from taking your time?"
  },
  {
    id: 294,
    category: "life",
    depth: "medium",
    question: "What is one area where you want to challenge yourself?",
    followUp: "What would pushing yourself look like?"
  },
  {
    id: 295,
    category: "life",
    depth: "medium",
    question: "What is something you hope your future self will thank you for?",
    followUp: "What could you do today to make that happen?"
  },
  {
    id: 296,
    category: "life",
    depth: "medium",
    question: "What is something you think people learn too late?",
    followUp: "When did you start learning it?"
  },
  {
    id: 297,
    category: "life",
    depth: "medium",
    question: "What is one thing you would like to have more courage to do?",
    followUp: "What makes it intimidating?"
  },
  {
    id: 298,
    category: "life",
    depth: "medium",
    question: "What is something you want your everyday life to contain more of?",
    followUp: "What would adding more of it look like?"
  },
  {
    id: 299,
    category: "life",
    depth: "medium",
    question: "What is one thing you hope never becomes ordinary to you?",
    followUp: "Why do you want to keep appreciating it?"
  },
  {
    id: 300,
    category: "life",
    depth: "medium",
    question: "If you could give your future self one piece of advice, what would it be?",
    followUp: "Why do you think future you will need it?"
  }

];
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

        showToast("You've completed this set! Starting a new round.");
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
        questionText.textContent = currentQuestion.question;
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
        showFollowUpButton.textContent = "Show Follow-up";
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

    const favorite = isFavorite(currentQuestion.id);

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

    const answer = answerInput.value.trim();

    if (!answer) {
        showToast("Write an answer first.");
        return;
    }

    const existingIndex = savedAnswers.findIndex(
        item => item.questionId === currentQuestion.id
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

        savedAnswers[existingIndex] = answerData;

        showToast("Your answer has been updated.");

    } else {

        savedAnswers.unshift(answerData);

        showToast("Your answer has been saved.");
    }

    saveAnswers();
    renderSavedAnswers();
}


// ------------------------------
// DELETE SAVED ANSWER
// ------------------------------

function deleteSavedAnswer(questionId) {

    savedAnswers = savedAnswers.filter(
        item => item.questionId !== questionId
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

    const favoriteQuestions = QUESTIONS.filter(
        question => favorites.includes(question.id)
    );

    if (favoriteQuestions.length === 0) {

        favoritesList.innerHTML = `
            <div class="empty-state">
                <p>You haven't added any favorites yet.</p>
            </div>
        `;

        return;
    }

    favoritesList.innerHTML = favoriteQuestions.map(question => `
        <div class="saved-card">
            <div class="saved-card-category">
                ${formatCategory(question.category)}
            </div>

            <p>${escapeHTML(question.question)}</p>

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

    savedAnswersList.innerHTML = savedAnswers.map(item => `
        <div class="saved-card">

            <div class="saved-card-category">
                ${formatCategory(item.category)}
            </div>

            <h3>${escapeHTML(item.question)}</h3>

            <p>${escapeHTML(item.answer)}</p>

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

    const remaining = Math.max(
        pool.length - used.length,
        0
    );

    if (remainingCount) {
        remainingCount.textContent = remaining;
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

    const question = QUESTIONS.find(
        item => item.id === Number(id)
    );

    if (!question) return;

    currentQuestion = question;

    if (questionText) {
        questionText.textContent = question.question;
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

    const isHidden = followUpText.hidden;

    followUpText.hidden = !isHidden;

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
    document.querySelectorAll("[data-category]");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        currentCategory =
            button.dataset.category;

        categoryButtons.forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        showNewQuestion();
    });
});


// ------------------------------
// DEPTH FILTER
// ------------------------------

if (depthFilter) {

    depthFilter.addEventListener("change", () => {

        currentDepth =
            depthFilter.value;

        showNewQuestion();
    });
}


// ------------------------------
// MODE SELECTOR
// ------------------------------

if (modeSelect) {

    modeSelect.addEventListener("change", () => {

        currentMode =
            modeSelect.value;

        showToast(
            `Mode changed to ${formatMode(currentMode)}.`
        );
    });
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

document.addEventListener("click", event => {

    const loadButton =
        event.target.closest("[data-load-question]");

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

        favorites = favorites.filter(
            favoriteId => favoriteId !== id
        );

        saveFavorites();
        renderFavorites();
        updateFavoriteButton();
        updateStats();

        showToast("Removed from favorites.");

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
});


// ------------------------------
// TOAST MESSAGE
// ------------------------------

function showToast(message) {

    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(showToast.timeout);

    showToast.timeout =
        setTimeout(() => {
            toast.classList.remove("show");
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