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
import { PropsWithChildren, useEffect, useRef, useState } from 'react';

export function ClientExpertiseItems() {
  const ref = useRef<HTMLDivElement>(null);
  const [stickyPosition, setStickyPosition] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const { bottom, top } = ref.current.getBoundingClientRect();
      setStickyPosition(80 + bottom - top);
    }
  }, [ref]);

  const anchorTranslate = -stickyPosition + 17;
  const lastAnchorTranslate = -stickyPosition - 17;

  return (
    <>
      <Container className='top-[80px] desktop:sticky' ref={ref}>
        <Items />
      </Container>
      <Container className='flex flex-col gap-[17px]'>
        <AnchorSection
          id='vco'
          top={stickyPosition}
          translateY={anchorTranslate}
        >
          <Virtual />
        </AnchorSection>
        <AnchorSection
          id='business-process'
          top={stickyPosition}
          translateY={anchorTranslate}
        >
          <BusinessProcess />
        </AnchorSection>
        <AnchorSection
          id='risk-managment'
          top={stickyPosition}
          translateY={anchorTranslate}
        >
          <ProjectsRisks />
        </AnchorSection>
        <AnchorSection
          id='custom'
          top={stickyPosition}
          translateY={anchorTranslate}
        >
          <CostumDevelopment />
        </AnchorSection>
        <AnchorSection
          id='integration'
          top={stickyPosition}
          translateY={anchorTranslate}
        >
          <SystemIntegration />
        </AnchorSection>
        <AnchorSection
          id='architecture'
          top={stickyPosition}
          translateY={anchorTranslate}
        >
          <ScalableArchitecture />
        </AnchorSection>
        <AnchorSection
          id='mobile'
          disableTransparency
          top={stickyPosition}
          translateY={lastAnchorTranslate}
        >
          <MobileApplications />
        </AnchorSection>
      </Container>
    </>
  );
}

const AnchorSection = ({
  id,
  translateY,
  top,
  disableTransparency,
  children,
}: PropsWithChildren<{
  id: string;
  translateY: number;
  top: number;
  disableTransparency?: boolean;
}>) => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const tresholdTop = -100;
    const tresholdBottom = -700;
    const top = anchorRef.current?.getBoundingClientRect().top ?? 0;
    if (top >= tresholdTop || disableTransparency) setOpacity(1);
    else if (top < tresholdBottom) setOpacity(0);
    else setOpacity(1 + (top - tresholdTop) / (tresholdTop - tresholdBottom));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div
        id={id}
        style={{
          transform: `translateY(${translateY}px)`,
        }}
        ref={anchorRef}
      ></div>
      <div className='desktop:sticky' style={{ top, opacity }}>
        {children}
      </div>
    </>
  );
};
