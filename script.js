// Product Data Structure
const products = {
    watches: [
        { id: 1, name: "Smart Watch Pro", brand: "TechTime", price: 8999, rating: 4.5, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", description: "Advanced smartwatch with health tracking" },
        { id: 2, name: "Classic Analog Watch", brand: "TimeMaster", price: 3499, rating: 4.2, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500", description: "Elegant analog watch for formal occasions" },
        { id: 3, name: "Sports Digital Watch", brand: "FitTrack", price: 2499, rating: 4.0, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500", description: "Waterproof sports watch with multiple features" },
        { id: 4, name: "Luxury Gold Watch", brand: "Prestige", price: 19999, rating: 4.8, image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500", description: "Premium luxury watch with gold finish" }
    ],
    dressesMen: [
        { id: 101, name: "Formal Shirt", brand: "StyleMen", price: 1299, rating: 4.3, image: "https://images.unsplash.com/photo-1714328564923-d4826427c991?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Premium cotton formal shirt" },
        { id: 102, name: "Casual T-Shirt", brand: "ComfortWear", price: 599, rating: 4.1, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500", description: "Comfortable cotton t-shirt" },
        { id: 103, name: "Denim Jeans", brand: "BlueDenim", price: 1999, rating: 4.5, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500", description: "Classic fit denim jeans" },
        { id: 104, name: "Suit Set", brand: "Elegance", price: 8999, rating: 4.7, image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Premium formal suit set" }
    ],
    dressesWomen: [
        { id: 201, name: "Elegant Dress", brand: "Fashionista", price: 2499, rating: 4.6, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500", description: "Beautiful elegant dress for parties" },
        { id: 202, name: "Casual Top", brand: "ChicStyle", price: 899, rating: 4.2, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500", description: "Stylish casual top" },
        { id: 203, name: "Summer Dress", brand: "Breezy", price: 1599, rating: 4.4, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500", description: "Light and comfortable summer dress" },
        { id: 204, name: "Designer Saree", brand: "Traditional", price: 4999, rating: 4.8, image: "https://images.unsplash.com/photo-1727430228383-aa1fb59db8bf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Traditional designer saree" }
    ],
    kids: [
        { id: 301, name: "Kids T-Shirt", brand: "LittleStars", price: 399, rating: 4.3, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500", description: "Colorful kids t-shirt" },
        { id: 302, name: "Kids Jeans", brand: "PlayWear", price: 799, rating: 4.1, image: "https://plus.unsplash.com/premium_photo-1674828601362-afb73c907ebe?q=80&w=453&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Durable kids jeans" },
        { id: 303, name: "Kids Dress", brand: "Princess", price: 1299, rating: 4.5, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500", description: "Beautiful kids dress" },
        { id: 304, name: "Kids Shoes", brand: "ComfortKids", price: 999, rating: 4.2, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", description: "Comfortable kids shoes" }
    ],
    glasses: [
        { id: 401, name: "Sunglasses Aviator", brand: "SunShade", price: 1999, rating: 4.4, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500", description: "Classic aviator sunglasses" },
        { id: 402, name: "Blue Light Glasses", brand: "EyeCare", price: 1499, rating: 4.3, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500", description: "Protective blue light glasses" },
        { id: 403, name: "Sport Sunglasses", brand: "ActiveWear", price: 2499, rating: 4.5, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500", description: "UV protection sport sunglasses" },
        { id: 404, name: "Designer Frames", brand: "StyleOptics", price: 3499, rating: 4.6, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500", description: "Premium designer frames" }
    ],
    laptops: [
        { id: 501, name: "Gaming Laptop", brand: "TechPro", price: 89999, rating: 4.7, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500", description: "High-performance gaming laptop" },
        { id: 502, name: "Business Laptop", brand: "OfficeMax", price: 54999, rating: 4.5, image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500", description: "Professional business laptop" },
        { id: 503, name: "Ultrabook", brand: "SlimTech", price: 69999, rating: 4.6, image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500", description: "Lightweight ultrabook" },
        { id: 504, name: "Student Laptop", brand: "EduTech", price: 34999, rating: 4.3, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500", description: "Affordable student laptop" }
    ],
    mobiles: [
        { id: 601, name: "Smartphone Pro", brand: "PhoneMax", price: 49999, rating: 4.8, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500", description: "Latest flagship smartphone" },
        { id: 602, name: "Budget Phone", brand: "ValueMobile", price: 12999, rating: 4.2, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500", description: "Affordable smartphone" },
        { id: 603, name: "Gaming Phone", brand: "GameTech", price: 39999, rating: 4.6, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500", description: "High-performance gaming phone" },
        { id: 604, name: "Camera Phone", brand: "PhotoPro", price: 44999, rating: 4.7, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500", description: "Professional camera phone" }
    ],
    accessories: [
        { id: 701, name: "Wireless Earbuds", brand: "SoundMax", price: 2999, rating: 4.5, image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500", description: "Premium wireless earbuds" },
        { id: 702, name: "Phone Case", brand: "ProtectPro", price: 499, rating: 4.1, image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500", description: "Durable phone case" },
        { id: 703, name: "Power Bank", brand: "ChargeFast", price: 1499, rating: 4.3, image: "https://images.unsplash.com/photo-1644571669401-9ab344866592?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "High capacity power bank" },
        { id: 704, name: "Smart Band", brand: "FitTrack", price: 1999, rating: 4.4, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Fitness tracking smart band" }
    ],
    groceries: [
        { id: 801, name: "Organic Rice", brand: "FarmFresh", price: 199, rating: 4.5, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500", description: "Premium organic rice" },
        { id: 802, name: "Cooking Oil", brand: "Healthy", price: 299, rating: 4.2, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500", description: "Pure cooking oil" },
        { id: 803, name: "Spices Pack", brand: "SpiceMaster", price: 399, rating: 4.6, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500", description: "Assorted spices pack" },
        { id: 804, name: "Pulses Mix", brand: "NutriFood", price: 249, rating: 4.3, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500", description: "Mixed pulses pack" }
    ],
    shoes: [
        { id: 901, name: "Running Shoes", brand: "RunFast", price: 3999, rating: 4.6, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", description: "Comfortable running shoes" },
        { id: 902, name: "Casual Sneakers", brand: "WalkEasy", price: 2499, rating: 4.4, image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500", description: "Stylish casual sneakers" },
        { id: 903, name: "Formal Shoes", brand: "Elegance", price: 3499, rating: 4.5, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500", description: "Premium formal shoes" },
        { id: 904, name: "Sports Shoes", brand: "ActiveFit", price: 2999, rating: 4.3, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", description: "High-performance sports shoes" }
    ],
    bikes: [
        { id: 1001, name: "Mountain Bike", brand: "TrailBlazer", price: 24999, rating: 4.6, image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=500", description: "Durable mountain bike" },
        { id: 1002, name: "Road Bike", brand: "SpeedRider", price: 29999, rating: 4.7, image: "https://images.unsplash.com/photo-1600492110568-f9bf4835500a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Fast road bike" },
        { id: 1003, name: "City Bike", brand: "UrbanRide", price: 19999, rating: 4.4, image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=500", description: "Comfortable city bike" },
        { id: 1004, name: "Electric Bike", brand: "EcoRide", price: 49999, rating: 4.8, image: "https://plus.unsplash.com/premium_photo-1745571156840-624559673a7f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Eco-friendly electric bike" }
    ],
    cars: [
        { id: 1101, name: "Sedan Car", brand: "AutoMax", price: 899999, rating: 4.7, image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500", description: "Comfortable family sedan" },
        { id: 1102, name: "SUV", brand: "Adventure", price: 1299999, rating: 4.8, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500", description: "Spacious SUV" },
        { id: 1103, name: "Hatchback", brand: "CityDrive", price: 599999, rating: 4.5, image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500", description: "Compact hatchback" },
        { id: 1104, name: "Sports Car", brand: "Speed", price: 1999999, rating: 4.9, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500", description: "High-performance sports car" }
    ],
    electronics: [
        { id: 1201, name: "Wireless Headphones", brand: "AudioPro", price: 4999, rating: 4.6, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", description: "Premium wireless headphones" },
        { id: 1202, name: "Smart TV", brand: "ViewMax", price: 39999, rating: 4.7, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500", description: "4K Smart TV" },
        { id: 1203, name: "Gaming Console", brand: "GameBox", price: 34999, rating: 4.8, image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500", description: "Latest gaming console" },
        { id: 1204, name: "Bluetooth Speaker", brand: "SoundWave", price: 2999, rating: 4.4, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500", description: "Portable Bluetooth speaker" }
    ],
    appliances: [
        { id: 1301, name: "Washing Machine", brand: "CleanPro", price: 24999, rating: 4.6, image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Fully automatic washing machine" },
        { id: 1302, name: "Refrigerator", brand: "CoolMax", price: 34999, rating: 4.7, image: "https://images.unsplash.com/photo-1649518755041-651c29b56309?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Energy efficient refrigerator" },
        { id: 1303, name: "Microwave Oven", brand: "HeatFast", price: 8999, rating: 4.5, image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=500", description: "Convection microwave oven" },
        { id: 1304, name: "Air Conditioner", brand: "CoolAir", price: 39999, rating: 4.6, image: "https://plus.unsplash.com/premium_photo-1679943423706-570c6462f9a4?q=80&w=405&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Inverter AC" }
    ],
    notebooks: [
        { id: 1401, name: "Spiral Notebook", brand: "WriteWell", price: 199, rating: 4.2, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500", description: "200 pages spiral notebook" },
        { id: 1402, name: "Hardcover Journal", brand: "MemoryBook", price: 499, rating: 4.4, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500", description: "Premium hardcover journal" },
        { id: 1403, name: "Sticky Notes", brand: "NoteIt", price: 99, rating: 4.1, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500", description: "Colorful sticky notes pack" },
        { id: 1404, name: "Planner", brand: "PlanIt", price: 299, rating: 4.3, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500", description: "Daily planner notebook" }
    ],
    slippers: [
        { id: 1501, name: "Comfort Slippers", brand: "HomeComfort", price: 499, rating: 4.3, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", description: "Soft comfort slippers" },
        { id: 1502, name: "Bathroom Slippers", brand: "AquaStep", price: 299, rating: 4.1, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", description: "Waterproof bathroom slippers" },
        { id: 1503, name: "Designer Slippers", brand: "StyleHome", price: 799, rating: 4.5, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", description: "Stylish designer slippers" },
        { id: 1504, name: "Memory Foam Slippers", brand: "ComfortMax", price: 999, rating: 4.6, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", description: "Memory foam comfort slippers" }
    ],
    tabs: [
        { id: 1601, name: "Tablet Pro", brand: "TabTech", price: 24999, rating: 4.6, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500", description: "10-inch premium tablet" },
        { id: 1602, name: "Kids Tablet", brand: "EduTab", price: 9999, rating: 4.4, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500", description: "Educational kids tablet" },
        { id: 1603, name: "Gaming Tablet", brand: "GameTab", price: 34999, rating: 4.7, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500", description: "High-performance gaming tablet" },
        { id: 1604, name: "Budget Tablet", brand: "ValueTab", price: 14999, rating: 4.2, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500", description: "Affordable tablet" }
    ]
};

// Food Items
const foodItems = [
    { id: 1701, name: "Margherita Pizza", category: "veg", price: 299, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500", description: "Classic margherita pizza" },
    { id: 1702, name: "Chicken Biryani", category: "nonveg", price: 349, image: "https://plus.unsplash.com/premium_photo-1694141251673-1758913ade48?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Spicy chicken biryani" },
    { id: 1703, name: "Chocolate Cake", category: "dessert", price: 199, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500", description: "Rich chocolate cake" },
    { id: 1704, name: "Fresh Orange Juice", category: "beverage", price: 99, image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500", description: "Fresh orange juice" },
    { id: 1705, name: "Veg Thali", category: "veg", price: 249, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500", description: "Complete vegetarian thali" },
    { id: 1706, name: "Butter Chicken", category: "nonveg", price: 399, image: "https://plus.unsplash.com/premium_photo-1661419883163-bb4df1c10109?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Creamy butter chicken" },
    { id: 1707, name: "Ice Cream Sundae", category: "dessert", price: 149, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500", description: "Delicious ice cream sundae" },
    { id: 1708, name: "Coffee", category: "beverage", price: 79, image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=500", description: "Hot coffee" }
];

// Rasi Details
const rasiDetails = {
    mesham: {
        name: "மேஷம் (Aries)",
        today: "Today is a good day for new beginnings. Your energy levels are high.",
        luckyColor: "Red",
        luckyNumber: "9"
    },
    rishabam: {
        name: "ரிஷபம் (Taurus)",
        today: "Focus on financial planning today. Good time for investments.",
        luckyColor: "Green",
        luckyNumber: "6"
    },
    mithunam: {
        name: "மிதுனம் (Gemini)",
        today: "Communication will be key today. Express your thoughts clearly.",
        luckyColor: "Yellow",
        luckyNumber: "5"
    },
    kadagam: {
        name: "கடகம் (Cancer)",
        today: "Family matters need attention. Spend quality time with loved ones.",
        luckyColor: "Silver",
        luckyNumber: "2"
    },
    simham: {
        name: "சிம்மம் (Leo)",
        today: "Leadership opportunities may arise. Show your confidence.",
        luckyColor: "Gold",
        luckyNumber: "1"
    },
    kanni: {
        name: "கன்னி (Virgo)",
        today: "Pay attention to details. Organization will bring success.",
        luckyColor: "Navy Blue",
        luckyNumber: "5"
    },
    thulam: {
        name: "துலாம் (Libra)",
        today: "Balance is important today. Make fair decisions.",
        luckyColor: "Pink",
        luckyNumber: "6"
    },
    viruchigam: {
        name: "விருச்சிகம் (Scorpio)",
        today: "Trust your intuition. Deep insights will guide you.",
        luckyColor: "Maroon",
        luckyNumber: "9"
    },
    thanusu: {
        name: "தனுசு (Sagittarius)",
        today: "Adventure calls. Explore new opportunities.",
        luckyColor: "Purple",
        luckyNumber: "3"
    },
    makaram: {
        name: "மகரம் (Capricorn)",
        today: "Hard work will pay off. Stay disciplined.",
        luckyColor: "Brown",
        luckyNumber: "8"
    },
    kumbam: {
        name: "கும்பம் (Aquarius)",
        today: "Innovation and creativity are highlighted today.",
        luckyColor: "Blue",
        luckyNumber: "4"
    },
    meenam: {
        name: "மீனம் (Pisces)",
        today: "Trust your emotions. Compassion will guide you.",
        luckyColor: "Sea Green",
        luckyNumber: "7"
    }
};

// Global Variables
let currentCategory = null;
let filteredProducts = [];
let cart = [];

// Initialize Application
function init() {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    
    // Initialize categories
    loadCategories();
    
    // Load cart display
    loadCart();
    
    // Load foods
    loadFoods('all');
}

// Section Navigation
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(`${sectionName}-section`).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Close mobile menu if open
    const nav = document.getElementById('main-nav');
    nav.classList.remove('open');
    
    // Load section-specific content
    if (sectionName === 'shopping') {
        if (!currentCategory) {
            showAllCategories();
        }
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('open');
}

// Category Management
function loadCategories() {
    const categoryList = document.getElementById('category-list');
    const categories = [
        { key: 'watches', name: 'Watches' },
        { key: 'dressesMen', name: 'Men Dresses' },
        { key: 'dressesWomen', name: 'Women Dresses' },
        { key: 'kids', name: 'Kids' },
        { key: 'glasses', name: 'Cooling Glasses' },
        { key: 'laptops', name: 'Laptops' },
        { key: 'mobiles', name: 'Mobiles' },
        { key: 'accessories', name: 'Accessories' },
        { key: 'groceries', name: 'Home Groceries' },
        { key: 'shoes', name: 'Shoes' },
        { key: 'bikes', name: 'Bikes' },
        { key: 'cars', name: 'Cars' },
        { key: 'electronics', name: 'Electronic Gadgets' },
        { key: 'appliances', name: 'Home Appliances' },
        { key: 'notebooks', name: 'Notebooks' },
        { key: 'slippers', name: 'Slippers' },
        { key: 'tabs', name: 'Tablets' }
    ];
    
    categoryList.innerHTML = categories.map(cat => `
        <div class="category-item" onclick="showCategory('${cat.key}')">
            ${cat.name}
        </div>
    `).join('');
}

function showCategory(categoryKey) {
    currentCategory = categoryKey;
    const categoryProducts = products[categoryKey] || [];
    filteredProducts = [...categoryProducts];
    
    // Update breadcrumb
    const categoryNames = {
        watches: 'Watches',
        dressesMen: 'Men Dresses',
        dressesWomen: 'Women Dresses',
        kids: 'Kids',
        glasses: 'Cooling Glasses',
        laptops: 'Laptops',
        mobiles: 'Mobiles',
        accessories: 'Accessories',
        groceries: 'Home Groceries',
        shoes: 'Shoes',
        bikes: 'Bikes',
        cars: 'Cars',
        electronics: 'Electronic Gadgets',
        appliances: 'Home Appliances',
        notebooks: 'Notebooks',
        slippers: 'Slippers',
        tabs: 'Tablets'
    };
    
    document.getElementById('category-breadcrumb').innerHTML = `
        <span onclick="showAllCategories()">All Categories</span> > 
        <span>${categoryNames[categoryKey]}</span>
    `;
    
    // Update active category
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.remove('active');
    });
    event.target.classList.add('active');
    
    displayProducts(filteredProducts);
}

function showAllCategories() {
    currentCategory = null;
    filteredProducts = [];
    
    // Combine all products
    Object.keys(products).forEach(key => {
        filteredProducts = filteredProducts.concat(products[key]);
    });
    
    document.getElementById('category-breadcrumb').innerHTML = `
        <span>All Categories</span>
    `;
    
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.remove('active');
    });
    
    displayProducts(filteredProducts);
}

// Product Display
function displayProducts(productList) {
    const productsGrid = document.getElementById('products-grid');
    
    if (productList.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: white; padding: 2rem;">No products found</p>';
        return;
    }
    
    productsGrid.innerHTML = productList.map(product => `
        <div class="product-card" onclick="showProductDetails(${product.id}, '${getCategoryForProduct(product.id)}')">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400x200?text=${product.name}'">
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-brand">${product.brand}</div>
                <div class="product-rating">
                    <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                    <span>${product.rating}</span>
                </div>
                <div class="product-price">₹${product.price.toLocaleString()}</div>
                <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id}, '${getCategoryForProduct(product.id)}')">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

function getCategoryForProduct(productId) {
    for (const [category, items] of Object.entries(products)) {
        if (items.find(item => item.id === productId)) {
            return category;
        }
    }
    return null;
}

function showProductDetails(productId, categoryKey) {
    const product = products[categoryKey].find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('product-modal-body');
    const modalTitle = document.getElementById('product-modal-title');
    
    modalTitle.textContent = product.name;
    modalBody.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <img src="${product.image}" alt="${product.name}" style="max-width: 100%; height: 300px; object-fit: cover; border-radius: 10px;">
        </div>
        <div style="margin-bottom: 1rem;">
            <h3 style="color: #333; margin-bottom: 0.5rem;">${product.name}</h3>
            <p style="color: #666; margin-bottom: 0.5rem;">Brand: ${product.brand}</p>
            <div style="margin-bottom: 0.5rem;">
                <span style="color: #ffd43b;">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                <span>${product.rating} / 5</span>
            </div>
            <p style="color: #666; line-height: 1.6; margin-bottom: 1rem;">${product.description}</p>
            <div style="font-size: 2rem; color: #667eea; font-weight: bold; margin-bottom: 1.5rem;">₹${product.price.toLocaleString()}</div>
            <button class="btn-add-cart" onclick="addToCart(${product.id}, '${categoryKey}'); closeProductModal();" style="width: 100%;">
                <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeProductModal() {
    document.getElementById('product-modal').classList.remove('active');
}

// Search Functionality
function handleSearch() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    if (!searchTerm) {
        if (currentCategory) {
            showCategory(currentCategory);
        } else {
            showAllCategories();
        }
        return;
    }
    
    let searchResults = [];
    
    if (currentCategory) {
        searchResults = products[currentCategory].filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.brand.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    } else {
        Object.keys(products).forEach(key => {
            const matches = products[key].filter(product =>
                product.name.toLowerCase().includes(searchTerm) ||
                product.brand.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm)
            );
            searchResults = searchResults.concat(matches);
        });
    }
    
    filteredProducts = searchResults;
    displayProducts(filteredProducts);
}

// Filter Functionality
function toggleFilterPanel() {
    const filterPanel = document.getElementById('filter-panel');
    filterPanel.classList.toggle('open');
}

function updatePriceDisplay() {
    const priceRange = document.getElementById('price-range');
    const maxPrice = document.getElementById('max-price');
    maxPrice.textContent = `₹${parseInt(priceRange.value).toLocaleString()}`;
    applyFilters();
}

function applyFilters() {
    let filtered = currentCategory ? [...products[currentCategory]] : [];
    
    if (!currentCategory) {
        Object.keys(products).forEach(key => {
            filtered = filtered.concat(products[key]);
        });
    }
    
    // Price filter
    const maxPrice = parseInt(document.getElementById('price-range').value);
    filtered = filtered.filter(product => product.price <= maxPrice);
    
    // Rating filter
    const ratingFilters = Array.from(document.querySelectorAll('.rating-filters input[type="checkbox"]:checked'))
        .map(cb => parseInt(cb.value));
    
    if (ratingFilters.length > 0) {
        filtered = filtered.filter(product => {
            return ratingFilters.some(rating => product.rating >= rating);
        });
    }
    
    // Search filter
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.brand.toLowerCase().includes(searchTerm)
        );
    }
    
    filteredProducts = filtered;
    displayProducts(filteredProducts);
}

function clearFilters() {
    document.getElementById('price-range').value = 100000;
    document.getElementById('max-price').textContent = '₹100,000';
    document.querySelectorAll('.rating-filters input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.getElementById('search-input').value = '';
    applyFilters();
}

// Cart Management
function addToCart(productId, categoryKey) {
    const product = products[categoryKey].find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId && item.category === categoryKey);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            image: product.image,
            category: categoryKey,
            quantity: 1
        });
    }
    
    saveCart();
    loadCart();
    
    // Show cart if hidden
    const cartSidebar = document.getElementById('cart-sidebar');
    if (!cartSidebar.classList.contains('open')) {
        toggleCart();
    }
}

function removeFromCart(productId, categoryKey) {
    cart = cart.filter(item => !(item.id === productId && item.category === categoryKey));
    saveCart();
    loadCart();
}

function updateCartQuantity(productId, categoryKey, change) {
    const item = cart.find(i => i.id === productId && i.category === categoryKey);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId, categoryKey);
            return;
        }
        saveCart();
        loadCart();
    }
}

function clearCart() {
    if (confirm('Are you sure you want to clear the cart?')) {
        cart = [];
        saveCart();
        loadCart();
    }
}

function loadCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        updateCartSummary(0);
        document.getElementById('checkout-btn').disabled = true;
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/80?text=${item.name}'">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₹${item.price.toLocaleString()} each</div>
            <div class="cart-item-controls">
                    <button onclick="updateCartQuantity(${item.id}, '${item.category}', -1)">-</button>
                <span class="cart-item-quantity">${item.quantity}</span>
                    <button onclick="updateCartQuantity(${item.id}, '${item.category}', 1)">+</button>
                    <button onclick="removeFromCart(${item.id}, '${item.category}')" style="margin-left: 10px; background: #ff6b6b; color: white; width: auto; padding: 0 10px;">Remove</button>
                </div>
            </div>
        </div>
    `).join('');
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    updateCartSummary(subtotal);
    document.getElementById('checkout-btn').disabled = false;
}

function updateCartSummary(subtotal) {
    const tax = subtotal * 0.05;
    const total = subtotal + tax;
    
    document.getElementById('cart-subtotal').textContent = `₹${subtotal.toFixed(2)}`;
    document.getElementById('cart-tax').textContent = `₹${tax.toFixed(2)}`;
    document.getElementById('cart-total').textContent = `₹${total.toFixed(2)}`;
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    sidebar.classList.toggle('open');
}

// Payment
function openPaymentModal() {
    if (cart.length === 0) return;
    
    const modal = document.getElementById('payment-modal');
    const paymentItems = document.getElementById('payment-items');
    const paymentTotal = document.getElementById('payment-total-amount');
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.05;
    const total = subtotal + tax;
    
    paymentItems.innerHTML = cart.map(item => `
        <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid #eee;">
            <span>${item.name} × ${item.quantity}</span>
            <span>₹${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');
    
    paymentTotal.textContent = `₹${total.toFixed(2)}`;
    
    // Show/hide payment form fields based on selection
    const paymentOptions = document.querySelectorAll('input[name="payment"]');
    paymentOptions.forEach(option => {
        option.addEventListener('change', function() {
            document.getElementById('card-number').style.display = 'none';
            document.getElementById('card-name').style.display = 'none';
            document.getElementById('upi-id').style.display = 'none';
            
            if (this.value === 'card') {
                document.getElementById('card-number').style.display = 'block';
                document.getElementById('card-name').style.display = 'block';
            } else if (this.value === 'upi') {
                document.getElementById('upi-id').style.display = 'block';
            }
        });
    });
    
    modal.classList.add('active');
}

function closePaymentModal() {
    document.getElementById('payment-modal').classList.remove('active');
}

function completePayment() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.05;
    const total = subtotal + tax;
    
    // Simulate payment processing
    setTimeout(() => {
        alert(`Payment of ₹${total.toFixed(2)} completed successfully!\nThank you for your purchase.`);
    
    // Clear cart
        cart = [];
        saveCart();
    loadCart();
    
    // Close modal
    closePaymentModal();
    
        // Close cart sidebar
        const sidebar = document.getElementById('cart-sidebar');
        sidebar.classList.remove('open');
    }, 1000);
}

// Foods Section
function loadFoods(category) {
    const foodsGrid = document.getElementById('foods-grid');
    let filteredFoods = foodItems;
    
    if (category !== 'all') {
        filteredFoods = foodItems.filter(food => food.category === category);
    }
    
    // Update active button
    document.querySelectorAll('.food-cat-btn').forEach(btn => {
        btn.classList.remove('active');
        const btnText = btn.textContent.trim().toLowerCase();
        if ((category === 'all' && btnText === 'all') ||
            (category === 'veg' && btnText === 'vegetarian') ||
            (category === 'nonveg' && btnText === 'non-vegetarian') ||
            (category === 'dessert' && btnText === 'desserts') ||
            (category === 'beverage' && btnText === 'beverages')) {
            btn.classList.add('active');
        }
    });
    
    foodsGrid.innerHTML = filteredFoods.map(food => `
        <div class="food-card">
            <img src="${food.image}" alt="${food.name}" onerror="this.src='https://via.placeholder.com/400x200?text=${food.name}'">
            <div class="food-info">
                <h3>${food.name}</h3>
                <p>${food.description}</p>
                <div class="food-price">₹${food.price}</div>
                <button class="btn-add-cart" onclick="addFoodToCart(${food.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

function filterFoods(category) {
    loadFoods(category);
    // Update active button
    document.querySelectorAll('.food-cat-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    if (event && event.target) {
        event.target.classList.add('active');
    } else {
        // Fallback: find button by text
        document.querySelectorAll('.food-cat-btn').forEach(btn => {
            if (btn.textContent.trim().toLowerCase() === category || 
                (category === 'all' && btn.textContent.trim().toLowerCase() === 'all')) {
                btn.classList.add('active');
            }
        });
    }
}

function addFoodToCart(foodId) {
    const food = foodItems.find(f => f.id === foodId);
    if (!food) return;
    
    const existingItem = cart.find(item => item.id === foodId && item.category === 'food');
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: food.id,
            name: food.name,
            brand: 'Food',
            price: food.price,
            image: food.image,
            category: 'food',
            quantity: 1
        });
    }
    
    saveCart();
    loadCart();
    
    const cartSidebar = document.getElementById('cart-sidebar');
    if (!cartSidebar.classList.contains('open')) {
        toggleCart();
    }
}

// Rasi Palangal
function showRasiDetails() {
    const select = document.getElementById('rasi-select');
    const selectedRasi = select.value;
    const detailsDiv = document.getElementById('rasi-details');
    
    if (!selectedRasi) {
        detailsDiv.innerHTML = '<p>Please select your Rasi to view today\'s horoscope</p>';
        return;
    }
    
    const rasi = rasiDetails[selectedRasi];
    if (!rasi) return;
    
    detailsDiv.innerHTML = `
        <h4>${rasi.name}</h4>
        <p><strong>Today's Prediction:</strong> ${rasi.today}</p>
        <p><strong>Lucky Color:</strong> ${rasi.luckyColor}</p>
        <p><strong>Lucky Number:</strong> ${rasi.luckyNumber}</p>
    `;
}

// Games
function openGame(gameType) {
    if (gameType === 'snake') {
        window.open('https://www.google.com/search?q=snake+game', '_blank');
    } else if (gameType === 'tictactoe') {
        window.open('https://www.google.com/search?q=tic+tac+toe+game', '_blank');
    } else if (gameType === 'memory') {
        window.open('https://www.google.com/search?q=memory+game', '_blank');
    }
}

// Close modals when clicking outside
window.onclick = function(event) {
    const paymentModal = document.getElementById('payment-modal');
    const productModal = document.getElementById('product-modal');
    
    if (event.target === paymentModal) {
        closePaymentModal();
    }
    if (event.target === productModal) {
        closeProductModal();
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);
