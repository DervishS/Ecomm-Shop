import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome to our shop',
  description: 'We sell all kind of products for a great price',
  keywords: 'electronics, buy electronics, cheap electroincs, perfumes, buy perfumes',
};

export default Meta;