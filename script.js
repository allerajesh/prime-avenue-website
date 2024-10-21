document.getElementById('ownerForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting the traditional way
    
    // Collect form values
    const plotNumber = document.getElementById('plotNumber').value;
    const ownerName = document.getElementById('ownerName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    
    // Validation (for example, check if all required fields are filled)
    if (!plotNumber || !ownerName || !phoneNumber) {
        alert("Please fill in all required fields.");
        return;
    }
    
    // Add data to the dashboard
    const dashboard = document.getElementById('dashboard');
    const newEntry = document.createElement('div');
    newEntry.innerHTML = `
        <h3>Plot Number: ${plotNumber}</h3>
        <p>Owner's Name: ${ownerName}</p>
        <p>Phone Number: ${phoneNumber}</p>
        <p>Email: ${email || 'Not provided'}</p>
        <hr>
    `;
    dashboard.appendChild(newEntry);
    
    // Clear the form
    document.getElementById('ownerForm').reset();
});
