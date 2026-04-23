// 🌍 LANGUAGE SYSTEM (ENGLISH + KANNADA)

const LANG = {
  en: {
    farmer: "Farmer",
    buyer: "Buyer",
    logistics: "Logistics",
    login: "Login",
    register: "Register",
    price: "Price",
    quantity: "Quantity",
    emergency: "Emergency",
    dashboard: "Dashboard"
  },
  kn: {
    farmer: "ರೈತ",
    buyer: "ಖರೀದಿದಾರ",
    logistics: "ಲಾಜಿಸ್ಟಿಕ್ಸ್",
    login: "ಲಾಗಿನ್",
    register: "ನೋಂದಣಿ",
    price: "ಬೆಲೆ",
    quantity: "ಪ್ರಮಾಣ",
    emergency: "ತುರ್ತು",
    dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್"
  }
};

// 🌾 ALL KARNATAKA DISTRICTS

const DISTRICTS = [
"Bangalore Urban","Bangalore Rural","Kolar","Chikkaballapur",
"Mysore","Mandya","Hassan","Tumkur",
"Shimoga","Chitradurga","Davanagere","Bellary",
"Belgaum","Bagalkot","Bijapur","Kalaburagi",
"Raichur","Bidar","Dharwad","Gadag",
"Haveri","Udupi","Dakshina Kannada","Uttara Kannada",
"Kodagu","Chamarajanagar","Yadgir","Koppal"
];

// 🌱 CROPS

const CROPS = [
"Rice","Ragi","Jowar","Maize","Wheat",
"Tomato","Onion","Potato","Brinjal","Chilli",
"Carrot","Cabbage","Cauliflower","Spinach","Methi",
"Banana","Mango","Papaya","Orange","Guava"
];

// 💰 BASE PRICES (₹ per kg)

const BASE_PRICE = {
Rice:50,
Ragi:40,
Jowar:35,
Maize:30,
Wheat:45,
Tomato:25,
Onion:35,
Potato:25,
Brinjal:30,
Chilli:60,
Carrot:40,
Cabbage:20,
Cauliflower:25,
Spinach:15,
Methi:20,
Banana:40,
Mango:100,
Papaya:30,
Orange:60,
Guava:50
};

// 📍 DISTRICT PRICE VARIATION

const DISTRICT_VARIATION = {
"Bangalore Urban":5,
"Bangalore Rural":3,
"Kolar":-2,
"Chikkaballapur":-1,
"Mysore":3,
"Mandya":2,
"Hassan":1,
"Tumkur":0,
"Shimoga":1,
"Chitradurga":-1,
"Davanagere":0,
"Bellary":-2,
"Belgaum":2,
"Bagalkot":-1,
"Bijapur":-2,
"Kalaburagi":-3,
"Raichur":-3,
"Bidar":-2,
"Dharwad":2,
"Gadag":1,
"Haveri":1,
"Udupi":3,
"Dakshina Kannada":4,
"Uttara Kannada":3,
"Kodagu":2,
"Chamarajanagar":-1,
"Yadgir":-3,
"Koppal":-2
};

// 🚀 FUNCTION: GET PRICE BASED ON DISTRICT

function getPrice(crop, district){
let base = BASE_PRICE[crop] || 30;
let variation = DISTRICT_VARIATION[district] || 0;
return base + variation;
}

// 📊 FUNCTION: MARKET COMPARISON

function getMarketPrices(crop){
let b = BASE_PRICE[crop] + 5;   // Bangalore
let k = BASE_PRICE[crop] - 2;   // Kolar
let m = BASE_PRICE[crop] + 3;   // Mysore

let avg = Math.round((b + k + m) / 3);

return {
bangalore: b,
kolar: k,
mysore: m,
average: avg
};
}

// 💡 FUNCTION: SUGGEST PRICE BASED ON QUALITY

function getSuggestedPrice(avg, quality){

if(quality === "Good") return Math.round(avg * 1.1);
if(quality === "Average") return avg;
if(quality === "Poor") return Math.round(avg * 0.8);

return avg;
}

// 🚛 LOGISTICS

const VEHICLE_CAPACITY = {
Auto:100,
Tempo:500,
Truck:2000
};

const FUEL_PRICE = {
Diesel:95
};

const CROP_IMAGES = {

Tomato: {
  Good: "https://i.imgur.com/6R9GQ9G.png",
  Average: "https://i.imgur.com/8zQZ4hG.png",
  Poor: "https://i.imgur.com/t7QzK9W.png"
},

Onion: {
  Good: "https://i.imgur.com/2f8Q7wL.png",
  Average: "https://i.imgur.com/jXcZ3hR.png",
  Poor: "https://i.imgur.com/0wZcP3r.png"
},

Potato: {
  Good: "https://i.imgur.com/y6sZ6kN.png",
  Average: "https://i.imgur.com/z0cR5jT.png",
  Poor: "https://i.imgur.com/V8v0XnH.png"
},

Rice: {
  Good: "https://i.imgur.com/4pQ7Z8X.png",
  Average: "https://i.imgur.com/Tz9Yk0J.png",
  Poor: "https://i.imgur.com/mYp1d4A.png"
},

Ragi: {
  Good: "https://i.imgur.com/3v7FQk2.png",
  Average: "https://i.imgur.com/1d7Gk8H.png",
  Poor: "https://i.imgur.com/9s8Hk2L.png"
},

Maize: {
  Good: "https://i.imgur.com/7cX3P8n.png",
  Average: "https://i.imgur.com/8sF7G2n.png",
  Poor: "https://i.imgur.com/2pF6H3k.png"
},

Wheat: {
  Good: "https://i.imgur.com/5rT8kL2.png",
  Average: "https://i.imgur.com/3kH8F2p.png",
  Poor: "https://i.imgur.com/8kL2G7p.png"
},

Banana: {
  Good: "https://i.imgur.com/1n8F6L2.png",
  Average: "https://i.imgur.com/6H3kP9m.png",
  Poor: "https://i.imgur.com/4L2kF7p.png"
},

Mango: {
  Good: "https://i.imgur.com/9k2H7F3.png",
  Average: "https://i.imgur.com/8H3kP2L.png",
  Poor: "https://i.imgur.com/2F7kL9p.png"
},

Carrot: {
  Good: "https://i.imgur.com/5kP7L2F.png",
  Average: "https://i.imgur.com/8k2H7F3.png",
  Poor: "https://i.imgur.com/3F7kP2L.png"
}

};