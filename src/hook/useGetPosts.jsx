import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../services/postApi';

export const useGetPosts = () => {
  const { data, status, error } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });
  return {
    posts: data?.posts,
    status,
    error,
  };
};
