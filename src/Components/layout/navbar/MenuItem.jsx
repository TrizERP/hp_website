export function LeftMenuItem({ icon, title }) {
  return (
    <div className="flex gap-4">
      <img
        loading="lazy"
        src={icon}
        alt={`${title} icon`}
        className="object-contain shrink-0 self-start mt-2.5 aspect-square w-[50px]"
      />
      <div className="overflow-hidden grow px-6 py-5 bg-white rounded-md w-fit max-md:px-5">
        {title}
      </div>
    </div>
  );
}
export function RightMenuItem({ icon, title, description }) {
  return (
    <div className="flex flex-wrap gap-10 px-4 py-5 bg-white rounded-md">
      <img
        loading="lazy"
        src={icon}
        alt={`${title} icon`}
        className="object-contain shrink-0 my-auto aspect-square w-[50px]"
      />
      <div className="flex flex-col grow shrink-0 basis-0 w-fit">
        <div className="mr-8 text-sm leading-none text-sky-500 max-md:mr-2.5">
          {title}
        </div>
        <div className="mt-2.5 text-[12px] leading-4 text-sky-500 text-opacity-50">
          {description}
        </div>
      </div>
    </div>
  );
}
export default { LeftMenuItem, RightMenuItem };
