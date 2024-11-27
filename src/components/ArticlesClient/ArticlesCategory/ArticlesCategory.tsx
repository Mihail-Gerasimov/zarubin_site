interface ICategoryProps {
  category: ICategory[];
  onClick: (value: string) => void;
  setSelectedSubCategory: (value: string) => void;
  setSelectedTag: (value: string) => void;
  setCurrentPage: (value: number) => void;
}

interface ICategory {
  category: string;
  subCategory: (string | null | undefined)[];
}

export const ArticlesCategory = ({
  category,
  onClick,
  setSelectedSubCategory,
  setSelectedTag,
  setCurrentPage,
}: ICategoryProps) => {
  return (
    <div>
      {category && category.length !== 0 && (
        <ul className='flex flex-col'>
          <li className=''>
            <button
              type='button'
              name='all'
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                const target = e.target as HTMLButtonElement;
                onClick(target.name);
                setSelectedSubCategory('');
                setSelectedTag('');
                setCurrentPage(1);
              }}
              className='font-proxima text-[16px] font-bold capitalize'
            >
              all
            </button>
          </li>
          {category.map((item) => (
            <li key={item.category} className=''>
              <button
                type='button'
                name={item.category}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  const target = e.target as HTMLButtonElement;
                  onClick(target.name);
                  setSelectedSubCategory('');
                  setSelectedTag('');
                  setCurrentPage(1);
                }}
                className='font-proxima text-[16px] font-bold capitalize'
              >
                {item.category}
              </button>
              <ul>
                {item.subCategory.map((el) => (
                  <li key={el} className=''>
                    <button
                      type='button'
                      name={el ? el : ''}
                      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        const target = e.target as HTMLButtonElement;
                        setSelectedSubCategory(target.name.toLowerCase());
                        onClick(item.category);
                        setSelectedTag('');
                        setCurrentPage(1);
                      }}
                    >
                      {el}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
