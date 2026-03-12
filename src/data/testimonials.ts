import satyaImg from "../assets/satya_nadella.png";
import sridharImg from "../assets/sridhar_vembu.png";
import satya2Img from "../assets/satya_nadella_2.png";
import elonImg from "../assets/elon_musk.png";
import kagameImg from "../assets/paul_kagame.png";

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Satya Nadella",
    role: "CEO, Microsoft",
    image: satyaImg,
    quote:
      '"We are seeing a massive shift in how technology impacts policy and education. This research is highly pertinent to the coming decade of technology."',
  },
  {
    name: "Elon Musk",
    role: "CEO, Tesla",
    image: elonImg,
    quote:
      '"Building the future requires a deep understanding of the regulatory landscapes we navigate today. Important and impressive analysis."',
  },
  {
    name: "Sridhar Vembu",
    role: "Ex-CEO, Zoho",
    image: sridharImg,
    quote:
      '"The work reflects a strong balance between academic rigor and real-world relevance. A thoughtful approach to research, policy engagement, and social impact is clearly visible."',
  },
  {
    name: "Satya Nadella",
    role: "CEO, Microsoft",
    image: satya2Img,
    quote:
      '"Empowering organizations to do more requires thoughtful policy frameworks. This effort provides exactly the perspective needed."',
  },
  {
    name: "Paul Kagame",
    role: "President, Rwanda",
    image: kagameImg,
    quote:
      '"We must ensure that technological development remains rooted in societal benefit. This work highlights those crucial intersections."',
  },
];
