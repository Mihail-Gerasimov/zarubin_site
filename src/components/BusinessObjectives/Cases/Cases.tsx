'use client';

import { CasesGrid } from './CasesGrid/CasesGrid';
import { Tag } from '../../shared/Tag/Tag';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export const Cases = () => {
  const tags = new Set(CasesData.flatMap((item) => item.industries));
  const params = useSearchParams();
  console.log(params.get('industry'));
  const [selectedTag, setSelectedTag] = useState(
    params.get('industry') || 'All',
  );

  const filteredCasesData = cases.filter(
    (item) =>
      selectedTag === 'All' ||
      item.industries
        .map((industry) => industry.toLocaleLowerCase())
        .includes(selectedTag),
  );
  return (
    <div className='flex flex-col gap-[60px]'>
      <div className='hide-scrollbar flex gap-2 overflow-x-auto'>
        <Tag selected={selectedTag === 'All'} onClick={setSelectedTag}>
          All
        </Tag>
        {[...tags].map((tag) => (
          <Tag
            key={tag}
            selected={tag === selectedTag}
            onClick={setSelectedTag}
          >
            {tag}
          </Tag>
        ))}
      </div>
      <CasesGrid cases={filteredCasesData} />
    </div>
  );
};
