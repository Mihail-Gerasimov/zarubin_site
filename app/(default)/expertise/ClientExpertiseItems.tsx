'use client';

import { BusinessProcess } from '@/src/components/Expertise/BusinessProcess/BusinessProcess';
import { CostumDevelopment } from '@/src/components/Expertise/CostumDevelopment/CostumDevelopment';
import { Items } from '@/src/components/Expertise/Items/Items';
import { MobileApplications } from '@/src/components/Expertise/MobileApplications/MobileApplications';
import { ProjectsRisks } from '@/src/components/Expertise/ProjectsRisks/ProjectsRisks';
import { ScalableArchitecture } from '@/src/components/Expertise/ScalableArchitecture/ScalableArchitecture';
import { SystemIntegration } from '@/src/components/Expertise/SystemIntegration/SystemIntegration';
import { Virtual } from '@/src/components/Expertise/Virtual/Virtual';
import { Container } from '@/src/components/shared/Container/Container';
import { useEffect, useRef, useState } from 'react';

export function ClientExpertiseItems() {
  const ref = useRef<HTMLDivElement>(null);
  const [stickyPosition, setStickyPosition] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const { bottom, top } = ref.current.getBoundingClientRect();
      setStickyPosition(80 + bottom - top);
    }
  }, [ref]);

  const anchorStyle = {
    transform: `translateY(${-stickyPosition + 17}px)`,
  };
  const lastAnchorStyle = {
    transform: `translateY(${-stickyPosition - 17}px)`,
  };
  const sectionStyle = { top: stickyPosition };
  return (
    <>
      <Container className='top-[80px] desktop:sticky' ref={ref}>
        <Items />
      </Container>
      <div id='vco' style={anchorStyle}></div>
      <Container className='flex flex-col gap-[17px]'>
        <div className='desktop:sticky' style={sectionStyle}>
          <Virtual />
        </div>
        <div id='business-process' style={anchorStyle}></div>
        <div className='desktop:sticky' style={sectionStyle}>
          <BusinessProcess />
        </div>
        <div id='risk-managment' style={anchorStyle}></div>
        <div className='desktop:sticky' style={sectionStyle}>
          <ProjectsRisks />
        </div>
        <div id='custom' style={anchorStyle}></div>
        <div className='desktop:sticky' style={sectionStyle}>
          <CostumDevelopment />
        </div>
        <div id='integration' style={anchorStyle}></div>
        <div className='desktop:sticky' style={sectionStyle}>
          <SystemIntegration />
        </div>
        <div id='architecture' style={anchorStyle}></div>
        <div className='desktop:sticky' style={sectionStyle}>
          <ScalableArchitecture />
        </div>
        <div id='mobile' style={lastAnchorStyle}></div>
        <div className='desktop:sticky' style={sectionStyle}>
          <MobileApplications />
        </div>
      </Container>
    </>
  );
}
