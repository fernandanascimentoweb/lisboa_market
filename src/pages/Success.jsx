import React, { useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners'
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/Ul/CommonSection';

const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Helmet title='Pedido'>
      <CommonSection title='pedido' />
      <div className='flex flex-col items-center justify-center h-screen mt-4'>
        {loading ? (
          <div className='text-center mt-6'>
            <PropagateLoader color='#36d7b7' />
            <br />
            <br />
            <br />
          </div>
        ) : (
          <div>
            <h2 className='text-3xl font-semibold mb-4 text-center'>Pedido bem-sucedido!</h2>
            <p className='text-center mb-4'>Seu pedido foi feito com sucesso.</p>
          </div>
        )}
      </div>
    </Helmet>
  );
}

export default Success;
