document.addEventListener('DOMContentLoaded', function() {
    // Profile picture preview
    const profilePicInput = document.getElementById('profilePic');
    const profilePicPreview = document.getElementById('profilePicPreview');
    profilePicInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePicPreview.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Add more work experience
    const addExperienceBtn = document.getElementById('addExperienceBtn');
    addExperienceBtn.addEventListener('click', function() {
        const workExperience = document.getElementById('workExperience');
        const newExperience = document.createElement('div');
        newExperience.classList.add('mb-3');
        newExperience.innerHTML = `
            <input type="text" class="form-control" placeholder="Job Title">
            <input type="text" class="form-control mt-2" placeholder="Company Name">
            <textarea class="form-control mt-2" placeholder="Responsibilities"></textarea>
        `;
        workExperience.appendChild(newExperience);
    });

    // Add more education
    const addEducationBtn = document.getElementById('addEducationBtn');
    addEducationBtn.addEventListener('click', function() {
        const educationSection = document.getElementById('educationSection');
        const newEducation = document.createElement('div');
        newEducation.classList.add('mb-3');
        newEducation.innerHTML = `
            <input type="text" class="form-control" placeholder="Degree">
            <input type="text" class="form-control mt-2" placeholder="Institution">
            <input type="text" class="form-control mt-2" placeholder="Year of Graduation">
        `;
        educationSection.appendChild(newEducation);
    });

    // Save profile form
    const profileForm = document.getElementById('profileForm');
    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Profile saved successfully!');
        // Here, you would add logic to save the profile data (e.g., through an API)
    });
});
