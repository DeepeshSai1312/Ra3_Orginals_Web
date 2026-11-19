'use client';

import { ComponentProps, ReactNode } from 'react';
import { BuilderComponent, useIsPreviewing } from '@builder.io/react';
import './builder-registry';

export type BuilderPageProps = ComponentProps<typeof BuilderComponent> & {
  /** Rendered when Builder has no content for this page (and we're not in the editor). */
  fallback?: ReactNode;
};

export function RenderBuilderContent({
  content,
  model,
  fallback = null,
}: BuilderPageProps) {
  // True inside Builder's visual editor, so a brand-new page can still be edited.
  const isBuilderPreviewing = useIsPreviewing();

  if (content || isBuilderPreviewing) {
    return (
      <BuilderComponent
        content={content}
        model={model}
        apiKey={process.env.NEXT_PUBLIC_BUILDERIO}
      />
    );
  }

  return <>{fallback}</>;
}
