/* Progressive enhancement: the page, section links and contact link work without JavaScript. */
document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
menuButton.hidden = false;

function closeMenu(restoreFocus = false) {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
  menuButton.textContent = 'Menu';
  if (restoreFocus) menuButton.focus();
}

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
  menuButton.textContent = open ? 'Close' : 'Menu';
});

navigation.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link) return;
  closeMenu();
  const section = document.querySelector(link.hash);
  if (section) {
    section.setAttribute('tabindex', '-1');
    section.focus({ preventScroll: true });
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
window.matchMedia('(min-width: 761px)').addEventListener('change', () => closeMenu());

const enquiryType = document.querySelector('#enquiry-type');
const enquiryCity = document.querySelector('#enquiry-city');
const enquiryIdea = document.querySelector('#enquiry-idea');
const enquiryLink = document.querySelector('#whatsapp-enquiry');
document.querySelector('.enquiry-enhancement').hidden = false;

const enquiries = {
  restaurant: {
    greeting: "Hi Anto, I'd love to discuss a restaurant project.",
    placeholder: 'Your restaurant, the food you have in mind, and where you are in the process…'
  },
  celebration: {
    greeting: "Hi Anto, I'd love to discuss a wedding or private event.",
    placeholder: 'The occasion, your preferred date, approximate guest count, and what you have in mind…'
  },
  collaboration: {
    greeting: "Hi Anto, I'd love to explore a collaboration.",
    placeholder: 'Tell us a little about yourself and what you would like to create together…'
  },
  wholesale: {
    greeting: "Hi Anto and Helena, I'd like to ask about wholesale and product supply.",
    placeholder: 'Your restaurant or shop, the products you are interested in, and approximate quantities…'
  }
};

function updateEnquiry() {
  const enquiry = enquiries[enquiryType.value];
  const lines = [enquiry.greeting];
  if (enquiryCity.value.trim()) lines.push(`City: ${enquiryCity.value.trim()}`);
  if (enquiryIdea.value.trim()) lines.push(enquiryIdea.value.trim());
  enquiryIdea.placeholder = enquiry.placeholder;
  const url = new URL('https://wa.me/918438846434');
  url.searchParams.set('text', lines.join('\n\n'));
  enquiryLink.href = url.toString();
}

enquiryType.addEventListener('change', updateEnquiry);
enquiryCity.addEventListener('input', updateEnquiry);
enquiryIdea.addEventListener('input', updateEnquiry);
document.querySelectorAll('[data-enquiry]').forEach(link => {
  link.addEventListener('click', () => {
    enquiryType.value = link.dataset.enquiry;
    updateEnquiry();
  });
});
updateEnquiry();
