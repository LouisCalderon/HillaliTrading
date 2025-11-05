interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ children, href, onClick, variant = 'primary', className = '' }: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses = variant === 'primary'
    ? "bg-[#C71585] text-white hover:bg-[#A01070] focus:ring-[#C71585]"
    : "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500";

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}