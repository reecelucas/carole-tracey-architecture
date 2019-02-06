import { useContext } from 'react';
import PropTypes from 'prop-types';
import AccordionContext from './AccordionContext';

const propTypes = {
  children: PropTypes.func.isRequired
};

const AccordionItemTitle = ({ children }) => {
  const { expanded, onClick } = useContext(AccordionContext);
  return children({ expanded, onClick });
};

AccordionItemTitle.propTypes = propTypes;

export default AccordionItemTitle;
