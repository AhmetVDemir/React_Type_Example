import React, { FunctionComponent } from 'react';
import { UlkeTipi } from '../Types';


interface IUlkeProps{
    contry : UlkeTipi;

}

const Ulke:FunctionComponent<IUlkeProps> = (props) => {

    const { contry } = props;

    return (
        <div>
              <h3>
                  {contry.name} | {contry.capital} <br/>
              </h3>
        </div>
    );
}

export default Ulke;