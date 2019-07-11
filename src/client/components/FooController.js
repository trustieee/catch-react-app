import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import fooStore from '../../flux/stores/fooStore';
import * as fooActions from '../../flux/actions/fooActions';

const FooController = () => {
  const [foos, setFoos] = useState([]);

  useEffect(() => {
    const onFoosChange = () => {
      setFoos(fooStore.getFoos());
    };

    fooStore.addChangeListener(onFoosChange);
    if (foos.length === 0) fooActions.loadFoos();

    return () => {
      fooStore.removeChangeListener(onFoosChange);
    };
  }, [foos.length]);

  const handleOnClick = event => {
    toast.success('API Called');
  };

  return <button onClick={handleOnClick}>Click me</button>;
};

export default FooController;
