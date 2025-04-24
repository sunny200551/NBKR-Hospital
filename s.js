// DOM Elements
const header = document.querySelector('header');
const chatbotOpenBtn = document.getElementById('chatbot-open-btn');
const chatbotCloseBtn = document.getElementById('chatbot-close-btn');
const chatbot = document.getElementById('chatbot');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input-field');
const chatbotSendBtn = document.getElementById('chatbot-send-btn');
const optionBtns = document.querySelectorAll('.option-btn');
const appointmentForm = document.getElementById('appointment-form');
const contactForm = document.getElementById('contact-form');
const confirmationModal = document.getElementById('confirmation-modal');
const serviceModal = document.getElementById('service-modal');
const modalMessage = document.getElementById('modal-message');
const modalOkBtn = document.getElementById('modal-ok-btn');
const closeModalBtns = document.querySelectorAll('.close-modal');
const serviceCards = document.querySelectorAll('.service-card');
const serviceLinks = document.querySelectorAll('.service-link');
const bookAppointmentBtns = document.querySelectorAll('.book-appointment-btn');
const searchInput = document.getElementById('search-input');
const appointmentSection = document.getElementById('appointments');
const liveTime = document.getElementById('live-time');
const appointmentsList = document.getElementById('appointments-list');
const clearAppointmentsBtn = document.getElementById('clear-appointments-btn');

// Service Details Data
const serviceDetails = {
    cardiology: {
        title: 'Cardiology',
        doctors: [
            { name: 'Dr. Arun Kumar', experience: '20+ years', specialization: 'Chief of Cardiology' },
            { name: 'Dr. Sanjay Gupta', experience: '15+ years', specialization: 'Interventional Cardiology' }
        ],
        address: 'Block A, 2nd Floor',
        route: 'Enter through the main entrance, take the elevator to the 2nd floor, turn left, and follow signs to Block A.',
        specialists: ['Cardiac Surgeons', 'Electrophysiologists', 'Pediatric Cardiologists']
    },
    pediatrics: {
        title: 'Pediatrics',
        doctors: [
            { name: 'Dr. Priya Singh', experience: '15+ years', specialization: 'Head of Pediatrics' },
            { name: 'Dr. Anjali Sharma', experience: '10+ years', specialization: 'Neonatology' }
        ],
        address: 'Block C, Ground Floor',
        route: 'Enter through the main entrance, proceed straight past the reception, and Block C is on your right.',
        specialists: ['Pediatric Neurologists', 'Pediatric Oncologists']
    },
    orthopedics: {
        title: 'Orthopedics',
        doctors: [
            { name: 'Dr. Meera Patel', experience: '12+ years', specialization: 'Orthopedic Specialist' },
            { name: 'Dr. Vikram Desai', experience: '18+ years', specialization: 'Spine Surgery' }
        ],
        address: 'Block B, 1st Floor',
        route: 'Enter through the main entrance, take the stairs or elevator to the 1st floor, and follow signs to Block B.',
        specialists: ['Joint Replacement Surgeons', 'Sports Medicine Specialists']
    },
    surgery: {
        title: 'General Surgery',
        doctors: [
            { name: 'Dr. Anil Reddy', experience: '22+ years', specialization: 'General Surgeon' }
        ],
        address: 'Block D, 3rd Floor',
        route: 'Enter through the main entrance, take the elevator to the 3rd floor, turn right, and follow signs to Block D.',
        specialists: ['Laparoscopic Surgeons', 'Trauma Surgeons']
    },
    emergency: {
        title: 'Emergency Care',
        doctors: [
            { name: 'Dr. Sameer Khan', experience: '10+ years', specialization: 'Emergency Medicine' }
        ],
        address: 'Main Building, Ground Floor',
        route: 'Enter through the emergency entrance (east side) or main entrance, and the Emergency Department is immediately accessible.',
        specialists: ['Critical Care Specialists', 'Trauma Specialists']
    },
    dermatology: {
        title: 'Dermatology',
        doctors: [
            { name: 'Dr. Neha Joshi', experience: '8+ years', specialization: 'Dermatologist' }
        ],
        address: 'Block E, 1st Floor',
        route: 'Enter through the main entrance, take the elevator to the 1st floor, turn left, and follow signs to Block E.',
        specialists: ['Cosmetic Dermatologists', 'Pediatric Dermatologists']
    },
    neurology: {
        title: 'Neurology',
        doctors: [
            { name: 'Dr. Rajesh Verma', experience: '18+ years', specialization: 'Neurosurgeon' },
            { name: 'Dr. Sunita Rao', experience: '14+ years', specialization: 'Neurologist' }
        ],
        address: 'Block A, 3rd Floor',
        route: 'Enter through the main entrance, take the elevator to the 3rd floor, turn left, and follow signs to Block A.',
        specialists: ['Epileptologists', 'Stroke Specialists']
    },
    radiology: {
        title: 'Radiology',
        doctors: [
            { name: 'Dr. Kiran Patel', experience: '16+ years', specialization: 'Radiologist' }
        ],
        address: 'Block F, Basement',
        route: 'Enter through the main entrance, take the stairs or elevator to the basement, and follow signs to Block F.',
        specialists: ['Interventional Radiologists', 'Nuclear Medicine Specialists']
    }
};

// Disease to Department Mapping
const diseaseMap = {
    cold: {
        department: 'pediatrics',
        description: 'A common cold is a viral infection causing symptoms like sneezing, runny nose, and sore throat.'
    },
    flu: {
        department: 'pediatrics',
        description: 'Influenza causes fever, body aches, and respiratory symptoms.'
    },
    cough: {
        department: 'pediatrics',
        description: 'A cough can be due to infections, allergies, or other respiratory issues.'
    },
    headache: {
        department: 'neurology',
        description: 'Headaches can result from stress, migraines, or neurological conditions.'
    },
    migraine: {
        department: 'neurology',
        description: 'Migraines cause severe, throbbing headaches often with nausea and light sensitivity.'
    },
    fever: {
        department: 'pediatrics',
        description: 'Fever is a common symptom of infections or inflammatory conditions.'
    },
    backpain: {
        department: 'orthopedics',
        description: 'Back pain may result from muscle strain, spinal issues, or injury.'
    },
    jointpain: {
        department: 'orthopedics',
        description: 'Joint pain can be due to arthritis, injury, or overuse.'
    },
    heartpain: {
        department: 'cardiology',
        description: 'Chest or heart pain may indicate cardiac issues and requires immediate attention.'
    },
    chestpain: {
        department: 'cardiology',
        description: 'Chest pain can be related to heart conditions or other issues.'
    },
    skinrash: {
        department: 'dermatology',
        description: 'Skin rashes may be caused by allergies, infections, or skin conditions.'
    },
    acne: {
        department: 'dermatology',
        description: 'Acne is a common skin condition affecting the face, back, or chest.'
    },
    injury: {
        department: 'emergency',
        description: 'Injuries such as cuts, fractures, or burns require urgent care.'
    },
    accident: {
        department: 'emergency',
        description: 'Accidents causing trauma need immediate emergency attention.'
    },
    stroke: {
        department: 'neurology',
        description: 'A stroke is a medical emergency causing sudden neurological symptoms.'
    },
    seizure: {
        department: 'neurology',
        description: 'Seizures require neurological evaluation and management.'
    },
    abdominalpain: {
        department: 'surgery',
        description: 'Abdominal pain may indicate issues requiring surgical evaluation.'
    },
    appendicitis: {
        department: 'surgery',
        description: 'Appendicitis causes severe abdominal pain and requires urgent surgery.'
    }
};

// Sticky Header
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '15px 0';
        header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.classList.contains('service-link')) return;
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Handle Book Appointment
            if (this.classList.contains('book-appointment-btn')) {
                serviceModal.style.display = 'none';
                confirmationModal.style.display = 'none';
                appointmentSection.style.display = 'block';
            }
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Header Link Fixes
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        const text = this.textContent.trim().toLowerCase();

        if (text === 'find a doctor') {
            e.preventDefault();
            const teamSection = document.getElementById('team') || document.getElementById('about');
            if (teamSection) {
                window.scrollTo({
                    top: teamSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        } else if (text === 'emergency care') {
            e.preventDefault();
            showServiceModal('emergency');
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
                window.scrollTo({
                    top: servicesSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Chatbot Functionality
chatbotOpenBtn.addEventListener('click', () => {
    chatbot.style.display = 'flex';
    chatbotInput.focus();
    // Welcome greeting
    setTimeout(() => {
        addMessage('bot', 'Hello! Welcome to NBKR Hospitals Assistant. How can I assist you today?<br>Common concerns: cold, headache, cough, fever, back pain, or book an appointment.');
    }, 300);
});

chatbotCloseBtn.addEventListener('click', () => {
    chatbot.style.display = 'none';
});

chatbotSendBtn.addEventListener('click', sendMessage);
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

optionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const option = btn.getAttribute('data-option');
        processOption(option);
    });
});

function processOption(option) {
    switch(option) {
        case 'appointment':
            addMessage('user', 'I want to book an appointment');
            setTimeout(() => {
                addMessage('bot', 'Great! I can help you book an appointment. What department would you like to visit?');
                showDepartmentOptions();
            }, 600);
            break;
        case 'timing':
            addMessage('user', 'What are the hospital timings?');
            setTimeout(() => {
                addMessage('bot', 'Our hospital is open:<br><strong>Mon-Fri:</strong> 8:00 AM - 8:00 PM<br><strong>Sat:</strong> 8:00 AM - 5:00 PM<br><strong>Sun:</strong> 9:00 AM - 1:00 PM<br>Emergency services: 24/7.');
            }, 600);
            break;
        case 'location':
            addMessage('user', 'Where is the hospital located?');
            setTimeout(() => {
                addMessage('bot', 'NBKR Hospitals is located at Vidyanagar, Tirupati District, Andhra Pradesh, 3 km from the railway station.');
            }, 600);
            break;
        case 'departments':
            addMessage('user', 'I want to find a department');
            setTimeout(() => {
                addMessage('bot', 'We have several departments. Which one are you looking for?');
                showDepartmentOptions();
            }, 600);
            break;
    }
}

function showDepartmentOptions() {
    const deptOptionsHTML = `
        <div class="chatbot-dept-options">
            <button class="dept-option" data-dept="cardiology">Cardiology</button>
            <button class="dept-option" data-dept="pediatrics">Pediatrics</button>
            <button class="dept-option" data-dept="orthopedics">Orthopedics</button>
            <button class="dept-option" data-dept="neurology">Neurology</button>
        </div>
    `;
    addMessage('bot', 'Please select a department: ' + deptOptionsHTML);
    setTimeout(() => {
        document.querySelectorAll('.dept-option').forEach(btn => {
            btn.addEventListener('click', () => {
                const dept = btn.getAttribute('data-dept');
                selectDepartment(dept);
            });
        });
    }, 100);
}

function selectDepartment(dept) {
    const deptNames = {
        cardiology: 'Cardiology',
        pediatrics: 'Pediatrics',
        orthopedics: 'Orthopedics',
        neurology: 'Neurology'
    };
    addMessage('user', `I'm looking for the ${deptNames[dept]} department`);
    setTimeout(() => {
        const data = serviceDetails[dept];
        if (chatbotMessages.querySelector('.message:last-child .message-content p').textContent.includes('book an appointment')) {
            addMessage('bot', `Great! For ${deptNames[dept]} appointments, we have availability this week. Would you like to schedule and book using our appointment form below.`);
        } else {
            addMessage('bot', `The ${deptNames[dept]} department is located at ${data.address}.<br><strong>Doctors:</strong><br>${data.doctors.map(doc => `- ${doc.name}, ${doc.specialization}, ${doc.experience}`).join('<br>')}<br><strong>Route:</strong> ${data.route}`);
        }
    }, 600);
}

function sendMessage() {
    const message = chatbotInput.value.trim();
    if (message !== '') {
        addMessage('user', message);
        chatbotInput.value = '';
        setTimeout(() => {
            processMessage(message.toLowerCase());
        }, 600);
    }
}

function processMessage(message) {
    // Check for disease-related keywords
    let foundDisease = null;
    for (const [disease, info] of Object.entries(diseaseMap)) {
        if (message.includes(disease)) {
            foundDisease = { name: disease, ...info };
            break;
        }
    }

    if (foundDisease) {
        const dept = foundDisease.department;
        const data = serviceDetails[dept];
        addMessage('bot', `${foundDisease.description}<br><strong>Recommended Department:</strong> ${data.title}<br><strong>Doctors:</strong><br>${data.doctors.map(doc => `- ${doc.name}, ${doc.specialization}, ${doc.experience}`).join('<br>')}<br><strong>Location:</strong> ${data.address}<br><strong>Route:</strong> ${data.route}<br>Would you like to book an appointment?`);
        return;
    }

    if (message.includes('appointment') || message.includes('book') || message.includes('schedule')) {
        addMessage('bot', 'I can help you book an appointment. What department would you like to visit?');
        showDepartmentOptions();
    } else if (message.includes('time') || message.includes('hour') || message.includes('open')) {
        addMessage('bot', 'Our hospital is open:<br><strong>Mon-Fri:</strong> 8:00 AM - 8:00 PM<br><strong>Sat:</strong> 8:00 AM - 5:00 PM<br><strong>Sun:</strong> 9:00 AM - 1:00 PM<br>Emergency services: 24/7.');
    } else if (message.includes('location') || message.includes('address') || message.includes('where')) {
        addMessage('bot', 'NBKR Hospitals is located at Vidyanagar, Tirupati District, Andhra Pradesh, 3 km from the railway station.');
    } else if (message.includes('doctor') || message.includes('specialist')) {
        addMessage('bot', 'View our doctors in the About Us section, or I can help find a doctor in a specific department. Which department?');
        showDepartmentOptions();
    } else if (message.includes('emergency')) {
        addMessage('bot', 'Emergency services are available 24/7. Call +91 1234 567 890 or visit our Emergency Department at ${serviceDetails.emergency.address}.<br><strong>Route:</strong> ${serviceDetails.emergency.route}');
    } else if (message.includes('insurance')) {
        addMessage('bot', 'We accept most major insurance providers. Contact our billing department at +91 1234 567 892.');
    } else if (message.includes('covid') || message.includes('coronavirus')) {
        addMessage('bot', 'We follow strict COVID-19 protocols: mandatory masks, sanitization, and screening. Vaccination available at our Immunization Center.');
    } else if (message.includes('parking')) {
        addMessage('bot', 'Free parking is available in our multi-level garage at the east entrance.');
    } else if (message.includes('visit') || message.includes('visiting hour')) {
        addMessage('bot', 'General visiting hours: 10:00 AM - 8:00 PM. ICU/special units have restricted hours.');
    } else if (message.includes('pharmacy')) {
        addMessage('bot', 'Our in-house pharmacy is open 24/7, located near the main entrance.');
    } else if (message.includes('lab') || message.includes('test')) {
        addMessage('bot', 'Diagnostic labs are available in Block F, Basement. Contact +91 1234 567 893 for appointments.');
    } else if (message.includes('blood') || message.includes('donate')) {
        addMessage('bot', 'Blood donation drives are held monthly. Visit our Blood Bank in Block G, 1st Floor.');
    } else if (message.includes('surgery')) {
        addMessage('bot', 'Our General Surgery department is located at ${serviceDetails.surgery.address}.<br><strong>Doctors:</strong><br>${serviceDetails.surgery.doctors.map(doc => `- ${doc.name}, ${doc.specialization}, ${doc.experience}`).join('<br>')}<br><strong>Route:</strong> ${serviceDetails.surgery.route}');
    } else if (message.includes('thank')) {
        addMessage('bot', 'You\'re welcome! Anything else I can help with?');
    } else if (message.includes('bye') || message.includes('goodbye')) {
        addMessage('bot', 'Thank you for chatting with NBKR Assistant. Have a great day!');
    } else {
        addMessage('bot', 'I can help with hospital services, appointments, or medical concerns like cold, headache, or fever. Please be more specific or ask about a department.');
    }
}

function addMessage(type, content) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    messageDiv.innerHTML = `
        <div class="message-content">
            <p>${content}</p>
            <span class="message-time">${time}</span>
        </div>
    `;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Service Modal Functionality
serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        const service = card.getAttribute('data-service');
        showServiceModal(service);
    });
});

serviceLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const service = link.getAttribute('data-service');
        const servicesSection = document.getElementById('services');
        window.scrollTo({
            top: servicesSection.offsetTop - 100,
            behavior: 'smooth'
        });
        setTimeout(() => showServiceModal(service), 600);
    });
});

function showServiceModal(service) {
    const data = serviceDetails[service];
    if (!data) return;
    document.getElementById('service-title').textContent = data.title;
    document.getElementById('service-details').innerHTML = `
        <h4>Doctors</h4>
        <ul>
            ${data.doctors.map(doc => `<li>${doc.name} - ${doc.specialization}, ${doc.experience}</li>`).join('')}
        </ul>
        <h4>Location</h4>
        <p>${data.address}</p>
        <h4>Route</h4>
        <p>${data.route}</p>
        <h4>Specialists</h4>
        <ul>
            ${data.specialists.map(spec => `<li>${spec}</li>`).join('')}
        </ul>
    `;
    serviceModal.style.display = 'flex';
    document.getElementById('department').value = service; // Pre-fill appointment form
}

// Appointment Section Toggle
bookAppointmentBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        serviceModal.style.display = 'none';
        confirmationModal.style.display = 'none';
        appointmentSection.style.display = 'block';
        window.scrollTo({
            top: appointmentSection.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});

// Display Appointments
function displayAppointments() {
    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    appointmentsList.innerHTML = '';
    if (appointments.length === 0) {
        appointmentsList.innerHTML = '<p class="no-appointments">No appointments booked.</p>';
        clearAppointmentsBtn.style.display = 'none';
    } else {
        appointments.forEach(appointment => {
            const card = document.createElement('div');
            card.className = 'appointment-card';
            card.innerHTML = `
                <h4>Appointment Details</h4>
                <p><strong>Name:</strong> ${appointment.name}</p>
                <p><strong>Department:</strong> ${serviceDetails[appointment.department]?.title || appointment.department}</p>
                <p><strong>Doctor:</strong> ${appointment.doctor || 'Not specified'}</p>
                <p><strong>Date:</strong> ${appointment.date}</p>
                <p><strong>Time:</strong> ${appointment.time}</p>
                <p><strong>Phone:</strong> ${appointment.phone}</p>
                <p><strong>Email:</strong> ${appointment.email}</p>
                <p><strong>Notes:</strong> ${appointment.notes || 'None'}</p>
            `;
            appointmentsList.appendChild(card);
        });
        clearAppointmentsBtn.style.display = 'inline-block';
    }
}

// Appointment Form Submission
appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const appointment = {
        name: document.getElementById('patient-name').value,
        department: document.getElementById('department').value,
        doctor: document.getElementById('doctor').value,
        date: document.getElementById('appointment-date').value,
        time: document.getElementById('appointment-time').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        notes: document.getElementById('notes').value
    };

    // Validate form
    if (!appointment.name || !appointment.department || !appointment.date || !appointment.time || !appointment.phone || !appointment.email) {
        showModal('Please fill in all required fields.', false);
        return;
    }

    // Store in local storage
    let appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    appointments.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));

    // Reset form
    appointmentForm.reset();
    appointmentSection.style.display = 'none';

    // Show confirmation and update appointments list
    showModal('Appointment booked successfully!', true);
    displayAppointments();
});

// Clear Appointments
clearAppointmentsBtn.addEventListener('click', () => {
    showModal('Are you sure you want to clear all appointments?', false, () => {
        localStorage.removeItem('appointments');
        displayAppointments();
        showModal('All appointments cleared.', true);
    });
});

// Contact Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const contactData = {
        name: document.getElementById('contact-name').value,
        email: document.getElementById('contact-email').value,
        phone: document.getElementById('contact-phone').value,
        message: document.getElementById('contact-message').value
    };
    localStorage.setItem('contactSubmission', JSON.stringify(contactData));
    contactForm.reset();
    showModal('Your message has been sent successfully!', true);
});

// Modal Functionality
function showModal(message, isSuccess, confirmCallback) {
    modalMessage.textContent = message;
    const modalIcon = confirmationModal.querySelector('.modal-icon i');
    if (isSuccess) {
        modalIcon.className = 'fas fa-check-circle';
        modalIcon.style.color = '#4caf50';
        modalOkBtn.textContent = 'OK';
        modalOkBtn.onclick = () => {
            confirmationModal.style.display = 'none';
        };
    } else {
        modalIcon.className = 'fas fa-exclamation-circle';
        modalIcon.style.color = '#e53935';
        if (confirmCallback) {
            modalOkBtn.textContent = 'Confirm';
            modalOkBtn.onclick = () => {
                confirmCallback();
                confirmationModal.style.display = 'none';
            };
        } else {
            modalOkBtn.textContent = 'OK';
            modalOkBtn.onclick = () => {
                confirmationModal.style.display = 'none';
            };
        }
    }
    confirmationModal.style.display = 'flex';
}

closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        confirmationModal.style.display = 'none';
        serviceModal.style.display = 'none';
    });
});

// Search Functionality
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    serviceCards.forEach(card => {
        const service = card.getAttribute('data-service');
        const title = serviceDetails[service].title.toLowerCase();
        card.style.display = title.includes(query) ? 'block' : 'none';
    });
});

// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach((t, i) => {
        t.classList.toggle('active', i === index);
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

setInterval(nextTestimonial, 5000);
showTestimonial(currentTestimonial);

// Live Time Update
function updateLiveTime() {
    const now = new Date();
    liveTime.textContent = now.toLocaleString('en-US', {
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    });
}

setInterval(updateLiveTime, 1000);
updateLiveTime();

// Fade-in Sections on Scroll
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// Initialize Appointments Display
document.addEventListener('DOMContentLoaded', () => {
    displayAppointments();
});