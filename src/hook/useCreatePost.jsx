import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchPost } from '../services/postApi';

export const useCreatePost = () => {
  const initialState = {
    title: '',
    body: '',
  };
  // Access the client
  const queryClient = useQueryClient();
  const [values, setValues] = useState(initialState);

  const onChange = (event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const { mutate, status, error } = useMutation({
    mutationFn: fetchPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['posts'],
      });
      setValues(initialState);
    },
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    mutate(values);
  };

  const inputLists = [
    {
      name: 'title',
      placeholder: 'Enter Post Title',
      label: 'Post Title',
      type: 'text',
    },
    {
      name: 'body',
      placeholder: 'Enter Post Body',
      label: 'Post Body',
      type: 'textarea',
    },
  ];
  return {
    values,
    onChange,
    handleSubmit,
    status,
    error,
    inputLists,
  };
};
