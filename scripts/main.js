document.addEventListener('DOMContentLoaded', () => {
    console.log('Sustainable Living Guide is loaded');
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
            // Example: Manipulate DOM with fetched data
            const container = document.getElementById('data-container');
            data.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item.name;
                container.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    // Example: Event listener
    const button = document.getElementById('submit-button');
    button.addEventListener('click', () => {
        // Example: Handle button click
        alert('Button clicked!');
    });
});
});
