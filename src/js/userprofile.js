document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
  
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Tab navigation functionality
    const tabItems = document.querySelectorAll('.tabs ul li');
    const sections = document.querySelectorAll('.timeLineAbout section, .timeLineAbout div.contactContainer, .timeLineAbout div.experiencesContatiner');
    
    // Initially hide all sections except the first one (Skills)
    sections.forEach((section, index) => {
        if (index !== 0) {
            section.style.display = 'none';
        }
    });
    
    // Add click event listeners to tab items
    tabItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all tabs
            tabItems.forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Show the corresponding section
            const tabClass = this.classList[0];
            
            if (tabClass === 'skills') {
                document.querySelector('.skill').style.display = 'block';
            } else if (tabClass === 'goals') {
                document.querySelector('.golas').style.display = 'block';
            } else if (tabClass === 'experiences') {
                document.querySelector('.experiencesContatiner').style.display = 'block';
            } else if (tabClass === 'contactMe') {
                document.querySelector('.contactContainer').style.display = 'block';
            }
        });
    });
    
    // Contact form functionality
    const contactForm = document.getElementById('contact-form');
    const messageTextarea = document.getElementById('message');
    const charCount = document.getElementById('char-count');
    const maxChars = 500;
    const emailInput = document.getElementById('email');
    const nameInput = document.getElementById('name');
    const emailError = document.getElementById('email-error');
    
    if (messageTextarea) {
        // Update character count on input
        messageTextarea.addEventListener('input', function() {
            const remaining = maxChars - this.value.length;
            charCount.textContent = `${this.value.length}/${maxChars}`;
            
            // Change color when approaching the limit
            if (remaining < 50) {
                charCount.style.color = '#ff6347';
            } else {
                charCount.style.color = '#595959';
            }
            
            // Prevent typing beyond max characters
            if (this.value.length > maxChars) {
                this.value = this.value.substring(0, maxChars);
                charCount.textContent = `${maxChars}/${maxChars}`;
            }
        });
    }
    
    if (emailInput) {
        // Email validation
        emailInput.addEventListener('blur', validateEmail);
    }
    
    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            emailInput.classList.add('error');
            return false;
        } else if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
            emailInput.classList.add('error');
            return false;
        } else {
            emailError.textContent = '';
            emailInput.classList.remove('error');
            return true;
        }
    }
    
    // Form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate name
            if (nameInput.value.trim() === '') {
                nameInput.classList.add('error');
                return;
            } else {
                nameInput.classList.remove('error');
            }
            
            // Validate email
            if (!validateEmail()) {
                return;
            }
            
            // If validation passes, you can submit the form
            alert('Form submitted successfully!');
            contactForm.reset();
            charCount.textContent = `0/${maxChars}`;
        });
        
        // Clear form button
        const clearBtn = document.getElementById('clear-form');
        if (clearBtn) {
            clearBtn.addEventListener('click', function() {
                contactForm.reset();
                nameInput.classList.remove('error');
                emailInput.classList.remove('error');
                emailError.textContent = '';
                charCount.textContent = `0/${maxChars}`;
                charCount.style.color = '#595959';
            });
        }
    }
});