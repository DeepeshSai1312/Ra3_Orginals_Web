import BrandMarquee from './BrandMarquee';
import CollectivesSection from './CollectivesSection';
import FinalCtaSection from './FinalCtaSection';
import FounderTeamSection from './FounderTeamSection';
import HeroSection from './HeroSection';
import ManifestoSection from './ManifestoSection';
import NumbersSection from './NumbersSection';
import ProcessSection from './ProcessSection';
import ServicesSection from './ServicesSection';
import StudioGallery from './StudioGallery';
import WorkSection from './WorkSection';

/** The v1 homepage in design order, using the default copy. Shown until Builder has a page. */
const HomePageSections = () => (
  <>
    <HeroSection />
    <BrandMarquee />
    <ManifestoSection />
    <NumbersSection />
    <WorkSection />
    <ServicesSection />
    <StudioGallery />
    <ProcessSection />
    <FounderTeamSection />
    <CollectivesSection />
    <FinalCtaSection />
  </>
);

export default HomePageSections;
