// Destinations Data
window.destinations = [
    {
        id: 1,
        name: "Prishtina",
        description: "Kryeqyteti i Kosovës me jetën moderne dhe historinë e pasur",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Prishtina_nga_Katedrala_1.jpg/2560px-Prishtina_nga_Katedrala_1.jpg",
        rating: 4.5,
        reviews: 234,
        tags: ["Kryeqytet", "Histori", "Kulturë", "Natyrore"]
    },
    {
        id: 2,
        name: "Prizren",
        description: "Qyteti muze me arkitekturë osmane dhe panoramë të bukur",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Prizreni_gjate_dimrit.jpg",
        rating: 4.8,
        reviews: 189,
        tags: ["Historik", "Kulturore", "Ujëvarë", "Kalaja"]
    },
    {
        id: 3,
        name: "Gjakova",
        description: "I njohur për dyqanet e vjetra dhe kuzhinën tradicionale",
        image: "https://www.atdheu.com/ressourcen/images/gjakova.jpg",
        rating: 4.3,
        reviews: 156,
        tags: ["Treg", "Kuzhinë", "Traditë", "Artizanat"]
    },
    {
        id: 4,
        name: "Brezovica",
        description: "Brezovica është qendra më e madhe e pushimeve të skive në Kosovë",
        image: "https://www.atdheu.com/ressourcen/images/brezovica.jpg",
        rating: 4.6,
        reviews: 178,
        tags: ["Natyrore", "Aventurë", "Kaltrat", "Kanion"]
    },
    {
        id: 5,
        name: "Ujëvarat e Mirushës",
        description: "Një nga destinacionet më të bukura të pushimeve në Kosovë është padyshim ujëvarat e Mirushës",
        image: "https://www.atdheu.com/ressourcen/images/mirusha-wasserfaellen.jpg",
        rating: 4.2,
        reviews: 98,
        tags: ["Histori", "Kulturë", "Ura", "Industri"]
    },
    {
        id: 6,
        name: "Bjeshkët e Nemuna",
        description: "Këndi më i bukur natyror i Kosovës për ecje dhe alpinizëm",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/1b/65/67/a0/bjeshket-e-namuna.jpg",
        rating: 4.9,
        reviews: 267,
        tags: ["Natyrore", "Alpinizëm", "Ecje", "Kampi"]
    }

];

// Hotels Data
window.hotels = [
    {
        id: 1,
        name: "Swiss Diamond Hotel",
        location: "Prishtina",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        rating: 5,
        price: 150,
        amenities: ["WiFi", "Spa", "Pool", "Restaurant", "Parking"]
    },
    {
        id: 2,
        name: "Hotel Prizreni",
        location: "Prizren",
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        rating: 4,
        price: 80,
        amenities: ["WiFi", "Restaurant", "Bar", "Terrace"]
    },
    {
        id: 3,
        name: "Stone Castle Hotel",
        location: "Peja",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        rating: 4,
        price: 70,
        amenities: ["WiFi", "Garden", "Restaurant", "Parking"]
    },
    {
        id: 4,
        name: "Hotel Gjakova",
        location: "Gjakova",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        rating: 3,
        price: 60,
        amenities: ["WiFi", "Restaurant", "Conference Room"]
    },
    {
        id: 5,
        name: "Alpin Hotel & Spa",
        location: "Breza",
        image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        rating: 4,
        price: 90,
        amenities: ["Spa", "Pool", "WiFi", "Restaurant", "Sauna"]
    },
    {
        id: 6,
        name: "Hostel Han",
        location: "Prishtina",
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        rating: 3,
        price: 25,
        amenities: ["WiFi", "Common Kitchen", "Laundry", "Lounge"]
    }
];

// Restaurants Data
window.restaurants = [
    {
        id: 1,
        name: "Restaurant Planet",
        cuisine: "Tradicionale Kosovare",
        description: "Ushqim tradicionale në ambient autentik",
        image: "https://scontent.fprn13-1.fna.fbcdn.net/v/t1.6435-9/79136607_3294541620587386_8152590819711254528_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yZVK2TIncmYQ7kNvwEbE7x1&_nc_oc=AdlCwHtWq1Ww3_rx-BxuMcOF7HvTfWXAM435caJsk76k8RaXlNEsr0dgxLlUnAHVhg0&_nc_zt=23&_nc_ht=scontent.fprn13-1.fna&_nc_gid=zDDVo2CdSkseukuJv38PTg&oh=00_AflGXqGFmFOA2XLpl15aYNCzZPIbt6J3w-r7f5BYWbSkjQ&oe=697018EC",
        rating: 5.0,
        priceRange: "$$",
        type: "Tradicionale"
    },
    {
        id: 2,
        name: "Restaurant Beska",
        cuisine: "Ndërkombëtare & Kafe",
        description: "Kombinim i librave dhe ushqimit të shijshëm",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/0f/f4/8b/restaurant-front-with.jpg",
        rating: 4.3,
        priceRange: "$$",
        type: "Kafe-Librari"
    },
    {
        id: 3,
        name: "Pishat Restaurant",
        cuisine: "Peshk dhe fruta të detit",
        description: "Specialitete deti në ambient elegante",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        rating: 4.7,
        priceRange: "$$$",
        type: "Peshk"
    },
    {
        id: 4,
        name: "Tiffany Restaurant",
        cuisine: "Europiane & Steakhouse",
        description: "Mish të cilësisë së lartë dhe ambient elegant",
        image: "https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        rating: 4.4,
        priceRange: "$$$",
        type: "Steakhouse"
    },
    {
        id: 5,
        name: "Babaganoush",
        cuisine: "Mesdhetare & Vegjetariane",
        description: "Opsione të shumta vegjetariane dhe vegane",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        rating: 4.6,
        priceRange: "$$",
        type: "Vegjetariane"
    },
    {
        id: 6,
        name: "Kulla e Vjetër",
        cuisine: "Tradicionale Osmane",
        description: "Ambient historik me ushqim autentik osman",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        rating: 4.8,
        priceRange: "$$",
        type: "Tradicionale"
    }
];