export function LeftMenuItem({ icon, title }) {
  return (
    <div className="flex gap-4">
      <img
        loading="lazy"
        src={icon}
        alt={`${title} icon`}
        className="object-contain shrink-0 self-start mt-2 aspect-square w-[40px]"
      />
      <div className="overflow-hidden grow px-2 py-5 bg-white rounded-md w-fit max-md:px-5">
        {title}
      </div>
    </div>
  );
}
export default { LeftMenuItem};
