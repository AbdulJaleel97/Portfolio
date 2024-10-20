const { createApp } = Vue;
createApp({
  data() {
    return {
      name: "AbdulJaleel",
      myProjects: [
        {
          name: "Lenore - Jewelries",
          description:
            "Lenore is an ecommerce luxury jewelry website, with our curated collection of rings, necklaces, and more. Enjoy secure shopping, fast shipping, and exceptional service.(DEMO)",
          link: "https://lenore-beta.netlify.app/",
          img: "../imgs/lenore.png",
          langs: ["Vue.js","Vuetify","Pinia"],
          direction: false,
        },
        {
          name: "Electbox - Electronics Store",
          description:
            "Electbox – Electronics Super Store Theme is an extremely powerful and user-friendly theme with awesome features looks perfect for Electronics, Games, Gadgets, Tools, Mobile, Megastore, Supermarket, Furniture, Fashion related eCommerce project. ",
          link: "https://abduljaleel-electrobox.netlify.app/",
          img: "../imgs/electbox.png",
          langs: ["Vue.js", "Vuex", "Swiper.js", "Bootstrap"],
          direction: true,
        },
        // {
        //   name: "Ellamart - eCommerce",
        //   description:
        //     "Ellamart eCommerce Website Deals with Api calls to show all Categories. Ellamart is well-coded , commented and user-friendly with awesome features making browsing easy for users",
        //   link: "https://abduljaleel-ellamart.netlify.app/",
        //   img: "../imgs/ellamart.png",
        //   langs: ["Nuxt", "Vuetify", "Pinia", "AxiosApi"],
        //   direction: false,
        // },
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
          this.$refs.menuLinks.classList.add("show");
        });
      } else {
        this.$refs.menuLinks.classList.remove("show");
        this.$refs.menuOverlay.classList.remove("show");
      }
    },
  },
}).mount("#gelato-app");

// Show Navbar on scrolling
let navHeight = document.querySelector(".header-nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > navHeight.offsetHeight) {
    navHeight.classList.add("fixed");
  } else {
    navHeight.classList.remove("fixed");
  }
});
