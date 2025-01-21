import s from './SearchBar.module.css';
import { Field, Form, Formik } from 'formik';
import { IoIosSearch } from 'react-icons/io';
import Container from '../Container/Container';

const SearchBar = ({ handleChangeInQuery, query }) => {
  const onSubmit = values => {
    handleChangeInQuery(values.query);
  };

  const initialValues = {
    query,
  };

  return (
    <Container>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        <Form autoComplete="off">
          <div className={s.fieldContainer}>
            <Field
              className={s.searchBar}
              name="query"
              autoFocus
              placeholder="Search images and photos"
            />
            <button type="submit">
              <IoIosSearch className={s.searchIcon} />
            </button>
          </div>
        </Form>
      </Formik>
    </Container>
  );
};

export default SearchBar;
