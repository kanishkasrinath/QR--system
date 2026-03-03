/**
 * Silank4an Bank – QR Feedback System
 * Shared Application Logic v2.0
 */

// ===============================================================
//  TRANSLATION DICTIONARY
// ===============================================================
const TRANSLATIONS = {
  en: {
    // Nav
    nav_home: 'Home',
    nav_admin: 'Admin Dashboard',
    // Hero
    hero_badge: 'Customer Feedback',
    hero_title: 'Tell Us About Your Experience',
    hero_sub: 'Your feedback is received directly by our branch management team and helps us improve.',
    // Steps
    step1_label: 'Service',
    step2_label: 'Ratings',
    step3_label: 'Details',
    // Step 1
    s1_title: 'Branch & Service Type',
    s1_sub: 'Select the branch and the type of service you received today',
    branch_label: 'Branch Name',
    branch_placeholder: '— Select Branch —',
    service_label: 'Service Type',
    date_label: 'Date of Visit',
    // Services
    service_loan: 'Loan',
    service_leasing: 'Leasing',
    service_gold_loan: 'Gold Loan',
    service_deposits: 'Deposits & Savings',
    service_customer_service: 'Customer Service',
    service_fx: 'Foreign Exchange',
    service_fd: 'Fixed Deposit',
    service_atm: 'ATM / Digital',
    // Step 2
    s2_title: 'Rate Your Experience',
    s2_sub: 'Please rate each aspect from 1 (poor) to 5 (excellent)',
    rat_officer: 'Officer Behaviour',
    rat_officer_sub: 'Professionalism, courtesy and helpfulness of staff',
    rat_waiting: 'Waiting Time',
    rat_waiting_sub: 'How long you waited to be served',
    rat_overall: 'Overall Experience',
    rat_overall_sub: 'Your general satisfaction with the branch visit',
    rat_phone: 'Phone Call Experience',
    rat_phone_sub: 'Quality of assistance received via phone (if applicable)',
    not_applicable: 'Not Applicable',
    // Step 3
    s3_title: 'Additional Details',
    s3_sub: 'All fields below are optional',
    comments_label: 'Your Comments',
    comments_placeholder: 'Describe your experience in detail...',
    mobile_label: 'Mobile Number',
    mobile_placeholder: '07X-XXXXXXX',
    nic_label: 'NIC Number',
    nic_placeholder: 'XXXXXXXXXXXXXXXXX',
    optional_tag: '(optional)',
    anon_title: 'Submit Anonymously',
    anon_sub: 'Your mobile number and NIC will not be saved',
    // Buttons
    btn_continue: 'Continue',
    btn_back: 'Back',
    btn_submit: 'Submit Feedback',
    btn_home: 'Back to Home',
    btn_another: 'Submit Another',
    // Star labels
    star_1: 'Very Poor', star_2: 'Poor', star_3: 'Average', star_4: 'Good', star_5: 'Excellent',
    // Success
    success_title: 'Thank You!',
    success_msg: 'Your feedback has been submitted successfully and sent to the branch management team.',
    ref_label: 'Reference #',
    // Footer
    footer_privacy: 'Your data is protected under BSP data privacy guidelines.',
  },

  si: {
    // Nav
    nav_home: 'මුල් පිටුව',
    nav_admin: 'පරිපාලක ඩෑෂ්බෝඩ්',
    // Hero
    hero_badge: 'පාරිභෝගික ප්‍රතිපෝෂණය',
    hero_title: 'ඔබේ අත්දැකීම අප සමඟ බෙදාගන්න',
    hero_sub: 'ඔබේ ප්‍රතිපෝෂණය කෙලින්ම ශාඛා කළමනාකාරිත්ව කණ්ඩායමට ලැබෙන අතර අපට ඉදිරියට යාමට උදවු කරයි.',
    // Steps
    step1_label: 'සේවාව',
    step2_label: 'ශ්‍රේණිගත කිරීම',
    step3_label: 'විස්තර',
    // Step 1
    s1_title: 'ශාඛාව සහ සේවා වර්ගය',
    s1_sub: 'ඔබ අද ලැබූ ශාඛාව සහ සේවා වර්ගය තෝරන්න',
    branch_label: 'ශාඛා නාමය',
    branch_placeholder: '— ශාඛාව තෝරන්න —',
    service_label: 'සේවා වර්ගය',
    date_label: 'සංචාරයේ දිනය',
    // Services
    service_loan: 'ණය',
    service_leasing: 'ලීසිං',
    service_gold_loan: 'රන් ණය',
    service_deposits: 'තැන්පතු සහ ඉතිරිකිරීම්',
    service_customer_service: 'පාරිභෝගික සේවා',
    service_fx: 'විදේශ විනිමය',
    service_fd: 'ස්ථාවර තැන්පතු',
    service_atm: 'ATM / ඩිජිටල්',
    // Step 2
    s2_title: 'ඔබේ අත්දැකීම ශ්‍රේණිගත කරන්න',
    s2_sub: 'කරුණාකර සෑම අංශයක්ම 1 (දුර්වල) සිට 5 (විශිෂ්ට) දක්වා ශ්‍රේණිගත කරන්න',
    rat_officer: 'නිලධාරි හැසිරීම',
    rat_officer_sub: 'කාර්ය මණ්ඩලයේ වෘත්තීයභාවය, ගෞරවය සහ ප්‍රයෝජනවත්භාවය',
    rat_waiting: 'රැඳී සිටීමේ කාලය',
    rat_waiting_sub: 'සේවා කළ යුතු කාලය',
    rat_overall: 'සමස්ත අත්දැකීම',
    rat_overall_sub: 'ශාඛා සංචාරය පිළිබඳ ඔබේ සමස්ත තෘප්තිය',
    rat_phone: 'දුරකථන ඇමතුම් අත්දැකීම',
    rat_phone_sub: 'දුරකථනය හරහා ලැබෙන සහාය (අදාළ නම්)',
    not_applicable: 'අදාළ නොවේ',
    // Step 3
    s3_title: 'අතිරේක විස්තර',
    s3_sub: 'පහත ක්ෂේත්‍ර සියල්ල විකල්පයි',
    comments_label: 'ඔබේ අදහස්',
    comments_placeholder: 'ඔබේ අත්දැකීම විස්තර කරන්න...',
    mobile_label: 'ජංගම දුරකථන අංකය',
    mobile_placeholder: '07X-XXXXXXX',
    nic_label: 'ජාතික හැඳුනුම්පත් අංකය',
    nic_placeholder: 'XXXXXXXXXXXXXXXXX',
    optional_tag: '(විකල්ප)',
    anon_title: 'නිර්නාමිකව ඉදිරිපත් කරන්න',
    anon_sub: 'ඔබේ ජංගම අංකය සහ NIC සුරැකෙන්නේ නැත',
    // Buttons
    btn_continue: 'ඉදිරියට',
    btn_back: 'ආපසු',
    btn_submit: 'ප්‍රතිපෝෂණය ඉදිරිපත් කරන්න',
    btn_home: 'මුල් පිටුවට',
    btn_another: 'තවත් ඉදිරිපත් කරන්න',
    // Star labels
    star_1: 'ඉතා දුර්වල', star_2: 'දුර්වල', star_3: 'සාමාන්‍ය', star_4: 'හොඳ', star_5: 'විශිෂ්ට',
    // Success
    success_title: 'ස්තූතියි!',
    success_msg: 'ඔබේ ප්‍රතිපෝෂණය සාර්ථකව ඉදිරිපත් කෙරුණු අතර ශාඛා කළමනාකාරිත්ව කණ්ඩායමට යවන ලදී.',
    ref_label: 'යොමු #',
    footer_privacy: 'ඔබේ දත්ත BSP දත්ත රහස්‍යතා මාර්ගෝපදේශ යටතේ ආරක්ෂා කෙරේ.',
  },

  ta: {
    // Nav
    nav_home: 'முகப்பு',
    nav_admin: 'நிர்வாக டாஷ்போர்டு',
    // Hero
    hero_badge: 'வாடிக்கையாளர் கருத்து',
    hero_title: 'உங்கள் அனுபவத்தை எங்களிடம் பகிர்ந்து கொள்ளுங்கள்',
    hero_sub: 'உங்கள் கருத்து நேரடியாக கிளை நிர்வாக குழுவிற்கு வந்து சேரும். இது எங்களை மேம்படுத்த உதவுகிறது.',
    // Steps
    step1_label: 'சேவை',
    step2_label: 'மதிப்பீடுகள்',
    step3_label: 'விவரங்கள்',
    // Step 1
    s1_title: 'கிளை மற்றும் சேவை வகை',
    s1_sub: 'இன்று நீங்கள் பெற்ற கிளை மற்றும் சேவை வகையை தேர்ந்தெடுக்கவும்',
    branch_label: 'கிளையின் பெயர்',
    branch_placeholder: '— கிளையை தேர்ந்தெடுக்கவும் —',
    service_label: 'சேவை வகை',
    date_label: 'வருகை தேதி',
    // Services
    service_loan: 'கடன்',
    service_leasing: 'குத்தகை',
    service_gold_loan: 'தங்கக் கடன்',
    service_deposits: 'வைப்புகள் & சேமிப்பு',
    service_customer_service: 'வாடிக்கையாளர் சேவை',
    service_fx: 'அந்நியச் செலாவணி',
    service_fd: 'நிலையான வைப்பு',
    service_atm: 'ATM / டிஜிட்டல்',
    // Step 2
    s2_title: 'உங்கள் அனுபவத்தை மதிப்பிடுங்கள்',
    s2_sub: 'ஒவ்வொரு அம்சத்தையும் 1 (மோசம்) முதல் 5 (சிறந்தது) வரை மதிப்பிடவும்',
    rat_officer: 'அதிகாரி நடத்தை',
    rat_officer_sub: 'பணியாளர்களின் தொழில்முறை, மரியாதை மற்றும் உதவி',
    rat_waiting: 'காத்திருக்கும் நேரம்',
    rat_waiting_sub: 'சேவை கிடைக்க எவ்வளவு நேரம் காத்திருந்தீர்கள்',
    rat_overall: 'ஒட்டுமொத்த அனுபவம்',
    rat_overall_sub: 'கிளை வருகையில் உங்கள் பொதுவான திருப்தி',
    rat_phone: 'தொலைபேசி அனுபவம்',
    rat_phone_sub: 'தொலைபேசி மூலம் பெற்ற உதவியின் தரம் (பொருந்தினால்)',
    not_applicable: 'பொருந்தாது',
    // Step 3
    s3_title: 'கூடுதல் விவரங்கள்',
    s3_sub: 'கீழே உள்ள அனைத்து புலங்களும் விருப்பமானவை',
    comments_label: 'உங்கள் கருத்துகள்',
    comments_placeholder: 'உங்கள் அனுபவத்தை விரிவாக விவரிக்கவும்...',
    mobile_label: 'கைபேசி எண்',
    mobile_placeholder: '07X-XXXXXXX',
    nic_label: 'தேசிய அடையாள அட்டை எண்',
    nic_placeholder: 'XXXXXXXXXXXXXXXXX',
    optional_tag: '(விருப்பமானது)',
    anon_title: 'அநாமதேயமாக சமர்ப்பிக்கவும்',
    anon_sub: 'உங்கள் கைபேசி எண் மற்றும் NIC சேமிக்கப்படாது',
    // Buttons
    btn_continue: 'தொடரவும்',
    btn_back: 'திரும்பு',
    btn_submit: 'கருத்தை சமர்ப்பிக்கவும்',
    btn_home: 'முகப்புக்கு',
    btn_another: 'மற்றொன்று சமர்ப்பிக்கவும்',
    // Star labels
    star_1: 'மிக மோசம்', star_2: 'மோசம்', star_3: 'சராசரி', star_4: 'நல்லது', star_5: 'சிறப்பானது',
    // Success
    success_title: 'நன்றி!',
    success_msg: 'உங்கள் கருத்து வெற்றிகரமாக சமர்ப்பிக்கப்பட்டு கிளை நிர்வாக குழுவிற்கு அனுப்பப்பட்டது.',
    ref_label: 'குறிப்பு #',
    footer_privacy: 'உங்கள் தரவு BSP தரவு தனியுரிமை வழிகாட்டுதல்களின்படி பாதுகாக்கப்படுகிறது.',
  }
};

// ---- Active language ----
let currentLang = 'en';

function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || TRANSLATIONS.en[key] || key;
}

function applyLanguage(lang) {
  currentLang = lang;

  // Update all data-i18n text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val) el.textContent = val;
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t(key);
    if (val) el.placeholder = val;
  });

  // Update branch select first option
  const branchSel = document.getElementById('branchSelect');
  if (branchSel && branchSel.options[0]) {
    branchSel.options[0].textContent = t('branch_placeholder');
  }

  // Update star description texts per rating
  document.querySelectorAll('.star-row-full').forEach(row => {
    const aspect = row.dataset.aspect;
    const val = aspectRatings[aspect];
    if (val) updateStarVal(aspect, val);
  });

  // Update html lang attribute
  document.getElementById('html-root').setAttribute('lang', lang === 'si' ? 'si' : lang === 'ta' ? 'ta' : 'en');
}

// ===============================================================
//  LOCAL STORAGE HELPERS
// ===============================================================
const STORAGE_KEY = 'silank4an_feedbacks';

function getAll() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch { return []; }
}

function saveAll(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function addFeedback(entry) {
  const all = getAll();
  all.unshift(entry);
  saveAll(all);
}

function generateRef() {
  return 'SLK-' + Date.now().toString(36).toUpperCase().slice(-6);
}

// ===============================================================
//  SEED DEMO DATA (runs once per device)
// ===============================================================
(function seedDemoData() {
  if (localStorage.getItem('silank4an_seeded_v2')) return;
  const branches = ['Main Branch', 'North Branch', 'East Branch', 'South Branch', 'West Branch'];
  const services = ['Loan', 'Leasing', 'Gold Loan', 'Deposits & Savings', 'Customer Service', 'Foreign Exchange', 'Fixed Deposit', 'ATM / Digital Banking'];
  const comments = [
    'Excellent and courteous staff!',
    'A bit of a long wait, but resolved my concern.',
    'The teller was very helpful and efficient.',
    'ATM was out of service during my visit.',
    'Very clean and comfortable banking area.',
    'Staff explained everything clearly, satisfied!',
    'Long queue but overall good experience.',
    'Very fast processing of my loan application.',
    'Would appreciate more counters during rush hour.',
    'Outstanding service, will recommend to friends!',
    '', '',
  ];
  const now = Date.now();
  const records = [];
  for (let i = 0; i < 80; i++) {
    const off = Math.ceil(Math.random() * 5);
    const wait = Math.ceil(Math.random() * 5);
    const ovr = Math.ceil(Math.random() * 5);
    const ph = Math.random() > 0.4 ? Math.ceil(Math.random() * 5) : null;
    const daysAgo = Math.floor(Math.random() * 30);
    const date = new Date(now - daysAgo * 86400000);
    records.push({
      ref: generateRef(),
      branch: branches[Math.floor(Math.random() * branches.length)],
      service: services[Math.floor(Math.random() * services.length)],
      lang: ['en', 'si', 'ta'][Math.floor(Math.random() * 3)],
      comment: comments[Math.floor(Math.random() * comments.length)],
      name: 'Anonymous',
      phone: '',
      nic: '',
      anonymous: true,
      date: date.toISOString(),
      ratings: { officer: off, waiting: wait, overall: ovr, phone: ph }
    });
  }
  records.sort((a, b) => new Date(b.date) - new Date(a.date));
  saveAll(records);
  localStorage.setItem('silank4an_seeded_v2', '1');
})();


// ===============================================================
//  FEEDBACK FORM LOGIC
// ===============================================================
let currentStep = 1;
let selectedService = '';
let aspectRatings = { officer: 0, waiting: 0, overall: 0, phone: 0 };
let phoneNA = false;
let isAnonymous = false;

const starLabels = {
  1: () => t('star_1'),
  2: () => t('star_2'),
  3: () => t('star_3'),
  4: () => t('star_4'),
  5: () => t('star_5'),
};

function updateStarVal(aspect, val) {
  const el = document.getElementById('val-' + aspect);
  if (!el) return;
  const label = starLabels[val] ? starLabels[val]() : '';
  el.textContent = val ? '★'.repeat(val) + ' – ' + label : '';
  el.classList.toggle('filled', !!val);
}

function buildStarRow(containerId, aspect) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'star-btn';
    btn.textContent = '★';
    btn.setAttribute('aria-label', 'Rate ' + i);
    btn.dataset.val = i;
    btn.addEventListener('click', () => {
      if (phoneNA && aspect === 'phone') return;
      aspectRatings[aspect] = i;
      container.querySelectorAll('.star-btn').forEach(b => {
        b.classList.toggle('lit', parseInt(b.dataset.val) <= i);
      });
      updateStarVal(aspect, i);
    });
    btn.addEventListener('mouseenter', () => {
      if (phoneNA && aspect === 'phone') return;
      container.querySelectorAll('.star-btn').forEach(b => {
        b.style.color = parseInt(b.dataset.val) <= i ? 'var(--warning)' : 'var(--gray-200)';
      });
    });
    container.appendChild(btn);
  }
  container.addEventListener('mouseleave', () => {
    container.querySelectorAll('.star-btn').forEach(b => {
      b.style.color = parseInt(b.dataset.val) <= aspectRatings[aspect] ? 'var(--warning)' : 'var(--gray-200)';
    });
  });
}

function toggleNA(aspect) {
  if (aspect === 'phone') {
    phoneNA = !phoneNA;
    document.getElementById('na-phone').classList.toggle('checked', phoneNA);
    const item = document.getElementById('stars-phone').closest('.star-rating-item');
    item.classList.toggle('is-na', phoneNA);
    if (phoneNA) {
      aspectRatings.phone = null;
      document.getElementById('stars-phone').querySelectorAll('.star-btn').forEach(b => b.style.color = 'var(--gray-200)');
      document.getElementById('val-phone').textContent = '';
    }
  }
}

function goStep(step) {
  if (step === 2 && !validateStep1()) return;
  if (step === 3 && !validateStep2()) return;

  // Hide/show sections
  document.querySelectorAll('.fb-section').forEach(s => s.classList.add('hidden'));
  document.getElementById('section-' + step).classList.remove('hidden');

  // Step indicators
  document.querySelectorAll('.fb-step').forEach(s => {
    const n = parseInt(s.dataset.step);
    s.classList.remove('active', 'done');
    if (n === step) s.classList.add('active');
    else if (n < step) s.classList.add('done');
  });

  // Lines
  if (step >= 2) document.getElementById('line-1-2').classList.add('done');
  else document.getElementById('line-1-2').classList.remove('done');
  if (step >= 3) document.getElementById('line-2-3').classList.add('done');
  else document.getElementById('line-2-3').classList.remove('done');

  // Progress
  document.getElementById('progressBar').style.width = (step / 3 * 100) + '%';

  if (step === 3) buildSummary();
  currentStep = step;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function validateStep1() {
  if (!document.getElementById('branchSelect').value) {
    alert(currentLang === 'si' ? 'ශාඛාව තෝරන්න.' : currentLang === 'ta' ? 'கிளையை தேர்ந்தெடுக்கவும்.' : 'Please select a branch.');
    return false;
  }
  if (!selectedService) {
    alert(currentLang === 'si' ? 'සේවා වර්ගය තෝරන්න.' : currentLang === 'ta' ? 'சேவை வகையை தேர்ந்தெடுக்கவும்.' : 'Please select a service type.');
    return false;
  }
  if (!document.getElementById('visitDate').value) {
    alert(currentLang === 'si' ? 'සංචාරයේ දිනය තෝරන්න.' : currentLang === 'ta' ? 'வருகை தேதியை தேர்ந்தெடுக்கவும்.' : 'Please select a date of visit.');
    return false;
  }
  return true;
}

function validateStep2() {
  const required = ['officer', 'waiting', 'overall'];
  for (const a of required) {
    if (!aspectRatings[a]) {
      const names = { officer: t('rat_officer'), waiting: t('rat_waiting'), overall: t('rat_overall') };
      alert((currentLang === 'si' ? 'කරුණාකර ' + names[a] + ' ශ්‍රේණිගත කරන්න.'
        : currentLang === 'ta' ? names[a] + ' மதிப்பிடவும்.'
          : 'Please rate: ' + names[a]));
      return false;
    }
  }
  return true;
}

function buildSummary() {
  const ratings = [
    { label: t('rat_officer'), val: aspectRatings.officer },
    { label: t('rat_waiting'), val: aspectRatings.waiting },
    { label: t('rat_overall'), val: aspectRatings.overall },
    { label: t('rat_phone'), val: phoneNA ? '—' : aspectRatings.phone },
  ];
  const ratingRows = ratings.map(r =>
    `<div class="fb-sum-row">
      <span>${r.label}</span>
      <span class="sum-stars">${r.val === '—' ? '—' : r.val ? '★'.repeat(r.val) + '☆'.repeat(5 - r.val) + ` (${r.val}/5)` : '—'}</span>
    </div>`
  ).join('');

  document.getElementById('summaryBox').innerHTML = `
    <div class="fb-sum-row"><span>${t('branch_label')}</span><span>${document.getElementById('branchSelect').value}</span></div>
    <div class="fb-sum-row"><span>${t('service_label')}</span><span>${selectedService}</span></div>
    <div class="fb-sum-row"><span>${t('date_label')}</span><span>${document.getElementById('visitDate').value}</span></div>
    ${ratingRows}
  `;
  document.getElementById('summaryBox').classList.add('visible');
}

function toggleAnon() {
  isAnonymous = !isAnonymous;
  document.getElementById('anonCheck').classList.toggle('checked', isAnonymous);
  const phone = document.getElementById('custPhone');
  const nic = document.getElementById('custNIC');
  [phone, nic].forEach(el => {
    el.disabled = isAnonymous;
    el.style.opacity = isAnonymous ? '.4' : '1';
    if (isAnonymous) el.value = '';
  });
}

function resetForm() { window.location.reload(); }

// ===============================================================
//  DOM INIT
// ===============================================================
document.addEventListener('DOMContentLoaded', () => {

  // Language switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyLanguage(btn.dataset.lang);
    });
  });

  // Service chips
  document.querySelectorAll('.service-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.service-chip').forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
      selectedService = chip.dataset.value;
    });
  });

  // Build star rows
  buildStarRow('stars-officer', 'officer');
  buildStarRow('stars-waiting', 'waiting');
  buildStarRow('stars-overall', 'overall');
  buildStarRow('stars-phone', 'phone');

  // Form submit
  const form = document.getElementById('feedbackForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const entry = {
        ref: generateRef(),
        branch: document.getElementById('branchSelect').value,
        service: selectedService,
        lang: currentLang,
        comment: document.getElementById('comments').value.trim(),
        phone: isAnonymous ? '' : (document.getElementById('custPhone').value.trim()),
        nic: isAnonymous ? '' : (document.getElementById('custNIC').value.trim()),
        anonymous: isAnonymous,
        date: new Date().toISOString(),
        ratings: {
          officer: aspectRatings.officer,
          waiting: aspectRatings.waiting,
          overall: aspectRatings.overall,
          phone: phoneNA ? null : aspectRatings.phone,
        }
      };
      addFeedback(entry);

      // Show success
      document.getElementById('refNumber').textContent = entry.ref;
      document.getElementById('successOverlay').classList.remove('hidden');
    });
  }

  // Apply default language
  applyLanguage('en');

  // ---- Dashboard filter listeners ----
  const filterBranch = document.getElementById('filterBranch');
  const filterPeriod = document.getElementById('filterPeriod');
  if (filterBranch) filterBranch.addEventListener('change', renderDashboard);
  if (filterPeriod) filterPeriod.addEventListener('change', renderDashboard);
});


// ===============================================================
//  DASHBOARD LOGIC
// ===============================================================
let ratingChartInst, trendChartInst, branchChartInst;

function renderDashboard() {
  const allRaw = getAll();
  if (!allRaw.length) return;

  // ---- Read active filter values ----
  const branchFilter = (document.getElementById('filterBranch') || {}).value || 'all';
  const periodDays = parseInt((document.getElementById('filterPeriod') || {}).value || '30', 10);

  // ---- Apply period filter ----
  const cutoff = Date.now() - periodDays * 86400000;
  let all = allRaw.filter(f => new Date(f.date).getTime() >= cutoff);

  // ---- Apply branch filter ----
  if (branchFilter !== 'all') {
    all = all.filter(f => f.branch === branchFilter);
  }

  // ---- Update active-filter badge in sidebar ----
  const activeLabel = document.getElementById('activeFilterLabel');
  if (activeLabel) {
    activeLabel.textContent =
      (branchFilter === 'all' ? 'All Branches' : branchFilter) +
      '  ·  Last ' + periodDays + ' days';
  }

  if (!all.length) {
    // No data after filtering – clear KPIs gracefully
    ['kpiTotal', 'kpiAvgRating', 'kpiSatisfied', 'kpiPoor'].forEach(id => {
      const el = document.getElementById(id); if (el) el.textContent = '—';
    });
    const tbody = document.getElementById('feedbackTableBody');
    if (tbody) tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;color:var(--gray-400);padding:32px">No feedback found for this filter.</td></tr>';
    const logCount = document.getElementById('logCount');
    if (logCount) logCount.textContent = '0 entries';
    return;
  }

  // KPIs – use "ratings.overall" if present, else "rating" for legacy demo data
  const getRating = f => (f.ratings && f.ratings.overall) ? f.ratings.overall : (f.rating || 0);

  const total = all.length;
  const avgRating = (all.reduce((s, f) => s + getRating(f), 0) / total).toFixed(1);
  const satisfied = Math.round(all.filter(f => getRating(f) >= 4).length / total * 100);
  const poor = Math.round(all.filter(f => getRating(f) <= 2).length / total * 100);

  const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setEl('kpiTotal', total.toLocaleString());
  setEl('kpiAvgRating', avgRating + ' ★');
  setEl('kpiSatisfied', satisfied + '%');
  setEl('kpiPoor', poor + '%');

  // Rating distribution
  const ratingCounts = [1, 2, 3, 4, 5].map(r => all.filter(f => getRating(f) === r).length);
  const ratingCtx = document.getElementById('ratingChart');
  if (ratingCtx) {
    if (ratingChartInst) ratingChartInst.destroy();
    ratingChartInst = new Chart(ratingCtx, {
      type: 'bar',
      data: {
        labels: ['1★', '2★', '3★', '4★', '5★'],
        datasets: [{
          data: ratingCounts,
          backgroundColor: ['#e0445a', '#f5a623', '#8e97b0', '#2d9cdb', '#1aae6b'],
          borderRadius: 8, borderSkipped: false,
        }]
      },
      options: { plugins: { legend: { display: false } }, scales: { x: { grid: { display: false } }, y: { grid: { color: '#eef0f5' }, beginAtZero: true } }, responsive: true }
    });
  }

  // Trend
  const trendCtx = document.getElementById('trendChart');
  if (trendCtx) {
    const labels = [], counts = [];
    for (let d = 13; d >= 0; d--) {
      const day = new Date(); day.setDate(day.getDate() - d);
      const dayStr = day.toISOString().slice(0, 10);
      labels.push(day.toLocaleDateString('en-PH', { month: 'short', day: 'numeric' }));
      counts.push(all.filter(f => f.date.startsWith(dayStr)).length);
    }
    if (trendChartInst) trendChartInst.destroy();
    trendChartInst = new Chart(trendCtx, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          data: counts,
          borderColor: '#c8952a', backgroundColor: 'rgba(200,149,42,.08)',
          tension: .4, fill: true,
          pointBackgroundColor: '#c8952a', pointRadius: 4, pointHoverRadius: 6,
        }]
      },
      options: { plugins: { legend: { display: false } }, scales: { x: { grid: { display: false } }, y: { grid: { color: '#eef0f5' }, beginAtZero: true } }, responsive: true }
    });
  }

  // Branch chart
  const branchCtx = document.getElementById('branchChart');
  if (branchCtx) {
    const bNames = ['Main Branch', 'North Branch', 'East Branch', 'South Branch', 'West Branch'];
    const bAvgs = bNames.map(b => {
      const items = all.filter(f => f.branch === b);
      if (!items.length) return 0;
      return +(items.reduce((s, f) => s + getRating(f), 0) / items.length).toFixed(2);
    });
    if (branchChartInst) branchChartInst.destroy();
    branchChartInst = new Chart(branchCtx, {
      type: 'bar',
      data: {
        labels: bNames,
        datasets: [{
          label: 'Avg Rating',
          data: bAvgs,
          backgroundColor: bAvgs.map(v => v >= 4 ? '#1aae6b' : v >= 3 ? '#2d9cdb' : '#e0445a'),
          borderRadius: 8, borderSkipped: false,
        }]
      },
      options: {
        indexAxis: 'y',
        plugins: { legend: { display: false } },
        scales: { x: { max: 5, grid: { color: '#eef0f5' }, beginAtZero: true }, y: { grid: { display: false } } },
        responsive: true
      }
    });
  }

  // Table
  const tbody = document.getElementById('feedbackTableBody');
  if (tbody) {
    tbody.innerHTML = '';
    const logCount = document.getElementById('logCount');
    if (logCount) logCount.textContent = all.length + ' entries';
    all.slice(0, 30).forEach(f => {
      const r = getRating(f);
      const stars = '★'.repeat(r) + '☆'.repeat(5 - r);
      const svc = f.service || f.category || '—';
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><span class="ref-code">${f.ref}</span></td>
        <td title="${f.branch}">${f.branch}</td>
        <td title="${svc}">${svc}</td>
        <td><span class="rating-stars ${r <= 2 ? 'bad' : ''}">${stars}</span></td>
        <td title="${f.comment || ''}">${f.comment || '<em style="color:var(--gray-400)">No comment</em>'}</td>
        <td>${new Date(f.date).toLocaleDateString('en-PH', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
      `;
      tbody.appendChild(tr);
    });
  }
}

function exportCSV() {
  const all = getAll();
  const getRating = f => (f.ratings && f.ratings.overall) ? f.ratings.overall : (f.rating || '');
  const header = ['Ref', 'Branch', 'Service', 'Officer Rating', 'Waiting Rating', 'Overall Rating', 'Phone Rating', 'Anonymous', 'Comment', 'Date'];
  const rows = all.map(f => [
    f.ref, f.branch,
    f.service || f.category || '',
    f.ratings ? f.ratings.officer : '',
    f.ratings ? f.ratings.waiting : '',
    f.ratings ? f.ratings.overall : getRating(f),
    f.ratings && f.ratings.phone !== null && f.ratings.phone !== undefined ? f.ratings.phone : 'N/A',
    f.anonymous ? 'Yes' : 'No',
    '"' + (f.comment || '').replace(/"/g, '""') + '"',
    new Date(f.date).toLocaleDateString()
  ]);
  const csv = [header, ...rows].map(r => r.join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'silank4an_feedback.csv'; a.click();
  URL.revokeObjectURL(url);
}
