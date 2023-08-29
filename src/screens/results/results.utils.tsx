import {useState} from 'react';
import {useFindImages} from '../../api';

export const useGetResults = (q: string, pageSize = 5) => {
  const [pageLength, setPageLength] = useState(pageSize);

  const {
    data: {data} = {},
    isLoading,
    isFetching,
    refetch,
  } = useFindImages(
    {
      q,
      page: 0,
      per_page: pageLength,
    },
    {query: {keepPreviousData: true}},
  );

  const fetchNext = () => {
    setPageLength(state => state + pageSize);
  };

  return {data, fetchNext, pageLength, isLoading, isFetching, refetch};
};
