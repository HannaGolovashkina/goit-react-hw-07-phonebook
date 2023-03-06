import { useSelector, useDispatch } from 'react-redux';
// import { changeFilter, getFilter } from 'redux/contacts-slice';
import { setFilter } from 'redux/filter-slice';
import { Label, Text, Input } from './Filter.styled';

const Filter =()=> {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const changeFieldFilter = e => dispatch(setFilter(e.currentTarget.value));

  return (
    <Label>
      <Text>Find contacts by name</Text>
      <Input type="text" value={filter} onChange={changeFieldFilter} />
    </Label>
  );
}

export default Filter;