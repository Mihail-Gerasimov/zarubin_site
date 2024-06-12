import { CASES_DATA } from '@/src/utils/DataLayers/CasesData';

export const CasesGrid = () => {
  return (
    <div className='grid grid-cols-1 gap-[40px] tablet:grid-cols-2 desktop:grid-cols-3'>

{/* {CASES_DATA.map((case) => )} */}
    </div>
  );
};

const CaseCard = ({case}: {case: (typeof CASES_DATA)[number]}) => {
    return (
        <div>
            <div></div>
        </div>
    )
}
