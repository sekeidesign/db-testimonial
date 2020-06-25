import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    clients: [
      {
        logoURL: "~/src/assets/testimonial-logos/designit-vfl6xuIHt.svg",
        quote:
          "Our team is constantly working across different countries, time zones and offices. A lot of solutions can accommodate that now, but none make it as seamless as Dropbox and Dropbox Paper.",
        author: "Morten Thomsen, Global IT Lead",
        "brand color": "A1D39B",
        id: 1
      },
      {
        logoURL:
          "~/src/assets/testimonial-logos/arizona_state_university-vfliy24jJ.svg",
        quote:
          "With Dropbox, educators can collaborate securely with colleagues on any device and platform — across campus and across the world.",
        author: "Tina Thorstenson, CISO",
        "brand color": "62092B",
        id: 2
      },
      {
        logoURL:
          "~/src/assets/testimonial-logos/world_bicycle_relief-vfleERmxe.svg",
        quote:
          "We’re receiving tons of pictures and are constantly overriding things that couldn’t be managed in email. Dropbox saves us a huge amount of miscommunication by allowing the latest versions of documents to be available to everybody at all times.",
        author: "Andrew Hall, Product Manager",
        "brand color": "D4011F",
        id: 3
      },
      {
        logoURL: "~/src/assets/testimonial-logos/hearst_corp-vflzU5uY9.svg",
        quote:
          "Hearst has more than 360 businesses. Dropbox makes a significant impact by providing a central hub for our teams to access all of the content they need from anywhere, on any device. It has completely changed the way these teams work.",
        author: "Nicole D’Antuono, VP of Employee Applications",
        "brand color": "B4D0E7",
        id: 4
      },
      {
        logoURL:
          "~/src/assets/testimonial-logos/university_of_florida-vflZIQgCW.svg",
        quote:
          "Our users were accomplishing a lot of great work on Dropbox without any support. Deploying a central account allowed that great work to continue, uninterrupted, in the most secure way possible.",
        author: "Elias Eldayrie, Vice President & CIO",
        "brand color": "0094CE",
        id: 5
      },
      {
        logoURL: "~/src/assets/testimonial-logos/topps-vflkySfq1.svg",
        quote:
          "We’ve always been a pioneer in the card industry, and we think of ourselves in the same way in the digital space. Thankfully, we pretty much have three words internally that keep us creating great work: ‘It’s on Dropbox.’",
        author: "Chris R. Vaccaro, Director, Live Operations & Editor-in-Chief, Mobile",
        "brand color": "FF1C1C",
        id: 6
      },
      {
        logoURL: "~/src/assets/testimonial-logos/lonely_planet-vflHDIWAi.svg",
        quote:
          "We’ve always had a global presence, but before Dropbox, we couldn’t be as spread out as we are now. Dropbox makes our employees feel like they’re all in the same office.",
        author: "Daniel Jiménez, Head of Mobile Product & Design",
        "brand color": "0E2481",
        id: 7
      },
      {
        logoURL: "~/src/assets/testimonial-logos/expedia-vfl5NETTa.svg",
        quote:
          "A lot of times when we deploy software, we first hear about the challenges. But during our phased deployment of Dropbox Business, we mostly just heard employees saying, ‘Can I get that now?’",
        author: "Chris Burgess, VP of IT",
        "brand color": "FFD82F",
        id: 8
      },
    ]
  }
});
