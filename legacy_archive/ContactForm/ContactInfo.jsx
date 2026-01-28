import React from "react";

function ContactInfo() {
  const contactDetails = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2dbf89a91d08f04dfb1cff8c2a205a3eaac834359839108fb6d2221a9ddacb2c?placeholderIfAbsent=true&apiKey=694f6dd4c87e42e6b8a3be241cc17c5a",
      text: "23,Sundar Chambers , Near Choksi wadi, Adajan Patiya, Surat, Gujarat, 395009",
      alt: "Address icon",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4f73717c9803588d75ed4b1e92c27eaa01e35641219a63b360a3f36eaaacec1?placeholderIfAbsent=true&apiKey=694f6dd4c87e42e6b8a3be241cc17c5a",
      text: "kalpesh@triz.co.in",
      alt: "Email icon",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab6340ff015dbec36619ff73014fb5ef496fcace369bfbfc9114870a087334c2?placeholderIfAbsent=true&apiKey=694f6dd4c87e42e6b8a3be241cc17c5a",
      text: "98241 54142",
      alt: "Phone icon",
    },
  ];

  return (
    <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-wrap grow gap-10 text-lg font-intermedium text-black max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a0d6132778d97d4e45d303653e1173379f7b3dfecd1c1f12dc7c96e3fcd1beb?placeholderIfAbsent=true&apiKey=694f6dd4c87e42e6b8a3be241cc17c5a"
          className="object-contain shrink-0 w-px aspect-[0]"
          alt=""
        />
        <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5dfa3af022760a91980b1fd7d357dea0b8754e80e993c3487aa52255116edfd?placeholderIfAbsent=true&apiKey=694f6dd4c87e42e6b8a3be241cc17c5a"
            className="object-contain self-center max-w-full aspect-square w-[450px]"
            alt="Company logo"
          />
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex gap-5 self-start mt-4">
              <img
                loading="lazy"
                src={detail.icon}
                className="object-contain shrink-0 aspect-square w-[40px]"
                alt={detail.alt}
              />
              <div className="my-auto basis-auto">{detail.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
