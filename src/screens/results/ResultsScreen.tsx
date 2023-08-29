import {Text, View} from 'react-native';
import React, {FC} from 'react';
import {Routes, ScreenProps} from '../../../types/routes';
import {Image} from '../../api';
import {FlashList} from '@shopify/flash-list';
import {useGetResults} from './results.utils';
import {ListFooter} from './components/ListFooter';
import {EmptyList} from './components/EmptyList';
import {ResultItem} from './components/ResultItem';
import {commonStyles} from '../../styles/common.styles';

export const ResultsScreen: FC<ScreenProps<Routes.Results>> = ({
  route: {
    params: {q},
  },
}) => {
  const {data, refetch, isFetching, fetchNext, isLoading, pageLength} =
    useGetResults(q, 5);

  if (isLoading) {
    return <ListFooter />;
  }

  return (
    <View style={commonStyles.container}>
      <Text>
        Results for {q}: {data?.meta.totalCount}
      </Text>
      <FlashList<Image>
        refreshing={isFetching}
        onRefresh={refetch}
        ListEmptyComponent={EmptyList}
        onEndReached={fetchNext}
        ListFooterComponent={
          data && data.meta.totalCount > 0 && data.meta.totalCount > pageLength
            ? ListFooter
            : undefined
        }
        estimatedItemSize={240}
        data={data?.results}
        keyExtractor={({media_id}) => media_id.toString()}
        renderItem={({item}) => <ResultItem item={item} />}
      />
    </View>
  );
};
