// about buttons
const aboutBtn = document.querySelectorAll('.about-btn');

aboutBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const aboutDetail = document.querySelectorAll('.about-detail');

        aboutBtn.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        aboutDetail.forEach(detail => {
            detail.classList.remove('active');
        });
        aboutDetail[index].classList.add('active');
    });
});

const navlinks = document.querySelectorAll('.nav-container .link-container a');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('.nav-container .link-container');

//nav links

navlinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 
        navlinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');

        sections[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Close the menu in mobile view
        menuIcon.classList.remove('bx-x');
        navBar.classList.remove('active');
    });
});


//btn

document.getElementById("contId").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "assets/pdf/Ian_Rey_Ubaub_CV.pdf"; 
    link.download = "Ian_Rey_Ubaub_CV.pdf";
    link.click();

})

// scroll
const scrollNav = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".link-container a");

  window.addEventListener("scroll", () => {
    let current = "";
    
    scrollNav.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  //toaster
toastr.options = {
    "timeOut": 3000,
    positionClass: "toast-top-center",
    progressBar: true,
    closeButton: true
};
//function

function displaySuccess() {
    var f = $('#fnTxt').val().trim();
    var email = $('#emailTxt').val().trim();
    var num = $('#numTxt').val().trim();
    var sub = $('#subTxt').val().trim();
    var message = $('#areaTxt').val().trim();

    if (f && email && num && sub && message) {
        
        toastr.success("Your message has been sent successfully!");

        $('#fnTxt').val('');
        $('#emailTxt').val('');
        $('#numTxt').val('');
        $('#subTxt').val('');
        $('#areaTxt').val('');
    }
}

