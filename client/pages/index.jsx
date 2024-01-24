import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <div>
      <h1>Index</h1>
    </div>
  );
};

LandingPage.getInitialProps = async ({ req }) => {
  if (typeof window === 'undefined') {
    const { data } = await axios.get(
      'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
      {
        headers: req.headers,
      }
    );
    return data;
  } else {
    const { data } = await axios.get('/api/users/currentuser').catch((err) => {
      console.log(err);
    });
    return data;
  }
};

export default LandingPage;
