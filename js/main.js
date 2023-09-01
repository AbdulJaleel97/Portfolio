const { createApp } = Vue;
createApp({
  data() {
    return {
      name: "AbdulJaleel",
      myProjects: [
        {
          name: "Electbox - Electronics Store",
          description:
            "Electbox – Electronics Super Store Theme is an extremely powerful and user-friendly theme with awesome features looks perfect for Electronics, Games, Gadgets, Tools, Mobile, Megastore, Supermarket, Furniture, Fashion related eCommerce project. ",
          link: "https://abduljaleel-electrobox.netlify.app/",
          img: "../imgs/electbox.png",
          langs: ["Vue.js", "Vuex", "Swiper.js", "Bootstrap"],
          direction: true,
        },
        {
          name: "Dinter - Interior Designs",
          description:
            "Dinter is the ideal template for your architecture and interior design business.",
          link: "https://abduljaleel-dinter.netlify.app/",
          img: "../imgs/dinter.png",
          langs: ["Vue.js", "Vuetify", "Vuex"],
          direction: false,
        },
        {
          name: "Resume - Cv Template",
          description:
            "Resume Template is for Displaying Skills and Showcases in a professional and stylish design.",
          link: "https://abduljaleel-resume.netlify.app/",
          img: "../imgs/resume.png",
          langs: ["Html", "CSS", "JS"],
          direction: true,
        },
        {
          name: "Ellamart - eCommerce",
          description:
            "Ellamart eCommerce Website Deals with Api calls to show all Categories. Ellamart is well-coded , commented and user-friendly with awesome features making browsing easy for users",
          link: "https://abduljaleel-ellamart.netlify.app/",
          img: "../imgs/ellamart.png",
          langs: ["Nuxt", "Vuetify", "Pinia", "AxiosApi"],
          direction: false,
        },
      ],
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      if (this.isMenuOpen) {
        this.$nextTick(() => {
          this.$refs.menuOverlay.classList.add("show");
          setTimeout(() => {
            this.$refs.menuLinks.classList.add("show");
          });
        });
      } else {
        this.$refs.menuLinks.classList.remove("show");
        setTimeout(() => {
          this.$refs.menuOverlay.classList.remove("show");
        });
      }
    },
  },
}).mount("#gelato-app");

// Navbar show on scroll
$(() => {
  var navHeight = $(".header-nav").outerHeight();
  $(window).scroll(function () {
    var scrolled = $(document).scrollTop();
    if (scrolled > navHeight) {
      $(".header-nav").addClass("fixed");
    } else {
      $(".header-nav").removeClass("fixed");
    }
  });
});
