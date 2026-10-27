// Curated Nepali for site headings, menus, buttons and forms (standard ICAN / IRD terminology).
// Applied before Google Translate when Nepali is active; anything not listed falls back to Google + nepali-fix.js.
(function () {
  var D = {
    'English': 'English', 'Tel:': 'फोन:',
    'ACHARYA R. & ASSOCIATES': 'आचार्य आर. एण्ड एसोसिएट्स', 'ACHARYA R. &': 'आचार्य आर. एण्ड', 'ASSOCIATES': 'एसोसिएट्स',
    'Acharya R. & Associates': 'आचार्य आर. एण्ड एसोसिएट्स', 'Chartered Accountants': 'चार्टर्ड एकाउन्टेन्ट्स',
    'About Acharya R. & Associates': 'आचार्य आर. एण्ड एसोसिएट्सको बारेमा',
    // navigation
    'Home': 'गृहपृष्ठ', 'Services': 'सेवाहरू', 'Industries': 'उद्योग क्षेत्रहरू', 'About Us': 'हाम्रो बारेमा', 'About us': 'हाम्रो बारेमा',
    'Careers': 'करियर', 'Contact Us': 'सम्पर्क', 'Contact us': 'सम्पर्क', 'Contact': 'सम्पर्क', 'Gallery': 'ग्यालरी',
    'Our Team': 'हाम्रो टोली', 'Our team': 'हाम्रो टोली', 'Our Commitments': 'हाम्रा प्रतिबद्धताहरू', 'Our commitments': 'हाम्रा प्रतिबद्धताहरू',
    'Photos': 'तस्बिरहरू', 'Videos': 'भिडियोहरू', 'Watch video': 'भिडियो हेर्नुहोस्',
    'Resources': 'स्रोतहरू', 'Insights': 'लेखहरू', 'Publications': 'प्रकाशनहरू', 'Tax updates': 'कर सम्बन्धी जानकारी',
    'Company': 'फर्म', 'Privacy Policy': 'गोपनीयता नीति', 'Website Terms': 'वेबसाइट प्रयोगका सर्तहरू',
    // services
    'Audit and Assurance': 'लेखापरीक्षण तथा आश्वस्तता', 'Audit and assurance': 'लेखापरीक्षण तथा आश्वस्तता',
    'Taxation and Tax Compliance': 'कर तथा कर अनुपालन', 'Accounting and Financial Reporting': 'लेखा तथा वित्तीय प्रतिवेदन',
    'Accounting and financial reporting': 'लेखा तथा वित्तीय प्रतिवेदन', 'Financial reporting': 'वित्तीय प्रतिवेदन',
    'Internal Audit and Risk Advisory': 'आन्तरिक लेखापरीक्षण तथा जोखिम परामर्श', 'Business Advisory': 'व्यावसायिक परामर्श',
    'Due Diligence and Agreed-Upon Procedures': 'ड्यु डिलिजेन्स तथा सहमत प्रक्रियाहरू',
    'Audit': 'लेखापरीक्षण', 'Tax': 'कर', 'Advisory': 'परामर्श', 'Governance': 'सुशासन',
    'Audit · Tax · Accounting · Advisory': 'लेखापरीक्षण · कर · लेखा · परामर्श', 'Audit · Tax · Advisory': 'लेखापरीक्षण · कर · परामर्श',
    // industries
    'Manufacturing and Trading': 'उत्पादन तथा व्यापार', 'Cooperatives and Microfinance': 'सहकारी तथा लघुवित्त',
    'Hospitality and Tourism': 'होटल तथा पर्यटन', 'Healthcare and Medical': 'स्वास्थ्य तथा चिकित्सा',
    'Education and Institutions': 'शिक्षा तथा संस्थाहरू', 'Education': 'शिक्षा', 'SMEs and Family Businesses': 'साना तथा मझौला उद्यम र पारिवारिक व्यवसाय',
    'Technology and Digital Businesses': 'प्रविधि तथा डिजिटल व्यवसाय',
    // careers
    'Articled Trainees': 'आर्टिकलशिप प्रशिक्षार्थी', 'Qualified Professionals': 'योग्य पेशाकर्मी', 'Students and Internships': 'विद्यार्थी तथा इन्टर्नसिप',
    'Career Enquiry': 'रोजगारी सम्बन्धी जिज्ञासा', 'CA articleship and training': 'सीए आर्टिकलशिप तथा प्रशिक्षण', 'Experienced professionals': 'अनुभवी पेशाकर्मी',
    // hero & headings
    'Clarity.': 'स्पष्टता।', 'Confidence.': 'आत्मविश्वास।', 'Trust.': 'विश्वास।', 'Clarity. Confidence. Trust.': 'स्पष्टता। आत्मविश्वास। विश्वास।',
    'Explore Our Services': 'हाम्रा सेवाहरू हेर्नुहोस्', 'Explore our services': 'हाम्रा सेवाहरू हेर्नुहोस्', 'Contact Our Team': 'हाम्रो टोलीलाई सम्पर्क गर्नुहोस्',
    'Speak with our team': 'हाम्रो टोलीसँग कुरा गर्नुहोस्', 'Speak with our team.': 'हाम्रो टोलीसँग कुरा गर्नुहोस्।',
    'View all services': 'सबै सेवाहरू हेर्नुहोस्', 'Discover our industries': 'हाम्रा उद्योग क्षेत्रहरू हेर्नुहोस्', 'Explore industries': 'उद्योग क्षेत्रहरू हेर्नुहोस्',
    'Learn more about the firm': 'फर्मको बारेमा थप जान्नुहोस्', 'Explore careers': 'करियरका अवसरहरू हेर्नुहोस्',
    'Our services': 'हाम्रा सेवाहरू', 'Industries we serve': 'हामीले सेवा दिने उद्योग क्षेत्रहरू', 'Our principles': 'हाम्रा सिद्धान्तहरू',
    'Discuss this service →': 'यस सेवाबारे छलफल गर्नुहोस् →', 'Discuss your sector': 'आफ्नो क्षेत्रबारे छलफल गर्नुहोस्',
    'Explore About Us': 'हाम्रो बारेमा हेर्नुहोस्', 'Our philosophy': 'हाम्रो दृष्टिकोण', 'About the firm': 'फर्मको बारेमा',
    'Discover our story': 'हाम्रो कथा पढ्नुहोस्', 'Kathmandu, Nepal': 'काठमाडौं, नेपाल', 'More about us': 'हाम्रो बारेमा थप', 'Meet the team': 'टोलीसँग परिचित हुनुहोस्',
    'Meet our team': 'हाम्रो टोलीसँग परिचित हुनुहोस्', 'Meet the full team': 'पूरा टोली हेर्नुहोस्', 'Enquire about careers': 'करियरबारे जिज्ञासा राख्नुहोस्',
    'Who we are': 'हामी को हौं', 'Our approach': 'हाम्रो कार्यशैली', 'Values': 'मूल्यहरू', 'Our values': 'हाम्रा मूल्यहरू', 'Expertise': 'विशेषज्ञता',
    'Our expertise': 'हाम्रो विशेषज्ञता', 'Our people': 'हाम्रा मानिसहरू', 'Practice': 'अभ्यास', 'Registration': 'दर्ता',
    'ICAN Firm Reg. No. 1536': 'आइक्यान फर्म दर्ता नं. १५३६', 'Chartered Accountants, member firm of ICAN': 'चार्टर्ड एकाउन्टेन्ट्स, आइक्यानको सदस्य फर्म',
    'Integrity': 'इमानदारिता', 'Excellence': 'उत्कृष्टता', 'Clarity': 'स्पष्टता', 'Responsibility': 'उत्तरदायित्व', 'Partnership': 'साझेदारी',
    'Explore this service': 'यो सेवा हेर्नुहोस्', 'Read our commitments': 'हाम्रा प्रतिबद्धताहरू पढ्नुहोस्', 'Discover our principles': 'हाम्रा सिद्धान्तहरू हेर्नुहोस्',
    'Working with us': 'हामीसँग काम गर्दा', 'Understanding': 'बुझाइ', 'Technical discipline': 'प्राविधिक अनुशासन', 'Clear communication': 'स्पष्ट सञ्चार',
    'Practical perspective': 'व्यावहारिक दृष्टिकोण', 'Professional responsibility': 'पेशागत उत्तरदायित्व', 'Coming soon': 'छिट्टै आउँदैछ',
    'Proprietor': 'प्रोप्राइटर', 'Senior Audit Associate': 'वरिष्ठ लेखापरीक्षण सहायक', 'Senior Audit Associates': 'वरिष्ठ लेखापरीक्षण सहायक',
    'Ramesh Acharya, CA': 'रमेश आचार्य, सीए', 'Sohail Khadka, CA': 'सोहेल खड्का, सीए',
    'Proprietor · Qualified with ICAI and ICAN': 'प्रोप्राइटर · आइसीएआई र आइक्यानबाट योग्य',
    'Senior Audit Associate · Qualified with ICAI': 'वरिष्ठ लेखापरीक्षण सहायक · आइसीएआईबाट योग्य',
    // contact & form
    'Visit us': 'हामीलाई भेट्नुहोस्', 'Address': 'ठेगाना', 'Phone': 'फोन', 'Email': 'इमेल', 'Office': 'कार्यालय', 'Our office': 'हाम्रो कार्यालय',
    'Get directions': 'बाटो हेर्नुहोस्', 'Srijan Tole, Samakhushi, Kathmandu, Nepal': 'सिर्जन टोल, सामाखुसी, काठमाडौं, नेपाल',
    'Srijan Tole, Samakhushi, Kathmandu': 'सिर्जन टोल, सामाखुसी, काठमाडौं',
    'Enquiry form': 'जिज्ञासा फारम', 'Full name *': 'पूरा नाम *', 'Work email *': 'इमेल *', 'Organization': 'संस्था', 'Service of interest': 'चाहिएको सेवा',
    'Select a service': 'सेवा छान्नुहोस्', 'How can we help?': 'हामी कसरी सहयोग गर्न सक्छौं?', 'Send enquiry': 'जिज्ञासा पठाउनुहोस्',
    'Send another enquiry': 'अर्को जिज्ञासा पठाउनुहोस्', "Let's discuss your business requirements.": 'तपाईंको व्यवसायका आवश्यकताबारे छलफल गरौं।',
    'Subscribe to insights': 'लेखहरूको सदस्यता लिनुहोस्', 'More about the firm': 'फर्मको बारेमा थप', 'Our firm': 'हाम्रो फर्म',
    // careers page
    'View opportunities': 'अवसरहरू हेर्नुहोस्', 'Why join us': 'किन हामीसँग जोडिने', 'Environment': 'कार्य वातावरण', 'Opportunities': 'अवसरहरू',
    'What we look for': 'हामी के खोज्छौं', 'Openings': 'रिक्त पदहरू', 'How to apply': 'आवेदन कसरी दिने', 'View open positions': 'रिक्त पदहरू हेर्नुहोस्',
    'Our environment': 'हाम्रो कार्य वातावरण', 'What matters to us': 'हाम्रो लागि के महत्त्वपूर्ण छ', 'Skills matter.': 'सीप महत्त्वपूर्ण छ।',
    'Character': 'चरित्र', 'Curiosity': 'जिज्ञासा', 'Attention to detail': 'सूक्ष्मतामा ध्यान', 'Communication': 'सञ्चार', 'Ownership': 'जिम्मेवारी',
    'Continuous learning': 'निरन्तर सिकाइ', 'Life at the firm': 'फर्ममा कार्य जीवन', 'Learning & development': 'सिकाइ तथा विकास',
    'Current opportunities': 'हालका अवसरहरू', 'View position': 'पद हेर्नुहोस्', 'No current openings': 'हाल कुनै रिक्त पद छैन',
    'Submit your CV': 'आफ्नो सीभी पठाउनुहोस्', 'Apply': 'आवेदन', 'Review': 'समीक्षा', 'Conversation': 'अन्तर्वार्ता', 'Selection': 'छनोट',
    'Learn about who we are': 'हामी को हौं जान्नुहोस्', 'Explore our professional services': 'हाम्रा पेशागत सेवाहरू हेर्नुहोस्',
    'Understand the sectors we work with': 'हामीले काम गर्ने क्षेत्रहरू बुझ्नुहोस्'
  };
  var M = new Map(); Object.keys(D).forEach(function (k) { M.set(k.replace(/\s+/g, ' '), D[k]); });
  function active() { return /googtrans=\/en\/ne/.test(document.cookie) || document.documentElement.lang === 'ne'; }
  function apply(root) {
    if (!root) return;
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), n, hit = [];
    while ((n = w.nextNode())) { var k = n.nodeValue && n.nodeValue.replace(/\s+/g, ' ').trim(); if (k && M.has(k)) hit.push(n); }
    hit.forEach(function (n) {
      var k = n.nodeValue.replace(/\s+/g, ' ').trim(), v = M.get(k), p = n.parentNode;
      n.nodeValue = n.nodeValue.replace(n.nodeValue.trim(), v);
      if (p && p.classList && p.childNodes.length === 1) { p.classList.add('notranslate'); p.setAttribute('translate', 'no'); }
    });
  }
  function start() {
    if (active()) apply(document.body);
    setInterval(function () { if (active()) apply(document.body); }, 1500);
    new MutationObserver(function (ms) { if (!active()) return; ms.forEach(function (m) { if (m.type === 'characterData') apply(m.target.parentNode); else m.addedNodes.forEach(function (a) { apply(a.nodeType === 3 ? a.parentNode : a); }); }); })
      .observe(document.body, { subtree: true, childList: true, characterData: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
