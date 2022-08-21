import { useMemo } from 'react';

import { useSearchDispatch, useSearchStore } from '@contexts/search-store';
import { validateFilters } from '@contexts/utils';
import { getFiltersCount, getFieldsToShow } from './utils';

function useTogglePanel({ isKids, isMobile }) {
  const { filters } = useSearchStore();
  const dispatch = useSearchDispatch();
  const fieldsList = useMemo(() => getFieldsToShow(isMobile, isKids), [isMobile, isKids]);
  const activeFilters = useMemo(() => validateFilters(filters), [filters]);
  const filtersCount = useMemo(
    () => getFiltersCount(activeFilters, fieldsList),
    [activeFilters, fieldsList]
  );

  const removeFilter = (slug, value) =>
    dispatch({ type: 'remove-filter', payload: { [slug]: value } });

  const removeAll = () => dispatch({ type: 'reset-filters' });

  return {  };
}

export default useTogglePanel;
