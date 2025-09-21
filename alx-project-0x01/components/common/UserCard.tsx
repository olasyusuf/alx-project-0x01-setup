import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, username, name, email, address, phone, website, company }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl border-1 transition-shadow duration-300">
      {/* User Info */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold"><strong>User ID:</strong> {id}</h3> 
        <p className="text-gray-600 mb-2"><strong>Username:</strong> {username}</p>
      </div>
      <div>
        <p className="text-gray-600 mb-2"><strong>Name:</strong> {name.charAt(0).toUpperCase()}{name.substring(1).toLowerCase()}</p>
        <p className="text-gray-600 mb-2"><strong>Phone:</strong> {phone}</p>
        <p className="text-gray-600 mb-2"><strong>Email:</strong> {email.toLowerCase()}</p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Address</h3> 
        <p className="text-gray-600">({address.zipcode}) {address.suite}, {address.street}, {address.city}</p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Company</h3>
        <p className="text-gray-600"><strong>Name:</strong> {company.name}</p>
        <p className="text-gray-600"><strong>Catch Phrase:</strong> {company.catchPhrase}</p>  
        <p className="text-gray-600"><strong>BS:</strong> {company.bs}</p>
      </div>
    </div>
  );
};

export default UserCard;