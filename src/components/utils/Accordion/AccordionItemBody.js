import { useContext } from 'react';
import PropTypes from 'prop-types';
import AccordionContext from './AccordionContext';

const propTypes = {
  children: PropTypes.func.isRequired
};

const AccordionItemBody = ({ children }) => {
  const { expanded } = useContext(AccordionContext);
  return children({ expanded });
};

AccordionItemBody.propTypes = propTypes;

export default AccordionItemBody;
