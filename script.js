// Global variables
let currentLanguage = localStorage.getItem("language") || "ro"
let currentTheme = localStorage.getItem("theme") || "light"

// Translations
const translations = {
  ro: {
    // Navigation
    home: "Acasă",
    history: "Istorie",
    gallery: "Galerie",
    options: "Opțiuni",
    settings: "Setări",
    language: "Limbă",
    theme: "Temă",
    romanian: "Română",
    english: "Engleză",
    light: "Luminoasă",
    dark: "Întunecată",
    contact: "Contact",
    "quick-navigation": "Navigare Rapidă",
    "all-rights-reserved": "Toate drepturile rezervate",

    // Main content
    "mining-beginnings": "Istoria Mineritului în Brad",
    "site-title": "Istoria Mineritului în Brad",
    "communist-period": "Perioada Comunistă în Zona Brad",
    "discover-history": "Descoperă Istoria",
    "view-gallery": "Vezi Galeria",
    "back-home": "Înapoi la Acasă",
    "photo-gallery": "Galerie Foto",
    "mining-industry": "Industria Minieră",
    "daily-life": "Viața Cotidiană",
    "socialist-architecture": "Arhitectura Socialistă",
    "historical-timeline": "Cronologie Istorică",
    "important-aspects": "Aspecte Importante",

    // Homepage content
    "period-1947-1989": "1947-1989",
    "homepage-description":
      "Explorați istoria și patrimoniul industrial al mineritului din zona Brad, un capitol important din dezvoltarea economică și socială a regiunii de-a lungul timpului.",
    "mining-industry-description":
      "Exploatarea minieră a reprezentat un pilon economic esențial în perioada comunistă, Brad fiind cunoscut pentru minele sale de aur și alte resurse.",
    "daily-life-description":
      "Descoperiți cum era viața de zi cu zi pentru locuitorii din Brad în timpul regimului comunist, de la cozile pentru alimente la activitățile culturale.",
    "socialist-architecture-description":
      "Blocurile de locuințe, clădirile administrative și alte structuri construite în perioada comunistă care au schimbat peisajul urban al Bradului.",
    "learn-more": "Află mai multe",
    "timeline-description":
      "Perioada comunistă în România a început oficial în 1947 și s-a încheiat în 1989. În zona Brad, această perioadă a fost marcată de industrializare intensă, transformări sociale și economice profunde.",
    "brad-hunedoara": "Brad, Județul Hunedoara",
    "view-complete-timeline": "Vezi Cronologia Completă",
    "may-1-1975": "1 Mai, 1975",

    // Footer
    "footer-description":
      "Un proiect dedicat păstrării și promovării istoriei mineritului și patrimoniului industrial din zona Brad, județul Hunedoara.",

    // History page
    "history-page-description":
      "Explorați cronologia, evenimentele și impactul dezvoltării mineritului asupra comunității locale în epoca modernă",
    "communist-period-timeline": "Cronologia Perioadei Comuniste în Brad",
    "regime-beginning": "Începutul regimului",
    industrialization: "Industrializarea",
    "golden-age": "Epoca de Aur",
    decline: "Declinul",

    // Timeline content
    "timeline-1947-1950":
      "După abdicarea forțată a Regelui Mihai I și proclamarea Republicii Populare Române, zona Brad intră sub influența noului regim comunist. Începe procesul de naționalizare a minelor de aur și a altor întreprinderi private din zonă.",
    "timeline-1950-1965":
      "Perioada de industrializare intensă. Exploatarea minieră din Brad este extinsă, se construiesc noi facilități industriale și începe urbanizarea accelerată a zonei. Mulți locuitori din satele învecinate se mută la Brad pentru a lucra în industrie.",
    "timeline-1965-1980":
      "După venirea la putere a lui Nicolae Ceaușescu, zona Brad cunoaște o perioadă de relativă prosperitate. Se construiesc blocuri de locuințe, școli și spitale noi. Industria minieră atinge apogeul dezvoltării sale, iar orașul devine un important centru industrial în regiune.",
    "timeline-1980-1989":
      "Criza economică afectează puternic și zona Brad. Raționalizarea alimentelor și a energiei electrice devine o realitate cotidiană. Condițiile de muncă în mine se deteriorează, iar nemulțumirea populației crește. În decembrie 1989, locuitorii din Brad participă la revoluția care duce la căderea regimului comunist.",

    // Mining industry section
    "mining-communist-period": "Industria Minieră în Perioada Comunistă",
    "mining-description-1":
      "Exploatarea minieră a reprezentat coloana vertebrală a economiei locale în perioada comunistă. Minele de aur din Brad, cu o istorie ce datează din perioada romană, au fost naționalizate și extinse considerabil în timpul regimului.",
    "mining-description-2":
      "Întreprinderea Minieră Brad a devenit unul dintre cei mai mari angajatori din zonă, oferind locuri de muncă pentru mii de oameni. S-au construit noi galerii, s-au introdus utilaje moderne pentru acea vreme și s-a pus accent pe creșterea producției.",
    "mining-description-3":
      "Minerii se bucurau de un statut privilegiat în societatea comunistă, având salarii mai mari și beneficii suplimentare față de alte categorii profesionale. Cu toate acestea, condițiile de muncă rămâneau dificile și periculoase.",
    "gold-mine-1970": "Mina de aur, 1970",

    // Daily life section
    "daily-life-brad": "Viața Cotidiană în Brad",
    "daily-life-description-1":
      "Viața de zi cu zi în Brad în perioada comunistă era marcată de contraste. Pe de o parte, regimul asigura locuri de muncă stabile, educație gratuită și asistență medicală pentru toți. Pe de altă parte, libertățile individuale erau restricționate, iar penuria de bunuri de consum era o realitate cotidiană, mai ales în anii '80.",
    "daily-life-description-2":
      "Cozile la alimente au devenit o imagine emblematică a perioadei. Locuitorii din Brad stăteau la rând ore întregi pentru a cumpăra pâine, carne sau alte produse de bază. Raționalizarea energiei electrice afecta și ea viața de zi cu zi, cu întreruperi frecvente ale curentului.",
    "daily-life-description-3":
      'În ciuda acestor dificultăți, viața culturală era activă. Casa de Cultură din Brad organiza spectacole, proiecții de filme și alte evenimente culturale. Festivalul "Cântarea României" mobiliza anual numeroși artiști amatori din zonă.',
    "food-queue-1985": "Coadă la alimente, 1985",
    "food-queue-80s": "Coadă la alimente, anii '80",
    "food-queue-description":
      "Locuitori din Brad stând la coadă pentru alimente de bază. Imaginea surprinde una dintre realitățile cotidiene ale perioadei de austeritate din anii '80.",
    "may-parade-1975": "Defilare de 1 Mai, 1975",
    "may-parade-description":
      "Defilare organizată cu ocazia Zilei Internaționale a Muncii. Participarea la astfel de manifestații era obligatorie pentru majoritatea angajaților.",

    // Socialist architecture section
    "socialist-architecture-brad": "Arhitectura Socialistă în Brad",
    "architecture-description-1":
      "Perioada comunistă a lăsat o amprentă vizibilă asupra peisajului urban din Brad. Blocurile de locuințe construite în stil socialist, cu fațade simple și apartamente standardizate, au schimbat radical aspectul orașului.",
    "architecture-description-2":
      "Centrul civic a fost reorganizat conform principiilor urbanistice ale epocii, cu clădiri administrative impunătoare și spații deschise pentru adunări publice. Casa de Cultură, construită în anii '70, reprezintă un exemplu tipic de arhitectură instituțională din acea perioadă.",
    "architecture-description-3":
      "Deși multe dintre aceste construcții nu excelau prin calitate sau estetică, ele au oferit locuințe moderne (pentru standardele vremii) multor familii care anterior trăiau în condiții modeste.",
    "blocks-70s": "Blocuri, anii '70",
    "universal-store-70s": "Magazinul Universal, anii '70",
    "universal-store-description":
      "Magazinul Universal din Brad, unul dintre principalele puncte comerciale din oraș în perioada comunistă.",
    "housing-blocks-70s": "Blocuri de locuințe, anii '70",
    "housing-blocks-description":
      "Ansambluri de blocuri construite în perioada de expansiune urbană din anii '70, caracteristice pentru arhitectura socialistă.",
    "culture-house-1978": "Casa de Cultură, 1978",
    "culture-house-description":
      "Casa de Cultură din Brad, construită în stil modernist socialist, a găzduit numeroase evenimente culturale și politice.",
    "civic-center-80s": "Centrul civic, anii '80",
    "civic-center-description":
      "Vedere panoramică a centrului civic din Brad, reorganizat conform principiilor urbanistice ale epocii comuniste.",

    // Gallery page
    "gallery-description": "Imagini reprezentative din perioada de dezvoltare a mineritului în zona Brad",
    "brad-gold-mine-70s": "Mina de aur Brad, anii '70",
    "miners-exit-1980": "Mineri la ieșirea din șut, 1980",
    "mining-equipment-60s": "Utilaje miniere, anii '60",
    "contribute-photos": "Contribuie cu Fotografii",
    "contribute-description":
      "Aveți fotografii sau documente din perioada comunistă în zona Brad? Contribuiți la îmbogățirea acestei galerii și la păstrarea memoriei locale.",
    "contact-us": "Contactează-ne",
    "brad-gold-mine-description":
      "Imagine cu intrarea principală în mina de aur din Brad, una dintre cele mai importante exploatări miniere din zonă.",
    "miners-description":
      "Grup de mineri fotografiați la ieșirea din schimb. Se poate observa echipamentul specific și condițiile de muncă din acea perioadă.",
    "equipment-description":
      "Utilaje folosite în exploatarea minieră din Brad în primele decenii ale perioadei comuniste.",

    // Contact form
    "secure-contact": "Contact",
    "contact-form-description":
      "Aveți informații, fotografii sau documente din perioada comunistă în zona Brad? Contactați-ne prin formularul de mai jos.",
    name: "Nume",
    email: "Email",
    phone: "Telefon",
    message: "Mesaj",
    "send-message": "Trimite mesajul",
    sending: "Se trimite...",
    "message-sent-success": "Mesaj trimis cu succes!",
    "thank-you-message": "Vă mulțumim pentru mesaj. Vă vom contacta în cel mai scurt timp posibil.",
    "send-another": "Trimite alt mesaj",
    "direct-contact": "Contact direct",
    "name-required": "Numele este obligatoriu",
    "email-required": "Email-ul este obligatoriu",
    "message-required": "Mesajul este obligatoriu",
    characters: "caractere",
    "name-min-length": "Numele trebuie să aibă cel puțin 2 caractere",
    "name-max-length": "Numele nu poate depăși 100 de caractere",
    "email-invalid": "Formatul email-ului nu este valid",
    "phone-invalid": "Formatul numărului de telefon nu este valid",
    "message-min-length": "Mesajul trebuie să aibă cel puțin 10 caractere",
    "message-max-length": "Mesajul nu poate depăși 1000 de caractere",
    "form-error": "A apărut o eroare la trimiterea mesajului. Vă rugăm să încercați din nou.",
    "message-placeholder": "Descrieți informațiile pe care le aveți sau întrebările dvs...",
  },
  en: {
    // Navigation
    home: "Home",
    history: "History",
    gallery: "Gallery",
    options: "Options",
    settings: "Settings",
    language: "Language",
    theme: "Theme",
    romanian: "Romanian",
    english: "English",
    light: "Light",
    dark: "Dark",
    contact: "Contact",
    "quick-navigation": "Quick Navigation",
    "all-rights-reserved": "All rights reserved",

    // Main content
    "mining-beginnings": "History of Mining in Brad",
    "site-title": "History of Mining in Brad",
    "communist-period": "Communist Period in Brad Area",
    "discover-history": "Discover History",
    "view-gallery": "View Gallery",
    "back-home": "Back to Home",
    "photo-gallery": "Photo Gallery",
    "mining-industry": "Mining Industry",
    "daily-life": "Daily Life",
    "socialist-architecture": "Socialist Architecture",
    "historical-timeline": "Historical Timeline",
    "important-aspects": "Important Aspects",

    // Homepage content
    "period-1947-1989": "1947-1989",
    "homepage-description":
      "Explore the history and industrial heritage of mining in the Brad area, an important chapter in the economic and social development of the region over time.",
    "mining-industry-description":
      "Mining exploitation represented an essential economic pillar during the communist period, Brad being known for its gold mines and other resources.",
    "daily-life-description":
      "Discover what daily life was like for Brad residents during the communist regime, from food queues to cultural activities.",
    "socialist-architecture-description":
      "Residential blocks, administrative buildings and other structures built during the communist period that changed Brad's urban landscape.",
    "learn-more": "Learn more",
    "timeline-description":
      "The communist period in Romania officially began in 1947 and ended in 1989. In the Brad area, this period was marked by intense industrialization, profound social and economic transformations.",
    "brad-hunedoara": "Brad, Hunedoara County",
    "view-complete-timeline": "View Complete Timeline",
    "may-1-1975": "May 1, 1975",

    // Footer
    "footer-description":
      "A project dedicated to preserving and promoting the history of mining and industrial heritage in the Brad area, Hunedoara County.",

    // History page
    "history-page-description":
      "Explore the chronology, events and impact of mining development on the local community in the modern era",
    "communist-period-timeline": "Timeline of the Communist Period in Brad",
    "regime-beginning": "Beginning of the regime",
    industrialization: "Industrialization",
    "golden-age": "Golden Age",
    decline: "Decline",

    // Timeline content
    "timeline-1947-1950":
      "After the forced abdication of King Michael I and the proclamation of the Romanian People's Republic, the Brad area came under the influence of the new communist regime. The process of nationalizing gold mines and other private enterprises in the area began.",
    "timeline-1950-1965":
      "Period of intense industrialization. Mining exploitation in Brad was expanded, new industrial facilities were built and accelerated urbanization of the area began. Many residents from neighboring villages moved to Brad to work in industry.",
    "timeline-1965-1980":
      "After Nicolae Ceaușescu came to power, the Brad area experienced a period of relative prosperity. New residential blocks, schools and hospitals were built. The mining industry reached the peak of its development, and the city became an important industrial center in the region.",
    "timeline-1980-1989":
      "The economic crisis strongly affected the Brad area as well. Food and electricity rationing became a daily reality. Working conditions in mines deteriorated, and population discontent grew. In December 1989, Brad residents participated in the revolution that led to the fall of the communist regime.",

    // Mining industry section
    "mining-communist-period": "Mining Industry in the Communist Period",
    "mining-description-1":
      "Mining exploitation represented the backbone of the local economy during the communist period. The gold mines in Brad, with a history dating back to Roman times, were nationalized and considerably expanded during the regime.",
    "mining-description-2":
      "Brad Mining Enterprise became one of the largest employers in the area, providing jobs for thousands of people. New galleries were built, modern equipment for that time was introduced and emphasis was placed on increasing production.",
    "mining-description-3":
      "Miners enjoyed a privileged status in communist society, having higher salaries and additional benefits compared to other professional categories. However, working conditions remained difficult and dangerous.",
    "gold-mine-1970": "Gold mine, 1970",

    // Daily life section
    "daily-life-brad": "Daily Life in Brad",
    "daily-life-description-1":
      "Daily life in Brad during the communist period was marked by contrasts. On one hand, the regime ensured stable jobs, free education and medical care for everyone. On the other hand, individual freedoms were restricted, and the shortage of consumer goods was a daily reality, especially in the 80s.",
    "daily-life-description-2":
      "Food queues became an emblematic image of the period. Brad residents stood in line for hours to buy bread, meat or other basic products. Electricity rationing also affected daily life, with frequent power outages.",
    "daily-life-description-3":
      "Despite these difficulties, cultural life was active. The House of Culture in Brad organized shows, film screenings and other cultural events. The 'Song of Romania' festival annually mobilized numerous amateur artists from the area.",
    "food-queue-1985": "Food queue, 1985",

    // Gallery page
    "gallery-description": "Representative images from the mining development period in the Brad area",
    "brad-gold-mine-70s": "Brad gold mine, 70s",
    "miners-exit-1980": "Miners exiting the shaft, 1980",
    "mining-equipment-60s": "Mining equipment, 60s",
    "contribute-photos": "Contribute Photos",
    "contribute-description":
      "Do you have photos or documents from the communist period in the Brad area? Contribute to enriching this gallery and preserving local memory.",
    "contact-us": "Contact us",
    "brad-gold-mine-description":
      "Image of the main entrance to the gold mine in Brad, one of the most important mining operations in the area.",
    "miners-description":
      "Group of miners photographed at the end of their shift. You can observe the specific equipment and working conditions from that period.",
    "equipment-description":
      "Equipment used in mining operations in Brad in the first decades of the communist period.",
    "food-queue-80s": "Food queue, 80s",
    "food-queue-description":
      "Brad residents standing in line for basic food. The image captures one of the daily realities of the austerity period of the 80s.",
    "may-parade-1975": "May 1st parade, 1975",
    "may-parade-description":
      "Parade organized on the occasion of International Workers' Day. Participation in such events was mandatory for most employees.",
    "universal-store-70s": "Universal Store, 70s",
    "universal-store-description":
      "The Universal Store in Brad, one of the main commercial points in the city during the communist period.",
    "housing-blocks-70s": "Housing blocks, 70s",
    "housing-blocks-description":
      "Block complexes built during the urban expansion period of the 70s, characteristic of socialist architecture.",
    "culture-house-1978": "House of Culture, 1978",
    "culture-house-description":
      "The House of Culture in Brad, built in socialist modernist style, hosted numerous cultural and political events.",
    "civic-center-80s": "Civic center, 80s",
    "civic-center-description":
      "Panoramic view of Brad's civic center, reorganized according to the urban planning principles of the communist era.",

    // Contact form
    "secure-contact": "Contact",
    "contact-form-description":
      "Do you have information, photos or documents from the communist period in the Brad area? Contact us through the form below.",
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    "send-message": "Send message",
    sending: "Sending...",
    "message-sent-success": "Message sent successfully!",
    "thank-you-message": "Thank you for your message. We will contact you as soon as possible.",
    "send-another": "Send another message",
    "direct-contact": "Direct contact",
    "name-required": "Name is required",
    "email-required": "Email is required",
    "message-required": "Message is required",
    characters: "characters",
    "name-min-length": "Name must be at least 2 characters",
    "name-max-length": "Name cannot exceed 100 characters",
    "email-invalid": "Email format is not valid",
    "phone-invalid": "Phone number format is not valid",
    "message-min-length": "Message must be at least 10 characters",
    "message-max-length": "Message cannot exceed 1000 characters",
    "form-error": "An error occurred while sending the message. Please try again.",
    "message-placeholder": "Describe the information you have or your questions...",
  },
}

// Utility functions
function getTranslation(key) {
  return translations[currentLanguage][key] || key
}

function updateText() {
  const elements = document.querySelectorAll("[data-i18n]")
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n")
    const translation = getTranslation(key)

    if (element.tagName === "INPUT" && element.type === "text") {
      element.placeholder = translation
    } else if (element.hasAttribute("data-i18n-placeholder")) {
      element.placeholder = translation
    } else {
      element.textContent = translation
    }
  })

  // Update language attribute
  document.documentElement.lang = currentLanguage
}

function updateLanguageDisplay() {
  const currentLangElements = document.querySelectorAll("#currentLang, #mobileLang")
  const langText = currentLanguage === "ro" ? "Română" : "English"
  currentLangElements.forEach((el) => {
    if (el) el.textContent = langText
  })
}

function updateThemeDisplay() {
  const currentThemeElements = document.querySelectorAll("#currentTheme, #mobileTheme")
  const themeIconElements = document.querySelectorAll("#themeIcon")
  const themeText = currentTheme === "light" ? getTranslation("light") : getTranslation("dark")
  const themeIcon = currentTheme === "light" ? "☀️" : "🌙"

  currentThemeElements.forEach((el) => {
    if (el) el.textContent = themeText
  })

  themeIconElements.forEach((el) => {
    if (el) el.textContent = themeIcon
  })
}

function applyTheme() {
  document.body.setAttribute("data-theme", currentTheme)
  localStorage.setItem("theme", currentTheme)
  updateThemeDisplay()
}

function toggleLanguage() {
  currentLanguage = currentLanguage === "ro" ? "en" : "ro"
  localStorage.setItem("language", currentLanguage)
  updateText()
  updateLanguageDisplay()
}

function toggleTheme() {
  currentTheme = currentTheme === "light" ? "dark" : "light"
  applyTheme()
}

// Mobile menu functionality
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileNav = document.getElementById("mobileNav")

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenuBtn.classList.toggle("active")
      mobileNav.classList.toggle("active")
    })

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!mobileMenuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileMenuBtn.classList.remove("active")
        mobileNav.classList.remove("active")
      }
    })

    // Close mobile menu when clicking on a link
    const mobileNavLinks = mobileNav.querySelectorAll(".nav-link")
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenuBtn.classList.remove("active")
        mobileNav.classList.remove("active")
      })
    })
  }
}

// Settings dropdown functionality
function initSettingsDropdown() {
  const settingsBtn = document.getElementById("settingsBtn")
  const dropdownContent = document.getElementById("dropdownContent")

  if (settingsBtn && dropdownContent) {
    settingsBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      dropdownContent.classList.toggle("active")
    })

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!settingsBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
        dropdownContent.classList.remove("active")
      }
    })
  }
}

// Language switching functionality
function initLanguageSwitching() {
  const languageSwitches = document.querySelectorAll("#languageSwitch, #mobileLangSwitch")

  languageSwitches.forEach((switchEl) => {
    if (switchEl) {
      // Set initial state
      switchEl.checked = currentLanguage === "en"

      switchEl.addEventListener("change", () => {
        toggleLanguage()
        // Update all switches
        languageSwitches.forEach((otherSwitch) => {
          otherSwitch.checked = currentLanguage === "en"
        })
      })
    }
  })
}

// Theme switching functionality
function initThemeSwitching() {
  const themeSwitches = document.querySelectorAll("#themeSwitch, #mobileThemeSwitch")

  themeSwitches.forEach((switchEl) => {
    if (switchEl) {
      // Set initial state
      switchEl.checked = currentTheme === "dark"

      switchEl.addEventListener("change", () => {
        toggleTheme()
        // Update all switches
        themeSwitches.forEach((otherSwitch) => {
          otherSwitch.checked = currentTheme === "dark"
        })
      })
    }
  })
}

// Form validation
function validateForm() {
  const name = document.getElementById("name")
  const email = document.getElementById("email")
  const phone = document.getElementById("phone")
  const message = document.getElementById("message")

  let isValid = true

  // Clear previous errors
  document.querySelectorAll(".error-message").forEach((el) => (el.textContent = ""))

  // Validate name
  if (!name.value.trim()) {
    document.getElementById("nameError").textContent = getTranslation("name-required")
    isValid = false
  } else if (name.value.trim().length < 2) {
    document.getElementById("nameError").textContent = getTranslation("name-min-length")
    isValid = false
  } else if (name.value.trim().length > 100) {
    document.getElementById("nameError").textContent = getTranslation("name-max-length")
    isValid = false
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email.value.trim()) {
    document.getElementById("emailError").textContent = getTranslation("email-required")
    isValid = false
  } else if (!emailRegex.test(email.value.trim())) {
    document.getElementById("emailError").textContent = getTranslation("email-invalid")
    isValid = false
  }

  // Validate phone (optional)
  if (phone.value.trim()) {
    const phoneRegex = /^[0-9\s\-+$$$$]{10,}$/
    if (!phoneRegex.test(phone.value.trim())) {
      document.getElementById("phoneError").textContent = getTranslation("phone-invalid")
      isValid = false
    }
  }

  // Validate message
  if (!message.value.trim()) {
    document.getElementById("messageError").textContent = getTranslation("message-required")
    isValid = false
  } else if (message.value.trim().length < 10) {
    document.getElementById("messageError").textContent = getTranslation("message-min-length")
    isValid = false
  } else if (message.value.trim().length > 1000) {
    document.getElementById("messageError").textContent = getTranslation("message-max-length")
    isValid = false
  }

  return isValid
}

// Contact form functionality
function initContactForm() {
  const contactForm = document.getElementById("contactForm")
  const messageTextarea = document.getElementById("message")
  const charCount = document.getElementById("charCount")
  const submitBtn = document.getElementById("submitBtn")
  const formSuccess = document.getElementById("formSuccess")
  const sendAnotherBtn = document.getElementById("sendAnotherBtn")

  if (messageTextarea && charCount) {
    // Character counter
    messageTextarea.addEventListener("input", () => {
      const count = messageTextarea.value.length
      charCount.textContent = count

      if (count > 1000) {
        charCount.style.color = "#dc2626"
      } else if (count > 900) {
        charCount.style.color = "#f59e0b"
      } else {
        charCount.style.color = "var(--text-muted)"
      }
    })

    // Set placeholder
    messageTextarea.placeholder = getTranslation("message-placeholder")
  }

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault()

      if (!validateForm()) {
        return
      }

      // Show loading state
      if (submitBtn) {
        submitBtn.disabled = true
        submitBtn.innerHTML = `<span>${getTranslation("sending")}</span>`
      }

      // Simulate form submission
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // Show success message
        contactForm.style.display = "none"
        if (formSuccess) {
          formSuccess.style.display = "block"
        }

        // Reset form
        contactForm.reset()
        if (charCount) charCount.textContent = "0"
      } catch (error) {
        alert(getTranslation("form-error"))
      } finally {
        // Reset button state
        if (submitBtn) {
          submitBtn.disabled = false
          submitBtn.innerHTML = `<span>${getTranslation("send-message")}</span>`
        }
      }
    })
  }

  if (sendAnotherBtn) {
    sendAnotherBtn.addEventListener("click", () => {
      contactForm.style.display = "block"
      if (formSuccess) {
        formSuccess.style.display = "none"
      }
    })
  }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]')

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href")
      if (href === "#") return

      const target = document.querySelector(href)
      if (target) {
        e.preventDefault()
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Intersection Observer for animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements that should animate
  const animatedElements = document.querySelectorAll(".aspect-card, .timeline-item, .gallery-item, .content-section")
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
}

// Active navigation link highlighting
function initActiveNavigation() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html"
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    const href = link.getAttribute("href")
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active")
    } else {
      link.classList.remove("active")
    }
  })
}

// Gallery image lazy loading
function initLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]')

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.src
          img.classList.remove("lazy")
          imageObserver.unobserve(img)
        }
      })
    })

    images.forEach((img) => {
      img.classList.add("lazy")
      imageObserver.observe(img)
    })
  }
}

// Update current year in footer
function updateCurrentYear() {
  const yearElements = document.querySelectorAll("#currentYear")
  const currentYear = new Date().getFullYear()
  yearElements.forEach((el) => {
    if (el) el.textContent = currentYear
  })
}

// Keyboard navigation support
function initKeyboardNavigation() {
  document.addEventListener("keydown", (e) => {
    // ESC key closes dropdowns and mobile menu
    if (e.key === "Escape") {
      const dropdownContent = document.getElementById("dropdownContent")
      const mobileNav = document.getElementById("mobileNav")
      const mobileMenuBtn = document.getElementById("mobileMenuBtn")

      if (dropdownContent) dropdownContent.classList.remove("active")
      if (mobileNav) mobileNav.classList.remove("active")
      if (mobileMenuBtn) mobileMenuBtn.classList.remove("active")
    }
  })
}

// Performance optimization: Debounce function
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Handle window resize
function initResizeHandler() {
  const handleResize = debounce(() => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
      const mobileNav = document.getElementById("mobileNav")
      const mobileMenuBtn = document.getElementById("mobileMenuBtn")

      if (mobileNav) mobileNav.classList.remove("active")
      if (mobileMenuBtn) mobileMenuBtn.classList.remove("active")
    }
  }, 250)

  window.addEventListener("resize", handleResize)
}

// Initialize all functionality
function init() {
  // Apply saved preferences
  applyTheme()
  updateText()
  updateLanguageDisplay()
  updateThemeDisplay()
  updateCurrentYear()

  // Initialize components
  initMobileMenu()
  initSettingsDropdown()
  initLanguageSwitching()
  initThemeSwitching()
  initContactForm()
  initSmoothScrolling()
  initScrollAnimations()
  initActiveNavigation()
  initLazyLoading()
  initKeyboardNavigation()
  initResizeHandler()

  // Add loading complete class
  document.body.classList.add("loaded")
}

// Wait for DOM to be ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init)
} else {
  init()
}

// Handle page visibility changes
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    // Page became visible, update current year
    updateCurrentYear()
  }
})

// Add some CSS for loading states and animations
const style = document.createElement("style")
style.textContent = `
    .loaded .aspect-card,
    .loaded .timeline-item,
    .loaded .gallery-item {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .lazy {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .lazy.loaded {
        opacity: 1;
    }
    
    @media (prefers-reduced-motion: reduce) {
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
`
document.head.appendChild(style)
