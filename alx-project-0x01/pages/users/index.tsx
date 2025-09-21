import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps>  = ({ posts }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
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