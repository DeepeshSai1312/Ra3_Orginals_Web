'use client';

import { createContext, ReactNode, useContext } from 'react';
import { DEFAULT_SITE_SETTINGS, ISiteSettings } from '@constants/siteSettings';
import { LiveStatValues } from '@constants/liveStats';

const SiteSettingsContext = createContext<ISiteSettings>(DEFAULT_SITE_SETTINGS);
const LiveStatsContext = createContext<LiveStatValues>({});

export const SiteSettingsProvider = ({
  value,
  children,
}: {
  value: ISiteSettings;
  children: ReactNode;
}) => (
  <SiteSettingsContext.Provider value={value}>
    {children}
  </SiteSettingsContext.Provider>
);

/** Live numbers fetched on the server for the current page. */
export const LiveStatsProvider = ({
  value,
  children,
}: {
  value: LiveStatValues;
  children: ReactNode;
}) => (
  <LiveStatsContext.Provider value={value}>
    {children}
  </LiveStatsContext.Provider>
);

export const useSiteSettings = () => useContext(SiteSettingsContext);
export const useLiveStats = () => useContext(LiveStatsContext);
