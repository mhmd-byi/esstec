// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')

// Function to update the time
function updateCurrentTime() {
  // Using moment.js to get the current time formatted with 'LTS' which includes seconds
  var currentTime = moment().format("LTS");
  // Updating the HTML content of the element with the ID 'time-cell'
  document.getElementById("time-cell").textContent = currentTime;
}

function getCurrentYear() {
  var currentYear = moment().format("YYYY");
  document.getElementById("year-cell").textContent = currentYear;
}

// Update the time every second
setInterval(updateCurrentTime, 1000);

// Initialize the time display
updateCurrentTime();
getCurrentYear();

document.addEventListener("DOMContentLoaded", function () {
  const contactButton = document.getElementById("contact");
  const privacyButton = document.getElementById("privacy");
  const privacyButtonMobile = document.getElementById("privacy-mb");
  const contactButtonMobile = document.getElementById("contact-mb");
  const closeButton = document.querySelector(".close-panel-button");
  const slideOver = document.querySelector(".slide-over");
  const contactContent = document.querySelector(".contact-content");
  const privacyContent = document.querySelector(".privacy-content");

  function openSlideOver(contentElement) {
    // Hide all content elements initially
    contactContent.style.display = "none";
    privacyContent.style.display = "none";
    document.getElementById("overlay").style.display = "block";

    // Show the specific content element
    contentElement.style.display = "block";

    // Open the slide-over panel
    slideOver.classList.add("slide-over-open");
  }

  function closeSlideOver() {
    // Close the slide-over panel
    slideOver.classList.remove("slide-over-open");

    document.getElementById("overlay").style.display = "none";
  }

  contactButton.addEventListener("click", function (event) {
    event.stopPropagation();
    openSlideOver(contactContent);
  });

  contactButtonMobile.addEventListener("click", function (event) {
    event.stopPropagation();
    openSlideOver(contactContent);
  });

  privacyButton.addEventListener("click", function (event) {
    event.stopPropagation();
    openSlideOver(privacyContent);
  });

  privacyButtonMobile.addEventListener("click", function (event) {
    event.stopPropagation();
    openSlideOver(privacyContent);
  });

  closeButton.addEventListener("click", function (event) {
    event.stopPropagation();
    closeSlideOver();
  });

  document.addEventListener("click", function (event) {
    if (
      !slideOver.contains(event.target) &&
      slideOver.classList.contains("slide-over-open")
    ) {
      closeSlideOver();
    }
  });
});
// Accordian 
document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll("[data-accordion-target]");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = this.getAttribute("data-accordion-target");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const isHidden = targetElement.classList.contains("hidden");
        accordionButtons.forEach((b) => {
          const otherTargetId = b.getAttribute("data-accordion-target");
          const otherTargetElement = document.querySelector(otherTargetId);

          if (otherTargetElement && otherTargetElement !== targetElement) {
            otherTargetElement.classList.add("hidden");
          }
        });
        targetElement.classList.toggle("hidden", !isHidden);
      }
    });
  });
});
