import Header from '../components/Header';

export default ({children}) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
