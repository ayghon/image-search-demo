import {action, deepMap} from 'nanostores';
import {useStore} from '@nanostores/react';

type LikesStore = {
  likes: number[];
};

const initialState: LikesStore = {
  likes: [],
};

const likesStore = deepMap<LikesStore>(initialState);

export const useLikesStore = () => {
  const store = useStore(likesStore);
  return {
    actions: {
      likeMedia,
    },
    store,
  };
};

const likeMedia = action(likesStore, 'like', (store, {id}: {id: number}) =>
  store.setKey('likes', [...store.get().likes, id]),
);
