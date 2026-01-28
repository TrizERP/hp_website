import React from 'react';
import MemberImage from './MemberImage';

const memberData = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b25bcc1e3360ba27ad42e952bf821ae413549cb1aaf1911fb16b151e5d00d62?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", alt: "Potential member", text: <>Kalpesh Sheth <br></br>Director</> },
  { src: "http://b.io/ext_2-", alt: "Potential member", text: "Member 2" },
  { src: "http://b.io/ext_3-", alt: "Potential member", text: "Member 3" },
  { src: "http://b.io/ext_4-", alt: "Potential member", text: "Member 4" },
  { src: "http://b.io/ext_5-", alt: "Potential member", text: "Member 5" },
  { src: "http://b.io/ext_6-", alt: "Potential member", text: "Member 6" },
  { src: "http://b.io/ext_7-", alt: "Potential member", text: "Member 7" },
  { src: "http://b.io/ext_8-", alt: "Potential member", text: "Member 8" }
];

function PotentialMembers() {
  return (
    <section className="flex flex-col pl-24 mr-24">
      <h1 className="self-center ml-8 text-4xl font-semibold text-sky-500 max-md:max-w-full max-md:text-4xl">
        Our potential Members
      </h1>
      <div className="mt-10 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {memberData.slice(0, 4).map((member, index) => (
            <MemberImage key={index} {...member} />
          ))}
        </div>
      </div>
      <div className="mt-28 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {memberData.slice(8).map((member, index) => (
            <MemberImage key={index + 4} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PotentialMembers;
