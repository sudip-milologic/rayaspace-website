import React from "react";

const TermsOfServices = () => {
  return (
    <section className="md:py-8 lg:px-28 md:px-14 px-5 py-4">
      <p className="text-2xl font-bold mt-4">{`SUMMARY OF OUR TERMS`}</p>
      <p className="py-4">{`Welcome to Raya! Before you dive in, here's a quick snapshot of our Terms:`}</p>
      <ul className="list-disc flex flex-col gap-2 px-8">
        <li>{`Raya Space's services are available to users aged 18 or older.`}</li>
        <li>{`We value your privacy and commits to protecting your information`}</li>
        <li>{`Members must follow all laws, regulations, and guidelines while using Raya Space services.`}</li>
        <li>{`Misuse, including unlawful activities, harassment, vandalism, and unauthorized access, is strictly prohibited. Violating these rules may lead to suspension or termination of your membership.`}</li>
        <li>{`Payments are required at booking or according to the billing cycle of your membership.`}</li>
        <li>{`All property and intellectual assets of Raya Space remain its own. Members must not damage or misuse the assets.`}</li>
        <li>{`Disputes are governed by Nepalese laws, with jurisdiction in Nepal's courts.`}</li>
        <li>{`Raya Space may update these Terms. Changes won't be retroactive, and users will be notified in advance for significant updates.`}</li>
      </ul>

      <p className="text-xl font-semibold mt-4">{`READ ON FOR THE DETAILS!`}</p>
      <p className="py-4">{`Welcome to Raya Space, Kathmandu's leading coworking destination. These Terms of Service ("Terms") establish the rules and guidelines for using our coworking facilities and related services. By using Raya Space, you agree to abide by these Terms. If you disagree with any part of these Terms, please do not use our services.`}</p>

      <p className="text-2xl font-bold mt-10 mb-8">{`TERMS OF SERVICE`}</p>
      <p className="text-xl font-semibold">{`WHO IS ELIGIBLE TO USE OUR SERVICES?`}</p>

      <p className="py-4 inline-flex flex-col gap-2">
        <span>{`Only users of legal age as per applicable law can access our Service. By using the Service, you confirm that you meet this age requirement and wish to form a binding contract with us.`}</span>
        <span>{`If you're using our Services on behalf of a company, organization, or any legal entity, confirm that you have the authority to bind the entity to these Terms.`}</span>
      </p>

      <p className="text-xl font-semibold mt-4">{`PRIVACY`}</p>
      <p className="py-4">{`Your privacy matters to us! We're committed to protecting your information and will never sell your information. Take a look at our Privacy Policy to see what data we collect and how we use it.`}</p>

      <p className="text-xl font-semibold mt-4">{`WHAT WE PROVIDE`}</p>
      <p className="py-4">{`Raya Space provides the following facilities and services to its members, as well as their guests and visitors (with access according to their host's membership package or additional bookings):`}</p>
      <ul className="list-disc flex flex-col gap-2 px-8 pb-4">
        <li>{`Open workspace desks;`}</li>
        <li>{`Private Office Space;`}</li>
        <li>{`Access to conference rooms;`}</li>
        <li>{`High-speed internet and Wi-Fi;`}</li>
        <li>{`Entry to premium common areas, including the terrace;`}</li>
        <li>{`Use of kitchen;`}</li>
        <li>{`Complimentary parking for members, guests, and visitors, subject to availability;`}</li>
        <li>{`Option to use the workspace and other Raya Space premises for corporate events or full-day meetings`}</li>
      </ul>

      <p className="text-xl font-semibold mt-4">{`USE OF SERVICES`}</p>
      <p className="py-4">{`When you use our Services, we expect you to do so responsibly, ethically, and in line with these guidelines. Our aim is to create a space where everyone can enjoy a safe and positive experience, so here's what you need to know:`}</p>

      <p className="text-xl font-semibold mt-4">{`PLAY BY THE RULES`}</p>
      <p className="py-4">{`You may only use our Services if you agree to follow all relevant laws, regulations, and our own guidelines. Illegal activities, abusive behavior, and any form of harassment are strictly off-limits. We reserve the right to take appropriate action if these rules are violated.`}</p>

      <p className="text-xl font-semibold mt-4">{`WHAT WE EXPECT FROM YOU`}</p>
      <p className="py-4">{`Here's what we ask from you to make sure everyone has a great experience:`}</p>
      <ul className="list-disc flex flex-col gap-2 px-8 pb-4">
        <li>{`Treat other users with kindness and respect. Avoid engaging in harmful or abusive behavior that could ruin the experience for others.`}</li>
        <li>{`Don't misuse our Services. That means no hacking, spamming, or sneaky tricks to get around our security measures.`}</li>
        <li>{`If you suspect any unauthorized activity, let us know right away to keep your account safe.`}</li>
        <li>{`Your input helps us grow! Feel free to share your thoughts and suggestions on how we can improve our services.`}</li>
      </ul>
    </section>
  );
};

export default TermsOfServices;
