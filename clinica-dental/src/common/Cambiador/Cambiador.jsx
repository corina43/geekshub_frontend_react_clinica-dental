import React, { useState, useEffect  } from 'react';

export const Cambiador = ({dataMap, nameSelect, changeFunction, blurFunction}) => {
    
    const dataMapping = dataMap
    const name = nameSelect

    return (
        <>
            <select name={name} className={'my-1 py-2'} onChange={changeFunction} onBlur={blurFunction}>
            <option name={name} value="" disabled selected hidden>Seleccionar una opción</option>"
                {dataMapping.map(data => {return <option  key={data.id} name={name} value={data.id}>{data.name} {data.surname}</option>})}
            </select>
        </>
    )
};