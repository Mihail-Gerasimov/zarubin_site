'use client';

import { Case } from '@/src/utils/getCaseMetadata';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Tag } from '../../shared/Tag/Tag';
import { CasesGrid } from './CasesGrid/CasesGrid';

export const Cases = ({ cases }: { cases: Case[] }) => {
  const tags = new Set(
    cases.flatMap((item) =>
      item.industries.map((industry) => industry.toLocaleLowerCase()),
    ),
  );

  const searchParams = useSearchParams();
  const queryIndustry = searchParams.get('industry');

  const [selectedTag, setSelectedTag] = useState(queryIndustry || 'All');

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
