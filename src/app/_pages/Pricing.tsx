import Image from "next/image";
import PricingCard from "../_components/PricingCards";

const Pricing = () => {
  const pricingData = [
    {
      title: "Founders' Room",
      description:
        "A private room designed for visionaries. Whether you're brainstorming, building, or closing deals, this room is where founders make things happen. Book now and elevate your work experience!",
      images: [
        {
          src: "/images/pricing/pricing-founder-room.jpg",
          blurDataURL: "/images/pricing/pricing-community-room-lazy.png",
        },
        {
          src: "/images/pricing/pricing-founder-room.jpg",
          blurDataURL: "/images/pricing/pricing-community-room-lazy.jpg",
        },
      ],
      pricing: [
        { label: "Daily Rate", amount: "1,800" },
        { label: "Weekly Rate", amount: "10,000" },
        { label: "Monthly Rate", amount: "39,000" },
      ],
    },
    {
      title: "Meeting Hall",
      description:
        "Our Meeting Hall accommodates up to 12 people with a large, comfortable table and chairs. Equipped with a 55-inch TV for presentations and high-speed internet, it's perfect for meetings and online conferences. We handle the details, so you can focus on your agenda.",
      images: [
        {
          src: "/images/pricing/pricing-meeting-room.jpg",
          blurDataURL: "/images/pricing/pricing-image-meeting-hall-lazy.png",
        },
        {
          src: "/images/pricing/pricing-image-meeting-hall.png",
          blurDataURL: "/images/features/pricing-image-meeting-hall-lazy.png",
        },
      ],
      pricing: [
        { label: "Hourly Rate", amount: "1,000" },
        { label: "Daily Rate", amount: "2,500" },
        { label: "Weekly Rate", amount: "12,000" },
      ],
    },
    {
      title: "Executive Room",
      description:
        "Our Executive Room features 4 executive tables, headrest chairs, and a large wardrobe for files and documents, plus a single sofa for your guest. With well-ventilated windows and a professional atmosphere, it's the ideal space for executives to brainstorm and work.",
      images: [
        {
          src: "/images/pricing/pricing-executive-room-1.png",
          blurDataURL: "/images/pricing/pricing-executive-room-1-lazy.png",
        },
        {
          src: "/images/pricing/pricing-image-executive-room-2.png",
          blurDataURL:
            "/images/pricing/pricing-image-executive-room-2-lazy.png",
        },
      ],
      pricing: [
        { label: "Daily Rate", amount: "1,600" },
        { label: "Weekly Rate", amount: "9,000" },
        { label: "Monthly Rate", amount: "35,000" },
      ],
    },
    {
      title: "Startup Room I",
      description:
        "Startup Room I features an executive desk with a premium chair, two work desks with ergonomic seating, and a custom abstract painting placed on one side of the window, complementing the motorbike chain wall clock on the other. The standout clock adds an industrial flair, creating a creative yet professional workspace.",
      images: [
        {
          src: "/images/pricing/pricing-startup-room1-image1.jpg",
          blurDataURL: "/images/pricing/pricing-startup-room.jpg",
        },
        {
          src: "/images/pricing/pricing-startup-room1-image2.jpg",
          blurDataURL: "/images/pricing/pricing-startup-room-2-lazy.png",
        },
      ],
      pricing: [
        { label: "Daily Rate", amount: "1,400" },
        { label: "Weekly Rate", amount: "7,000" },
        { label: "Monthly Rate", amount: "25,000" },
      ],
    },
    {
      title: "Startup Room II",
      description:
        "Our Startup Room II offers 4 comfortable desks with smart chairs, a well-ventilated space with a balcony, and refreshing plants. Perfect for startups, it provides an affordable yet excellent working environment.",
      images: [
        {
          src: "/images/pricing/pricing-startup-room.jpg",
          blurDataURL: "/images/pricing/pricing-startup-room.jpg",
        },
        {
          src: "/images/pricing/pricing-startup-room-2.jpg",
          blurDataURL: "/images/pricing/pricing-startup-room-2-lazy.jpg",
        },
      ],
      pricing: [
        { label: "Daily Rate", amount: "1,400" },
        { label: "Weekly Rate", amount: "7,000" },
        { label: "Monthly Rate", amount: "25,000" },
      ],
    },
  ];

  return (
    <div id="pricing" className="overflow-hidden">
      <div className="relative z-10 lg:block hidden">
        <Image
          src="/images/vector/Vector 11.svg"
          alt=""
          width={100}
          height={100}
          className="absolute top-2 right-6"
        />
        <Image
          src="/images/vector/Vector 12.svg"
          alt=""
          width={100}
          height={100}
          className="absolute top-2 right-14"
        />
      </div>

      <div className="lg:py-[120px] lg:px-28 py-[60px] px-5 bg-[#EFEBE5]">
        <div className="capitalize text-center">
          <p className="lg:pb-6 pb-3 lg:text-xl lg:leading-[23px] text-xs font-semibold text-[#455D58]">
            Our Pricing
          </p>
          <p className="lg:text-5xl text-[28px] leading-[40px] font-begum lg:px-0 px-14">
            Pricing Tailored to Your Needs
          </p>
        </div>

        <div className="lg:mt-16 mt-8 lg:grid grid-cols-2 gap-[30px] z-50">
          {pricingData.map((card, index) => (
            <PricingCard
              key={index}
              title={card.title}
              description={card.description}
              images={card.images}
              pricing={card.pricing}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
