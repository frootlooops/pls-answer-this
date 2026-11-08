<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tanza Visit Itinerary - Nov 16</title>
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- FontAwesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <!-- Canvas Confetti -->
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
  <!-- Google Fonts: Fredoka & Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <style>
    body {
      font-family: 'Inter', sans-serif;
      background-color: #1e88e5;
      background-image: 
        linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px);
      background-size: 32px 32px;
    }

    .font-heading {
      font-family: 'Fredoka', cursive, sans-serif;
    }

    /* Floating Animation for Dogs */
    @keyframes floatSlow {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(2deg); }
    }
    .floating-dog {
      animation: floatSlow 4s ease-in-out infinite;
    }

    @keyframes pulseSoft {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.03); }
    }
    .pulse-btn {
      animation: pulseSoft 2.5s ease-in-out infinite;
    }

    /* Custom Scrollbar inside Cards */
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f5f9;
      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: #93c5fd;
      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #3b82f6;
    }
  </style>
</head>
<body class="min-h-screen text-slate-800 flex flex-col justify-between items-center p-4 sm:p-6 overflow-x-hidden">

  <!-- TOP HEADER DECORATION -->
  <header class="w-full max-w-4xl flex items-center justify-between text-white mb-4 z-10">
    <div class="flex items-center gap-2">
      <div class="bg-white text-blue-600 font-black p-2 rounded-xl shadow-lg transform -rotate-3 text-lg sm:text-xl font-heading">
        NOV 16 🗓️
      </div>
      <div>
        <h1 class="text-xs tracking-wider uppercase opacity-90 font-bold">Special Invitation</h1>
        <p class="text-sm sm:text-base font-semibold font-heading">Tanza Visit Trip 🚗</p>
      </div>
    </div>
    <div class="text-right">
      <span class="text-xs bg-blue-700/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-blue-400/40 text-blue-100 font-medium">
        By Ewen Sacapaño
      </span>
    </div>
  </header>

  <!-- MAIN CONTAINER (SWAPPABLE CONTENT) -->
  <main class="w-full max-w-4xl my-auto z-10">

    <!-- 1. ENVELOPE / OPENING OVERLAY SCREEN -->
    <div id="welcome-screen" class="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-blue-200 text-center relative overflow-hidden transition-all duration-500">
      
      <!-- Cute Decorative Puppy SVG Badge -->
      <div class="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-6 floating-dog">
        <div class="absolute inset-0 bg-blue-100 rounded-full border-4 border-blue-400/30"></div>
        <!-- Dog SVG with glasses and Star Wars / R2D2 backpack vibe -->
        <svg class="w-full h-full relative z-10" viewBox="0 0 200 200" fill="none">
          <!-- Dog Ears -->
          <ellipse cx="60" cy="70" rx="22" ry="38" fill="#FFF3E0" stroke="#5D4037" stroke-width="4" transform="rotate(-15 60 70)"/>
          <ellipse cx="140" cy="70" rx="22" ry="38" fill="#FFF3E0" stroke="#5D4037" stroke-width="4" transform="rotate(15 140 70)"/>
          <!-- Dog Head -->
          <circle cx="100" cy="100" r="55" fill="#FFFFFF" stroke="#5D4037" stroke-width="4"/>
          <!-- Glasses -->
          <rect x="62" y="82" width="32" height="26" rx="6" fill="none" stroke="#212121" stroke-width="4"/>
          <rect x="106" y="82" width="32" height="26" rx="6" fill="none" stroke="#212121" stroke-width="4"/>
          <line x1="94" y1="92" x2="106" y2="92" stroke="#212121" stroke-width="4"/>
          <!-- Eyes -->
          <circle cx="78" cy="95" r="4" fill="#212121"/>
          <circle cx="122" cy="95" r="4" fill="#212121"/>
          <!-- Snout & Tongue -->
          <ellipse cx="100" cy="115" rx="14" ry="10" fill="#E0E0E0"/>
          <ellipse cx="100" cy="111" rx="8" ry="6" fill="#212121"/>
          <path d="M 98 118 Q 100 126 104 124 Q 106 120 102 118 Z" fill="#FF8A80"/>
          <!-- Cute Backpack Badge -->
          <rect x="130" y="125" width="36" height="42" rx="8" fill="#E0F2FE" stroke="#0284C7" stroke-width="3"/>
          <rect x="136" y="133" width="24" height="12" rx="3" fill="#0284C7"/>
          <circle cx="148" cy="155" r="4" fill="#E11D48"/>
        </svg>
      </div>

      <span class="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 font-bold rounded-full text-xs uppercase tracking-widest mb-3">
        📩 Incoming Message
      </span>
      <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading mb-3">
        You've got a visit itinerary request from Ewen! 🐶
      </h2>
      <p class="text-slate-600 max-w-md mx-auto text-sm sm:text-base mb-8">
        A quick document errand turning into a coffee date & hangouts in Tanza Cavite on <strong class="text-blue-600">November 16</strong>.
      </p>

      <button id="open-btn" onclick="openItinerary()" class="pulse-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-heading font-bold text-lg sm:text-xl px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-3 mx-auto border-2 border-blue-400/40">
        <i class="fa-solid font-bold fa-folder-open text-yellow-300 text-2xl"></i>
        <span>Open Itinerary File</span>
      </button>

      <p class="text-xs text-slate-400 mt-6 italic">Designed with pup energy & good coffee vibes ✨</p>
    </div>

    <!-- 2. MAIN ITINERARY INTERACTIVE DECK (Hidden Initially) -->
    <div id="itinerary-deck" class="hidden flex-col gap-6">

      <!-- NAVIGATION TABS -->
      <div class="bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-lg border border-white/50 flex flex-wrap sm:flex-nowrap justify-between gap-1">
        <button onclick="switchTab(1)" id="tab-1" class="tab-btn flex-1 py-2.5 px-3 rounded-xl font-heading font-bold text-xs sm:text-sm text-blue-600 bg-blue-50 transition flex items-center justify-center gap-2">
          <i class="fa-solid fa-map-location-dot"></i> <span>1. Overview</span>
        </button>
        <button onclick="switchTab(2)" id="tab-2" class="tab-btn flex-1 py-2.5 px-3 rounded-xl font-heading font-bold text-xs sm:text-sm text-slate-500 hover:text-blue-600 transition flex items-center justify-center gap-2">
          <i class="fa-solid fa-circle-question"></i> <span>2. Purpose</span>
        </button>
        <button onclick="switchTab(3)" id="tab-3" class="tab-btn flex-1 py-2.5 px-3 rounded-xl font-heading font-bold text-xs sm:text-sm text-slate-500 hover:text-blue-600 transition flex items-center justify-center gap-2">
          <i class="fa-solid fa-clock"></i> <span>3. Timeline</span>
        </button>
        <button onclick="switchTab(4)" id="tab-4" class="tab-btn flex-1 py-2.5 px-3 rounded-xl font-heading font-bold text-xs sm:text-sm text-slate-500 hover:text-blue-600 transition flex items-center justify-center gap-2">
          <i class="fa-solid fa-heart"></i> <span>4. RSVP</span>
        </button>
      </div>

      <!-- CARD CONTENT AREA -->
      <div class="bg-white rounded-3xl p-5 sm:p-8 shadow-2xl border-4 border-blue-200 min-h-[440px] flex flex-col justify-between relative overflow-hidden">
        
        <!-- ================= CARD 1: OVERVIEW & MAP ================= -->
        <div id="card-1" class="card-content flex flex-col gap-5">
          <div class="flex items-start justify-between border-b pb-4 border-slate-100">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                Route Preview
              </span>
              <h2 class="text-2xl sm:text-3xl font-black text-slate-900 font-heading mt-2">
                TANZA VISIT ITINERARY
              </h2>
              <p class="text-slate-500 text-xs sm:text-sm">Visiting from Manila / Green Residences Makati to Dasma & Tanza</p>
            </div>
            <!-- Dog Avatar badge -->
            <div class="w-14 h-14 bg-blue-50 border-2 border-blue-200 rounded-2xl flex items-center justify-center text-2xl shadow-sm">
              🐶🎒
            </div>
          </div>

          <!-- Interactive Simulated Map Banner -->
          <div class="relative w-full h-52 sm:h-64 bg-slate-900 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-inner group">
            <!-- Simulated Map Background Graphics -->
            <div class="absolute inset-0 opacity-40 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <!-- Map Decorative Route Lines SVG -->
            <svg class="absolute inset-0 w-full h-full stroke-blue-400" fill="none" stroke-width="4" stroke-dasharray="8 6">
              <path d="M 50 40 Q 180 30 260 110 T 520 170" />
            </svg>

            <!-- Map Location Markers -->
            <!-- Manila / Makati -->
            <div class="absolute top-6 left-6 sm:left-12 bg-white/95 backdrop-blur p-2 rounded-xl shadow-md border border-slate-200 flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-red-500 animate-ping"></span>
              <div>
                <p class="text-[10px] uppercase font-bold text-slate-400">Start Point</p>
                <p class="text-xs font-bold text-slate-800">Green Residences, Makati</p>
              </div>
            </div>

            <!-- Dasma Stop -->
            <div class="absolute top-20 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 px-3 py-1.5 rounded-xl shadow-md text-xs font-bold flex items-center gap-1.5">
              <i class="fa-solid fa-graduation-cap text-xs"></i>
              <span>DLSU Dasmariñas (Form 137)</span>
            </div>

            <!-- Tanza Destination -->
            <div class="absolute bottom-6 right-6 sm:right-12 bg-blue-600 text-white p-2.5 rounded-xl shadow-lg border border-blue-300 flex items-center gap-2">
              <i class="fa-solid fa-mug-hot text-yellow-300 text-base"></i>
              <div>
                <p class="text-[10px] uppercase font-bold text-blue-200">Destination</p>
                <p class="text-xs font-extrabold">Tanza Cafe & Meeting Spot</p>
              </div>
            </div>

            <div class="absolute bottom-3 left-4 bg-slate-900/80 backdrop-blur text-white text-[11px] px-3 py-1 rounded-full border border-slate-700">
              <i class="fa-solid fa-car text-blue-400 mr-1"></i> ~1 hr 38 min (62.3 km total)
            </div>
          </div>

          <!-- Trip Quick Specs -->
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
            <div class="bg-blue-50/80 p-3 rounded-2xl border border-blue-100">
              <p class="text-[11px] text-blue-600 font-semibold uppercase">Date</p>
              <p class="text-sm font-bold text-slate-800">Saturday, Nov 16</p>
            </div>
            <div class="bg-blue-50/80 p-3 rounded-2xl border border-blue-100">
              <p class="text-[11px] text-blue-600 font-semibold uppercase">Visitor</p>
              <p class="text-sm font-bold text-slate-800">Ewen Sacapaño</p>
            </div>
            <div class="bg-blue-50/80 p-3 rounded-2xl border border-blue-100 col-span-2 sm:col-span-1">
              <p class="text-[11px] text-blue-600 font-semibold uppercase">Vibe Check</p>
              <p class="text-sm font-bold text-slate-800">100% Fun & Chill ☕</p>
            </div>
          </div>
        </div>

        <!-- ================= CARD 2: PURPOSE OF VISIT ================= -->
        <div id="card-2" class="card-content hidden flex-col gap-4">
          <div class="border-b pb-3 border-slate-100 flex items-center justify-between">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                Objectives
              </span>
              <h2 class="text-2xl sm:text-3xl font-black text-slate-900 font-heading mt-2">
                WHAT IS THE PURPOSE OF THIS VISIT?
              </h2>
            </div>
            <span class="text-3xl">🤓🐶</span>
          </div>

          <p class="text-slate-600 text-xs sm:text-sm">Click on each section below to toggle details for the trip!</p>

          <div class="space-y-3">
            <!-- Accordion Item 1: Document Requests -->
            <div class="border-2 border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50/50">
              <button onclick="toggleAccordion('acc-1')" class="w-full p-4 text-left font-heading font-bold text-slate-800 flex items-center justify-between hover:bg-slate-100 transition">
                <span class="flex items-center gap-3 text-sm sm:text-base text-rose-600">
                  <i class="fa-solid fa-file-circle-exclamation text-xl"></i>
                  <span>Document Requests (The Unfun Part)</span>
                </span>
                <i id="acc-1-icon" class="fa-solid fa-chevron-down text-slate-400 transition-transform"></i>
              </button>
              <div id="acc-1" class="hidden p-4 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60 bg-white">
                <p class="mt-3">
                  I will be heading to my senior high school campus in Dasma to request my <strong class="text-slate-800">Form 137</strong>. 
                  <em>Ngl, I don't know how I got into college without it in the first place to begin with</em>, but that's my school! 😅 Anyway, that's all for the unfun part of the trip.
                </p>
              </div>
            </div>

            <!-- Accordion Item 2: Cafe Experience -->
            <div class="border-2 border-blue-200 rounded-2xl overflow-hidden transition-all bg-blue-50/30">
              <button onclick="toggleAccordion('acc-2')" class="w-full p-4 text-left font-heading font-bold text-slate-800 flex items-center justify-between hover:bg-blue-100/50 transition">
                <span class="flex items-center gap-3 text-sm sm:text-base text-blue-700">
                  <i class="fa-solid fa-mug-hot text-xl text-amber-600"></i>
                  <span>Cafe Experience (The Fun Part!)</span>
                </span>
                <i id="acc-2-icon" class="fa-solid fa-chevron-down text-slate-400 transition-transform rotate-180"></i>
              </button>
              <div id="acc-2" class="p-4 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-blue-100 bg-white">
                <p class="mt-3">
                  After requesting the documents, I'll be heading from Dasma to Tanza, Cavite and I'd love to check out a cute cafe with you! ☕ 
                </p>
                <div class="my-3 p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs">
                  💡 <strong>Open Itinerary Note:</strong> Our itinerary is not strictly confined to a specific spot. If you have any favorite cafes or hidden gems you'd like me to see so I get the full Tanza experience, I'm completely open to it!
                </div>
              </div>
            </div>

            <!-- Accordion Item 3: Friendly Note / Nervous Leg Shake -->
            <div class="border-2 border-purple-200 rounded-2xl overflow-hidden transition-all bg-purple-50/30">
              <button onclick="toggleAccordion('acc-3')" class="w-full p-4 text-left font-heading font-bold text-slate-800 flex items-center justify-between hover:bg-purple-100/50 transition">
                <span class="flex items-center gap-3 text-sm sm:text-base text-purple-700">
                  <i class="fa-solid fa-hand-shake text-xl"></i>
                  <span>First Meeting Disclaimer 💬</span>
                </span>
                <i id="acc-3-icon" class="fa-solid fa-chevron-down text-slate-400 transition-transform"></i>
              </button>
              <div id="acc-3" class="hidden p-4 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-purple-100 bg-white">
                <p class="mt-3">
                  We'll be meeting each other for the first time! So, please bear with me if I look nervous or fidget a lot. 
                  I have a horrible habitual leg shaking (my friends know very well and tell me off for it a lot)! 🦵⚡
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- ================= CARD 3: DAY TIMELINE ================= -->
        <div id="card-3" class="card-content hidden flex-col gap-4">
          <div class="border-b pb-3 border-slate-100 flex items-center justify-between">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                Schedule
              </span>
              <h2 class="text-2xl sm:text-3xl font-black text-slate-900 font-heading mt-2">
                DAY TIMELINE ⏰
              </h2>
            </div>
            <!-- Puppy Bathrobe Graphic -->
            <div class="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-2xl">
              🐶☕
            </div>
          </div>

          <!-- Vertical Timeline Steps -->
          <div class="relative pl-6 border-l-4 border-blue-200 space-y-4 my-2">
            
            <!-- Step 1 -->
            <div class="relative group">
              <div class="absolute -left-[31px] top-1 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold border-4 border-white shadow">
                1
              </div>
              <div class="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 hover:border-blue-300 transition">
                <span class="text-xs font-extrabold text-blue-600 bg-blue-100 px-2.5 py-0.5 rounded-md">10:00 AM</span>
                <h4 class="font-bold text-slate-800 text-sm mt-1">Wake Up & Get Ready 🐾</h4>
                <p class="text-xs text-slate-500">Evven wakes up, grabs coffee/breakfast, and prepares for travel from Manila.</p>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="relative group">
              <div class="absolute -left-[31px] top-1 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold border-4 border-white shadow">
                2
              </div>
              <div class="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 hover:border-blue-300 transition">
                <span class="text-xs font-extrabold text-blue-600 bg-blue-100 px-2.5 py-0.5 rounded-md">12:00 PM</span>
                <h4 class="font-bold text-slate-800 text-sm mt-1">Dasma Document Retrieval 📄</h4>
                <p class="text-xs text-slate-500">Head to school campus in Dasmariñas, Cavite to request Form 137.</p>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="relative group">
              <div class="absolute -left-[31px] top-1 w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold border-4 border-white shadow">
                3
              </div>
              <div class="bg-amber-50/80 p-3.5 rounded-2xl border border-amber-200 hover:border-amber-300 transition">
                <span class="text-xs font-extrabold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-md">Any Time After You're Free</span>
                <h4 class="font-bold text-amber-900 text-sm mt-1">Tanza Cafe Meetup & Chill ☕</h4>
                <p class="text-xs text-amber-700">We head over to our chosen cafe spot in Tanza for coffee, food, and good conversations!</p>
              </div>
            </div>

            <!-- Step 4 -->
            <div class="relative group">
              <div class="absolute -left-[31px] top-1 w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold border-4 border-white shadow">
                4
              </div>
              <div class="bg-emerald-50/80 p-3.5 rounded-2xl border border-emerald-200 hover:border-emerald-300 transition">
                <span class="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-md">Home Time</span>
                <h4 class="font-bold text-emerald-900 text-sm mt-1">Safe Journey Back 🚗</h4>
                <p class="text-xs text-emerald-700">I will ensure you get a safe ride home, and from there I will head back to Manila.</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ================= CARD 4: THANK YOU & RSVP ================= -->
        <div id="card-4" class="card-content hidden flex-col justify-between h-full gap-4">
          <div>
            <div class="text-center mb-4">
              <span class="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                Final Note
              </span>
              <h2 class="text-2xl sm:text-3xl font-black text-slate-900 font-heading mt-2">
                THANK YOU! ❤️
              </h2>
              <p class="text-blue-600 font-heading font-bold text-sm sm:text-base">
                AND I'M LOOKING FORWARD TO IT!
              </p>
            </div>

            <!-- Cute Sleeping/Relaxing Dog SVG Banner -->
            <div class="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-4 text-white text-center shadow-lg relative overflow-hidden my-3">
              <div class="text-4xl mb-1">🐶💤☕</div>
              <p class="text-xs sm:text-sm font-medium opacity-90 max-w-xs mx-auto">
                "Ready for good coffee, fun conversations, and surviving high school admin paperwork!"
              </p>
            </div>
          </div>

          <!-- Interactive Choice / RSVP Buttons -->
          <div class="space-y-3">
            <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider text-center">Respond to Ewen</h3>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="handleRSVP('excited')" class="p-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-heading font-bold rounded-2xl shadow-md transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                <i class="fa-solid fa-circle-check text-xl"></i>
                <span>Count Me In! Can't Wait! 🎉</span>
              </button>

              <button onclick="openCafeModal()" class="p-3.5 bg-amber-500 hover:bg-amber-600 text-white font-heading font-bold rounded-2xl shadow-md transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                <i class="fa-solid fa-mug-hot text-xl"></i>
                <span>Suggest a Cafe Spot ☕</span>
              </button>
            </div>
          </div>

          <!-- RSVP Response Banner Result -->
          <div id="rsvp-status" class="hidden p-3 rounded-xl text-center text-xs sm:text-sm font-bold animate-bounce"></div>
        </div>

        <!-- BOTTOM CARD NAVIGATION BUTTONS -->
        <div class="flex items-center justify-between pt-4 border-t border-slate-100 mt-2">
          <button id="prev-btn" onclick="navCard(-1)" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 font-heading font-bold text-xs sm:text-sm rounded-xl transition flex items-center gap-1.5 opacity-50 cursor-not-allowed" disabled>
            <i class="fa-solid fa-arrow-left"></i> Previous
          </button>
          
          <span id="page-indicator" class="text-xs font-bold text-slate-400">Page 1 of 4</span>

          <button id="next-btn" onclick="navCard(1)" class="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-xs sm:text-sm rounded-xl shadow-md transition flex items-center gap-1.5">
            Next <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>

      </div>

    </div>

  </main>

  <!-- CAFE SUGGESTION MODAL -->
  <div id="cafe-modal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl border-4 border-blue-200 relative animate-scaleUp">
      <button onclick="closeCafeModal()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-xl font-bold">
        &times;
      </button>

      <div class="text-center mb-4">
        <div class="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto text-2xl mb-2">
          ☕
        </div>
        <h3 class="text-xl font-bold font-heading text-slate-800">Recommend a Cafe in Tanza!</h3>
        <p class="text-xs text-slate-500 mt-1">Have a cozy place in mind? Leave your recommendation for Ewen!</p>
      </div>

      <form onsubmit="submitCafeRecommendation(event)" class="space-y-3">
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Cafe Name & Location</label>
          <input type="text" id="cafe-input" required placeholder="e.g. Hidden Garden Cafe Tanza" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-blue-500 font-medium">
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Why do you recommend it? (Optional)</label>
          <textarea id="cafe-reason" rows="2" placeholder="Great match green tea, cozy quiet aesthetic..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-blue-500 font-medium"></textarea>
        </div>
        <button type="submit" class="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold rounded-xl shadow-md text-sm transition">
          Send Recommendation 💌
        </button>
      </form>
    </div>
  </div>

  <!-- FOOTER -->
  <footer class="w-full max-w-4xl text-center text-white/80 text-xs py-3 mt-4 z-10">
    <p>Tanza Visit Itinerary Card deck • Crafted for Ewen Sacapaño • Nov 16 Trip</p>
  </footer>

  <!-- JAVASCRIPT INTERACTION LOGIC -->
  <script>
    let currentTab = 1;

    // Open Main Itinerary from Cover Screen
    function openItinerary() {
      document.getElementById('welcome-screen').classList.add('hidden');
      document.getElementById('itinerary-deck').classList.remove('hidden');
      document.getElementById('itinerary-deck').classList.add('flex');
      
      // Trigger subtle confetti on open
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    // Switch Cards via Navigation Tabs
    function switchTab(tabIndex) {
      currentTab = tabIndex;

      // Hide all card contents
      for (let i = 1; i <= 4; i++) {
        const card = document.getElementById(`card-${i}`);
        const tab = document.getElementById(`tab-${i}`);
        
        if (card) {
          card.classList.add('hidden');
          card.classList.remove('flex');
        }

        if (tab) {
          tab.classList.remove('bg-blue-50', 'text-blue-600');
          tab.classList.add('text-slate-500');
        }
      }

      // Show Active Card
      const activeCard = document.getElementById(`card-${currentTab}`);
      const activeTab = document.getElementById(`tab-${currentTab}`);

      if (activeCard) {
        activeCard.classList.remove('hidden');
        activeCard.classList.add('flex');
      }

      if (activeTab) {
        activeTab.classList.add('bg-blue-50', 'text-blue-600');
        activeTab.classList.remove('text-slate-500');
      }

      // Update Prev / Next Buttons state
      const prevBtn = document.getElementById('prev-btn');
      const nextBtn = document.getElementById('next-btn');
      const pageIndicator = document.getElementById('page-indicator');

      pageIndicator.innerText = `Page ${currentTab} of 4`;

      if (currentTab === 1) {
        prevBtn.disabled = true;
        prevBtn.classList.add('opacity-50', 'cursor-not-allowed');
      } else {
        prevBtn.disabled = false;
        prevBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      }

      if (currentTab === 4) {
        nextBtn.innerText = 'Finish 🏁';
      } else {
        nextBtn.innerHTML = 'Next <i class="fa-solid fa-arrow-right"></i>';
      }
    }

    // Step Next / Prev Card
    function navCard(direction) {
      const newTab = currentTab + direction;
      if (newTab >= 1 && newTab <= 4) {
        switchTab(newTab);
      } else if (newTab > 4) {
        // Celebrate completion
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 }
        });
      }
    }

    // Accordion Toggle for Card 2
    function toggleAccordion(id) {
      const content = document.getElementById(id);
      const icon = document.getElementById(`${id}-icon`);

      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.classList.add('rotate-180');
      } else {
        content.classList.add('hidden');
        icon.classList.remove('rotate-180');
      }
    }

    // RSVP Action
    function handleRSVP(type) {
      const status = document.getElementById('rsvp-status');
      status.classList.remove('hidden');
      
      if (type === 'excited') {
        status.className = "p-3 rounded-xl text-center text-xs sm:text-sm font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 block";
        status.innerHTML = "🎉 Yay! Ewen has been notified! See you on Nov 16! ☕🐶";
        
        confetti({
          particleCount: 120,
          spread: 90,
          origin: { y: 0.6 }
        });
      }
    }

    // Modal Control Functions
    function openCafeModal() {
      document.getElementById('cafe-modal').classList.remove('hidden');
    }

    function closeCafeModal() {
      document.getElementById('cafe-modal').classList.add('hidden');
    }

    function submitCafeRecommendation(e) {
      e.preventDefault();
      const cafeName = document.getElementById('cafe-input').value;
      closeCafeModal();

      const status = document.getElementById('rsvp-status');
      status.classList.remove('hidden');
      status.className = "p-3 rounded-xl text-center text-xs sm:text-sm font-bold bg-amber-100 text-amber-900 border border-amber-300 block";
      status.innerHTML = `☕ Awesome! Suggested <strong>"${cafeName}"</strong> added to Ewen's trip list!`;

      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  </script>

</body>
</html>