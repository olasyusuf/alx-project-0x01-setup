const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-4 mt-10">
      <p>&copy; {new Date().getFullYear()} Advanced Structures. All rights reserved.</p>
    </footer>
  );
};

export default Footer;