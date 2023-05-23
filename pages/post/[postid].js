import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function PostPage() {
  return <div>Hello this is the Post Page</div>;
}

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
