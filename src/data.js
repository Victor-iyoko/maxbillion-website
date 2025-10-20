// section info images
import houseWithKey from "./assets/section-info/housewithkey.jpg"
import manHoldingHouse from "./assets/section-info/manholdinghouse.png"
import people from "./assets/section-info/people.jpg"

// info snips icons
import key from "./assets/info-snips/key.svg"
import diamond from "./assets/info-snips/diamond.svg"
import seal from "./assets/info-snips/seal.svg"
import smilingFace from "./assets/vision/smiling-face.svg"
import shield from "./assets/vision/shield-checkmark.svg"
import dollar from "./assets/info-snips/dollar-increase.svg"
import maintenance from "./assets/info-snips/maintenance.svg"
import openBook from "./assets/info-snips/book-open.svg"
import peopleCircle from "./assets/info-snips/people-circle.svg"
import briefCase from "./assets/info-snips/briefcase.svg"
import target from "./assets/info-snips/target.svg"


// values section icons
import handShake from "./assets/values/handshake-agreement-hand-business.svg"
import medal from "./assets/values/medal-ribbon-star.svg"
import lightBulb from "./assets/values/light-bulb.svg"
import personCheck from "./assets/values/person-check.svg"
import houseUser from "./assets/values/house-chimney-user.svg"
import clipBoardCheck from "./assets/values/clipboard-check.svg"

// services section icon
import construction from "./assets/services/construction-excavator.svg"
import solve from "./assets/services/solve.svg"
import signingContract from "./assets/services/signing-a-contract.svg"
import realEstateProperty from "./assets/services/real-estate-property.svg"
import house from "./assets/services/house.svg"
import houseMoney from "./assets/services/house-money.svg"
import houseRent from "./assets/services/house-rent.svg"
import money from "./assets/services/money.svg"

// get started section images
import contactUs from "./assets/get-started/Contact us-bro.svg"
import requestProposal from "./assets/get-started/Agreement-bro.svg"
import negotiateTerms from "./assets/get-started/People talking-bro.svg"
import signContract from "./assets/get-started/Signing a contract-bro.svg"
import evaluateOptions from "./assets/get-started/Settings-bro.svg"
import reviewContract from "./assets/get-started/Partnership-bro.svg"
import makePayment from "./assets/get-started/Paid idea-bro.svg"

// certification images
import cac from "./assets/certifications/cac-logo.jpg"
import firs from "./assets/certifications/firs-logo.png"
import jtb from "./assets/certifications/jtb-logo.png"

// testimonial images
import t1 from "./assets/testimonials/1.jpg"
import t2 from "./assets/testimonials/2.jpg"
import t3 from "./assets/testimonials/3.jpg"
import t4 from "./assets/testimonials/4.jpg"
import t5 from "./assets/testimonials/5.jpg"
import t6 from "./assets/testimonials/6.jpg"

// team members images
import member1 from "./assets/team/team-1.jpg"
import member2 from "./assets/team/team-2.jpg"
import member3 from "./assets/team/team-3.jpg"

const data = {
    emailServiceId: "service_gkjbpgu",
    emailPublicId: "W5hqPX9UR3mRIezjj",
    contactEmailTempId: "template_4b7kpij",
    suscriptionEmailTempId: "template_e8ey9jm",
    googleScriptWebUrl: "https://script.google.com/macros/s/AKfycbzVH3fMIpYpiE0i5ViUbyt_hzBw3ng8PBAGH2Dim3D3_UbohHhEt5t-bd2UC5A3dYE/exec",

    navbar: [
        {name: "Home", id: "home"},
        {name: "Services", id: "services"},
        {name: "About", id: "about"},
        {name: "How to get started", id: "help"}
    ],

    hero: [
        {
            mainText: "journey to your perfect home.",
            subText: " Let our expert team guide you through the magic of real estate and helping you find the perfect home where your dreams take flight. ",
            cta: true,
            img: '/carousel/journey-to-home.jpg'
        },
        {
            mainText: "Invest Smart, Live Better",
            subText: "Secure your future with properties that combine high value, great locations, and timeless design.",
            cta: false,
            img: '/carousel/invest-smart.jpg'
        },
        {
            mainText: "Modern Living, Redefined",
            subText: "Discover elegant spaces designed for comfort, style, and community - your dream home starts here.",
            cta: false,
            img: '/carousel/modern-living.jpg'
        }
    ],

    values: [
        {
            mainText: "Integrity & Transparency",
            subText: "We operate with the highest ethical standards. Every decision and transaction is built on honesty and openness.",
            icon: handShake
        },
        {
            mainText: "Excellence & Quality",
            subText: "Our commitment to excellence is unwavering. We strive for superior quality ensuring that every detail reflects our dedication to craftsmanship.",
            icon: medal
        },
        {
            mainText: "Innovation & Growth",
            subText: "Embracing new technologies and creative solutions is at the heart of our approach. We continually seek innovative methods to enhance our services.",
            icon: lightBulb
        },
        {
            mainText: "Client-Centric Approach",
            subText: "Our clients are at the center of everything we do. We listen carefully and work tirelessly to build lasting relationships based on mutual success.",
            icon: personCheck
        },
        {
            mainText: "Sustainability & Community",
            subText: "We believe in building a better future—not just through our projects, but by fostering sustainable practices and investing in the communities we serve.",
            icon: houseUser
        },
        {
            mainText: "Accountability & Reliability",
            subText: "We take full responsibility for our commitments. Our team is dedicated to delivering projects on time, within budget and to the highest standards.",
            icon: clipBoardCheck
        }
    ],

    sectionInfo: [
        { 
            heading: "Building dreams & managing realities.",
            description: "At Maxbillion we believe every key opens the door to new opportunities. Our innovative housing solutions are designed to give you the keys to your dream home. Discover how we turn vision into reality.",
            infoSnips: [
                { title: "Seamless Ownership", subText: "Effortless property acquisition process.", icon: key },
                { title: "Verified Documentation", subText: "100% legal and secured transactions.", icon: seal },
                { title: "Affordabble luxury", subText: "Premium homes at competitive prices.", icon: diamond }
            ],
            img: houseWithKey,
            button: {
                text: "Get in touch",
                link: "#contact"
            },
            imgPos: 2
        },    
        { 
            heading: "Unlock your dream home.",
            description: "At Maxbillion, we’re dedicated to turning your dream of the perfect home into a reality and keeping it thriving for years to come. We nuture your investment from the first blue print to daily management, ensuring your home remains a lasting symbol of quality and care.",
            infoSnips: [
                { title: "Maximized ROI", subText: "Expert strategies to grow your investment.", icon: dollar },
                { title: "24/7 Maintenance", subText: "Hassle-free property upkeep and repairs.", icon: maintenance },
                { title: "Transparent Agreements", subText: "No hidden fees, clear contracts.", icon: openBook }
            ],
            img: manHoldingHouse,
               button: {
                text: "Our vision",
                link: "#developments"
            },
            imgPos: 1
        },
        {   
            title: "About us",
            heading: "Want to know who we are?",
            description: "Maxbillion investment Nigeria limited is a company situated in Otukpo, Benue State, Nigeria that offers both real estate management and general contracting services.",
            infoSnips: [
                { title: "Who We Are", subText: "Trusted real estate experts.", icon: peopleCircle },
                { title: "What We Do", subText: "Sales, management & contracts.", icon: briefCase },
                { title: "Our Mission", subText: "Making property ownership easy.", icon: target }
            ],
            img: people,
               button: {
                text: "Get updates",
                link: "#suscribe"
            },
            imgPos: 2
        }
    ],

    vision: {
        heading: "Your Vision, Our Commitment.",
        text: "At Maxbillion, we don't just manage properties—we create lasting value. From investment strategies to hands-on management, we ensure your real estate journey is smooth and rewarding.",
        infoSnips: [
            { title: "Hassle-Free Ownership Solutions", subText: "Seamless property acquisition process", icon: smilingFace },
            { title: "Trusted Property Partners", subText: "Certified and registered in Nigeria", icon: shield },
            { title: "Maximized ROI", subText: "Expert strategies to grow your investment.", icon: dollar }
        ],
    },

    services: [
        {
            title: " Property Acquisition & Investment",
            description: [
                "Identifying profitable real estate opportunities.",
                "Assisting with property purchases.", 
                "Portfolio management for investors."
            ],
            icon: houseMoney
        },
        {
            title: "Development & Construction",
            description: [
                "Managing new construction projects.",
                "Renovations & property improvements.", 
                "Architectural planning & approvals."
            ],
            icon: construction
        },
        {
            title: "Property & Facility Management",
            description: [
                "Routine maintenance & repairs.", 
                "Security & landscaping services.", 
                "Utility management & emergency response."
            ],
            icon: realEstateProperty
        },        
        {
            title: "Tenant & Lease Management",
            description: [
                "Tenant screening & background checks.", 
                "Lease agreement drafting & renewals.", 
                "Rent collection & payment processing."
            ],
            icon: houseRent
        },
        {
            title: "Legal & Regulatory Compliance",
            description: [
                "CAC registration & property documentation.", 
                "Ensuring land ownership verification.", 
                "Handling real estate legal matters."
            ],
            icon: signingContract
        },
        {
            title: "Real Estate Marketing & Sales",
            description: [
                "Listing & promoting properties for sale/rent.", 
                "Professional property photography.", 
                "Property valuation & pricing strategies."
            ],
            icon: house
        },
        {
            title: "Financial & Risk Management",
            description: [
                "Budgeting & financial reporting.", 
                "Risk assessment & mitigation strategies.", 
                "Insurance advisory for real estate assets."
            ],
            icon: money
        },
        {
            title: "Sustainable & Smart Real Estate Solutions",
            description: [
                "Eco-friendly building solutions", 
                "Smart home & security automation", 
                "Energy efficiency consultation"
            ],
            icon: solve
        },
    ],

    carouselInfo: [
        { title: "Beyond Brick & Mortar", description: "We don't just build structures; we create experiences. Welcome to the future of real estate." },
        { title: "Smart Investments, Lasting Returns", description: "Your property should work for you. We help you make smart, high-value real estate decisions." },
        { title: "More Than Transactions, Relationships", description: "At MaxBillion, we're not just selling properties—we're building lifelong partnerships." }
    ],

    getStarted: [
        { title: "Contact us", description: "Reach out via phone, email, or online form to discuss your needs and ask any initial questions.", img: contactUs },
        { title: "Request a Proposal", description: "Get detailed information about pricing, deliverables, and terms specific to your project.", img: requestProposal },
        { title: "Evaluate Options", description: "Compare the proposals or service offerings to ensure the best fit for your goals or requirements.", img: evaluateOptions },
        { title: "Negotiate terms", description: "Work with us to finalize important details such as price, timeline, and payment schedule.", img: negotiateTerms },
        { title: "Review Contracts", description: "Read and understand the legal agreement to confirm everything aligns with your expectations.", img: reviewContract },
        { title: "Sign a Contract", description: "Once you’re satisfied, sign the necessary documents or providing required information.", img: signContract },
        { title: "Make Payment", description: "Complete the agreed-upon payment according to the schedule and method outlined in the contract.", img: makePayment },
    ],

    certfications: [
        {
            title: "Corporate Affairs Commission (CAC)",
            description: "Fully registered and compliant under Nigerian law.",
            img: cac
        },
        {
            title: "Federal Inland Revenue Service (FIRS)",
            description: "We adhere to Nigeria's tax regulations for business transparency.",
            img: firs
        },
        {
            title: "the Joint Tax Board (JTB)",
            description: "All our transactions align with federal tax compliance standards.",
            img: jtb
        }
    ],

    testimonials: [
        {
            name: "Abanku Lucy",
            occupation: "property owner",
            img: t1,
            ratings: 5,
            review: "I recently had the pleasure of working with Maxbillion to acquire my dream property, and i couldn't be more thrilled with the experience. From start to finish the team was professional."
        },
        {
            name: "Okpe Emmanuel Owoicho",
            occupation: "General Merchandise Nigeria limited",
            img: t2,
            ratings: 5,
            review: "Keep up the great work, Maxbillion!. Your dedication to providing affordable and secure housing solutions continues to make a positive difference in the real estate industry."
        },
        {
            name: "Oche Adakole",
            occupation: "Land-lord",
            img: t3,
            ratings: 5,
            review: "I am writing to enthusiastically recommend Maxbillion Real estate and general contract, I had the pleasure of working withh them on several successful projects including the purchase of land."
        },
        {
            name: "Ayomide Jalade",
            occupation: "Land-lord and property owner",
            img: t4,
            ratings: 5,
            review: "Using this platform have completely transformed how we approach real estate management. The versatile interface has allowed us to create an engaging user experience."
        },
        {
            name: "Ayomide Jalade",
            occupation: "Land-lord and property owner",
            img: t5,
            ratings: 5,
            review: "Using this platform have completely transformed how we approach real estate management. The versatile interface has allowed us to create an engaging user experience."
        },
        {
            name: "Ayomide Jalade",
            occupation: "Land-lord and property owner",
            img: t6,
            ratings: 5,
            review: "Using this platform have completely transformed how we approach real estate management. The versatile interface has allowed us to create an engaging user experience."
        },
    ],

    team: [
        {
            name: "Abah Hadiza",
            role: "secretary",
            img: member1,
            bio: "Efficient and organized secretary ensuring seamless communication across departments.",
            links: {
                faceBook: "https://www.facebook.com",
                whatsApp: "https://www.whatspp.com",
                google: "https://www.google.com"
            }
        },
        {
            name: "Maxwell Billion",
            role: "ceo",
            img: member2,
            bio: "Ethusiastic, passionate and hardworking is what i'll use to describe myself.",
            links: {
                faceBook: "https://www.facebook.com",
                whatsApp: "https://www.whatspp.com",
                google: "https://www.google.com"
            }
        },
        {
            name: "Ipoule Joy",
            role: "accountant",
            img: member3,
            bio: "Detail-oriented accountant managing finances, budgets, and reports with accuracy.",
            links: {
                faceBook: "https://www.facebook.com",
                whatsApp: "https://www.whatspp.com",
                google: "https://www.google.com"
            }
        },
    ]
}

export default data