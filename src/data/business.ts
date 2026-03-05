export interface Business {
  brand: string;
  legalName: string;
  tagline: string;
  descriptionShort: string;
  descriptionLong: string;
  phones: string[];
  whatsappNumber: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  workingHours: {
    timezone: string;
    note: string;
    schedule: { day: string; open: string | null; close: string | null }[];
  };
  trustChips: string[];
  metrics: { value: string; label: string; note?: string }[];
  disclaimers: string[];
  servicedRegions: string[];
}

export const business: Business = {
  brand: "IndianSurgicals",
  legalName: "IndianSurgicals",
  tagline: "Fast quotes • Bulk supply • Reliable dispatch support",
  descriptionShort: "Wholesale supplier of hospital equipment, OT essentials, sterilization solutions, and surgical instruments.",
  descriptionLong: "IndianSurgicals supports clinics, hospitals, labs, and procurement teams with a wide range of medical equipment. Share your requirements (product, quantity, city) on WhatsApp or call during working hours for pricing and availability. Images and specifications on this website are for reference—final specifications depend on model and stock availability.",

  phones: ["+91-98765-43210", "+91-11-4567-8900"],
  whatsappNumber: "919876543210",
  email: "info@indiansurgicals.com",
  address: {
    line1: "Plot No. 123, Industrial Area, Phase-II",
    line2: "Near Metro Station",
    city: "New Delhi",
    state: "Delhi",
    postalCode: "110005",
    country: "India"
  },

  workingHours: {
    timezone: "Asia/Kolkata",
    note: "Call for quotes during working hours. WhatsApp is accepted anytime.",
    schedule: [
      { day: "Monday", open: "10:00", close: "19:00" },
      { day: "Tuesday", open: "10:00", close: "19:00" },
      { day: "Wednesday", open: "10:00", close: "19:00" },
      { day: "Thursday", open: "10:00", close: "19:00" },
      { day: "Friday", open: "10:00", close: "19:00" },
      { day: "Saturday", open: "10:00", close: "19:00" },
      { day: "Sunday", open: null, close: null }
    ]
  },

  trustChips: ["Bulk pricing", "Quality checked", "Fast dispatch support", "GST invoice"],

  metrics: [
    { value: "14", label: "Categories", note: "Product categories" },
    { value: "90+", label: "Product types", note: "Including variations" },
    { value: "< 24h", label: "Typical quote response", note: "During working hours" },
    { value: "Mon–Sat", label: "Working days", note: "10:00 AM - 7:00 PM IST" }
  ],

  disclaimers: [
    "Product images are for reference only.",
    "Specifications and configurations vary by model and availability.",
    "Pricing depends on quantity, brand, and dispatch location."
  ],

  servicedRegions: [
    // Metropolitan Cities
    'Delhi NCR', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad',
    // State Capitals - North
    'Jaipur', 'Lucknow', 'Chandigarh', 'Dehradun', 'Shimla', 'Jammu', 'Srinagar', 'Ludhiana', 'Amritsar', 'Jalandhar',
    'Patiala', 'Bathinda', 'Mohali', 'Panchkula', 'Karnal', 'Rohtak', 'Hisar', 'Faridabad', 'Gurgaon', 'Noida',
    'Ghaziabad', 'Meerut', 'Aligarh', 'Bareilly', 'Moradabad', 'Saharanpur', 'Gorakhpur', 'Varanasi', 'Allahabad',
    'Agra', 'Mathura', 'Firozabad', 'Etawah', 'Jhansi', 'Kanpur', 'Unnao', 'Rae Bareli', 'Sitapur', 'Hardoi',
    // State Capitals - West
    'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Junagadh', 'Gandhidham', 'Anand', 'Nadiad', 'Patan',
    'Mehsana', 'Bharuch', 'Navsari', 'Vapi', 'Valsad', 'Veraval', 'Somnath', 'Dwarka', 'Porbandar', 'Kandla',
    // State Capitals - South
    'Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam', 'Malappuram', 'Palakkad', 'Kannur', 'Alappuzha',
    'Ernakulam', 'Kottayam', 'Idukki', 'Wayanad', 'Kasargod', 'Mysore', 'Mangalore', 'Hubli', 'Dharwad', 'Belgaum',
    'Bellary', 'Tumkur', 'Shimoga', 'Udupi', 'Davanagere', 'Bijapur', 'Raichur', 'Koppal', 'Bellary', 'Chitradurga',
    'Hassan', 'Mandya', 'Chikmagalur', 'Udupi', 'Karwar', 'Chikkaballapur', 'Ramanagara', 'Yadgir', 'Kolar',
    'Vijayawada', 'Visakhapatnam', 'Guntur', 'Tirupati', 'Nellore', 'Kakinada', 'Kurnool', 'Rajahmundry', 'Kadapa',
    'Anantapur', 'Vizianagaram', 'Srikakulam', 'Machilipatnam', 'Eluru', 'Ongole', 'Chittoor', 'Proddatur',
    // State Capitals - East
    'Bhubaneswar', 'Cuttack', 'Rourkela', 'Berhampur', 'Sambalpur', 'Balasore', 'Bhadrak', 'Jeypore', 'Puri',
    'Angul', 'Dhenkanal', 'Khordha', 'Kalahandi', 'Koraput', 'Mayurbhanj', 'Keonjhar', 'Nayagarh', 'Ganjam',
    'Patna', 'Gaya', 'Muzaffarpur', 'Darbhanga', 'Bhagalpur', 'Purnia', 'Katihar', 'Bihar Sharif', 'Arrah',
    'Buxar', 'Samastipur', 'Siwan', 'Chapra', 'Motihari', 'Nalanda', 'Gopalganj', 'Jamui', 'Sheikhpura', 'Lakhisarai',
    'Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh', 'Deoghar', 'Giridih', 'Ramgarh', 'Dumka', 'Chaibasa',
    'Koderma', 'Chatra', 'Gumla', 'Simdega', 'Khunti', 'Latehar', 'Palamu', 'West Singhbhum', 'East Singhbhum',
    // State Capitals - Central
    'Bhopal', 'Indore', 'Jabalpur', 'Gwalior', 'Ujjain', 'Sagar', 'Dewas', 'Satna', 'Ratlam', 'Rewa',
    'Burhanpur', 'Khandwa', 'Khargone', 'Morena', 'Bhind', 'Guna', 'Shivpuri', 'Vidisha', 'Bhind', 'Datia',
    // State Capitals - Northeast
    'Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Tezpur', 'Tinsukia', 'Bongaigaon', 'Dhubri', 'Goalpara',
    'Nagaon', 'Sivasagar', 'Diphu', 'Karbi Anglong', 'Haflong', 'North Cachar Hills', 'Imphal', 'Thoubal',
    'Bishnupur', 'Churachandpur', 'Ukhrul', 'Tamenglong', 'Senapati', 'Kohima', 'Dimapur', 'Mokochung',
    'Tuensang', 'Wokha', 'Zunheboto', 'Phek', 'Kiphire', 'Longleng', 'Aizawl', 'Lunglei', 'Saitual',
    'Champhai', 'Kolasib', 'Mamit', 'Serchhip', 'Lawngtlai', 'Saiha', 'Agartala', 'Udaipur', 'Dharmanagar',
    'Kailasahar', 'Belonia', 'Ambassa', 'Khowai', 'Sepahijala', 'Gomati', 'North Tripura', 'South Tripura',
    // Union Territories
    'Chandigarh', 'Puducherry', 'Shillong', 'Aizawl', 'Itanagar', 'Panaji', 'Margao', 'Vasco da Gama',
    // Major Industrial Cities
    'Coimbatore', 'Tirupur', 'Salem', 'Erode', 'Madurai', 'Tiruchirappalli', 'Vellore', 'Tirunelveli', 'Thoothukudi',
    'Nagercoil', 'Dindigul', 'Thanjavur', 'Kanchipuram', 'Cuddalore', 'Neyveli', 'Chennai', 'Hosur', 'Tirupattur',
    'Gwalior', ' Jabalpur', 'Ujjain', 'Bhopal', 'Indore', 'Nagpur', 'Aurangabad', 'Nashik', 'Solapur', 'Kolhapur',
    'Sangli', 'Ahmednagar', 'Pune', 'Mumbai', 'Surat', 'Rajkot', 'Vadodara', 'Bharuch', 'Ankleshwar', 'Vapi',
    // Major Trading Hubs
    'Kanpur', 'Ludhiana', 'Amritsar', 'Jalandhar', 'Panipat', 'Sonipat', 'Rohtak', 'Gurgaon', 'Faridabad',
    'Ghaziabad', 'Noida', 'Moradabad', 'Saharanpur', 'Hapur', 'Bulandshahr', 'Khurja', 'Aligarh', 'Mathura',
    // Port Cities
    'Mangalore', 'Cochin', 'Tuticorin', 'Ennore', 'Chennai', 'Visakhapatnam', 'Paradip', 'Haldia', 'Jupiter',
    // Hill Stations & Tourism
    'Mussoorie', 'Nainital', 'Rishikesh', 'Haridwar', 'Matheran', 'Lonavala', 'Kodaikanal', 'Ooty', 'Munnar',
    'Wayanad', 'Coorg', 'Mysore', 'Puducherry', 'Shimla', 'Manali', 'Dharamshala', 'Leh', 'Srinagar', 'Gulmarg',
    // Special Economic Zones
    'SEEPZ Mumbai', 'CSEZ Cochin', 'Suvidha Info Park', 'Tech Mahindra', 'Tidel Park Chennai', 'Tidel Park Coimbatore',
    'Ul Cyber Park', 'Kinfra Park', 'Software Park Gorakhpur', 'Electronics City Bangalore', 'Electronic City Bangalore',
    // Healthcare Hubs
    'Chennai', 'Hyderabad', 'Mumbai', 'Delhi NCR', 'Bangalore', 'Trivandrum', 'Coimbatore', 'Madurai', 'Vijayawada',
    // Educational Hubs
    'Bangalore', 'Hyderabad', 'Pune', 'Delhi NCR', 'Chennai', 'Mysore', 'Coimbatore', 'Tiruchirappalli', 'Warangal',
    // Textile Hubs
    'Surat', 'Ahmedabad', 'Mumbai', 'Indore', 'Kanpur', 'Ludhiana', 'Panipat', 'Bhiwandi', 'Rajkot', 'Coimbatore',
    // IT & Manufacturing
    'Bangalore', 'Hyderabad', 'Pune', 'Chennai', 'Gurgaon', 'Noida', 'Mumbai', 'Kolkata', 'Coimbatore', 'Kochi',
    // All covered
    'All Major Indian Cities'
  ]
};

// Helper function to get the count of serviced regions
export function getServicedRegionsCount(): number {
  return business.servicedRegions.filter(r => r !== 'All Major Indian Cities').length;
}

export function formatWhatsAppMessage(productName: string, quantity?: string, city?: string): string {
  const base = `Hi IndianSurgicals, I need a quote for: ${productName}.`;
  const parts: string[] = [base];

  if (quantity) {
    parts.push(`Quantity: ${quantity}.`);
  }
  if (city) {
    parts.push(`City: ${city}.`);
  }

  return encodeURIComponent(parts.join(' '));
}

export function getWhatsAppLink(productName: string, quantity?: string, city?: string): string {
  const message = formatWhatsAppMessage(productName, quantity, city);
  return `https://wa.me/${business.whatsappNumber}?text=${message}`;
}
