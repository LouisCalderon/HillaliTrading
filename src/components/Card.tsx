interface CardProps {
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  children?: React.ReactNode;
}

export default function Card({ title, description, link, linkText, children }: CardProps) {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      {children}
      {link && linkText && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          {linkText}
        </a>
      )}
    </div>
  );
}