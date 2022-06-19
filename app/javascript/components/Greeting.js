import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadGreetings } from '../redux/greetings';
import PropTypes from 'prop-types';
const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGreetings());
  }, []);
  const greeting = useSelector((state) => state.greetings);
  console.log(greeting.data);

  if (greeting.data) {
    return (
      <div>
        <h3>{greeting.data.message}</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Loading.....</h3>       
      </div>
    );
  }
};
Greeting.propTypes = {
  greeting: PropTypes.string,
};
export default Greeting;
