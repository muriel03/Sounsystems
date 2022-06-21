import { useEffect , useState} from "react";

export const Table = () => {

  const [data, setData] = useState({});

  useEffect(()=>{

    fetch('http://localhost:3030/api/products')
      .then(response => response.json())
      .then(data => setData(data))

  },[])

  return (
    <div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">{data.count}</th>
            <th scope="col">Duracion</th>
            <th scope="col">Rating</th>
            <th scope="col">Genero</th>
            <th scope="col">Premios</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Billy Elliot</th>
            <td>123</td>
            <td>5</td>
            <td>
                <li>
                    Drama
                </li>
                <li>
                    Comedia
                </li>
            </td>
            <td>2</td>
          </tr>
          <tr>
            <th scope="row">Alicia en el pais de las maravillas</th>
            <td>142</td>
            <td>4.8</td>
            <td>
                <li>
                    Drama
                </li>
                <li>
                    Accion
                </li>
                <li>
                    Comedia
                </li>
            </td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
