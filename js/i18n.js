const english = {
  nav_home: 'Home',
  nav_about: 'About us',
  nav_news: 'Announcements',
  nav_events: 'Events',
  nav_gallery: 'Gallery',
  nav_contact: 'Contact',
  nav_give: 'Give',
  nav_resources: 'Resources',
  give_btn: 'Give now',

  hero_eyebrow: 'A place of grace',
  hero_title: 'Welcome home, welcome to AICT Kasulu',
  hero_text: 'A community of believers growing in faith, love and service to the people of Kasulu.',
  hero_btn: 'Learn more',
  hero_watch: 'Watch a service',

  welcome_eyebrow: 'Welcome to the house of faith',
  welcome_title: 'Welcome to AICT Kasulu',
  welcome_text: 'Whether it is your first time or you are part of our family, there is a place for you here. We invite you to worship with us, learn with us and grow with us.',
  welcome_link: 'Read about the church',
  verse_john: '“For God so loved the world that he gave his one and only Son.”',
  verse_john_ref: '— John 3:16',

  belief_eyebrow: 'What we believe',
  belief_title: 'Faith that changes lives',
  belief_note: 'We long to see everyone know Christ, be loved in the church family and be sent out with purpose.',
  vision_title: 'Vision',
  vision_text: 'To spread the gospel and reach many people in Kasulu and beyond.',
  mission_title: 'Mission',
  mission_text: 'To build disciples of Christ who faithfully serve God and the community.',
  values_title: 'Values',
  values_text: 'Love, truth, generosity, humility and excellence in everything we do.',
  stat_1: 'Since we began',
  stat_2: 'One family',
  stat_3: 'Endless hope',

  services_eyebrow: 'Service times',
  services_title: 'Your presence is a gift.',
  services_text: 'Come and worship with us. Our doors are open.',
  services_btn: 'Contact us',
  day_sun: 'SUNDAY',
  day_wed: 'WEDNESDAY',
  day_fri: 'FRIDAY',
  service_1: 'First service',
  service_2: 'Main service',
  service_3: 'Evening prayers',
  service_4: 'Youth & the Word',
  time_1: '8:00 AM',
  time_2: '10:00 AM',
  time_3: '5:00 PM',
  time_4: '5:00 PM',

  news_eyebrow: 'Notice of the week',
  news_title: 'What is happening now',
  news_all: 'See all',
  news_1_tag: 'Sunday · 07 Apr',
  news_1_title: 'Week of prayer and consecration',
  news_1_text: 'Join our week of prayer. Every day we meet to seek the face of God.',
  news_2_tag: 'Family',
  news_2_title: 'Children\'s classes every Sunday',
  news_2_text: 'Our children get a chance to learn the Word with joy.',
  news_3_tag: 'Service',
  news_3_title: 'Volunteer in ministry',
  news_3_text: 'There is a place for you to use your gift to bless others.',
  read_more: 'Read more',
  join_us: 'Join us',

  events_eyebrow: 'Church calendar',
  events_title: 'Upcoming events',
  event_1_tag: 'Sunday · 10:00 AM',
  event_1_title: 'Joint family service',
  event_1_place: 'AICT Kasulu grounds',
  event_2_tag: 'Sunday · 9:00 PM',
  event_2_title: 'Night of praise and prayer',
  event_2_place: 'Main church hall',
  event_3_tag: 'Saturday · 3:00 AM',
  event_3_title: 'Clean-up and community service day',
  event_3_place: 'Kasulu town',

  gallery_eyebrow: 'Family photos',
  gallery_title: 'Life together',
  gallery_all: 'View all photos',
  gallery_caption: 'Voices of praise',
  gallery_caption_2: 'Joy unites us',

  res_eyebrow: 'Resources to help you grow',
  res_title: 'The Word of God, every day.',
  res_text: 'Read a passage from the Bible, listen to songs of praise and keep growing in your journey of faith.',
  res_bible: 'Swahili Bible',
  res_bible_text: 'Read the Bible online',
  res_hymns: 'Hymns (Tenzi)',
  res_hymns_text: 'Listen and worship',
  verse_label: 'VERSE OF THE DAY',
  verse_psalm: '“The Lord is my shepherd, I lack nothing.”',
  verse_psalm_ref: 'Psalm 23:1',

  contact_eyebrow: 'Get in touch',
  contact_title: 'We would love to hear from you.',
  contact_text: 'Have a question, a prayer request or want to visit? We are here for you.',
  form_name: 'Your name',
  form_name_ph: 'Enter your name',
  form_email: 'Email',
  form_message: 'Message',
  form_message_ph: 'How can we help you?',
  form_send: 'Send message',

  give_eyebrow: 'Give generously',
  give_title: 'Your generosity leaves a mark.',
  give_text: 'Your gifts help the gospel, children, youth and community service to keep moving forward.',
  give_contact: 'Contact us',

  footer_about: 'A family of believers in Kasulu sharing the gospel with love and hope.',
  footer_visit: 'Visit',
  footer_contact: 'Contact',
  footer_follow: 'Follow us',
  footer_rights: '© 2026 AICT Kasulu. All rights reserved.',
  footer_motto: 'Faith · Hope · Love'
};

const langButton = document.getElementById('langToggle');
const textItems = document.querySelectorAll('[data-i18n]');
const placeholderItems = document.querySelectorAll('[data-i18n-placeholder]');

const swahili = {};

textItems.forEach(function (el) {
  const key = el.dataset.i18n;
  if (!(key in swahili)) swahili[key] = el.innerHTML;
});

placeholderItems.forEach(function (el) {
  swahili[el.dataset.i18nPlaceholder] = el.placeholder;
});

function setLanguage(lang) {
  const words = lang === 'en' ? english : swahili;

  textItems.forEach(function (el) {
    el.innerHTML = words[el.dataset.i18n];
  });

  placeholderItems.forEach(function (el) {
    el.placeholder = words[el.dataset.i18nPlaceholder];
  });

  document.documentElement.lang = lang;
  langButton.textContent = lang === 'en' ? 'SW' : 'EN';
  localStorage.setItem('lang', lang);
}

langButton.addEventListener('click', function () {
  setLanguage(document.documentElement.lang === 'en' ? 'sw' : 'en');
});

setLanguage(localStorage.getItem('lang') || 'sw');
