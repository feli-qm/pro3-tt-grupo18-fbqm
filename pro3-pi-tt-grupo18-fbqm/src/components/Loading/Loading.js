import { ClipLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div>
        <ClipLoader color='#123abc' loading={true} size={100} />
        <h2>Se estan cargando los datos, por favor aguarde unos segundos...</h2>
    </div>
  )
}

export default Loading;