import { useState, useEffect } from 'react';

// Add ReleaseList by ID and Currency
const ReleaseFormActions = (callback) => {

  const [release, setValues] = useState({});

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${release} times`;
  });

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback();
  };

  const handleChange = (event) => {
    event.persist();
    setValues(release => ({ ...release, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    release,
  }
};

export default ReleaseFormActions;