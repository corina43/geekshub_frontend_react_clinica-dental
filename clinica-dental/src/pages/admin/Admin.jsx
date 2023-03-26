import React, {useState, useEffect} from 'react';
import { bringUsers } from '../../services/apiCalls';
import { useDispatch, useSelector } from "react-redux";
import { userData } from '../../containers/User/userSlice';
import { addChoosen } from '../../containers/User/detailSlice';
import { useNavigate } from 'react-router-dom';

export const Admin = () => {
    const [users, setUsers] = useState([]);
    const dataRdx = useSelector(userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        if(users.length === 0 && dataRdx?.credentials?.token?.usuario?.roleId === 2){
            bringUsers(dataRdx?.credentials?.token)
                .then(
                    result => {
                        console.log("tengo sueño", result);
                        setUsers(result.data.data);
                    }
                )
                .catch(error => console.log(error));
        }
    },[users])

    const selected = (persona) => {
        dispatch(addChoosen({ choosenObject: persona }));
        setTimeout(()=>{
            navigate("/detail");
        },500)
    }

    return (
        <div className='usersDesign'>
            {  users.length > 0 ? 
                (
                    <div>
                        {users.map(persona => {
                            return (
                                <div onClick={()=>selected(persona)} key={persona._id}>
                                    {persona.name}
                                </div>
                            )
                        })}
                    </div>
                )
                : 
                (<div>ESTAN VINIENDO</div>)
            }
        </div>
    )
          }