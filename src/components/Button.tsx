interface ButtonProps {
  title: string;
  className?: string;
}

const Button = ({ title, className = "" }: ButtonProps) => {
  return (
    <div>
      <button 
        className={`px-6 py-1 border-2 border-white bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-full ${className}`}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
