
// for nice select
$(document).ready(function () {

  // nice select active
  $('select').niceSelect();

  // for hide nice select
  // $('select').niceSelect('destroy');

  // sidebar toggle
  $('.sidebar-toggle-btn').click(function () {
    $('.sidebar').toggleClass('active');
    $('.overlay').addClass('active');
  });
  $('.overlay, .sidebar-close').click(function () {
    $('.sidebar, .overlay').removeClass('active');
  })
});






const headerList = document.getElementById('header__list');
const barBtn = document.getElementById('bar__btn');

barBtn.addEventListener('click', (e) => {
  headerList.classList.toggle('active');

  e.stopPropagation();
});

headerList.addEventListener('click', (e) => {
  e.stopPropagation();
});

document.addEventListener("click", () => {
  headerList.classList.remove('active');
})




// for (card)
document.addEventListener("DOMContentLoaded", function () {
  const cards = Array.from(document.querySelectorAll(".advisors__card"));
  const loadMoreBtn = document.getElementById("load-more-btn");

  function getVisibleCount() {
    const width = window.innerWidth;
    if (width >= 1400) return cards.length;
    if (width >= 992) return 6;
    return 4;
  }

  let visibleCount = getVisibleCount();
  let allShown = visibleCount >= cards.length;

  function updateCards() {
    cards.forEach((card, index) => {
      card.style.display = index < visibleCount ? "block" : "none";
    });

    // load more button visibility
    loadMoreBtn.style.display = allShown ? "none" : "block";
  }

  // Initial load
  updateCards();

  // Load more click
  loadMoreBtn.addEventListener("click", function (e) {
    e.preventDefault();
    visibleCount = cards.length;
    allShown = true;
    updateCards();
  });

  // Window resize
  window.addEventListener("resize", function () {
    if (!allShown) {
      visibleCount = getVisibleCount();
      allShown = visibleCount >= cards.length;
      updateCards();
    }
  });
});






// <!-- ====== SCROLL TO TOP SCRIPT ====== -->
var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement

function handleScroll() {
  // Do something on scroll - 0.15 is the percentage the page has to scroll before the button appears
  // This can be changed - experiment
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal) > 0.02) {
    // Show button
    scrollToTopBtn.classList.add("showBtn")
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn")
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)




