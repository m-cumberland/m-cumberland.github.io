document.addEventListener('DOMContentLoaded', function() {
    const servicesList = document.getElementById('services-list');
    const services = [
        {
            name: 'Custom Service',
            price: 'Starting at $100',
            description: 'No matter what projects you have planned up, no matter what the size, dont hesitate to ask.'
        },
        {
            name: 'Door Casing/Trim, with caulking',
            price: '$150 per door, add $30 for caulking. $25 for removal of existing casing and caulking.',
            description: 'Professional door casing and trim installation with caulking.'
        },
        {
            name: 'Window Casing/Trim, with caulking',
            price: '$125 per Normal window, $175 per Large window, add $30 for caulking. $25 for removal of existing casing and caulking.',
            description: 'Window casing and trim installation with caulking.'
        },
        {
            name: 'Interior Caulking',
            price: '$30 per 10 linear feet. $10 per 10 linear feet for removal of existing caulking.',
            description: 'Professional interior caulking for various applications.'
        },
        {
            name: 'Baseboard Trim with caulking',
            price: '$40 per 10 linear feet of baseboard, add $30 per 10ft for caulking. $2 per 10 linear feet for removal of existing baseboard and caulking.',
            description: 'Installation of baseboard trim with professional caulking.'
        },
        {
            name: 'Replacing Door Hardware',
            price: '$100',
            description: 'Door hardware replacement. (Handle and hinges)'
        },
        {
            name: 'Replacing Door with casing',
            price: '$150 door only, $275 with casing/trim, $30 with caulking. $25 for removal of existing casing and caulking.',
            description: 'New door replacement with new casing/trim.'
        },
        {
            name: 'Installing New Interior Door with jamb and casing',
            price: '$300 Door with jamb, $425 with casing/trim, $30 with caulking. $25 for removal of existing casing and caulking',
            description: 'Installation of new doors complete with jamb and casing.'
        },
        {
            name: 'Building Garage/Storage Shelving',
            price: 'starting at $300',
            description: 'Custom-built storage shelving for garages or storage areas. You can customize the width, height, and number of shelves based on your needs. $300 would get you 8ft wide, your desired height, 2 shelves made with 3/4 inch plywood.'
        },
        {
            name: 'TV/Monitor Mounting',
            price: '$150 per unit',
            description: 'Secure mounting of TVs and monitors.'
        },
        {
            name: 'Hanging Curtain Rods/Curtains',
            price: '$50 Normal window, $75 for Large, an additional $50 for hanging curtains.',
            description: 'Professional installation of curtain rods and curtains.'
        },
        {
            name: 'Cabinet Hardware Replacement',
            price: '$30',
            description: 'Replacement of cabinet handles and hinges. Per cabinet door or drawer face.'
        },
        {
            name: 'Grab bars for showers/toilets',
            price: '$150',
            description: 'ADA compliant grab bar installation.'
        }
    ];

    services.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.classList.add('service');
        serviceElement.innerHTML = `<h3>${service.name}</h3><p>${service.description}</p><p><strong>Price:</strong> ${service.price}</p>`;
        servicesList.appendChild(serviceElement);
    });
});

