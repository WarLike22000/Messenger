import Link from "next/link";

import { IconType } from "react-icons";

import clsx from "clsx";

interface MobileItemProps {
    href: string;
    active?: boolean;
    icon: IconType;
    onClick?: () => void
};

const MobileItem: React.FC<MobileItemProps> = ({
    href,
    active,
    icon: Icon,
    onClick
}) => {

    const handleClick = () => {
        if(onClick) {
            return onClick();
        };
    };
    
    return ( 
        <Link
            href={href}
            onClick={handleClick}
            className={clsx(`group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-gray-500 hover:text-black hover:bg-gray-100`,
            active && 'text-gray-900 bg-gray-100'
            )}
        >
            <Icon className='w-6 h-6' />
        </Link>
     );
}
 
export default MobileItem;