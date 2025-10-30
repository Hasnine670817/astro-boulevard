
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
const closeBtn = document.getElementById('close__btn');

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

closeBtn.addEventListener("click", () => {
  headerList.classList.remove('active');
})




// for (card)
document.addEventListener("DOMContentLoaded", function () {
    const loadMoreBtn = document.getElementById("load-more-btn");
    const advisorCards = document.querySelectorAll(".advisors-card-grid > .advisors__card");

    function getVisibleCount() {
        if (window.innerWidth < 992) {
            return 4;
        } else if (window.innerWidth < 1200) {
            return 6;
        } else if (window.innerWidth < 1400) {
            return 6;
        } else {
            return advisorCards.length;
        }
    }

    let visibleCards = getVisibleCount();

    function showCards(count) {
        advisorCards.forEach((card, index) => {
            card.style.display = index < count ? "block" : "none";
        });
    }

    showCards(visibleCards);

    loadMoreBtn.addEventListener("click", function (e) {
        e.preventDefault();
        showCards(advisorCards.length);
        loadMoreBtn.style.display = "none";
    });

    window.addEventListener("resize", function () {
        const newVisible = getVisibleCount();
        if (newVisible !== visibleCards) {
            visibleCards = newVisible;
            showCards(visibleCards);
            loadMoreBtn.style.display = (visibleCards >= advisorCards.length) ? "none" : "block";
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




