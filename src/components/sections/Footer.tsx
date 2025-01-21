import { footerIcon } from "../../constants";
import { copyright } from "../../assets";

const Footer = () => {
  return (
    <div className=" mx-auto border-t border-secondary max-w-7xl">
      <div className='c-space pt-3 pb-3  flex justify-between items-center flex-wrap gap-5'>
        <div className='text-white-500 flex gap-2 cursor-pointer'
          onClick={() => window.scrollTo(0, 0)}
        >
          <p>Chandan Kumar</p>
          <img
            src={copyright}
            alt="copy-right"
            className="w-3.5 h-3.5 object-contain"
          />
        </div>

        <div className='flex justify-end card-img_hover gap-1'>
          {footerIcon.map((icon, index) => (
            <div
              key={`footer-icon-${index}`}
              onClick={() => {
                if (icon.link) {
                  window.open(icon.link, '_blank');
                } else {
                  console.error(`Invalid link for icon at index ${index}`);
                }
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={icon.icon}
                alt={icon.name}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer