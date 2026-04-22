import { useState } from "react";

// ─── SLIDE DATA ───────────────────────────────────────────────────────────────

const SLIDES = [
  // ── SECTION 1: What Is a Chemical Equation? ──────────────────────────────
  {
    type: "section_title",
    section: "Section 1  ·  0–10 min",
    title: "What Is a\nChemical Equation? ⚗️",
    color: "#1a6b3a",
  },
  {
    type: "concept",
    section: "Section 1",
    heading: "🍞 A chemical equation is like a recipe",
    body: "It tells you what goes IN and what comes OUT of a chemical reaction.\n\nThink of making naan bread:\nflour  +  water  +  heat  →  naan\n\nThe flour and water are the REACTANTS.\nThe naan is the PRODUCT.\nA chemical equation works exactly the same way.",
    color: "#1a6b3a",
  },
  {
    type: "equation",
    section: "Section 1  ·  From your textbook Ch17",
    heading: "Your first example ✏️",
    left: "Zn  +  S",
    arrow: "→",
    right: "ZnS",
    labels: ["zinc", "sulfur", "", "zinc sulfide"],
    note: "Zinc and sulfur are the REACTANTS.  Zinc sulfide is the PRODUCT.",
    color: "#1a6b3a",
  },
  {
    type: "vocab",
    section: "Section 1",
    heading: "Two sides of the arrow ↔️",
    words: [
      { term: "REACTANT", pron: "ree-AK-tant", def: "What you START with", detail: "Written on the LEFT side of the arrow →" },
      { term: "PRODUCT", pron: "PROD-ukt", def: "What you END UP with", detail: "Written on the RIGHT side of the arrow →" },
    ],
    color: "#1a6b3a",
  },
  {
    type: "vocab",
    section: "Section 1  ·  These two look similar — they are VERY different!",
    heading: "🔢 Coefficient vs. Subscript",
    words: [
      { term: "COEFFICIENT", pron: "koh-ih-FISH-ent", def: "BIG number in FRONT of a formula", detail: "Tells you HOW MANY molecules.  👉  2 H₂O  means 2 molecules of water.\n\nLike ordering naan: '3 naan' means 3 whole breads." },
      { term: "SUBSCRIPT", pron: "SUB-skript", def: "Small number AFTER an element symbol", detail: "Tells you how many atoms INSIDE one molecule.  👉  H₂O  means each molecule has 2 H atoms.\n\nLike the sesame seeds ON one naan — part of what that bread IS, not how many breads you have." },
    ],
    color: "#1a6b3a",
  },
  {
    type: "activity",
    section: "Section 1  ·  Activity 1",
    heading: "Label this equation — type in chat!",
    instruction: "Ask students to type in chat: which number is the coefficient? Which is the subscript?",
    display: "2 H₂  +  O₂  →  2 H₂O",
    bullets: [
      "What does the 2 in FRONT of H₂ mean?",
      "What does the small ₂ AFTER H mean?",
      "What does the arrow → mean?",
      "How many water molecules are produced?",
    ],
    color: "#1a6b3a",
  },

  // ── SECTION 2: Element Symbols ────────────────────────────────────────────
  {
    type: "section_title",
    section: "Section 2  ·  10–22 min",
    title: "Reading Chemical\nFormulas & Symbols 🔬",
    color: "#1a3a6b",
  },
  {
    type: "truefalse",
    section: "Section 2  ·  From your textbook Ch17",
    heading: "⚠️ Two rules that prevent big mistakes",
    intro: "Capital letter = start of a NEW element\nLowercase letter = SAME element continues\n\n👇 TAP EACH CARD to reveal whether the claim is correct or not",
    cards: [
      { formula: "H", claim: "hydrogen", correct: true, explain: "✅ H = hydrogen. One capital letter, one element." },
      { formula: "He", claim: "H + something", correct: false, explain: "❌ He = helium — one element! The lowercase 'e' continues the symbol, it does not start a new one." },
      { formula: "Ca", claim: "calcium", correct: true, explain: "✅ Ca = Calcium. Capital C + lowercase a = one element." },
      { formula: "CO", claim: "one element", correct: false, explain: "❌ CO = two elements! Capital C = carbon, capital O = oxygen. Two capitals = two elements." },
      { formula: "Co", claim: "cobalt", correct: true, explain: "✅ Co = Cobalt. Capital C + lowercase o = one element." },
    ],
    color: "#1a3a6b",
  },
  {
    type: "concept",
    section: "Section 2",
    heading: "🔢 Reading the numbers in a formula",
    body: "H₂O  has  2 hydrogen atoms  and  1 oxygen atom",
    examples: [
      "Subscript 2 after H  →  2 hydrogen atoms per molecule",
      "No subscript after O  →  exactly 1 oxygen atom  (the invisible '1')",
      "NaCl  →  1 Na atom  +  1 Cl atom  (no subscripts = all invisible 1s)",
    ],
    color: "#1a3a6b",
  },
  {
    type: "flashcard",
    section: "Section 2  ·  From your textbook Ch17, Table 17.2  ·  ESL Alert — tap each card to flip!",
    heading: "🏺 Symbols from LATIN — not English!",
    intro: "These symbols don't match the English name because they come from the old Latin name for the element. Tap each card to see the connection.",
    cards: [
      { front: "Na", back: "Sodium\n(Latin: Natrium)" },
      { front: "K", back: "Potassium\n(Latin: Kalium)" },
      { front: "Fe", back: "Iron\n(Latin: Ferrum)" },
      { front: "Cu", back: "Copper\n(Latin: Cuprum)" },
      { front: "Pb", back: "Lead\n(Latin: Plumbum)" },
      { front: "Au", back: "Gold\n(Latin: Aurum)" },
      { front: "Ag", back: "Silver\n(Latin: Argentum)" },
      { front: "Hg", back: "Mercury\n(Latin: Hydrargyrum)" },
    ],
    color: "#1a3a6b",
  },
  {
    type: "table",
    section: "Section 2  ·  From your textbook Ch24",
    heading: "🧪 State symbols — what goes in the brackets",
    note: "Always written in parentheses after the formula",
    headers: ["Symbol", "Meaning", "Example"],
    rows: [
      ["(s)", "🧱  solid", "Fe(s)  =  solid iron"],
      ["(l)", "💧  liquid", "H₂O(l)  =  liquid water"],
      ["(g)", "💨  gas", "O₂(g)  =  oxygen gas"],
      ["(aq)", "🌊  dissolved in water\n(Latin  aqua = water)", "NaCl(aq)  =  salt water"],
    ],
    color: "#1a3a6b",
  },
  {
    type: "activity",
    section: "Section 2  ·  Activity 2",
    heading: "Formula Decoder — type in chat! ⏱️",
    instruction: "Read each question aloud. Give students 20 seconds to type their answer.",
    bullets: [
      "In H₂O — how many H atoms? How many O atoms?",
      "Is 'Ca' one element or two? How do you know?",
      "What does (aq) stand for? What is the Latin root?",
      "Why is iron's symbol Fe and not Ir?",
    ],
    color: "#1a3a6b",
  },

  // ── SECTION 3: Naming Compounds ───────────────────────────────────────────
  {
    type: "section_title",
    section: "Section 3  ·  22–35 min",
    title: "Naming Ionic &\nMolecular Compounds 🏷️",
    color: "#6b1a3a",
  },
  {
    type: "concept",
    section: "Section 3  ·  Ionic Compounds  ·  Ch21",
    heading: "Rule 1 — The -ide suffix",
    body: "SUFFIX  (SUF-iks) — a word ending that changes the meaning of a word.\nIn chemistry, suffixes tell you what TYPE of ion you have.\n\nCATION  (kat-EYE-on) — a positively charged ion  (+)\nFormed when a metal LOSES electrons.\n🐱  CAT-ion is pawsitive!\n\nANION  (AN-eye-on) — a negatively charged ion  (−)\nFormed when a non-metal GAINS electrons.\n😤  AN-ion sounds like ANNoy — a negative feeling!\n\nMonatomic cations keep the same name as their element.\nMonatomic anions get the -IDE ending.\n\nStep 1: Drop the element name's ending, add -ide\nStep 2: When naming a compound — metal name first, then the ion name",
    examples: [
      "fluorine  (F)  →  fluoride  (F⁻)     [Group 17]",
      "oxygen  (O)  →  oxide  (O²⁻)     [Group 16]",
      "chlorine  (Cl)  →  chloride  (Cl⁻)     [Group 17]",
      "nitrogen  (N)  →  nitride  (N³⁻)     [Group 15]",
      "sulfur  (S)  →  sulfide  (S²⁻)     [Group 16]",
      "Na⁺  +  Cl⁻  =  sodium chloride  (NaCl)",
    ],
    color: "#6b1a3a",
  },
  {
    type: "table",
    section: "Section 3  ·  Ch23",
    heading: "Greek number prefixes 🔢",
    note: "PREFIX  (PREE-fiks) — a word beginning added to the front of a word to change its meaning.\nIn chemistry, prefixes tell you HOW MANY atoms of each element are in a molecule.\nYou will see these same prefixes in the ion type names on the next slide!",
    headers: ["#", "Prefix", "Example"],
    rows: [
      ["1", "mono-  (never on the first element)", "CO  =  carbon monoxide"],
      ["2", "di-", "CO₂  =  carbon dioxide"],
      ["3", "tri-", "SO₃  =  sulfur trioxide"],
      ["4", "tetra-", "CCl₄  =  carbon tetrachloride"],
      ["5", "penta-", "P₂O₅  =  diphosphorus pentoxide"],
      ["6", "hexa-", "SF₆  =  sulfur hexafluoride"],
      ["7", "hepta-", "Cl₂O₇  =  dichlorine heptoxide"],
    ],
    color: "#6b1a3a",
  },
  {
    type: "reveal_list",
    section: "Section 3  ·  Ionic Compounds  ·  Ch21  ·  Tap each to reveal the explanation",
    heading: "👨‍👩‍👧‍👦 Three types of ions",
    items: [
      { label: "🧍 MONATOMIC\n(mono = one)", detail: "A single atom with a charge.\nYou can predict the charge from the periodic table group.\nLike a person travelling alone — independent and predictable.\n\nExamples:  Na⁺  (sodium)   Cl⁻  (chloride)   O²⁻  (oxide)" },
      { label: "👫 DIATOMIC\n(di = two)", detail: "Two atoms of the same element bonded together as a pair.\nThey always exist in pairs — never alone.\nLike two friends who are always together.\n\nExamples:  H₂  (hydrogen)   O₂  (oxygen)   N₂  (nitrogen)   Cl₂  (chlorine)" },
      { label: "👨‍👩‍👧‍👦 POLYATOMIC\n(poly = many)", detail: "A group of atoms bonded together that always travel and react as a single unit.\nLike a family travelling together — they never separate, and the whole family is treated as one unit.\nTheir charge cannot be predicted — you must memorise it.\n\nExamples:  NO₃⁻  (nitrate)   SO₄²⁻  (sulfate)   OH⁻  (hydroxide)" },
    ],
    color: "#6b1a3a",
  },
  {
    type: "table",
    section: "Section 3  ·  Ionic Compounds  ·  Ch21",
    heading: "🧠 Common polyatomic ions — memorise these",
    note: "For monatomic ions, the charge comes from a simple periodic table rule: Group 17 → 1−,  Group 16 → 2−,  Group 15 → 3−\n\nFor polyatomic ions, the charge comes from complex bonding inside the group — this is Grade 11 and 12 chemistry.\n\nPolyatomic ions are usually treated as a single unit with a fixed charge. For now, just recognise them and remember their charges.",
    headers: ["Name", "Formula", "Charge", "Notes"],
    rows: [
      ["nitrate", "NO₃⁻", "1−", "3 oxygens, -ate ending"],
      ["nitrite", "NO₂⁻", "1−", "2 oxygens, -ite ending"],
      ["sulfate", "SO₄²⁻", "2−", "4 oxygens, -ate ending"],
      ["sulfite", "SO₃²⁻", "2−", "3 oxygens, -ite ending"],
      ["carbonate", "CO₃²⁻", "2−", "3 oxygens, -ate ending"],
      ["hydroxide", "OH⁻", "1−", "1 oxygen + 1 hydrogen, -ide ending\n⚠️ Special case: the name is historical and must be memorised."],
      ["ammonium", "NH₄⁺", "1+", "1 nitrogen + 4 hydrogens, the only common positive polyatomic ion\n⚠️ Special case: the name 'ammonium' gives no clue about nitrogen or hydrogen. It is a historical name and must be memorised."],
    ],
    color: "#6b1a3a",
  },
  {
    type: "table",
    section: "Section 3  ·  Ionic Compounds  ·  Ch21",
    heading: "The three suffixes you must know 🔤",
    note: "The ending tells you the TYPE of ion",
    headers: ["Suffix", "What it means", "Examples"],
    rows: [
      ["-ide", "1. A single non-metal ion\n    (one element, negative charge)\n\n2. A compound of exactly\n    two elements bonded together\n    (one metal + one non-metal)", "F⁻ = fluoride\nCl⁻ = chloride\nO²⁻ = oxide\n\nNaCl = sodium chloride  (Na⁺ + Cl⁻)\nMgO = magnesium oxide  (Mg²⁺ + O²⁻)\nLi₃N = lithium nitride  (Li⁺ + N³⁻)"],
      ["-ate", "Polyatomic ion with oxygen (MORE O atoms)", "SO₄²⁻ = sulfate\nNO₃⁻ = nitrate\nCO₃²⁻ = carbonate"],
      ["-ite", "Polyatomic ion with oxygen (FEWER O atoms)", "SO₃²⁻ = sulfite\nNO₂⁻ = nitrite"],
    ],
    footnote: "💡 Important: -ate and -ite don't tell you an exact number of oxygen atoms — only that one version has more and the other has fewer, relative to each other.\n\nFor example: sulfate (SO₄²⁻) has 4 oxygens, sulfite (SO₃²⁻) has 3.\nBut nitrate (NO₃⁻) has 3 oxygens, nitrite (NO₂⁻) has 2.\n\n-ate always means MORE oxygens than its -ite partner. That's all it guarantees.\nThis is why you need to memorise each ion's formula — the name alone doesn't tell you the exact count.",
    color: "#6b1a3a",
  },
  {
    type: "concept",
    section: "Section 3  ·  Ionic Compounds  ·  Ch21  ·  Stock System",
    heading: "⚖️ Transition metals need a Roman numeral",
    body: "Most metals have a predictable charge from their group number.\nTransition metals are different — many can form more than one type of cation.\n\nBecause the charge is not predictable, we must state it in the name\nusing a Roman numeral in brackets after the metal's name.\n\nTo find the charge: the compound must always be electrically neutral.\nCount the anions and their charges — the metal must balance them out.",
    examples: [
      "FeCl₂  →  2 Cl⁻  =  2− total  →  Fe must be 2+  →  iron(II) chloride",
      "FeCl₃  →  3 Cl⁻  =  3− total  →  Fe must be 3+  →  iron(III) chloride",
    ],
    color: "#6b1a3a",
  },
  {
    type: "concept",
    section: "Section 3  ·  Molecular Compounds  ·  Ch23  ·  Two key rules",
    heading: "Three quick rules for molecular names 🧪",
    body: "Vowels in English are the letters:  A  E  I  O  U\nEverything else is a consonant.\nThis matters for Rule 2 below!",
    examples: [
      "🚫  Rule 1:  Never use 'mono-' for the FIRST element in the name\n        CO  =  carbon monoxide  ✓\n        NOT  monocarbon monoxide  ✗  (mono- only goes on the second element)",
      "✂️  Rule 2:  Drop the last vowel of a prefix before -oxide or -ide\n        tetra- + oxide  =  tetroxide  (drop the 'a')\n        hepta- + oxide  =  heptoxide  (drop the 'a')\n        di- + oxide     =  dioxide    (no vowel to drop — keep it!)",
      "🏷️  Rule 3:  The second element always gets the -ide suffix\n        N₂O₃  =  dinitrogen  +  trioxide  (tri + oxide = trioxide)",
    ],
    color: "#6b1a3a",
  },
  {
    type: "activity",
    section: "Section 3  ·  Activity 3  ·  Name That Compound!",
    heading: "Flash challenge — type the name in chat! ⚡",
    instruction: "Click through these one at a time. Students race to type the correct name in chat.",
    bullets: [
      "KF  →  ?",
      "Na₃N  →  ?",
      "FeCl₃  →  ?",
      "CO₂  →  ?",
      "N₂O₃  →  ?",
      "CCl₄  →  ?",
    ],
    answers: [
      "potassium fluoride",
      "sodium nitride",
      "iron(III) chloride",
      "carbon dioxide",
      "dinitrogen trioxide",
      "carbon tetrachloride",
    ],
    color: "#6b1a3a",
  },

  // ── QUIZ ──────────────────────────────────────────────────────────────────
  {
    type: "section_title",
    section: "Independent Review Quiz · 20 questions",
    title: "Chemical Nomenclature\nReview Quiz 📝",
    color: "#1a4a6b",
    subtitle: "✅ This quiz is NOT graded\n✅ Your answers are NOT recorded\n✅ It does NOT affect your mark\n\nIt is here purely to help you\npractice and check your understanding.\nThere is no pressure — just try your best!",
  },
  {
    type: "quiz",
    section: "Quiz · Questions 1–5",
    heading: "Questions 1 – 5",
    color: "#1a4a6b",
    questions: [
      {
        q: "1. Which of these is an element?",
        options: ["A.  H₂O", "B.  O₂", "C.  NaCl"],
        correct: 1,
        explain: "O₂ is an element — it contains only one type of atom (oxygen). H₂O and NaCl are compounds because they contain more than one type of element.",
      },
      {
        q: "2. Which formula is a diatomic molecule?",
        options: ["A.  Water", "B.  Carbon dioxide", "C.  Oxygen gas  (O₂)"],
        correct: 2,
        explain: "O₂ is a diatomic molecule — two atoms of the same element bonded together. Water (H₂O) and carbon dioxide (CO₂) are compounds, not diatomic molecules.",
      },
      {
        q: "3. Which formula is an ionic compound?",
        options: ["A.  NaCl", "B.  CH₄", "C.  O₂"],
        correct: 0,
        explain: "NaCl (sodium chloride) is ionic — it contains a metal (Na) and a non-metal (Cl). CH₄ is molecular, and O₂ is a diatomic element.",
      },
      {
        q: "4. Which substance is both a compound and a molecule?",
        options: ["A.  O₂", "B.  He", "C.  H₂O"],
        correct: 2,
        explain: "H₂O (water) is both a compound (it contains two different elements — hydrogen and oxygen) and a molecule (it exists as individual discrete molecules). O₂ is a molecule but not a compound. He is neither.",
      },
      {
        q: "5. What does the formula H₂O tell us?",
        options: ["A.  1 hydrogen and 2 oxygen atoms", "B.  2 hydrogen and 1 oxygen atom", "C.  2 oxygen and 2 hydrogen atoms"],
        correct: 1,
        explain: "The subscript 2 after H means 2 hydrogen atoms. Oxygen has no subscript, which means there is exactly 1 oxygen atom (the invisible '1').",
      },
    ],
  },
  {
    type: "quiz",
    section: "Quiz · Questions 6–10",
    heading: "Questions 6 – 10",
    color: "#1a4a6b",
    questions: [
      {
        q: "6. Why do some elements form diatomic molecules?",
        options: ["A.  They are always metals", "B.  Two atoms together can be more stable than one atom alone", "C.  They have no electrons"],
        correct: 1,
        explain: "Certain non-metals like hydrogen, oxygen, and nitrogen are more stable as pairs than as single atoms. This is why they naturally exist as H₂, O₂, and N₂.",
      },
      {
        q: "7. Which of these is a polyatomic molecule?",
        options: ["A.  O₂", "B.  N₂", "C.  H₂O₂"],
        correct: 2,
        explain: "H₂O₂ (hydrogen peroxide) contains two different types of atoms (H and O), making it polyatomic. O₂ and N₂ are diatomic — two atoms of the same element.",
      },
      {
        q: "8. Which ion charge is most common for Group 1 elements?",
        options: ["A.  +1", "B.  +2", "C.  −1"],
        correct: 0,
        explain: "Group 1 metals (like Na, K, Li) always lose one electron to form ions with a 1+ charge. This is predictable from their position on the periodic table.",
      },
      {
        q: "9. Which pair is made of a metal and a non-metal and is likely ionic?",
        options: ["A.  Na and Cl", "B.  H and H", "C.  He and O"],
        correct: 0,
        explain: "Na (sodium) is a metal and Cl (chlorine) is a non-metal — this combination forms an ionic bond. H+H is two of the same non-metal (covalent), and He is a noble gas that doesn't bond.",
      },
      {
        q: "10. Why do we learn nomenclature before balancing equations?",
        options: ["A.  Because formulas come before names", "B.  Because balancing only works after we know the correct formulas", "C.  Because all equations are already balanced"],
        correct: 1,
        explain: "You cannot write or balance a chemical equation unless you know the correct formula for each substance. Nomenclature gives you the tools to read and write those formulas correctly.",
      },
    ],
  },
  {
    type: "quiz",
    section: "Quiz · Questions 11–15",
    heading: "Questions 11 – 15",
    color: "#1a4a6b",
    questions: [
      {
        q: "11. What does the subscript tell you in a chemical formula?",
        options: ["A.  How many molecules you have", "B.  How many atoms of that element are in one molecule", "C.  The charge on the ion"],
        correct: 1,
        explain: "The subscript (small number after an element symbol) tells you how many atoms of that element are in one molecule. The coefficient (big number in front) tells you how many molecules.",
      },
      {
        q: "12. In the formula 2H₂O, what does the 2 in front mean?",
        options: ["A.  There are 2 hydrogen atoms", "B.  There are 2 molecules of water", "C.  The molecule has 2 oxygen atoms"],
        correct: 1,
        explain: "The large 2 in front of H₂O is the coefficient — it means 2 whole molecules of water. The small subscript 2 after H tells you there are 2 hydrogen atoms inside each molecule.",
      },
      {
        q: "13. Which ending tells you a compound contains a polyatomic ion with MORE oxygen atoms?",
        options: ["A.  -ide", "B.  -ite", "C.  -ate"],
        correct: 2,
        explain: "The -ate suffix indicates the polyatomic ion with MORE oxygen atoms. The -ite suffix indicates the same type of ion but with FEWER oxygen atoms. The -ide suffix indicates a single non-metal anion or a compound of two elements — it does not tell you anything about whether oxygen is present.",
      },
      {
        q: "14. What is the charge on the sulfate ion (SO₄)?",
        options: ["A.  1−", "B.  2−", "C.  2+"],
        correct: 1,
        explain: "Sulfate (SO₄²⁻) carries a 2− charge. This is one of the polyatomic ions you need to memorise — the charge cannot be predicted from the formula alone.",
      },
      {
        q: "15. Why does iron(III) chloride have a Roman numeral in its name?",
        options: ["A.  Because iron is a liquid", "B.  Because iron can form more than one type of cation", "C.  Because chloride has a variable charge"],
        correct: 1,
        explain: "Iron is a transition metal that can form Fe²⁺ (iron II) or Fe³⁺ (iron III). The Roman numeral tells us which one is present in the compound. Chloride always has a 1− charge.",
      },
    ],
  },
  {
    type: "quiz",
    section: "Quiz · Questions 16–20",
    heading: "Questions 16 – 20",
    color: "#1a4a6b",
    questions: [
      {
        q: "16. What is the name of NO₃⁻?",
        options: ["A.  Nitrite", "B.  Nitride", "C.  Nitrate"],
        correct: 2,
        explain: "NO₃⁻ is nitrate — it has 3 oxygen atoms and uses the -ate ending. NO₂⁻ is nitrite (2 oxygens, -ite ending). Nitride (N³⁻) is a completely different ion with no oxygen.",
      },
      {
        q: "17. Which of these correctly names CO₂ as a molecular compound?",
        options: ["A.  Carbon dioxide", "B.  Monocarbon dioxide", "C.  Carbon diOxide"],
        correct: 0,
        explain: "Carbon dioxide is correct. We never use mono- for the first element, so 'monocarbon' is wrong. The capitalisation in option C is also incorrect — element names are lowercase in compound names.",
      },
      {
        q: "18. What does (aq) mean after a chemical formula?",
        options: ["A.  The substance is a gas", "B.  The substance is dissolved in water", "C.  The substance is a solid"],
        correct: 1,
        explain: "(aq) stands for aqueous — from the Latin word aqua meaning water. It means the substance is dissolved in water. (g) = gas, (s) = solid, (l) = liquid.",
      },
      {
        q: "19. Which of the following is the correct name for FeCl₂?",
        options: ["A.  Iron chloride", "B.  Iron(II) chloride", "C.  Iron(III) chloride"],
        correct: 1,
        explain: "FeCl₂ has 2 Cl⁻ ions, giving a total charge of 2−. The iron ion must therefore be 2+ to balance. So the correct name is iron(II) chloride, not iron(III) chloride.",
      },
      {
        q: "20. The symbol 'Ag' stands for silver. Why doesn't it start with 'S'?",
        options: ["A.  Because silver is a gas", "B.  Because the symbol comes from the Latin word Argentum", "C.  Because 'S' was already taken by sulfur"],
        correct: 1,
        explain: "Both B and C are true! Ag comes from the Latin Argentum. And since S is already used for sulfur, Ag avoids confusion. Many historical element symbols come from their Latin names.",
      },
    ],
  },

  // ── CLOSING SLIDE ─────────────────────────────────────────────────────────
  {
    type: "section_title",
    section: "End of today's lesson",
    title: "Great work today! 🎉\n\nNext lesson:\nBalancing Equations ⚖️",
    color: "#1a1a1a",
  },
];

// ─── SLIDE COMPONENTS ─────────────────────────────────────────────────────────

const BIG = { fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 800, lineHeight: 1.15 };
const MED = { fontSize: "clamp(20px, 3.2vw, 36px)", fontWeight: 700, lineHeight: 1.3 };
const BODY = { fontSize: "clamp(16px, 2.4vw, 26px)", lineHeight: 1.6 };
const SMALL = { fontSize: "clamp(13px, 1.8vw, 20px)", lineHeight: 1.5 };
const MONO = { fontFamily: "'Courier New', Courier, monospace" };

function SectionLabel({ text, color }) {
  return (
    <div style={{ ...SMALL, color: "rgba(255,255,255,0.6)", marginBottom: 20, fontWeight: 600, letterSpacing: "0.04em" }}>
      {text}
    </div>
  );
}

function SlideSectionTitle({ slide }) {
  return (
    <div style={{ background: slide.color, minHeight: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "40px 8%" }}>
      <div style={{ ...BIG, color: "#fff", whiteSpace: "pre-line", marginBottom: 24 }}>{slide.title}</div>
      {slide.subtitle && (
        <div style={{ ...BODY, color: "rgba(255,255,255,0.92)", whiteSpace: "pre-line", background: "rgba(255,255,255,0.12)", borderRadius: 16, padding: "20px 28px", maxWidth: 560, lineHeight: 1.8 }}>
          {slide.subtitle}
        </div>
      )}
      {!slide.subtitle && (
        <div style={{ ...SMALL, color: "rgba(255,255,255,0.65)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{slide.section}</div>
      )}
    </div>
  );
}

function SlideConcept({ slide }) {
  return (
    <div style={{ minHeight: "100%", display: "flex", flexDirection: "column", padding: "40px 8%", background: "#fff" }}>
      <SectionLabel text={slide.section} color={slide.color} />
      <div style={{ ...MED, color: slide.color, marginBottom: 28, whiteSpace: "pre-line" }}>{slide.heading}</div>
      {slide.body && <div style={{ ...BODY, color: "#222", marginBottom: 28, whiteSpace: "pre-line", background: "#f8f8f8", borderLeft: `6px solid ${slide.color}`, padding: "18px 22px", borderRadius: "0 12px 12px 0" }}>{slide.body}</div>}
      {slide.examples && slide.examples.map((ex, i) => (
        <div key={i} style={{ ...BODY, ...MONO, color: "#333", padding: "10px 16px", marginBottom: 8, background: i % 2 === 0 ? "#f0f0f0" : "#e8e8e8", borderRadius: 8 }}>{ex}</div>
      ))}
    </div>
  );
}

function SlideEquation({ slide }) {
  return (
    <div style={{ minHeight: "100%", display: "flex", flexDirection: "column", padding: "40px 8%", background: "#fff" }}>
      <SectionLabel text={slide.section} color={slide.color} />
      <div style={{ ...MED, color: slide.color, marginBottom: 40 }}>{slide.heading}</div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "3vw", flexWrap: "wrap", marginBottom: 40 }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ ...BIG, ...MONO, color: "#222" }}>{slide.left}</div>
        </div>
        <div style={{ fontSize: "clamp(36px, 6vw, 72px)", color: slide.color, fontWeight: 900, lineHeight: 1 }}>{slide.arrow}</div>
        <div style={{ textAlign: "center" }}>
          <div style={{ ...BIG, ...MONO, color: "#222" }}>{slide.right}</div>
        </div>
      </div>
      {slide.note && (
        <div style={{ ...BODY, color: "#444", background: "#f4f4f4", borderLeft: `6px solid ${slide.color}`, padding: "16px 22px", borderRadius: "0 12px 12px 0", whiteSpace: "pre-line" }}>
          {slide.note}
        </div>
      )}
    </div>
  );
}

function SlideVocab({ slide }) {
  return (
    <div style={{ minHeight: "100%", display: "flex", flexDirection: "column", padding: "40px 8%", background: "#fff" }}>
      <SectionLabel text={slide.section} color={slide.color} />
      <div style={{ ...MED, color: slide.color, marginBottom: 32 }}>{slide.heading}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20, flex: 1 }}>
        {slide.words.map((w, i) => (
          <div key={i} style={{ background: i === 0 ? slide.color : "#f0f0f0", borderRadius: 16, padding: "22px 28px", flex: 1 }}>
            <div style={{ ...MED, color: i === 0 ? "#fff" : slide.color, marginBottom: 6 }}>{w.term}</div>
            {w.pron && <div style={{ ...SMALL, color: i === 0 ? "rgba(255,255,255,0.7)" : "#888", marginBottom: 10, fontStyle: "italic" }}>/{w.pron}/</div>}
            <div style={{ ...BODY, color: i === 0 ? "#fff" : "#222", fontWeight: 700, marginBottom: 8 }}>{w.def}</div>
            <div style={{ ...BODY, color: i === 0 ? "rgba(255,255,255,0.85)" : "#555" }}>{w.detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideTable({ slide }) {
  return (
    <div style={{ minHeight: "100%", display: "flex", flexDirection: "column", padding: "40px 8%", background: "#fff" }}>
      <SectionLabel text={slide.section} color={slide.color} />
      <div style={{ ...MED, color: slide.color, marginBottom: 10 }}>{slide.heading}</div>
      {slide.note && <div style={{ ...SMALL, color: "#444", marginBottom: 22, lineHeight: 1.7, whiteSpace: "pre-line", background: "#f8f8f8", borderLeft: `4px solid ${slide.color}`, padding: "12px 16px", borderRadius: "0 8px 8px 0" }}>{slide.note}</div>}
      <div style={{ flex: 1, overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "clamp(14px, 2vw, 22px)" }}>
          <thead>
            <tr>{slide.headers.map((h, i) => (
              <th key={i} style={{ background: slide.color, color: "#fff", padding: "12px 16px", textAlign: "left", fontWeight: 800, whiteSpace: "nowrap" }}>{h}</th>
            ))}</tr>
          </thead>
          <tbody>
            {slide.rows.map((row, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f5f5f5" }}>
                {row.map((cell, j) => (
                  <td key={j} style={{ padding: "12px 16px", borderBottom: "1px solid #e8e8e8", lineHeight: 1.5, whiteSpace: "pre-line", fontWeight: j === 0 ? 800 : 400, ...( j === 0 ? MONO : {}) }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {slide.footnote && <div style={{ ...SMALL, color: "#444", marginTop: 20, lineHeight: 1.7, whiteSpace: "pre-line", background: "#fffdf0", borderLeft: `4px solid ${slide.color}`, padding: "12px 16px", borderRadius: "0 8px 8px 0" }}>{slide.footnote}</div>}
    </div>
  );
}

function SlideSteps({ slide }) {
  return (
    <div style={{ minHeight: "100%", display: "flex", flexDirection: "column", padding: "40px 8%", background: "#fff" }}>
      <SectionLabel text={slide.section} color={slide.color} />
      <div style={{ ...MED, color: slide.color, marginBottom: 28 }}>{slide.heading}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        {slide.steps.map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: "clamp(32px,4vw,48px)", height: "clamp(32px,4vw,48px)", borderRadius: "50%", background: slide.color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "clamp(16px,2.2vw,26px)", flexShrink: 0 }}>{i + 1}</div>
            <div style={{ ...BODY, color: "#222", background: "#f5f5f5", borderRadius: 10, padding: "12px 18px", flex: 1 }}>{s}</div>
          </div>
        ))}
      </div>
      {slide.note && (
        <div style={{ ...BODY, color: "#444", background: "#fffdf0", borderLeft: `6px solid ${slide.color}`, padding: "16px 22px", borderRadius: "0 12px 12px 0", whiteSpace: "pre-line", marginTop: 20 }}>
          💡 {slide.note}
        </div>
      )}
    </div>
  );
}

function SlideWorked({ slide }) {
  const [step, setStep] = useState(0);
  return (
    <div style={{ minHeight: "100%", display: "flex", flexDirection: "column", padding: "40px 8%", background: "#fff" }}>
      <SectionLabel text={slide.section} color={slide.color} />
      <div style={{ ...MED, color: slide.color, marginBottom: 16 }}>{slide.heading}</div>
      <div style={{ ...BODY, ...MONO, color: "#c04020", marginBottom: 28, background: "#fff8f5", padding: "14px 20px", borderRadius: 10, border: "2px solid #e8b8a0" }}>
        {slide.skeleton}  <span style={{ color: "#aaa", fontSize: "0.7em", fontFamily: "sans-serif" }}>(unbalanced)</span>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
        {slide.steps.slice(0, step + 1).map((s, i) => (
          <div key={i} style={{ background: i === step ? slide.color : "#f0f0f0", borderRadius: 14, padding: "18px 22px", transition: "all 0.3s" }}>
            <div style={{ ...SMALL, fontWeight: 800, color: i === step ? "rgba(255,255,255,0.8)" : "#888", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
            <div style={{ ...BODY, ...MONO, color: i === step ? "#fff" : "#333", whiteSpace: "pre-line" }}>{s.content}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 12 }}>
        {step > 0 && <button onClick={() => setStep(s => s - 1)} style={{ padding: "10px 22px", background: "#eee", color: "#555", border: "none", borderRadius: 10, cursor: "pointer", ...SMALL, fontWeight: 700 }}>← Back</button>}
        {step < slide.steps.length - 1 && <button onClick={() => setStep(s => s + 1)} style={{ padding: "10px 28px", background: slide.color, color: "#fff", border: "none", borderRadius: 10, cursor: "pointer", ...SMALL, fontWeight: 700 }}>Next step →</button>}
        {step === slide.steps.length - 1 && <div style={{ ...SMALL, color: "#2a8a2a", fontWeight: 700, alignSelf: "center" }}>✅ Complete!</div>}
      </div>
    </div>
  );
}

function SlideRevealList({ slide }) {
  const [revealed, setRevealed] = useState({});
  const toggle = (i) => setRevealed(r => ({ ...r, [i]: !r[i] }));
  return (
    <div style={{ minHeight: "100%", display: "flex", flexDirection: "column", padding: "40px 8%", background: "#fff" }}>
      <SectionLabel text={slide.section} color={slide.color} />
      <div style={{ ...MED, color: slide.color, marginBottom: 24 }}>{slide.heading}</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12, flex: 1 }}>
        {slide.items.map((item, i) => (
          <div key={i} onClick={() => toggle(i)} style={{
            background: revealed[i] ? slide.color : "#f0f0f0",
            borderRadius: 14, padding: "18px 20px", cursor: "pointer",
            transition: "all 0.25s", border: revealed[i] ? "none" : `2px solid #ddd`,
          }}>
            <div style={{ ...BODY, fontWeight: 800, ...MONO, color: revealed[i] ? "#fff" : slide.color, marginBottom: revealed[i] ? 10 : 0, whiteSpace: "pre-line" }}>{item.label}</div>
            {revealed[i] && <div style={{ ...SMALL, color: "rgba(255,255,255,0.9)", whiteSpace: "pre-line" }}>{item.detail}</div>}
            {!revealed[i] && <div style={{ ...SMALL, color: "#aaa", marginTop: 6 }}>tap to reveal</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideActivity({ slide }) {
  const [showAnswers, setShowAnswers] = useState(false);
  const [ansIdx, setAnsIdx] = useState(0);

  return (
    <div style={{ minHeight: "100%", display: "flex", flexDirection: "column", padding: "40px 8%", background: "#fffef8" }}>
      <SectionLabel text={slide.section} color={slide.color} />
      <div style={{ ...MED, color: slide.color, marginBottom: 10 }}>{slide.heading}</div>
      <div style={{ ...SMALL, color: "#888", marginBottom: 24, fontStyle: "italic" }}>{slide.instruction}</div>

      {slide.display && (
        <div style={{ ...BIG, ...MONO, color: "#222", textAlign: "center", padding: "24px", background: "#fff", border: `3px dashed ${slide.color}`, borderRadius: 16, marginBottom: 24 }}>
          {slide.display}
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28, flex: 1 }}>
        {slide.bullets.map((b, i) => (
          <div key={i} style={{ ...BODY, color: "#222", padding: "12px 20px", background: "#fff", borderRadius: 10, borderLeft: `5px solid ${slide.color}` }}>
            {b}
          </div>
        ))}
      </div>

      {slide.answers && (
        <div>
          {!showAnswers ? (
            <button onClick={() => setShowAnswers(true)} style={{ padding: "12px 28px", background: slide.color, color: "#fff", border: "none", borderRadius: 12, cursor: "pointer", ...BODY, fontWeight: 700, fontFamily: "Georgia, serif" }}>
              ✅ Show Answers
            </button>
          ) : (
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 14 }}>
                {slide.answers.slice(0, ansIdx + 1).map((a, i) => (
                  <div key={i} style={{ ...BODY, ...MONO, color: "#1a5c1a", background: "#e8ffe8", borderRadius: 10, padding: "12px 20px", border: "2px solid #80c080" }}>
                    ✅  {a}
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                {ansIdx < slide.answers.length - 1 && (
                  <button onClick={() => setAnsIdx(i => i + 1)} style={{ padding: "10px 22px", background: slide.color, color: "#fff", border: "none", borderRadius: 10, cursor: "pointer", ...SMALL, fontWeight: 700 }}>
                    Next answer →
                  </button>
                )}
                <button onClick={() => { setShowAnswers(false); setAnsIdx(0); }} style={{ padding: "10px 22px", background: "#ddd", color: "#555", border: "none", borderRadius: 10, cursor: "pointer", ...SMALL, fontWeight: 700 }}>
                  ↺ Hide
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── ROUTER ───────────────────────────────────────────────────────────────────

function SlideFlashcard({ slide }) {
  const [flipped, setFlipped] = useState({});
  const [allFlipped, setAllFlipped] = useState(false);
  const toggle = (i) => setFlipped(f => ({ ...f, [i]: !f[i] }));
  const flipAll = () => {
    if (allFlipped) { setFlipped({}); setAllFlipped(false); }
    else { const all = {}; slide.cards.forEach((_, i) => all[i] = true); setFlipped(all); setAllFlipped(true); }
  };
  return (
    <div style={{ minHeight: "100%", display: "flex", flexDirection: "column", padding: "40px 8%", background: "#fff" }}>
      <SectionLabel text={slide.section} color={slide.color} />
      <div style={{ ...MED, color: slide.color, marginBottom: 8 }}>{slide.heading}</div>
      <div style={{ ...SMALL, color: "#555", marginBottom: 20, lineHeight: 1.6 }}>{slide.intro}</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, flex: 1, marginBottom: 16 }}>
        {slide.cards.map((card, i) => (
          <div key={i} onClick={() => toggle(i)} style={{
            borderRadius: 14, padding: "18px 12px", cursor: "pointer",
            background: flipped[i] ? slide.color : "#f0f0f0",
            color: flipped[i] ? "#fff" : "#222",
            textAlign: "center", transition: "all 0.25s",
            display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
            minHeight: 100, border: flipped[i] ? "none" : `2px solid #ddd`,
          }}>
            {flipped[i]
              ? <div style={{ ...SMALL, whiteSpace: "pre-line", lineHeight: 1.5 }}>{card.back}</div>
              : <div style={{ fontSize: "clamp(22px, 4vw, 40px)", fontFamily: "'Courier New', monospace", fontWeight: 900 }}>{card.front}</div>
            }
          </div>
        ))}
      </div>
      <button onClick={flipAll} style={{ alignSelf: "flex-start", padding: "10px 22px", background: slide.color, color: "#fff", border: "none", borderRadius: 10, cursor: "pointer", ...SMALL, fontWeight: 700 }}>
        {allFlipped ? "↺ Hide all" : "👁 Reveal all"}
      </button>
    </div>
  );
}

function SlideTrueFalse({ slide }) {
  const [revealed, setRevealed] = useState({});
  const toggle = (i) => setRevealed(r => ({ ...r, [i]: !r[i] }));
  return (
    <div style={{ minHeight: "100%", display: "flex", flexDirection: "column", padding: "40px 8%", background: "#fff" }}>
      <SectionLabel text={slide.section} color={slide.color} />
      <div style={{ ...MED, color: slide.color, marginBottom: 8 }}>{slide.heading}</div>
      <div style={{ ...BODY, color: "#333", background: "#f8f8f8", borderLeft: `5px solid ${slide.color}`, padding: "12px 18px", borderRadius: "0 10px 10px 0", marginBottom: 20, whiteSpace: "pre-line" }}>{slide.intro}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        {slide.cards.map((card, i) => (
          <div key={i} onClick={() => toggle(i)} style={{ cursor: "pointer", borderRadius: 12, overflow: "hidden", border: `2px solid ${revealed[i] ? (card.correct ? "#40a040" : "#c03030") : "#ddd"}`, transition: "border 0.2s" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "12px 18px", background: revealed[i] ? (card.correct ? "#e8ffe8" : "#ffe8e8") : "#fafafa" }}>
              <span style={{ fontFamily: "'Courier New', monospace", fontWeight: 900, fontSize: "clamp(18px, 2.5vw, 28px)", color: slide.color, flexShrink: 0 }}>{card.formula}</span>
              <span style={{ ...BODY, color: "#333", flex: 1 }}>= {card.claim}</span>
              <span style={{ fontSize: "clamp(18px, 2.5vw, 28px)", flexShrink: 0 }}>
                {revealed[i] ? (card.correct ? "✅" : "❌") : "❓"}
              </span>
            </div>
            {revealed[i] && (
              <div style={{ ...SMALL, color: card.correct ? "#1a5c1a" : "#8b0000", padding: "10px 18px", background: card.correct ? "#d8f8d8" : "#f8d8d8", lineHeight: 1.6 }}>
                {card.explain}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideQuiz({ slide }) {
  const [selected, setSelected] = useState({});
  const pick = (qi, oi) => { if (selected[qi] === undefined) setSelected(s => ({ ...s, [qi]: oi })); };
  const score = Object.keys(selected).filter(qi => selected[qi] === slide.questions[qi].correct).length;
  const done = Object.keys(selected).length === slide.questions.length;
  return (
    <div style={{ minHeight: "100%", display: "flex", flexDirection: "column", padding: "30px 8%", background: "#f8faff" }}>
      <SectionLabel text={slide.section} color={slide.color} />
      <div style={{ ...MED, color: slide.color, marginBottom: 20 }}>{slide.heading}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20, flex: 1 }}>
        {slide.questions.map((q, qi) => {
          const ans = selected[qi];
          const answered = ans !== undefined;
          return (
            <div key={qi} style={{ background: "#fff", borderRadius: 14, padding: "16px 20px", border: `2px solid ${answered ? (ans === q.correct ? "#40a040" : "#c03030") : "#ddd"}` }}>
              <div style={{ ...BODY, fontWeight: 700, color: "#222", marginBottom: 12 }}>{q.q}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {q.options.map((opt, oi) => {
                  let bg = "#f5f5f5"; let col = "#333"; let border = "1px solid #ddd";
                  if (answered) {
                    if (oi === q.correct) { bg = "#d8f8d8"; col = "#1a5c1a"; border = "2px solid #40a040"; }
                    else if (oi === ans) { bg = "#f8d8d8"; col = "#8b0000"; border = "2px solid #c03030"; }
                  }
                  return (
                    <div key={oi} onClick={() => pick(qi, oi)} style={{
                      ...SMALL, background: bg, color: col, border, borderRadius: 8,
                      padding: "10px 14px", cursor: answered ? "default" : "pointer",
                      transition: "all 0.2s", fontWeight: oi === q.correct && answered ? 700 : 400,
                    }}>
                      {opt} {answered && oi === q.correct && " ✅"} {answered && oi === ans && oi !== q.correct && " ❌"}
                    </div>
                  );
                })}
              </div>
              {answered && (
                <div style={{ ...SMALL, color: "#444", marginTop: 12, background: "#f8f8f8", borderRadius: 8, padding: "10px 14px", lineHeight: 1.6, borderLeft: `3px solid ${ans === q.correct ? "#40a040" : "#c03030"}` }}>
                  💡 {q.explain}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {done && (
        <div style={{ ...MED, textAlign: "center", marginTop: 20, padding: "16px", background: score === slide.questions.length ? "#d8f8d8" : "#fff8e8", borderRadius: 14, color: score === slide.questions.length ? "#1a5c1a" : "#7a5000" }}>
          {score === slide.questions.length ? "🎉 Perfect score!" : `${score} / ${slide.questions.length} correct`}
        </div>
      )}
    </div>
  );
}

function renderSlide(slide) {
  if (slide.type === "section_title") return <SlideSectionTitle slide={slide} />;
  if (slide.type === "concept")       return <SlideConcept slide={slide} />;
  if (slide.type === "equation")      return <SlideEquation slide={slide} />;
  if (slide.type === "vocab")         return <SlideVocab slide={slide} />;
  if (slide.type === "table")         return <SlideTable slide={slide} />;
  if (slide.type === "steps")         return <SlideSteps slide={slide} />;
  if (slide.type === "worked")        return <SlideWorked slide={slide} />;
  if (slide.type === "reveal_list")   return <SlideRevealList slide={slide} />;
  if (slide.type === "activity")      return <SlideActivity slide={slide} />;
  if (slide.type === "flashcard")     return <SlideFlashcard slide={slide} />;
  if (slide.type === "truefalse")     return <SlideTrueFalse slide={slide} />;
  if (slide.type === "quiz")          return <SlideQuiz slide={slide} />;
  return null;
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────

export default function ChemLesson() {
  const [idx, setIdx] = useState(0);
  const slide = SLIDES[idx];
  const isFirst = idx === 0;
  const isLast = idx === SLIDES.length - 1;

  // Section colour for the current slide
  const sectionColor = slide.color || "#333";

  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", background: "#1a1a1a", height: "100vh", display: "flex", flexDirection: "column", userSelect: "none" }}>

      {/* ── TOP BAR ── */}
      <div style={{ background: "#111", padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
        <div style={{ fontSize: 13, color: "#888", fontFamily: "monospace" }}>
          SNC2D · Chemical Nomenclature
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 13, color: "#aaa", fontFamily: "monospace" }}>
            {idx + 1} / {SLIDES.length}
          </span>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: sectionColor }} />
        </div>
      </div>

      {/* ── PROGRESS BAR ── */}
      <div style={{ height: 6, background: "#333", flexShrink: 0 }}>
        <div style={{ height: "100%", background: sectionColor, width: `${((idx + 1) / SLIDES.length) * 100}%`, transition: "width 0.3s, background 0.4s" }} />
      </div>

      {/* ── SLIDE CONTENT ── */}
      <div key={idx} style={{ flex: 1, overflow: "auto", background: "#fff" }}>
        {renderSlide(slide)}
      </div>

      {/* ── BOTTOM NAV ── */}
      <div style={{ background: "#111", padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0, gap: 12 }}>
        <button
          onClick={() => setIdx(i => Math.max(0, i - 1))}
          disabled={isFirst}
          style={{ padding: "10px 28px", background: isFirst ? "#333" : "#555", color: isFirst ? "#666" : "#fff", border: "none", borderRadius: 10, cursor: isFirst ? "default" : "pointer", fontWeight: 700, fontSize: 16, fontFamily: "Georgia, serif" }}>
          ←
        </button>

        {/* Slide dot picker — tap any dot to jump */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center", gap: 4, flexWrap: "wrap" }}>
          {SLIDES.map((s, i) => (
            <div key={i} onClick={() => setIdx(i)} style={{
              width: i === idx ? 18 : 8,
              height: 8,
              borderRadius: 4,
              background: i === idx ? (s.color || "#888") : (i < idx ? "#666" : "#333"),
              cursor: "pointer",
              transition: "all 0.2s",
              flexShrink: 0,
            }} />
          ))}
        </div>

        <button
          onClick={() => setIdx(i => Math.min(SLIDES.length - 1, i + 1))}
          disabled={isLast}
          style={{ padding: "10px 28px", background: isLast ? "#333" : sectionColor, color: isLast ? "#666" : "#fff", border: "none", borderRadius: 10, cursor: isLast ? "default" : "pointer", fontWeight: 700, fontSize: 16, fontFamily: "Georgia, serif" }}>
          →
        </button>
      </div>
    </div>
  );
}
