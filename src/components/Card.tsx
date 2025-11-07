interface CardProps {
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  children?: React.ReactNode;
}

export default function Card({ title, description, link, linkText, children }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {children}
      {link && linkText && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#C71585] text-white px-4 py-2 rounded-md hover:bg-[#A01070] transition-colors"
        >
          {linkText}
        </a>
      )}
    </div>
  );
}