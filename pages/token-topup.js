import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function TokenTopup() {
  return <div>Hello this is TokenTopup Page</div>;
}

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
