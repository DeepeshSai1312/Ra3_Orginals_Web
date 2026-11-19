import { ILiveStatRequest } from '@constants/liveStats';
import { BUILDER_COMPONENT_NAMES } from '@components/Builderio/builderComponentNames';
import { IStatItem } from '@/types/sections';
import { IBuilderBlock, IBuilderContent } from './builderRequestWrapper';

const fromItems = (items: IStatItem[] = []): Partial<ILiveStatRequest>[] =>
  items.map(({ liveSource, liveId }) => ({ source: liveSource, id: liveId }));

/**
 * Walk a Builder page and collect every live stat its Numbers sections ask for,
 * so they can be fetched on the server before render.
 */
export const collectLiveStatRequests = (
  content: IBuilderContent | null
): Partial<ILiveStatRequest>[] => {
  const requests: Partial<ILiveStatRequest>[] = [];
  const walk = (blocks: IBuilderBlock[] = []) => {
    blocks.forEach((block) => {
      if (block.component?.name === BUILDER_COMPONENT_NAMES.NUMBERS_SECTION) {
        requests.push(
          ...fromItems(block.component.options?.items as IStatItem[])
        );
      }
      walk(block.children);
    });
  };
  walk(content?.data?.blocks);
  return requests;
};

export const collectDefaultLiveStatRequests = (items: IStatItem[]) =>
  fromItems(items);
