"use client";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from 'react-firebase-hooks/firestore'
import Image from "next/image";
import React from "react";
import NewChat from "./NewChat";
import { collection } from "firebase/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";

function Sidebar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session && collection(db, 'users', session.user?.email!, "chats")
  );

  console.log(chats)

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />
          <div>{/* {ModuleChat} */}</div>
          {/* {Map through the ChatRows} */}
          {chats?.docs.map(chat => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {session && (
        <img onClick={()=>{signOut()}} src={session.user?.image} alt="Profile Picture" className="w-12 h-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50" />
      )}
    </div>
  );
}

export default Sidebar;
