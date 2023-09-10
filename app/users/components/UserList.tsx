"use client"

import { User } from "@prisma/client";

import UserBox from "./UserBox";
import Avatar from "@/app/components/Avatar";
import { useState } from "react";
import SettingsModal from "@/app/components/sidebar/SettingsModal";

interface UserListProps {
    items: User[];
    currentUser: User | null;
}

const UserList: React.FC<UserListProps> = ({
    items,
    currentUser
}) => {

    const [isOpen, setIsOpen] = useState(false);
    
    return ( 
        <>
            <SettingsModal
                currentUser={currentUser!}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
            <aside className='fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block overflow-y-auto border-t border-gray-200 block w-full left-0'>
                <div className='px-5'>
                    <div className='flex-col'>
                        <div className="flex justify-between items-center">
                            <div className='text-2xl font-bold text-neutral-800 py-4'>
                                People
                            </div>
                            <div 
                                onClick={() => setIsOpen(true)}
                                className='cursor-pointer hover:opacity-75 transition lg:hidden'
                            >
                                <Avatar user={currentUser!} />
                            </div>
                        </div>
                    </div>
                    {items.map((item) => (
                        <UserBox 
                            key={item.id}
                            data={item}
                        />
                    ))}
                </div>
            </aside>
        </>
     );
}
 
export default UserList;