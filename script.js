document.addEventListener('DOMContentLoaded', function() {
    const servicesList = document.getElementById('services-list');
    const services = [
        {
            name: 'Custom Service',
            price: 'Starting at $100',
            description: 'Whatever projects you have planned up. No matter what the project is, dont hesitate to ask. We dont like saying no.'
        },
        {
            name: 'Door Casing/Trim, with caulking',
            price: '$150 per door, add $50 for caulking.',
            description: 'Professional door casing and trim installation with caulking. Example pricing with caulking for 4 doors: $800.'
        },
        {
            name: 'Window Casing/Trim, with caulking',
            price: '$125 per Normal window, $175 per Large window, add $50 for caulking.',
            description: 'Window casing and trim installation with caulking. Example pricing for 4 windows: $750. (3 Normal & 1 Large window with caulking)'
        },
        {
            name: 'Interior Caulking',
            price: '$60 per 10 linear feet',
            description: 'Professional interior caulking for various applications. Example pricing for 150ft: $900.'
        },
        {
            name: 'Baseboard Trim with caulking',
            price: '$75 per 10ft of baseboard, add $50 per 10ft for caulking',
            description: 'Installation of baseboard trim with professional caulking. Example pricing with caulking for 150ft: $1875 .'
        },
        {
            name: 'Replacing Door Hardware',
            price: '$100',
            description: 'Door hardware replacement. (Handle and hinges) Example pricing for 4 doors: $400.'
        },
        {
            name: 'Replacing Door with casing',
            price: '$150 door only, $275 with casing/trim, add $25 change hardware.',
            description: 'New door replacement with new casing/trim. Example pricing for 4 doors: $1100.'
        },
        {
            name: 'Installing New Interior Door with jamb and casing',
            price: '$300 Door with jamb, $425 with casing/trim, add $25 install hardware',
            description: 'Installation of new doors complete with jamb and casing. Example pricing for 4 doors: $1700.'
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
            description: 'Professional installation of curtain rods and curtains. Example pricing for 8 windows: $825 (7 Normal & 1 Large window all with curtains).'
        },
        {
            name: 'Cabinet Hardware Replacement',
            price: '$35',
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

