const headers = {
  techOpt:
    "The technology section helps refugees, the poor, and unprivileged people to learn a useful skill, gain their confidence and make a better future for themselves",
  aniOpt:
    "The Animal section provides food, shelter and medical care to homeless animals. We respect the lives of all animals and believe that all creatures deserve to live peacefully on the planet we all share.",
  recOpt:
    "The Recycle section lists several NGOs and organizations that work in underdeveloped countries to recycle the garbage and create jobs for the locals.",
};

function getAllAnimals() {
  return [
    {
      id: 1,
      name: "FOUR PAWS",
      url: "https://action.four-paws.org.uk/page/107162/donate/1?ea.tracking.id=acqgg&gclid=Cj0KCQiA37KbBhDgARIsAIzce15sfIsWbNJ8j-fK75Aeaz3RsSnF7pHYMP2D7UKrq3gEs86t0TGhl8gaAvWSEALw_wcB",
      service: "Support dogs caught up in the cruel dog meat trade",
      image:
        "https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/2261/VIER_PFOTEN_2021-02-21_00001.jpg?v=1654872782000",
      summary:
        "Every year, thousands of dogs and cats are mercilessly killed for the dog and cat meat trade in Southeast Asia. This includes both stray animals and family pets, who are often stolen from their gardens or snatched while wandering outside. FOUR PAWS is fighting tirelessly to put an end to this cruel trade.",
    },
    {
      id: 2,
      name: "Blue Cross",
      url: "https://www.bluecross.org.uk/donate",
      service: "Provide pet education to youth",
      image:
        "https://www.bluecross.org.uk/sites/default/files/d8/styles/theme_feature_large/public/2020-05/BX137684_Billy-Boo-Education-Dog-2018-02-26-0037-lpr.jpg?itok=Bq0C0EZz",
      summary:
        "Our vision is that every pet will one day enjoy a healthy life in a happy home. We aim to improve the welfare and quality of life for all pets by developing knowledge, attitudes and behaviours through education. One of the ways in which we do this is through free talks to primary schools and youth groups.",
    },
    {
      id: 3,
      name: "Dogs Trust",
      url: "https://www.dogstrust.org.uk/support-us/donation",
      service: "Provide owners with  expert dog advice",
      image:
        "https://www.dogstrust.org.uk/images/1080x810/assets/2022-05/Web%20Image-Dalmationdog_outside_cardiff_dogstrust%20(1).jpg",
      summary:
        "Dogs Trust supports projects around the globe — in places including Thailand, India and Sri Lanka — enable us to share our knowledge and expertise, helping to make big, positive and sustainable changes to dog welfare.",
    },
  ];
}

function getAllRecycles() {
  return [
    {
      id: 4,
      name: "Environmental Skip Services",
      url: "https://environmental-skip-services-ltd.business.site/",
      service: [
        "Appliance Removal",
        "Commercial Services",
        "Electronic Waste Removal",
        "Garbage Removal",
        "Christmas Tree Removal",
        "Dumpster Rental",
        "Furniture Removal",
        "Cleanouts",
      ],
      image:
        "https://lh3.googleusercontent.com/p/AF1QipMxp1PGyL-qIhbkoTVhEQChCqKiAvw9wMTB4EzB=w1080-h608-p-no-v0",
      summary:
        "We are a well known skip hire service in Halifax that has been established for many years we specialize in MINI and MIDI skips. We provide these to both public and commercial users. ",
    },
    {
      id: 5,
      name: "ISM Waste & Recycling",
      url: "https://ismwaste.co.uk/",
      service: [
        "General Waste",
        "Rear End Loader Skips",
        "Roll on/off containers",
        "Wheelie Bin Collections",
        "Skip Hire",
        "Specialist Waste Services",
        "Hazardous Waste Srvices",
        "Confidentials Waste Services",
      ],
      image:
        "https://ismwaste.co.uk/images/home/rear-end-loading-skip-collection.jpg",
      summary:
        "Whether large or small, every business needs reliable waste management services, and at ISM Waste & Recycling, we have you covered! Our award-winning waste management and recycling services are available to companies of all sizes across Greater Manchester and Lancashire.",
    },
    {
      id: 6,
      name: "Handy Grab Ltd",
      url: "https://handygrab.co.uk/",
      service: "Ground Projects",
      image:
        "https://handygrab.co.uk/wp-content/uploads/2021/10/xPHOTO-2021-10-01-12-50-14-1500x630.jpg.pagespeed.ic.Oc9OnAdeis.webp",
      summary:
        "Grab hire is becoming the most cost effective alternative to skips. My Grab Wagon can hold approximately TWO large skips and costs similar to one large building skip. Check out our Local customer ratings here on Yell.",
    },
  ];
}

function getAllTechs() {
  return [
    {
      id: 7,
      name: "Code Your Future",
      url: "https://codeyourfuture.io/",
      service: "Training for refugees & disadvantaged people",
      image:
        "https://codeyourfuture.io/wp-content/uploads/2020/07/FSC-hero.png",
      summary:
        "CodeYourFuture (CYF) is a UK based non-profit organisation that trains some of the most deprived members of society to become web developers and helps them to find work in the tech industry.",
    },
    {
      id: 8,
      name: "Cornerstone",
      url: "https://cornerstonecds.org.uk/",
      service:
        "Caritas provides a lot of different services in many areas within the Diocese of Salford.  We advocate for Social Justice and aid to create an equal society by helping those who are most vulnerable.",
      image:
        "https://cornerstonecds.org.uk/wp-content/uploads/2022/03/IMG-4006.jpg",
      summary:
        "We are also here to help your school/college/group in its mission to put Caritas into action too by providing resources and opportunities for pupils/students (primary, high school or 6th Form) to engage in social action projects",
    },
    {
      id: 9,
      name: "Coding Black Females",
      url: "https://codingblackfemales.com/",
      service:
        "We can learn from and inspire each other, and empower the next generation to achieve success.",
      image: "https://codingblackfemales.com/img/events/bbc.jpeg",
      summary:
        "Coding Black Females was created in 2017. We are a non-profit organisation, and our primary aim is to provide opportunities for Black female developers to develop themselves, meet familiar faces, network, receive support and build relationships through having regular meetups.",
    },
  ];
}
