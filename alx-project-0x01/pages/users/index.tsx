import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserData, UserProps } from "@/interfaces";
import { useState } from "react";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps>  = ({ posts }) => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);
    
  const handelAddUser = (newUser: UserData) => {
      setUser({...newUser, id: posts.length + 1})
  };
  
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold mb-4">Users</h1>
          <button 
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white">
            Add User
          </button>
        </div>
      <div className="space-y-3">
        {
          posts.map((
                      { id, name, username, email, address, phone, website, company }: UserProps, 
                      key: number) => (
                        <UserCard 
                          id={id} 
                          name={name} 
                          username={username} 
                          email={email} 
                          address={address} 
                          phone={phone} 
                          website={website} 
                          company={company} 
                          key={key} 
                        />
          ))
        }
      </div>
      </main>
      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handelAddUser} />
      )}
    </div>
  );
}


export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Users;