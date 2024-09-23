import { ClipLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div>
        <ClipLoader color='#123abc' loading={true} size={100} />
        <p>Se estan cargando los datos, por favor aguarde unos segundos...</p>
    </div>
  )
}

export default Loading;