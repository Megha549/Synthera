// ============================================
// SYNTHERA - Core App Logic
// ============================================

// ---- LANGUAGE SYSTEM ----
const LANG = {
  en: {
    // Nav
    howItWorks: "How it Works",
    forWhom: "Who is it for?",
    getStarted: "Get Started",
    signIn: "Sign In",

    // Hero
    heroBadge: "🌸 Early Hormonal Screening App",
    heroH1Line1: "Your symptoms,",
    heroH1Line2: "finally",
    heroH1Accent: "understood.",
    heroSub: "AI-powered early screening for Thyroid, Anemia & PCOS — designed for Indian women 30+",
    heroCTA: "Start Free Screening",
    heroLearn: "How it works",

    // How it works
    howTag: "Simple Process",
    howTitle: "Your health journey in 4 simple steps",
    howSub: "No medical jargon. No confusion. Just clear, caring guidance.",
    steps: [
      { icon: "✍️", title: "Tell us your symptoms", desc: "Select what you're feeling — tiredness, hair fall, irregular periods, mood changes and more." },
      { icon: "📋", title: "Answer follow-up questions", desc: "We ask smart follow-up questions based on what you share, to understand your symptoms better." },
      { icon: "🧪", title: "Add your lab values (optional)", desc: "If you have a blood report or thyroid test, add the values. We'll use them to improve accuracy." },
      { icon: "📊", title: "Get your personalised report", desc: "See your risk pattern, what it means, doctor advice, and what to do next." }
    ],

    // Diseases
    diseaseTag: "What we screen for",
    diseaseTitle: "Three conditions. Often missed. Always important.",
    diseases: [
      { name: "Hypothyroidism", icon: "🦋", color: "thyroid", symptoms: ["Constant tiredness & fatigue", "Unexpected weight gain", "Feeling cold all the time", "Hair thinning or hair fall", "Brain fog & poor concentration", "Irregular or heavy periods"] },
      { name: "Iron-Deficiency Anemia", icon: "🩸", color: "anemia", symptoms: ["Weakness & breathlessness", "Pale skin or inner eyelids", "Headaches & dizziness", "Craving unusual things (ice, chalk)", "Hair fall", "Low energy throughout the day"] },
      { name: "PCOS", icon: "🌀", color: "pcos", symptoms: ["Irregular or missed periods", "Excess facial/body hair", "Acne & oily skin", "Weight gain around belly", "Difficulty getting pregnant", "Mood swings & anxiety"] }
    ],

    // Auth
    welcomeBack: "Welcome back 🌸",
    createAccount: "Create your account",
    signInTab: "Sign In",
    signUpTab: "Sign Up",
    emailPlaceholder: "your@email.com",
    passwordPlaceholder: "Enter password",
    namePlaceholder: "Your full name",
    continueBtn: "Continue →",
    orContinueWith: "or continue with",

    // Symptoms
    symptomsTitle: "How are you feeling?",
    symptomsSub: "Select all symptoms you have been experiencing. Don't worry — take your time.",
    selectAll: "Select all that apply:",
    symptoms: [
      { id: "fatigue", icon: "😴", label: "Tiredness / Fatigue" },
      { id: "hairfall", icon: "💇", label: "Hair Fall" },
      { id: "weakness", icon: "💪", label: "Weakness" },
      { id: "irregular_periods", icon: "🗓️", label: "Irregular Periods" },
      { id: "headache", icon: "🤕", label: "Headache" },
      { id: "mood_swings", icon: "😔", label: "Mood Swings" },
      { id: "weight_gain", icon: "⚖️", label: "Weight Gain" },
      { id: "cold_hands", icon: "🥶", label: "Feeling Cold" },
      { id: "acne", icon: "🌡️", label: "Acne / Pimples" },
      { id: "breathless", icon: "💨", label: "Breathlessness" },
      { id: "brain_fog", icon: "🧠", label: "Brain Fog / Forgetfulness" },
      { id: "pale_skin", icon: "😶", label: "Pale Skin / Nails" },
      { id: "facial_hair", icon: "🧔", label: "Facial / Body Hair" },
      { id: "dizziness", icon: "💫", label: "Dizziness" },
      { id: "bloating", icon: "🤰", label: "Bloating" },
      { id: "sleep_issues", icon: "🌙", label: "Sleep Problems" }
    ],
    nextBtn: "Next →",
    backBtn: "← Back",
  },

  hi: {
    // Nav
    howItWorks: "कैसे काम करता है",
    forWhom: "किसके लिए है?",
    getStarted: "शुरू करें",
    signIn: "साइन इन",

    // Hero
    heroBadge: "🌸 हार्मोनल स्क्रीनिंग ऐप",
    heroH1Line1: "आपके लक्षण,",
    heroH1Line2: "अब",
    heroH1Accent: "समझे जाएंगे।",
    heroSub: "थायरॉइड, एनीमिया और PCOS की जल्दी पहचान — 30+ भारतीय महिलाओं के लिए",
    heroCTA: "मुफ्त स्क्रीनिंग शुरू करें",
    heroLearn: "और जानें",

    howTag: "सरल प्रक्रिया",
    howTitle: "4 आसान कदमों में अपनी सेहत का सफर",
    howSub: "कोई मेडिकल शब्दजाल नहीं। कोई उलझन नहीं। बस सरल, देखभाल भरी मार्गदर्शना।",
    steps: [
      { icon: "✍️", title: "अपने लक्षण बताएं", desc: "जो भी महसूस हो रहा है वो चुनें — थकान, बाल झड़ना, अनियमित पीरियड्स, मूड बदलाव।" },
      { icon: "📋", title: "फॉलो-अप सवाल", desc: "हम आपके जवाब के आधार पर और सवाल पूछते हैं ताकि आपके लक्षण बेहतर समझ सकें।" },
      { icon: "🧪", title: "लैब रिपोर्ट जोड़ें (वैकल्पिक)", desc: "अगर खून या थायरॉइड की जांच है, तो उसकी संख्याएं डालें।" },
      { icon: "📊", title: "अपनी रिपोर्ट पाएं", desc: "जोखिम का पैटर्न, डॉक्टर की सलाह और आगे क्या करना है — सब एक जगह।" }
    ],

    diseaseTag: "हम किसकी जांच करते हैं",
    diseaseTitle: "तीन बीमारियाँ। अक्सर अनदेखी। हमेशा जरूरी।",
    diseases: [
      { name: "हाइपोथायरॉइडिज़्म", icon: "🦋", color: "thyroid", symptoms: ["लगातार थकान", "वजन बढ़ना", "हमेशा ठंड लगना", "बाल पतले होना", "भूलना / दिमाग सुस्त", "अनियमित पीरियड्स"] },
      { name: "आयरन की कमी (एनीमिया)", icon: "🩸", color: "anemia", symptoms: ["कमजोरी और सांस फूलना", "पीला चेहरा / नाखून", "सिरदर्द और चक्कर", "बर्फ / मिट्टी खाने की इच्छा", "बाल झड़ना", "दिनभर थकान"] },
      { name: "PCOS", icon: "🌀", color: "pcos", symptoms: ["अनियमित या बंद पीरियड्स", "चेहरे / शरीर पर बाल", "मुंहासे और तैलीय त्वचा", "पेट के आसपास वजन", "गर्भधारण में कठिनाई", "मूड स्विंग्स और चिंता"] }
    ],

    welcomeBack: "वापसी पर स्वागत है 🌸",
    createAccount: "अपना अकाउंट बनाएं",
    signInTab: "साइन इन",
    signUpTab: "साइन अप",
    emailPlaceholder: "आपका ईमेल",
    passwordPlaceholder: "पासवर्ड डालें",
    namePlaceholder: "आपका पूरा नाम",
    continueBtn: "आगे बढ़ें →",
    orContinueWith: "या जारी रखें",

    symptomsTitle: "आप कैसा महसूस कर रही हैं?",
    symptomsSub: "जो भी लक्षण हैं वो चुनें। घबराएं नहीं — अपना समय लें।",
    selectAll: "जो लागू हो वो चुनें:",
    symptoms: [
      { id: "fatigue", icon: "😴", label: "थकान" },
      { id: "hairfall", icon: "💇", label: "बाल झड़ना" },
      { id: "weakness", icon: "💪", label: "कमजोरी" },
      { id: "irregular_periods", icon: "🗓️", label: "अनियमित पीरियड्स" },
      { id: "headache", icon: "🤕", label: "सिरदर्द" },
      { id: "mood_swings", icon: "😔", label: "मूड बदलाव" },
      { id: "weight_gain", icon: "⚖️", label: "वजन बढ़ना" },
      { id: "cold_hands", icon: "🥶", label: "ठंड लगना" },
      { id: "acne", icon: "🌡️", label: "मुंहासे" },
      { id: "breathless", icon: "💨", label: "सांस फूलना" },
      { id: "brain_fog", icon: "🧠", label: "भूलना / दिमाग सुस्त" },
      { id: "pale_skin", icon: "😶", label: "पीला चेहरा / नाखून" },
      { id: "facial_hair", icon: "🧔", label: "चेहरे पर बाल" },
      { id: "dizziness", icon: "💫", label: "चक्कर आना" },
      { id: "bloating", icon: "🤰", label: "पेट फूलना" },
      { id: "sleep_issues", icon: "🌙", label: "नींद न आना" }
    ],
    nextBtn: "आगे →",
    backBtn: "← वापस",
  },

  hinglish: {
    howItWorks: "Kaise kaam karta hai",
    forWhom: "Kiske liye hai?",
    getStarted: "Shuru karo",
    signIn: "Sign In",
    heroBadge: "🌸 Hormonal Screening App",
    heroH1Line1: "Aapke symptoms,",
    heroH1Line2: "ab",
    heroH1Accent: "samjhe jaayenge.",
    heroSub: "Thyroid, Anemia aur PCOS ki jaldi pehchaan — 30+ Indian women ke liye",
    heroCTA: "Free Screening Shuru Karo",
    heroLearn: "Aur jaano",
    howTag: "Simple Process",
    howTitle: "4 aasaan steps mein apni health ka safar",
    howSub: "Koi medical jargon nahi. Koi confusion nahi. Bas simple, caring guidance.",
    steps: [
      { icon: "✍️", title: "Apne symptoms batao", desc: "Jo bhi feel ho raha hai choose karo — thakaan, baal girna, irregular periods, mood changes." },
      { icon: "📋", title: "Follow-up questions", desc: "Hum aapke answers ke basis pe aur questions poochte hain takee better samajh sakein." },
      { icon: "🧪", title: "Lab report add karo (optional)", desc: "Agar blood test ya thyroid test hai, toh values daal do — accuracy badhegi." },
      { icon: "📊", title: "Apni report pao", desc: "Risk pattern, doctor advice, aur aage kya karna hai — sab ek jagah." }
    ],
    diseaseTag: "Hum kya screen karte hain",
    diseaseTitle: "Teen conditions. Aksar miss hoti hain. Hamesha important.",
    diseases: [
      { name: "Hypothyroidism", icon: "🦋", color: "thyroid", symptoms: ["Constant thakaan", "Weight gain", "Hamesha thand lagna", "Baal patla hona", "Bhoolna / dimag sust", "Irregular periods"] },
      { name: "Iron Deficiency Anemia", icon: "🩸", color: "anemia", symptoms: ["Kamzori aur saas phoolna", "Peela chehra / nakhun", "Sir dard aur chakkar", "Baraf / mitti khane ki ichha", "Baal girna", "Dinbhar thakaan"] },
      { name: "PCOS", icon: "🌀", color: "pcos", symptoms: ["Irregular ya band periods", "Chehre / body pe baal", "Acne aur oily skin", "Pet ke around weight", "Pregnancy mein mushkil", "Mood swings aur anxiety"] }
    ],
    welcomeBack: "Wapas aagayi! 🌸",
    createAccount: "Apna account banao",
    signInTab: "Sign In",
    signUpTab: "Sign Up",
    emailPlaceholder: "aapka@email.com",
    passwordPlaceholder: "Password daalo",
    namePlaceholder: "Aapka poora naam",
    continueBtn: "Aage Badho →",
    orContinueWith: "ya continue karo",
    symptomsTitle: "Aap kaisi feel kar rahi hain?",
    symptomsSub: "Jo bhi symptoms hain wo choose karo. Ghabrao mat — apna time lo.",
    selectAll: "Jo lagoo ho wo chunin:",
    symptoms: [
      { id: "fatigue", icon: "😴", label: "Thakaan / Fatigue" },
      { id: "hairfall", icon: "💇", label: "Baal Girna" },
      { id: "weakness", icon: "💪", label: "Kamzori" },
      { id: "irregular_periods", icon: "🗓️", label: "Irregular Periods" },
      { id: "headache", icon: "🤕", label: "Sir Dard" },
      { id: "mood_swings", icon: "😔", label: "Mood Swings" },
      { id: "weight_gain", icon: "⚖️", label: "Weight Gain" },
      { id: "cold_hands", icon: "🥶", label: "Thand Lagna" },
      { id: "acne", icon: "🌡️", label: "Acne / Pimple" },
      { id: "breathless", icon: "💨", label: "Saas Phoolna" },
      { id: "brain_fog", icon: "🧠", label: "Bhoolna / Dimag Sust" },
      { id: "pale_skin", icon: "😶", label: "Peela Chehra / Nakhun" },
      { id: "facial_hair", icon: "🧔", label: "Chehre pe Baal" },
      { id: "dizziness", icon: "💫", label: "Chakkar Aana" },
      { id: "bloating", icon: "🤰", label: "Pet Phoolna" },
      { id: "sleep_issues", icon: "🌙", label: "Neend Na Aana" }
    ],
    nextBtn: "Aage →",
    backBtn: "← Wapas",
  }
};

// ---- ADAPTIVE SUB-QUESTIONS ----
const SUB_QUESTIONS = {
  headache: {
    en: [
      {
        id: "headache_side",
        question: "Which side is the headache on?",
        why: "The location helps identify if it's tension, migraine or hormone-related.",
        meaning: "We want to know — is the pain on one side of your head, or all over? Or is it at the back of your neck?",
        type: "pills",
        options: ["Left side", "Right side", "Both sides", "Back of head", "All over"]
      },
      {
        id: "headache_duration",
        question: "How long have you been having these headaches?",
        why: "Chronic headaches (>2 weeks) may be connected to hormonal or nutritional imbalances.",
        meaning: "Kitne time se sir dard ho raha hai? Kal se? Ya pichle kai hafte se?",
        type: "pills",
        options: ["Just today", "Few days", "1-2 weeks", "More than a month", "Months"]
      },
      {
        id: "headache_severity",
        question: "How severe is the pain? (1 = mild, 10 = unbearable)",
        why: "Severity helps us understand how much this is affecting your daily life.",
        meaning: "1 matlab bahut halka dard, 10 matlab bahut zyada dard — aap kitna feel kar rahi hain?",
        type: "slider",
        min: 1, max: 10
      }
    ],
    hi: [
      {
        id: "headache_side",
        question: "सिरदर्द किस तरफ है?",
        why: "दर्द की जगह से पता चलता है — यह तनाव, माइग्रेन या हार्मोन से जुड़ा है।",
        meaning: "क्या दर्द सिर के एक तरफ है, दोनों तरफ है, या पूरे सिर में है?",
        type: "pills",
        options: ["बायीं तरफ", "दायीं तरफ", "दोनों तरफ", "गर्दन के पीछे", "पूरे सिर में"]
      },
      {
        id: "headache_duration",
        question: "कितने समय से सिरदर्द हो रहा है?",
        why: "2 हफ्ते से ज्यादा का सिरदर्द हार्मोन या पोषण की कमी से जुड़ा हो सकता है।",
        meaning: "आज से? कुछ दिनों से? या कई महीनों से?",
        type: "pills",
        options: ["आज से", "कुछ दिनों से", "1-2 हफ्ते", "महीने से ज्यादा", "कई महीने"]
      },
      {
        id: "headache_severity",
        question: "दर्द कितना तेज है? (1 = हल्का, 10 = असहनीय)",
        why: "तीव्रता से हम समझते हैं कि यह आपकी दिनचर्या को कितना प्रभावित कर रहा है।",
        meaning: "1 मतलब बहुत हल्का, 10 मतलब बिल्कुल नहीं सहा जाता।",
        type: "slider",
        min: 1, max: 10
      }
    ],
    hinglish: [
      {
        id: "headache_side",
        question: "Sir dard kis taraf hai?",
        why: "Dard ki jagah se pata chalta hai — tension, migraine ya hormone se related hai.",
        meaning: "Kya dard sir ke ek side mein hai, dono side mein, ya poore sir mein?",
        type: "pills",
        options: ["Left side", "Right side", "Dono taraf", "Gardan ke peeche", "Poore sir mein"]
      },
      {
        id: "headache_duration",
        question: "Kitne time se sir dard ho raha hai?",
        why: "2 hafte se zyada ka sir dard hormone ya nutrition se related ho sakta hai.",
        meaning: "Aaj se? Kuch dinon se? Ya kai mahino se?",
        type: "pills",
        options: ["Aaj se", "Kuch dinon se", "1-2 hafte", "Ek mahine se zyada", "Kai mahine"]
      },
      {
        id: "headache_severity",
        question: "Dard kitna zyada hai? (1 = halka, 10 = bahut zyada)",
        why: "Intensity se hum samajhte hain — yeh aapki daily life ko kitna affect kar raha hai.",
        meaning: "1 matlab bahut kam, 10 matlab bilkul nahi sahaa jaata.",
        type: "slider",
        min: 1, max: 10
      }
    ]
  },
  fatigue: {
    en: [
      {
        id: "fatigue_timing",
        question: "When do you feel most tired?",
        why: "Fatigue timing patterns can indicate thyroid issues (morning) vs. anemia (all day) vs. PCOS (afternoon slump).",
        meaning: "Is there a specific time of day when tiredness is worst?",
        type: "pills",
        options: ["Morning (waking up)", "After meals", "Afternoon", "Evening", "All day long"]
      },
      {
        id: "fatigue_duration",
        question: "How long have you been feeling this tired?",
        why: "Persistent fatigue for weeks points to a deeper hormonal or nutritional cause.",
        meaning: "When did this tiredness start? Was there a specific trigger or it crept up slowly?",
        type: "pills",
        options: ["Last few days", "2-4 weeks", "1-3 months", "More than 3 months", "Can't remember"]
      },
      {
        id: "fatigue_rest",
        question: "Does rest or sleep improve your tiredness?",
        why: "If rest doesn't help, it may indicate a hormonal issue rather than just lifestyle tiredness.",
        meaning: "Agar aap so leti hain ya aram karti hain — kya thakaan kam hoti hai?",
        type: "pills",
        options: ["Yes, fully refreshed", "Partially better", "No difference", "Feel more tired after sleep"]
      }
    ],
    hi: [
      {
        id: "fatigue_timing",
        question: "सबसे ज्यादा थकान कब होती है?",
        why: "थकान का समय बताता है — सुबह (थायरॉइड), दिनभर (एनीमिया) या शाम (PCOS)।",
        meaning: "दिन के किस हिस्से में थकान सबसे ज्यादा होती है?",
        type: "pills",
        options: ["सुबह उठते ही", "खाने के बाद", "दोपहर में", "शाम को", "पूरे दिन"]
      },
      {
        id: "fatigue_duration",
        question: "कितने समय से इतनी थकान है?",
        why: "हफ्तों की थकान हार्मोन या पोषण की कमी का संकेत हो सकती है।",
        meaning: "यह थकान कब से शुरू हुई?",
        type: "pills",
        options: ["कुछ दिनों से", "2-4 हफ्ते", "1-3 महीने", "3 महीने से ज्यादा", "याद नहीं"]
      },
      {
        id: "fatigue_rest",
        question: "आराम या नींद से थकान कम होती है?",
        why: "अगर आराम से फर्क नहीं पड़ता, तो यह हार्मोनल कारण हो सकता है।",
        meaning: "सोने के बाद क्या ताजगी आती है?",
        type: "pills",
        options: ["हाँ, पूरी ताजगी", "थोड़ा बेहतर", "कोई फर्क नहीं", "सोने के बाद भी थकान"]
      }
    ],
    hinglish: [
      {
        id: "fatigue_timing",
        question: "Sabse zyada thakaan kab hoti hai?",
        why: "Thakaan ka time bataata hai — morning (thyroid), din bhar (anemia) ya evening (PCOS).",
        meaning: "Din ke kis hisse mein thakaan sabse zyada feel hoti hai?",
        type: "pills",
        options: ["Subah uthke", "Khana khane ke baad", "Dopahar mein", "Shaam ko", "Poore din"]
      },
      {
        id: "fatigue_duration",
        question: "Kitne time se itni thakaan hai?",
        why: "Hafte ki thakaan hormones ya nutrition ki kami ka sign ho sakta hai.",
        meaning: "Yeh thakaan kab se start hui?",
        type: "pills",
        options: ["Kuch dinon se", "2-4 hafte", "1-3 mahine", "3 mahine se zyada", "Yaad nahi"]
      },
      {
        id: "fatigue_rest",
        question: "Neend ya rest se thakaan kam hoti hai?",
        why: "Agar rest se koi fark nahi — toh yeh hormonal cause ho sakta hai.",
        meaning: "Sone ke baad fresh feel hoti hai ya nahi?",
        type: "pills",
        options: ["Haan, poori taazgi", "Thoda better", "Koi fark nahi", "Sone ke baad bhi thakaan"]
      }
    ]
  },
  irregular_periods: {
    en: [
      {
        id: "period_gap",
        question: "How irregular are your periods?",
        why: "Gap between cycles helps distinguish PCOS (long gaps) from thyroid-related irregularity.",
        meaning: "How many days apart do your periods come? A normal cycle is 21-35 days.",
        type: "pills",
        options: ["Come every 21-35 days", "Gap of 35-45 days", "Gap of 45-90 days", "3+ months gap", "Completely stopped"]
      },
      {
        id: "period_flow",
        question: "How is your period flow?",
        why: "Heavy flow can indicate anemia risk; very light flow may indicate PCOS or thyroid issues.",
        meaning: "Light means 1-2 pads per day; heavy means changing pads every 1-2 hours.",
        type: "pills",
        options: ["Very light / spotting", "Normal", "Heavy", "Very heavy / clots", "Unpredictable"]
      },
      {
        id: "period_pain",
        question: "Do you have pain during periods?",
        why: "Pain patterns help us assess underlying hormonal causes.",
        meaning: "Do you have cramps? Is the pain manageable or does it stop your daily activities?",
        type: "pills",
        options: ["No pain", "Mild cramps", "Moderate pain", "Severe / bedridden", "Pain all month"]
      }
    ],
    hi: [
      {
        id: "period_gap",
        question: "पीरियड्स कितने अनियमित हैं?",
        why: "चक्र के बीच का अंतर PCOS और थायरॉइड में अंतर बताता है।",
        meaning: "सामान्य चक्र 21-35 दिन का होता है। आपके पीरियड्स कितने दिनों में आते हैं?",
        type: "pills",
        options: ["21-35 दिन में", "35-45 दिन का अंतर", "45-90 दिन का अंतर", "3+ महीने का अंतर", "बिल्कुल बंद"]
      },
      {
        id: "period_flow",
        question: "पीरियड्स में रक्तस्राव कैसा है?",
        why: "ज्यादा रक्तस्राव एनीमिया का खतरा, बहुत कम PCOS या थायरॉइड का संकेत हो सकता है।",
        meaning: "हल्का = 1-2 पैड प्रतिदिन; भारी = हर 1-2 घंटे में बदलना पड़े।",
        type: "pills",
        options: ["बहुत हल्का / धब्बे", "सामान्य", "भारी", "बहुत भारी / थक्के", "हर बार अलग"]
      },
      {
        id: "period_pain",
        question: "पीरियड्स में दर्द होता है?",
        why: "दर्द का पैटर्न हार्मोनल कारणों को समझने में मदद करता है।",
        meaning: "क्या ऐंठन होती है? क्या दर्द से रोजमर्रा का काम रुक जाता है?",
        type: "pills",
        options: ["कोई दर्द नहीं", "हल्की ऐंठन", "मध्यम दर्द", "असहनीय / बिस्तर पर", "पूरे महीने दर्द"]
      }
    ],
    hinglish: [
      {
        id: "period_gap",
        question: "Periods kitne irregular hain?",
        why: "Cycle ka gap PCOS aur thyroid mein farq karta hai.",
        meaning: "Normal cycle 21-35 din ka hota hai. Aapke periods kitne dinon mein aate hain?",
        type: "pills",
        options: ["21-35 din mein", "35-45 din ka gap", "45-90 din ka gap", "3+ mahine ka gap", "Bilkul band"]
      },
      {
        id: "period_flow",
        question: "Period mein flow kaisa hai?",
        why: "Zyada flow anemia ka risk, bahut kam PCOS ya thyroid ka sign ho sakta hai.",
        meaning: "Halka = 1-2 pad per day; heavy = har 1-2 ghante mein badalna pade.",
        type: "pills",
        options: ["Bahut halka / spotting", "Normal", "Heavy", "Bahut heavy / clots", "Har baar alag"]
      },
      {
        id: "period_pain",
        question: "Periods mein dard hota hai?",
        why: "Dard ka pattern hormonal causes samajhne mein help karta hai.",
        meaning: "Kya cramps hote hain? Kya dard se daily kaam rukh jaata hai?",
        type: "pills",
        options: ["Koi dard nahi", "Halke cramps", "Medium dard", "Bahut zyada / bistar pe", "Poore mahine dard"]
      }
    ]
  },
  hairfall: {
    en: [
      {
        id: "hairfall_pattern",
        question: "Where are you losing hair?",
        why: "Pattern of hair loss helps identify thyroid (diffuse) vs. PCOS (front/temples) vs. anemia.",
        meaning: "Is hair falling from all over, from the top/crown, or from the sides near your temples?",
        type: "pills",
        options: ["All over (thinning)", "Crown / top of head", "Temples / front", "In patches", "Along part line"]
      },
      {
        id: "hairfall_amount",
        question: "How much hair fall per day approximately?",
        why: "Losing more than 100 strands/day consistently is medically significant.",
        meaning: "Ghar pe nazar aata hai — pillow pe, nali mein, kaanghi mein kitne baal aate hain?",
        type: "pills",
        options: ["Fewer than 50 strands", "50-100 strands", "100-150 strands", "More than 150", "Visible bald patches"]
      }
    ],
    hi: [
      {
        id: "hairfall_pattern",
        question: "बाल कहाँ से झड़ रहे हैं?",
        why: "बाल झड़ने का पैटर्न थायरॉइड (हर तरफ), PCOS (माथे से) और एनीमिया में अलग होता है।",
        meaning: "सब तरफ से पतले हो रहे हैं, ऊपर से, या माथे के पास से?",
        type: "pills",
        options: ["सब तरफ से (पतले)", "सिर के ऊपर से", "माथे / कनपटी से", "जगह-जगह से", "माँग की लाइन से"]
      },
      {
        id: "hairfall_amount",
        question: "रोज कितने बाल झड़ते हैं?",
        why: "रोज 100 से ज्यादा बाल झड़ना चिकित्सकीय दृष्टि से महत्वपूर्ण है।",
        meaning: "तकिए पर, नाली में, कंघी में — कितने बाल आते हैं?",
        type: "pills",
        options: ["50 से कम", "50-100", "100-150", "150 से ज्यादा", "गंजे धब्बे दिख रहे हैं"]
      }
    ],
    hinglish: [
      {
        id: "hairfall_pattern",
        question: "Baal kahaan se gir rahe hain?",
        why: "Hair fall ka pattern thyroid (sab taraf), PCOS (mathe se) aur anemia mein alag hota hai.",
        meaning: "Sab taraf se patale ho rahe hain, upar se, ya mathe ke paas se?",
        type: "pills",
        options: ["Sab taraf se (patale)", "Sir ke upar se", "Mathe / kanpati se", "Jagah jagah se", "Maang ki line se"]
      },
      {
        id: "hairfall_amount",
        question: "Roz kitne baal girte hain?",
        why: "Roz 100 se zyada baal girna medically significant hai.",
        meaning: "Takiye pe, naali mein, kanghi mein — kitne baal aate hain?",
        type: "pills",
        options: ["50 se kam", "50-100", "100-150", "150 se zyada", "Gunjaapan ke patches dikh rahe hain"]
      }
    ]
  },
  weight_gain: {
    en: [
      {
        id: "weight_where",
        question: "Where are you gaining weight?",
        why: "Fat distribution pattern is key — belly/waist suggests PCOS, general suggests thyroid.",
        meaning: "Is the weight all over your body, or concentrated around the belly/waist area?",
        type: "pills",
        options: ["All over body", "Mainly belly / waist", "Face and neck", "Hips and thighs", "Unsure"]
      },
      {
        id: "weight_speed",
        question: "How fast did the weight come on?",
        why: "Sudden unexplained weight gain is a stronger signal of hormonal change.",
        meaning: "Did you gain weight slowly over years, or did it happen in the last few months without change in diet?",
        type: "pills",
        options: ["Gradually over years", "Past 6 months", "Past 3 months", "Suddenly (< 1 month)", "After pregnancy/stress"]
      }
    ],
    hi: [
      {
        id: "weight_where",
        question: "वजन कहाँ बढ़ रहा है?",
        why: "पेट/कमर पर वजन PCOS का, पूरे शरीर पर थायरॉइड का संकेत हो सकता है।",
        meaning: "वजन पूरे शरीर पर है, या सिर्फ पेट और कमर के आसपास?",
        type: "pills",
        options: ["पूरे शरीर पर", "मुख्यतः पेट / कमर", "चेहरे और गर्दन पर", "कूल्हे और जांघ", "पता नहीं"]
      },
      {
        id: "weight_speed",
        question: "वजन कितनी तेजी से बढ़ा?",
        why: "अचानक वजन बढ़ना हार्मोनल बदलाव का मजबूत संकेत है।",
        meaning: "धीरे-धीरे सालों में बढ़ा, या बिना खान-पान बदले अचानक बढ़ा?",
        type: "pills",
        options: ["सालों में धीरे-धीरे", "पिछले 6 महीने", "पिछले 3 महीने", "अचानक (< 1 महीना)", "प्रसव / तनाव के बाद"]
      }
    ],
    hinglish: [
      {
        id: "weight_where",
        question: "Weight kahaan badh raha hai?",
        why: "Pet/kamar pe weight PCOS ka, poore sharir pe thyroid ka sign ho sakta hai.",
        meaning: "Weight poore sharir pe hai, ya sirf pet aur kamar ke around?",
        type: "pills",
        options: ["Poore sharir pe", "Mainly pet / kamar", "Chehre aur gardan pe", "Koolhe aur jaanghen", "Pata nahi"]
      },
      {
        id: "weight_speed",
        question: "Weight kitni jaldi badha?",
        why: "Achanak weight gain hormonal change ka strong signal hai.",
        meaning: "Dheere dheere saalon mein badha, ya bina kuch badle achanak badha?",
        type: "pills",
        options: ["Saalon mein dheere", "Pichhle 6 mahine", "Pichhle 3 mahine", "Achanak (< 1 mahina)", "Delivery / stress ke baad"]
      }
    ]
  }
};

// ---- BEHAVIORAL TRACKING ----
const BehaviorTracker = {
  data: {
    sessionStart: Date.now(),
    hesitations: [],       // long pauses before answering
    revisits: [],          // going back to change answers
    meanings_opened: [],   // clicked "what does this mean"
    pageTime: {},          // time spent per page
    currentPage: null,
    pageStart: null,
    answers: {}
  },

  startPage(pageName) {
    if (this.data.currentPage) {
      this.endPage(this.data.currentPage);
    }
    this.data.currentPage = pageName;
    this.data.pageStart = Date.now();
  },

  endPage(pageName) {
    if (this.data.pageStart) {
      const duration = Date.now() - this.data.pageStart;
      this.data.pageTime[pageName] = (this.data.pageTime[pageName] || 0) + duration;
    }
  },

  recordHesitation(questionId, ms) {
    if (ms > 8000) {  // 8+ seconds = hesitation
      this.data.hesitations.push({ questionId, ms, timestamp: Date.now() });
    }
  },

  recordMeaningOpened(questionId) {
    this.data.meanings_opened.push({ questionId, timestamp: Date.now() });
  },

  recordAnswer(questionId, value) {
    const prev = this.data.answers[questionId];
    if (prev !== undefined && prev !== value) {
      this.data.revisits.push({ questionId, from: prev, to: value, timestamp: Date.now() });
    }
    this.data.answers[questionId] = value;
  },

  getSummary() {
    return {
      totalSessionMinutes: Math.round((Date.now() - this.data.sessionStart) / 60000),
      hesitantQuestions: this.data.hesitations.map(h => h.questionId),
      confusedAbout: this.data.meanings_opened.map(m => m.questionId),
      changedMind: this.data.revisits.map(r => r.questionId),
      answers: this.data.answers
    };
  },

  // Insight for backend
  getBehavioralInsights() {
    const s = this.getSummary();
    const insights = [];
    if (s.hesitantQuestions.length > 3) insights.push("User shows signs of health anxiety or uncertainty about symptoms.");
    if (s.changedMind.length > 2) insights.push("User revised multiple answers — possible uncertainty about symptom severity.");
    if (s.confusedAbout.length > 2) insights.push("User needed clarification on several medical terms — consider simplified follow-up.");
    if (s.totalSessionMinutes > 20) insights.push("Long session — user is engaged and thorough.");
    return insights;
  }
};

// ---- GLOBAL STATE ----
const AppState = {
  language: 'hinglish',
  user: null,
  selectedSymptoms: [],
  subAnswers: {},
  profileData: {},
  labValues: {},
  reportUploaded: false,
  currentStep: 1,
  totalSteps: 5
};

// ---- LANGUAGE SWITCHER ----
function setLanguage(lang) {
  AppState.language = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  updatePageText();
  // Store in session
  try { sessionStorage.setItem('synthera_lang', lang); } catch(e) {}
}

function t(key, nested = null) {
  const langData = LANG[AppState.language] || LANG.hinglish;
  if (nested !== null) return langData[key]?.[nested] || LANG.en[key]?.[nested] || key;
  return langData[key] || LANG.en[key] || key;
}

// ---- TOAST ----
function showToast(msg, type = '') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.className = `toast ${type} show`;
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ---- SCROLL REVEAL ----
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ---- NAVBAR SCROLL ----
function initNavbar() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ---- SYMPTOMS PAGE LOGIC ----
function toggleSymptom(id, el) {
  const idx = AppState.selectedSymptoms.indexOf(id);
  if (idx === -1) {
    AppState.selectedSymptoms.push(id);
    el.classList.add('selected');
  } else {
    AppState.selectedSymptoms.splice(idx, 1);
    el.classList.remove('selected');
    // Remove sub-questions if deselected
    const subContainer = document.getElementById(`sub_${id}`);
    if (subContainer) subContainer.remove();
  }
  BehaviorTracker.recordAnswer(`symptom_${id}`, idx === -1 ? 'selected' : 'deselected');
  updateSubQuestions(id, idx === -1);
}

function updateSubQuestions(symptomId, show) {
  const container = document.getElementById('sub-questions-area');
  if (!container) return;

  const existing = document.getElementById(`sub_${symptomId}`);
  if (!show) {
    if (existing) existing.remove();
    return;
  }
  if (existing) return; // already shown

  const qs = SUB_QUESTIONS[symptomId]?.[AppState.language] ||
             SUB_QUESTIONS[symptomId]?.hinglish ||
             SUB_QUESTIONS[symptomId]?.en;
  if (!qs) return;

  const wrapper = document.createElement('div');
  wrapper.id = `sub_${symptomId}`;
  wrapper.style.animationDelay = '0.1s';

  qs.forEach((q, qi) => {
    const card = document.createElement('div');
    card.className = 'question-card sub-question';
    card.style.animationDelay = `${qi * 0.1}s`;

    let inputHtml = '';
    if (q.type === 'pills') {
      inputHtml = `<div class="option-pills">
        ${q.options.map(opt => `
          <button class="option-pill" onclick="selectSubOption(this, '${q.id}', '${opt.replace(/'/g,"&#39;")}')">
            ${opt}
          </button>`).join('')}
      </div>`;
    } else if (q.type === 'slider') {
      inputHtml = `
        <div class="scale-value" id="val_${q.id}">${Math.round((q.min + q.max) / 2)}</div>
        <input type="range" class="scale-slider" min="${q.min}" max="${q.max}" 
               value="${Math.round((q.min + q.max) / 2)}"
               oninput="updateSlider('${q.id}', this.value)">
        <div class="scale-labels"><span>${q.min} – Mild</span><span>${q.max} – Severe</span></div>`;
    }

    card.innerHTML = `
      <div class="q-label">↳ ${q.question}</div>
      <div class="q-why"><span>ℹ️</span> ${q.why}</div>
      <button class="q-meaning-btn" onclick="toggleMeaning('meaning_${q.id}', '${symptomId}', '${q.id}')">
        🤔 Matlab kya hai? / What does this mean?
      </button>
      <div class="q-meaning-box hidden" id="meaning_${q.id}">${q.meaning}</div>
      ${inputHtml}
    `;
    wrapper.appendChild(card);
  });

  container.appendChild(wrapper);
}

function selectSubOption(el, qId, value) {
  el.closest('.option-pills').querySelectorAll('.option-pill').forEach(p => p.classList.remove('selected'));
  el.classList.add('selected');
  AppState.subAnswers[qId] = value;
  BehaviorTracker.recordAnswer(qId, value);
}

function updateSlider(qId, value) {
  document.getElementById(`val_${qId}`).textContent = value;
  AppState.subAnswers[qId] = parseInt(value);
  BehaviorTracker.recordAnswer(qId, value);
}

function toggleMeaning(boxId, symptomId, qId) {
  const box = document.getElementById(boxId);
  if (box) {
    box.classList.toggle('hidden');
    if (!box.classList.contains('hidden')) {
      BehaviorTracker.recordMeaningOpened(qId);
    }
  }
}

// ---- AUTH ----
function switchAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.auth-form').forEach(f => f.classList.add('hidden'));
  document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
  document.getElementById(`${tab}-form`).classList.remove('hidden');
}

// ---- FORM NAV ----
function goToPage(url) {
  window.location.href = url;
}

// ---- SAVE PROFILE ----
function saveProfile(formData) {
  AppState.profileData = formData;
  try { sessionStorage.setItem('synthera_profile', JSON.stringify(formData)); } catch(e) {}
}

function loadProfile() {
  try {
    const d = sessionStorage.getItem('synthera_profile');
    if (d) AppState.profileData = JSON.parse(d);
  } catch(e) {}
}

// ---- API BRIDGE ----
// All these functions are ready to connect with Flask backend
const API = {
  BASE: '/api',  // Change to your Flask URL

  async predict(payload) {
    try {
      const res = await fetch(`${this.BASE}/predict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      return await res.json();
    } catch(e) {
      console.error('Predict API error:', e);
      return null;
    }
  },

  async uploadReport(file) {
    const fd = new FormData();
    fd.append('report', file);
    try {
      const res = await fetch(`${this.BASE}/parse-report`, {
        method: 'POST',
        body: fd
      });
      return await res.json();
    } catch(e) {
      console.error('Report upload error:', e);
      return null;
    }
  },

  async register(userData) {
    try {
      const res = await fetch(`${this.BASE}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });
      return await res.json();
    } catch(e) {
      console.error('Register error:', e);
      return null;
    }
  },

  async login(credentials) {
    try {
      const res = await fetch(`${this.BASE}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });
      return await res.json();
    } catch(e) {
      console.error('Login error:', e);
      return null;
    }
  }
};

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  // Load saved language
  try {
    const savedLang = sessionStorage.getItem('synthera_lang');
    if (savedLang) AppState.language = savedLang;
  } catch(e) {}

  // Set active lang btn
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === AppState.language);
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  initNavbar();
  initScrollReveal();
  loadProfile();

  // Track current page
  BehaviorTracker.startPage(window.location.pathname);
});

// ---- UPDATE PAGE TEXT (for dynamic re-render) ----
function updatePageText() {
  // Re-render page-specific text based on current language
  // Each page handles its own dynamic content
  const pageId = document.body.dataset.page;
  if (pageId === 'symptoms') renderSymptomsPage();
}

function renderSymptomsPage() {
  const grid = document.getElementById('symptom-grid');
  if (!grid) return;
  const symptoms = t('symptoms');
  grid.innerHTML = symptoms.map(s => `
    <label class="symptom-chip ${AppState.selectedSymptoms.includes(s.id) ? 'selected' : ''}"
           onclick="toggleSymptom('${s.id}', this)">
      <span class="chip-icon">${s.icon}</span>
      <span>${s.label}</span>
    </label>
  `).join('');
}