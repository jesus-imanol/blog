function Container ({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {children}
    </div>
  );
};

export default Container;
