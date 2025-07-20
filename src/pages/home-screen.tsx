import { HeroSplitImage01 } from "@/components/marketing/header-section/hero";
import { TeamSectionSimple01 } from "@/components/marketing/team-sections/team-sections";
import { PricingSimpleIcon } from "@/components/marketing/pricing-sections/pricing-page-header";

export const HomeScreen = () => {
    return (
        <div className="">
            <HeroSplitImage01 />
            <PricingSimpleIcon />
            <TeamSectionSimple01 />
        </div>
    );
};
