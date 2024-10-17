// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    id: 1,
    brand: "Tesla",
    rating: 112,
    carName: "Tesla Malibu",
    imgUrl: img01,
    model: "Model 3",
    price: 4150,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Introducing the 2023 Tesla Malibu, a perfect fusion of cutting-edge technology and sleek design. With an impressive rating of 112, this vehicle delivers exceptional performance and comfort on every journey. The heated seats provide a touch of luxury, ensuring a cozy experience whether you're commuting or enjoying a weekend getaway.Boasting a fuel efficiency of 20 kmpl, the Malibu offers both sustainability and savings at the pump. The state-of-the-art GPS navigation system ensures you can effortlessly find your way, making every drive stress-free. With its automatic transmission, you’ll enjoy a smooth and responsive ride, whether you’re navigating city streets or embarking on long road trips.Elevate your driving experience with the Tesla Malibu, where innovation meets elegance.",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Aventador",
    imgUrl: img02,
    model: "Model-2022",
    price: 4100,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Experience the perfect blend of luxury and performance with the 2022 Toyota Aventador. Designed for those who appreciate style and comfort, this vehicle features plush heated seats for an elevated driving experience. With an impressive fuel efficiency of 20 kmpl, it’s as economical as it is elegant.Equipped with state-of-the-art GPS navigation, you can easily find your way on any journey. The automatic transmission ensures smooth handling, making it an ideal choice for both city driving and long road trips. Whether you're navigating daily errands or embarking on an adventure, the Toyota Aventador guarantees a ride that is both enjoyable and reliable.Discover the joy of driving a vehicle that not only meets your needs but exceeds your expectations.",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Model-2022",
    price: 5450,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The 2022 BMW X3 combines luxury and performance in a sophisticated SUV that caters to all your driving needs. Priced at $5,450, this model features premium heated seats that provide comfort during every journey. With a fuel efficiency of 20 kmpl, it balances powerful performance with economic driving. The advanced GPS navigation system ensures you can navigate effortlessly, while the automatic transmission delivers smooth handling and responsive performance, making it perfect for both city commutes and long road trips. With an impressive rating of 132, the BMW X3 is designed for those who seek style, comfort, and reliability on the road.",
  },

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Mercielago",
    imgUrl: img04,
    model: "Model-2022",
    price: 5800,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The 2022 Nissan Mercielago is a strikingly stylish and powerful vehicle that seamlessly blends luxury with performance. Priced at $5,800, this model is equipped with premium heated seats, ensuring a comfortable ride regardless of the weather. With a commendable fuel efficiency of 20 kmpl, it allows for both spirited driving and economical fuel consumption. The cutting-edge GPS navigation system makes it easy to reach your destination, while the automatic transmission provides effortless gear shifting for a smooth driving experience. With a solid rating of 102, the Nissan Mercielago is designed for those who appreciate elegance and reliability in their automotive journey.",
  },

  {
    id: 5,
    brand: "Ferrari",
    rating: 77,
    carName: "Ferrari Camry",
    imgUrl: img05,
    model: "Model-2022",
    price: 3800,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Introducing the 2022 Ferrari Camry, a unique blend of luxury and sportiness that stands out on the road. With a price of $3,800, this model offers heated seats that enhance comfort for every passenger, making it an ideal choice for both short trips and long journeys. Boasting a fuel efficiency of 20 kmpl, it ensures that you enjoy both performance and economy. The advanced GPS navigation system provides hassle-free route management, while the automatic transmission allows for smooth and effortless driving. Despite its rating of 77, the Ferrari Camry is designed for those who seek a distinctive driving experience without compromising on comfort and style.",
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 71,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    model: "Model-2022",
    price: 4500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Introducing the 2022 Mercedes Benz XC90, a luxurious SUV that embodies elegance and advanced engineering. Priced at $4,500, this model features heated seats for enhanced comfort on every journey, ensuring a pleasant ride for both driver and passengers. With a fuel efficiency of 20 kmpl, it offers a balanced combination of power and economy. The cutting-edge GPS navigation system allows for seamless route planning, while the automatic transmission ensures smooth and responsive driving. Despite a rating of 71, the Mercedes Benz XC90 stands out as a premier choice for those seeking a refined and comfortable driving experience without compromise.",
  },

  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "Audi Fiesta",
    imgUrl: img07,
    model: "Model 3",
    price: 5500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Experience the sophistication of the 2022 Audi Fiesta, a dynamic vehicle that combines style and functionality. Priced at $5,500, this model boasts luxurious heated seats that provide exceptional comfort, making every journey enjoyable. With a fuel efficiency of 20 kmpl, the Fiesta delivers both performance and economy, allowing you to travel further without frequent stops. The integrated GPS navigation system ensures you reach your destination with ease, while the automatic transmission offers a smooth and responsive driving experience. With a rating of 82, the Audi Fiesta is designed for those who appreciate quality, comfort, and reliability on the road.",
  },

  {
    id: 8,
    brand: "Colorado",
    rating: 52,
    carName: "Rolls Royce Colorado",
    imgUrl: img08,
    model: "Model 3",
    price: 4800,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Introducing the 2022 Rolls Royce Colorado, a luxurious vehicle that redefines elegance and performance. Priced at $4,800, this model is equipped with sumptuous heated seats that provide unparalleled comfort for every ride. With a fuel efficiency of 20 kmpl, the Colorado balances performance with economical driving, making it suitable for various journeys. The advanced GPS navigation system ensures you can travel with confidence, while the automatic transmission delivers a smooth and effortless driving experience. Despite a rating of 52, the Rolls Royce Colorado stands as a distinguished choice for those who value luxury, comfort, and refinement in their automotive experience.",
  },
];

export default carData;
