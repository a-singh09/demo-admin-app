import Link from "next/link";

interface CardProps {
  title: string;
  content: string;
  footer: string;
  url: string;
}

function Card({ title, content, footer }: CardProps) {
  return (
    <>
    
    <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-100 dark:bg-gray-800">
      <div className="py-4 px-5 bg-gray-50 dark:bg-gray-700/50">
        <h3 className="font-medium">{title}</h3>
      </div>
      <div className="p-5 grow">
        <p>{content}</p>
      </div>
      <div className="py-4 px-5 text-sm text-gray-600 bg-gray-50 dark:text-gray-400 dark:bg-gray-700/50">
        <p>{footer}</p>
      </div>
    </div>
    
    </>
  );
}

interface CardsProps {
  cardsData: CardProps[];
}

const Cards: React.FC<CardsProps> = ({ cardsData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8 mb-5">
      {cardsData.map((cardData, index) => (
        <Link key={index} href={`/dashboard/${cardData.url}`}>
        <Card key={index} {...cardData} />
      </Link>
      ))}
    </div>
  );
};

export default Cards;
