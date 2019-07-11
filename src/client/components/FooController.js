import React, { useState, useEffect } from 'react';
import fooStore from '../flux/stores/fooStore';
import * as fooActions from '../flux/actions/fooActions';
import FooListComponent from './FooListComponent';

const FooController = () => {
  const [foos, setFoos] = useState(fooStore.getFoos());

  useEffect(
    function() {
      const onFoosChange = () => {
        setFoos(fooStore.getFoos());
      };

      fooStore.addChangeListener(onFoosChange);
      if (foos.length === 0) fooActions.loadFoos();

      return () => {
        fooStore.removeChangeListener(onFoosChange);
      };
    },
    [foos.length]
  );
  return <FooListComponent foos={foos} />;
};

export default FooController;
