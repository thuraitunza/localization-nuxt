export default defineI18nConfig(() => ({
    legacy: false,

    messages: {
         "en-CA": {
            // 👇 Note that we use the same keys here...
           app_title: "Menu",
            nav_shows: "Shows",
             nav_blog: "Blog",
             nav_about: "About",
           },
           "ar-EG": {
            // 👇 ...and here
             app_title: "ပင်မ",
             nav_shows: "ပြပါ",
             nav_blog: "ဘလော့လ်",
             nav_about: "အကြောင်းအရာ",
           },
  }}))