// Function to load tour details
function loadTourDetails(tourId) {
    const tourDetailsDiv = document.getElementById("tour-details");
    const tours = {
        1: {
            name: "Ha Long Bay Cruise",
            image: "images/tour1.jpg",
            description: "Experience the breathtaking beauty of Ha Long Bay, a UNESCO World Heritage Site. Sail through emerald waters, explore limestone caves, and enjoy kayaking and swimming.",
            duration: "4 days / 3 nights",
            price: "$350",
            hotelOptions: [
                { name: "Halong Plaza Hotel", rooms: ["Deluxe Room", "Suite Room"] },
                { name: "Vinpearl Hotel & Resort Ha Long", rooms: ["Ocean View Room", "Family Suite"] }
            ],
            flightOptions: [
                { airline: "Vietnam Airlines", flightNumber: "VN1234", seats: ["Economy", "Business"] },
                { airline: "Bamboo Airways", flightNumber: "QH1234", seats: ["Economy", "Premium Economy"] }
            ]
        },
        2: {
            name: "Hoi An Ancient Town",
            image: "images/tour2.jpg",
            description: "Discover the charm of Hoi An, a UNESCO World Heritage Site. Explore its historic streets, shop for traditional lanterns, and sample local cuisine.",
            duration: "3 days / 2 nights",
            price: "$250",
            hotelOptions: [
                { name: "Hoi An Silk Marina Resort & Spa", rooms: ["Deluxe Room", "Family Suite"] },
                { name: "La Siesta Hoi An Resort & Spa", rooms: ["Superior Room", "Deluxe Room"] }
            ],
            flightOptions: [
                { airline: "VietJet Air", flightNumber: "VJ1234", seats: ["Economy", "SkyBoss"] },
                { airline: "Bamboo Airways", flightNumber: "QH1234", seats: ["Economy", "Premium Economy"] }
            ]
        },
        3: {
            name: "Sapa Trekking",
            image: "images/tour3.jpg",
            description: "Embark on a memorable trekking adventure in Sapa, a picturesque hill station. Hike through stunning rice terraces, visit local villages, and enjoy breathtaking mountain views.",
            duration: "5 days / 4 nights",
            price: "$400",
            hotelOptions: [
                { name: "Victoria Sapa Resort & Spa", rooms: ["Deluxe Room", "Suite Room"] },
                { name: "Sapa Lodge", rooms: ["Superior Room", "Deluxe Room"] }
            ],
            flightOptions: [
                { airline: "Vietnam Airlines", flightNumber: "VN1234", seats: ["Economy", "Business"] },
                { airline: "Bamboo Airways", flightNumber: "QH1234", seats: ["Economy", "Premium Economy"] }
            ]
        },
        4: {
            name: "Hue Imperial City",
            image: "images/tour4.jpg",
            description: "Step back in time in Hue, the ancient capital of Vietnam. Explore the magnificent Hue Citadel, visit the royal tombs, and enjoy a traditional boat ride on the Perfume River.",
            duration: "3 days / 2 nights",
            price: "$200",
            hotelOptions: [
                { name: "Imperial Hotel Hue", rooms: ["Deluxe Room", "Suite Room"] },
                { name: "La Residence Hue", rooms: ["Superior Room", "Deluxe Room"] }
            ],
            flightOptions: [
                { airline: "VietJet Air", flightNumber: "VJ1234", seats: ["Economy", "SkyBoss"] },
                { airline: "Bamboo Airways", flightNumber: "QH1234", seats: ["Economy", "Premium Economy"] }
            ]
        },
        5: {
            name: "Mekong Delta Tour",
            image: "images/tour5.jpg",
            description: "Experience the vibrant culture and natural beauty of the Mekong Delta. Visit floating markets, explore local villages, and enjoy a delicious Mekong Delta lunch.",
            duration: "2 days / 1 night",
            price: "$150",
            hotelOptions: [
                { name: "Victoria Can Tho Resort", rooms: ["Deluxe Room", "Suite Room"] },
                { name: "Can Tho Hotel", rooms: ["Superior Room", "Deluxe Room"] }
            ],
            flightOptions: [
                { airline: "Vietnam Airlines", flightNumber: "VN1234", seats: ["Economy", "Business"] },
                { airline: "Bamboo Airways", flightNumber: "QH1234", seats: ["Economy", "Premium Economy"] }
            ]
        },
        6: {
            name: "Phong Nha-Ke Bang National Park",
            image: "images/tour6.jpg",
            description: "Explore the breathtaking Phong Nha-Ke Bang National Park, a UNESCO World Heritage Site. Discover stunning caves, go kayaking, and enjoy the pristine natural beauty of the region.",
            duration: "3 days / 2 nights",
            price: "$250",
            hotelOptions: [
                { name: "Phong Nha Farmstay", rooms: ["Deluxe Room", "Suite Room"] },
                { name: "Phong Nha Lake House", rooms: ["Superior Room", "Deluxe Room"] }
            ],
            flightOptions: [
                { airline: "VietJet Air", flightNumber: "VJ1234", seats: ["Economy", "SkyBoss"] },
                { airline: "Bamboo Airways", flightNumber: "QH1234", seats: ["Economy", "Premium Economy"] }
            ]
        },
        7: {
            name: "Da Nang & Hoi An",
            image: "images/tour7.jpg",
            description: "Combine the modern city of Da Nang with the charm of Hoi An. Explore Da Nang's beaches, bridges, and Dragon Bridge, and then visit the historic town of Hoi An.",
            duration: "4 days / 3 nights",
            price: "$300",
            hotelOptions: [
                { name: "Novotel Da Nang Premier Han River", rooms: ["Superior Room", "Deluxe Room"] },
                { name: "Vinpearl Resort & Spa Da Nang", rooms: ["Ocean View Room", "Family Suite"] }
            ],
            flightOptions: [
                { airline: "Vietnam Airlines", flightNumber: "VN1234", seats: ["Economy", "Business"] },
                { airline: "Bamboo Airways", flightNumber: "QH1234", seats: ["Economy", "Premium Economy"] }
            ]
        },
        8: {
            name: "Nha Trang Beach",
            image: "images/tour8.jpg",
            description: "Relax and rejuvenate on the pristine beaches of Nha Trang, a popular coastal city. Enjoy swimming, sunbathing, snorkeling, and diving.",
            duration: "3 days / 2 nights",
            price: "$200",
            hotelOptions: [
                { name: "Vinpearl Resort & Spa Nha Trang", rooms: ["Ocean View Room", "Family Suite"] },
                { name: "InterContinental Nha Trang", rooms: ["Deluxe Room", "Suite Room"] }
            ],
            flightOptions: [
                { airline: "VietJet Air", flightNumber: "VJ1234", seats: ["Economy", "SkyBoss"] },
                { airline: "Bamboo Airways", flightNumber: "QH1234", seats: ["Economy", "Premium Economy"] }
            ]
        },
        9: {
            name: "Mui Ne Sand Dunes",
            image: "images/tour9.jpg",
            description: "Explore the stunning Mui Ne Sand Dunes, a unique landscape shaped by wind and sand. Go sandboarding, ride a quad bike, and enjoy the panoramic views.",
            duration: "2 days / 1 night",
            price: "$100",
            hotelOptions: [
                { name: "Mui Ne Bay Resort", rooms: ["Deluxe Room", "Suite Room"] },
                { name: "Sea Links Beach Hotel", rooms: ["Superior Room", "Deluxe Room"] }
            ],
            flightOptions: [
                { airline: "Vietnam Airlines", flightNumber: "VN1234", seats: ["Economy", "Business"] },
                { airline: "Bamboo Airways", flightNumber: "QH1234", seats: ["Economy", "Premium Economy"] }
            ]
        }
    };

    const tour = tours[tourId];

    if (tour) {
        tourDetailsDiv.innerHTML = `
            <img src="${tour.image}" alt="${tour.name}">
            <h2>${tour.name}</h2>
            <p>${tour.description}</p>
            <p>Duration: ${tour.duration}</p>
            <p>Price: ${tour.price}</p>
            <h3>Select Dates:</h3>
            <input type="date" id="start-date">
            <input type="date" id="end-date">
            <h3>Select Airline & Seat:</h3>
            <select id="airline">
                ${tour.flightOptions.map(flight => `<option value="${flight.airline}">${flight.airline} - ${flight.flightNumber}</option>`).join('')}
            </select>
            <select id="seat">
                ${tour.flightOptions[0].seats.map(seat => `<option value="${seat}">${seat}</option>`).join('')}
            </select>
            <h3>Select Hotel & Room:</h3>
            <select id="hotel">
                ${tour.hotelOptions.map(hotel => `<option value="${hotel.name}">${hotel.name}</option>`).join('')}
            </select>
            <select id="room">
                ${tour.hotelOptions[0].rooms.map(room => `<option value="${room}">${room}</option>`).join('')}
            </select>
            <button id="book-tour">Book Tour</button>
        `;
    } else {
        tourDetailsDiv.innerHTML = "<p>Tour not found.</p>";
    }
}
const urlParams = new URLSearchParams(window.location.search);
const tourId = urlParams.get("id");

if (tourId) {
    loadTourDetails(tourId);
} else {
    const tourDetailsDiv = document.getElementById("tour-details");
    tourDetailsDiv.innerHTML = "<p>Please select a tour from the homepage.</p>";
}