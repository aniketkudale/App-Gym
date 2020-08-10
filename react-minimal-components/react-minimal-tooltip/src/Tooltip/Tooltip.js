import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Styles from './styles.css';

const propTypes = {
  title: PropTypes.string.isRequired,
  position: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.string
};

const Tooltip = ({ title, position, type, children }) => {
  const node = useRef();
  const [isVisible, setState] = useState(false);
  const handleClick = ({target}) => {
    if(node.current.contains(target)) {
      return;
    }
    setState(false);
  };

  const tooltipPosition = 'tooltipContent ' + position + ' ' + type + '-border';

  useEffect(() => {
    document.addEventListener('mouseenter', handleClick);

    return () => {
      document.removeEventListener('mouseleave', handleClick);
    };
    
  }, []);

  return (
    <div className='container'
      ref={node}
      onMouseEnter={() => setState(!isVisible)}
      onMouseLeave={() => setState(!isVisible)}
      >
      <div>{children}</div>
      {isVisible && (
        <div className={tooltipPosition}>
          {title}
        </div>
      )}
    </div>
  );
}

Tooltip.defaultProps = {
  position: 'right',
  type: 'primary'
}

Tooltip.propTypes = propTypes;

export default Tooltip;