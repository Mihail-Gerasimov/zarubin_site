'use client';

import { CasesData } from '@/src/utils/DataLayers/CasesData';
import { CasesGrid } from './CasesGrid/CasesGrid';
import { Tag } from '../../shared/Tag/Tag';
import { useState } from 'react';

export const Cases = () => {
  const tags = new Set(CasesData.flatMap((item) => item.industries));
  const [selectedTag, setSelectedTag] = useState('All');

  const filteredCasesData = CasesData.filter(
    (item) => selectedTag === 'All' || item.industries.includes(selectedTag),
  );
  return (
    <div className='flex flex-col gap-[60px]'>
      <div className='flex gap-2 overflow-x-scroll'>
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
