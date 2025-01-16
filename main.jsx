document.addEventListener("DOMContentLoaded", async function() {
    try {
      console.log('Script started');
  
      const data = {
        "doctors": [
          {
            "id": 1,
            "name": "Dr Amanullah Beig",
            "specialty": "General Physician (GP)",
            "experience": 9,
            "languages": ["English", "Hindi", "Telugu"],
            "price": 450,
            "image": "assets/Dr-Gopinath-1566278257111.png"
          },
          {
            "id": 2,
            "name": "Dr N Sindhuri",
            "specialty": "MD - Pediatrics", 
            "experience": 11,
            "languages": ["English", "Hindi", "Telugu"],
            "price": 450,
            "image": "assets/KPS-2018_(1).jpg"
          },
          {
            "id": 3,
            "name": "Dr Rajesh Kumar",
            "specialty": "Dermatology",
            "experience": 7,
            "languages": ["English", "Hindi", "Urdu"],
            "price": 500,
            "image": "assets/Photo1726225833427.jfif"
          },
          {
            "id": 4,
            "name": "Dr Alia Bhattacharjee",
            "specialty": "Neurology",
            "experience": 15,
            "languages": ["English", "Hindi"],
            "price": 600,
            "image": "assets/PHOTO1726830577026.jfif"
          },
          {
            "id": 4,
            "name": "Dr Sarah Khan",
            "specialty": "Neurology",
            "experience": 15,
            "languages": ["English", "Hindi"],
            "price": 600,
            "image": "assets/PHOTO1726830577026.jfif"
          },

        ],
        "healthTalks": [
          {
            "id": 1,
            "title": "Breast Cancer Awareness",
            "description": "Lorem Ipsum is simply dummy text of the printing",
            "icon": "assets/breast.svg"
          },
          {
            "id": 2,
            "title": "Heart Health Essentials",
            "description": "Educating on heart care and prevention",
            "icon": "assets/heart.svg"
          },
          {
            "id": 3,
            "title": "Mental Wellness Tips",
            "description": "Strategies for mental health maintenance",
            "icon": "assets/brain.svg"
          },
          {
            "id": 4,
            "title": "Pregnancy Care",
            "description": "Strategies for pregnant health maintenance",
            "icon": "assets/breast.svg"
          }
        ]
      };
  
      const doctorsGrid = document.querySelector(".doctors-grid");
      if (!doctorsGrid) {
        console.error('Doctors grid element not found');
        return;
      }
  
      console.log('Found doctors grid:', doctorsGrid);
      
      function createDoctorCard(doctor) {
        return `
          <div class="doctor-card">
            <img src="${doctor.image}" alt="${doctor.name}" class="doctor-image">
            <div class="doctor-info">
              <h5 class="mb-1">${doctor.name}</h5>
              <p class="text-muted mb-1">${doctor.specialty}</p>
              <p class="small mb-1">Experience - ${doctor.experience} years</p>
              <p class="small mb-2">Languages - ${doctor.languages.join(", ")}</p>
              <h6 class="mb-3">₹ ${doctor.price}/-</h6>
              <button class="book-btn" onclick="handleBooking(${doctor.id})">Book An Appointment</button>
            </div>
          </div>
        `;
      }
  
      function renderDoctors(doctorsToRender = data.doctors) {
        console.log('Rendering doctors:', doctorsToRender);
        doctorsGrid.innerHTML = doctorsToRender
          .map(doctor => createDoctorCard(doctor))
          .join("");
      }
  
   
      const dropdown = document.getElementById("filterDropdown");
      const filterCards = document.querySelectorAll(".filter-card");
  
      if (dropdown) {
        dropdown.addEventListener("change", function() {
          filterCards.forEach(card => {
            card.style.display = "none";
          });
          const selectedFilter = this.value;
          const selectedCard = document.querySelector(`.filter-card[data-filter="${selectedFilter}"]`);
          if (selectedCard) {
            selectedCard.style.display = "block";
          }
        });
      }
  
      const healthTalksContainer = document.querySelector(".health-class-container");
      if (healthTalksContainer) {
        console.log('Found health talks container');
        healthTalksContainer.innerHTML = data.healthTalks
          .map(talk => `
            <div class="col-md-3 mb-4">
              <div class="health-talk-card">
                <img src="${talk.icon}" alt="${talk.title}" class="health-icon">
                <h5 class="mt-4 mb-2">${talk.title}</h5>
                <p class="text-muted small">${talk.description}</p>
                <div class="play-button">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </div>
              </div>
            </div>
          `)
          .join("");
      }
  
      console.log('Initial render');
      renderDoctors();
  
    } catch (error) {
      console.error('Error in script:', error);
    }
  });