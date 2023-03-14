import React, { useRef, useState, useEffect } from 'react';
import { useAuth } from '../../hook/useAuth';
import useOutsideClick from '../../hook/useOutsideClick';
import Navbar from '../Navbar';
import Overlay from '../Overlay';
import Sidebar from '../Sidebar';
import SidebarItem from '../Sidebar/Item';

interface Props {
  children: React.ReactNode;
}

const Main: React.FC<Props> = ({ children }: Props) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const sidebar = useRef<HTMLDivElement>(null);
  const outsideClick = useOutsideClick(sidebar, isSidebarVisible);
  const { user, logout } = useAuth();

  useEffect(() => {
    if (outsideClick) setIsSidebarVisible(false);
  }, [outsideClick]);

  return (
    <div className="w-full h-screen m-0 p-0">
      <div ref={sidebar}>
        <Navbar
          onClick={() => {
            setIsSidebarVisible(!isSidebarVisible);
          }}
          isSidebarVisible={isSidebarVisible}
        />
        <Sidebar
          profilePicture={user?.photoURL as string}
          username={user ? (user.displayName as string) : 'Guest'}
          email={user ? (user.email as string) : 'Arkan guest'}
          isVisible={isSidebarVisible}
        >
          <div className="w-full flex flex-col justify-center items-end md:hidden ">
            <SidebarItem
              icon="account_circle"
              text="account"
              onClick={() => {}}
            />
            <SidebarItem icon="analytics" text="analisi" onClick={() => {}} />
            <SidebarItem icon="public" text="interazioni" onClick={() => {}} />
            <SidebarItem icon="logout" text="logout" onClick={() => {}} />
            <hr className="w-full my-4" />
          </div>
          <SidebarItem icon="report" text="segnala" onClick={() => {}} />
          <SidebarItem
            icon="list_alt"
            text="Hall of Shame"
            onClick={() => {}}
          />
        </Sidebar>
      </div>
      <div className="w-full h-full m-0 p-0">{children}</div>
    </div>
  );
};

export default Main;
