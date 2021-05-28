import useFetch from 'use-http'
import { useEffect, useCallback, useContext } from 'preact/hooks';
import {
  Box,
  Heading,
  ResponsiveContext,
} from 'grommet';
import { connect } from 'react-redux';

import Loader from 'Components/Loader';
import { API_BASE_URL } from 'Shared/fetch';

import AnimalFilter from './Filters/AnimalFilter';
import ZooFilter from './Filters/ZooFilter';
import CalendarFilter from './Filters/CalendarFilter';
import ScheduleList from './ScheduleList';

import { setFilterOptions } from './actions';

const Schedule = ({ setFilterOptionsAction }) => {
  const {
    get,
    loading,
    error,
  } = useFetch(API_BASE_URL, { credentials: 'include' });
  const size = useContext(ResponsiveContext);

  const getFilterOptions = useCallback(async () => {
    try {
      const filterOptions = await get(`/livetalks/filters`);
      setFilterOptionsAction(filterOptions)
    } catch (err) {
      console.error(err);
    }
  }, [setFilterOptionsAction, get])

  useEffect(() => {
    getFilterOptions();
  }, [getFilterOptions])

  if (error) {
    // TODO: replace this with the error fallback
    return (
      <div>
        {error}
      </div>
    )
  }

  return (
    <Box flex overflow="auto">
      {loading && <Loader fill />}
      {!loading && (
        <>
          <Box height={{ min: '95px' }} direction="row" pad="medium" align="center">
            <Heading
              margin="none"
              size={size === 'large' ? 'small' : '20px'}
              level="2"
              style={{ fontWeight: size === "large" ? 900 : 500 }}
            >
              Zoolife Talk Schedule
            </Heading>
            <Box margin={{ left: "small" }}>
              <CalendarFilter />
            </Box>
            <Box direction="row" flex="grow" justify="end" gap="small">
              <AnimalFilter />
              <ZooFilter />
            </Box>
          </Box>
          <Box flex="grow">
            <Box
              flex="grow"
              style={{ background: 'var(--hunterGreenMediumLight)'}}
              pad={{ horizontal: 'xlarge', vertical: 'medium' }}
              align="center"
            >
              <ScheduleList />
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
}

export default connect(null, { setFilterOptionsAction: setFilterOptions })(Schedule);
