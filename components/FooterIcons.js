import { FOLLOW_US } from "./FooterMenu"


const FooterIcons = ({Icons  }) => {
  return (
    <div className='text-gray-700'>
    {Icons.map((icon) => (
        <span key={icon.name} className='cursor-pointer inline-flex items-center rounded-full mx-1.5 text-xl hover:text-slate-900 hover:bg-teal-800 duration-300'>
        <ion-icon name={icon.name}></ion-icon>            
        </span>
    ))}
    </div>
  )
}

export default FooterIcons