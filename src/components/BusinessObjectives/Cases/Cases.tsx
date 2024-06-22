'use client';

import { CasesGrid } from './CasesGrid/CasesGrid';
import { Tag } from '../../shared/Tag/Tag';
import { useState } from 'react';
import { Case } from '@/src/utils/getCaseMetadata';

export const Cases = ({ cases }: { cases: Case[] }) => {
  const tags = new Set(
    cases.flatMap((item) =>
      item.industries.map((industry) => industry.toLocaleLowerCase()),
    ),
  );
  const [selectedTag, setSelectedTag] = useState('All');

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
