document.getElementById('ownerForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting the traditional way
    
    // Collect form values
    const plotNumber = document.getElementById('plotNumber').value;
    const ownerName = document.getElementById('ownerName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    
    // Simple validation
    if (!plotNumber || !ownerName || !phoneNumber) {
        alert("Please fill in all required fields.");
        return;
    }
    
    // Add data to the dashboard
    const dashboard = document.getElementById('dashboard');
    const newCard = document.createElement('div');
    newCard.classList.add('dashboard-item');
    newCard.innerHTML = `
        <h3>Plot Number: ${plotNumber}</h3>
        <p><strong>Owner:</strong> ${ownerName}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
    `;
    dashboard.appendChild(newCard);
    
    // Clear the form
    document.getElementById('ownerForm').reset();
});
