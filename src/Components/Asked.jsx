import React, { useState } from 'react';

function Asked() {
  const [press, setPress] = useState(null); // ✅ Start with null

  const handleToggle = (index) => {
    setPress((prev) => (prev === index ? null : index));
  };

  const Questions = [
    {
      number: '1',
      head: 'What is Netflix?',
      para:
        'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. Theres always something new to discover, and new TV shows and movies are added every week!',
    },
    {
      number: '2',
      head: 'How much does Netflix cost?',
      para:
        'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.',
    },
    {
      number: '3',
      head: 'Where can I watch?',
      para:
        'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you’re on the go and without an internet connection. Take Netflix with you anywhere.',
    },
    {
      number: '4',
      head: 'How do I cancel?',
      para:
        'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
    },
    {
      number: '5',
      head: 'What can I watch on Netflix',
      para:
        'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
    },
    {
      number: '6',
      head: 'Is Netflix good for kids?',
      para:
        'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.',
    },
  ];

  return (
    <div className='p-10  text-white'>
      <h1 className='text-3xl mb-6'>Frequently Asked Questions</h1>

      {Questions.map((items, index) => (
        <div key={index} className='w-full mb-2 text-xl'>
          <h1
            onClick={() => handleToggle(index)}
            className='bg-gray-700 p-5 cursor-pointer flex justify-between items-center'
          >
            {items.head}
            <span>
              <i
                className={`${
                  press === index ? 'fa-solid fa-xmark' : 'fa-solid fa-plus'
                }`}
              ></i>
            </span>
          </h1>

          {press === index && (
            <p className='bg-gray-600 p-5 transition-all duration-300'>
              {items.para}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Asked;
