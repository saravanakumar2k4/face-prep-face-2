document.addEventListener('DOMContentLoaded', function() {
    // Toggle job status tab
    const jobTabs = document.querySelectorAll('.nav-link');
    jobTabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            const activeTab = document.querySelector('.nav-link.active');
            if (activeTab) {
                activeTab.classList.remove('active');
            }
            event.target.classList.add('active');
        });
    });

    // Handle job form submission (e.g., creating or editing job)
    const jobForm = document.querySelector('form');
    if (jobForm) {
        jobForm.addEventListener('submit', function(event) {
            event.preventDefault();  // Prevent actual form submission
            const jobTitle = document.getElementById('jobTitle').value;
            const jobDescription = document.getElementById('jobDescription').value;
            const salary = document.getElementById('salary').value;
            const location = document.getElementById('location').value;

            // Simple validation (check if fields are not empty)
            if (jobTitle && jobDescription && salary && location) {
                alert('Job posting saved successfully!');
                // You can add further logic here to handle saving the job posting to a database or API
            } else {
                alert('Please fill out all fields.');
            }
        });
    }

    // Handle notification settings toggle
    const appNotifications = document.getElementById('appNotifications');
    const updateNotifications = document.getElementById('updateNotifications');
    const notificationForm = document.querySelector('.mt-3');

    if (notificationForm) {
        notificationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const notifications = {
                applications: appNotifications.checked,
                updates: updateNotifications.checked
            };
            // Simulate saving notification settings (you can replace this with API calls)
            alert(`Notification settings saved:\nApplications: ${notifications.applications}\nUpdates: ${notifications.updates}`);
        });
    }
});
