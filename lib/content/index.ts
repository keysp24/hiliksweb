import type { IndustryContent, SolutionContent } from './types';
import railways from './railways';
import telecom from './telecom';
import bfsi from './bfsi';
import publicSector from './public-sector';
import realEstate from './real-estate';
import oilGas from './oil-gas';
import energyUtilities from './energy-utilities';
import digitalEngineering from './digital-engineering';
import enterpriseApplications from './enterprise-applications';
import systemsIntegration from './systems-integration';
import aiAnalytics from './ai-analytics';
import intelligentAutomation from './intelligent-automation';
import managedServices from './managed-services';
import infrastructureMonitoring from './infrastructure-monitoring';
import dataPlatforms from './data-platforms';

export const industryContent: Record<string, IndustryContent> = {
  railways,
  telecom,
  bfsi,
  'public-sector': publicSector,
  'real-estate': realEstate,
  'oil-gas': oilGas,
  'energy-utilities': energyUtilities,
};

export const solutionContent: Record<string, SolutionContent> = {
  'digital-engineering': digitalEngineering,
  'enterprise-applications': enterpriseApplications,
  'systems-integration': systemsIntegration,
  'ai-analytics': aiAnalytics,
  'intelligent-automation': intelligentAutomation,
  'managed-services': managedServices,
  'infrastructure-monitoring': infrastructureMonitoring,
  'data-platforms': dataPlatforms,
};

export function getIndustryContent(slug: string): IndustryContent | undefined {
  return industryContent[slug];
}
export function getSolutionContent(slug: string): SolutionContent | undefined {
  return solutionContent[slug];
}
