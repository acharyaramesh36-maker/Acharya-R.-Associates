// Corrects common Google Translate errors in Nepali, using standard terms from
// Nepal's Companies Act, Income Tax Act, ICAN and IRD usage. Runs only when Nepali is active.
(function () {
  var FIX = [
    // brand / proper nouns (never translate)
    [/आचार्य\s*आर\.?\s*(र|&|एन्ड|एण्ड)\s*(सहयोगीहरू|एसोसिएट्स|सहयोगी|संघ)/g, 'आचार्य आर. एण्ड एसोसिएट्स'],
    [/चार्टर्ड\s*(लेखाकार(हरू)?|एकाउन्टेन्टहरू|लेखापाल(हरू)?)/g, 'चार्टर्ड एकाउन्टेन्ट्स'],
    [/नेपालको\s*चार्टर्ड\s*एकाउन्टेन्ट्स\s*संस्थान/g, 'इन्स्टिच्युट अफ चार्टर्ड एकाउन्टेन्ट्स अफ नेपाल (आइक्यान)'],
    // audit & assurance
    [/लेखा\s*परीक्षा(हरू)?/g, 'लेखापरीक्षण'], [/लेखा\s*परीक्षण/g, 'लेखापरीक्षण'], [/अडिट(हरू)?/g, 'लेखापरीक्षण'],
    [/लेखा\s*परीक्षक(हरू)?/g, 'लेखापरीक्षक$1'], [/वैधानिक\s*लेखापरीक्षण/g, 'वैधानिक लेखापरीक्षण'],
    [/आन्तरिक\s*(लेखा\s*)?जाँच/g, 'आन्तरिक लेखापरीक्षण'],
    [/आश्वासन/g, 'आश्वस्तता'],
    [/उचित\s*परिश्रम/g, 'विस्तृत छानबिन (ड्यु डिलिजेन्स)'], [/कारण\s*परिश्रम/g, 'विस्तृत छानबिन (ड्यु डिलिजेन्स)'],
    [/सहमत[-\s]*मा\s*प्रक्रियाहरू/g, 'सहमत प्रक्रियाहरू'],
    // tax
    [/कर\s*अनुपालन/g, 'कर अनुपालन'], [/मूल्य\s*थपिएको\s*कर|मूल्य\s*अभिवृद्धि\s*कर|भ्याट/g, 'मूल्य अभिवृद्धि कर (मूअक)'],
    [/आन्तरिक\s*राजस्व\s*विभाग/g, 'आन्तरिक राजस्व विभाग'], [/कर\s*फिर्ता(हरू)?/g, 'कर विवरण'],
    // accounting / reporting
    [/वित्तीय\s*रिपोर्टिङ/g, 'वित्तीय प्रतिवेदन'], [/वित्तीय\s*कथन(हरू)?/g, 'वित्तीय विवरण'], [/बहीखाता/g, 'लेखा राख्ने कार्य'],
    [/नेपाल\s*वित्तीय\s*रिपोर्टिङ\s*मापदण्ड/g, 'नेपाल वित्तीय प्रतिवेदन मान (एनएफआरएस)'],
    // advisory / business
    [/जोखिम\s*सल्लाहकार/g, 'जोखिम परामर्श'], [/व्यापार\s*सल्लाहकार/g, 'व्यावसायिक परामर्श'], [/सल्लाहकार\s*सेवाहरू/g, 'परामर्श सेवाहरू'],
    [/(\s|^)दृढ(\s|$|।|,)/g, '$1फर्म$2'], [/दृढको/g, 'फर्मको'], [/दृढमा/g, 'फर्ममा'],
    [/संलग्नता(हरू)?/g, 'कार्यादेश'], [/ग्राहकहरु/g, 'ग्राहकहरू'], [/सेवाहरु/g, 'सेवाहरू'],
    [/लघु\s*वित्त/g, 'लघुवित्त'], [/सहकारी\s*संस्थाहरु/g, 'सहकारी संस्थाहरू'],
    [/साना\s*र\s*मध्यम\s*उद्यमहरू|एसएमई(हरू)?/g, 'साना तथा मझौला उद्यम'],
    [/पारिवारिक\s*व्यवसाय(हरू)?/g, 'पारिवारिक व्यवसाय'],
    // careers
    [/लेख\s*प्रशिक्षार्थी(हरू)?|लेखिएको\s*प्रशिक्षार्थी(हरू)?|आर्टिकल\s*गरिएका\s*प्रशिक्षार्थी(हरू)?/g, 'आर्टिकलशिप प्रशिक्षार्थी'],
    [/योग्य\s*पेशेवरहरू/g, 'योग्य पेशाकर्मीहरू'], [/पेशेवर(हरू)?/g, 'पेशाकर्मी$1'],
    [/क्यारियर\s*सोधपुछ/g, 'रोजगारी सम्बन्धी जिज्ञासा'], [/सोधपुछ\s*फारम/g, 'जिज्ञासा फारम'],
    // UI
    [/हामीलाई\s*सम्पर्क\s*गर्नुहोस/g, 'सम्पर्क गर्नुहोस्'], [/हाम्रो\s*बारे(मा)?$/g, 'हाम्रो बारेमा'],
    [/थप\s*पढ्नुहोस/g, 'थप पढ्नुहोस्'], [/पेश\s*गर्नुहोस्?/g, 'पठाउनुहोस्'],
    [/हामीलाई\s*भेट्नुहोस्?/g, 'हामीलाई भेट्नुहोस्'], [/उद्योगहरु/g, 'उद्योगहरू'],
    [/तपाईंको/g, 'तपाईंको'], [/तपाइँ/g, 'तपाईं']
  ];
  var PROTECT = ['Acharya R. & Associates', 'ACHARYA R. & ASSOCIATES', 'ICAN', 'NFRS', 'PAN', 'VAT', 'COP'];
  function active() { return /googtrans=\/en\/ne/.test(document.cookie) || document.documentElement.lang === 'ne'; }
  function protect(root) {
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), n, list = [];
    while ((n = w.nextNode())) { var t = n.nodeValue; if (t && PROTECT.some(function (p) { return t.indexOf(p) >= 0; }) && !(n.parentNode && n.parentNode.closest && n.parentNode.closest('.notranslate'))) list.push(n); }
    list.forEach(function (n) { if (/@|\+977|\d{6,}/.test(n.nodeValue) || PROTECT.some(function (p) { return n.nodeValue.trim() === p; })) n.parentNode.classList && n.parentNode.classList.add('notranslate'); });
    document.querySelectorAll('a[href^="tel:"],a[href^="mailto:"]').forEach(function (a) { a.classList.add('notranslate'); a.setAttribute('translate', 'no'); });
  }
  function fixText(root) {
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), n;
    while ((n = w.nextNode())) {
      var v = n.nodeValue; if (!v || !/[\u0900-\u097F]/.test(v)) continue;
      var o = v; for (var i = 0; i < FIX.length; i++) v = v.replace(FIX[i][0], FIX[i][1]);
      if (v !== o) n.nodeValue = v;
    }
  }
  var busy = false, timer = null;
  function run() { if (busy || !active()) return; busy = true; try { fixText(document.body); } finally { busy = false; } }
  function start() {
    protect(document.body);
    new MutationObserver(function () { if (!active()) return; clearTimeout(timer); timer = setTimeout(run, 120); })
      .observe(document.body, { subtree: true, childList: true, characterData: true });
    setInterval(function () { protect(document.body); }, 3000);
    run();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
