import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userData } from '../../containers/User/userSlice';
import { addChoosen } from '../../containers/User/detailSlice';
import { useNavigate } from 'react-router-dom';
import { bringUsers } from '../../services/apiCalls';

const Users = () => {
  const [users, setUsers] = useState([]);
  const dataRdx = useSelector(userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (users.length === 0) {
      console.log(dataRdx?.credentials);
      bringUsers(dataRdx?.credentials?.token)
        .then((result) => {
          console.log('Traer usuarios:', result);
          setUsers(result);
        })
        .catch((error) => console.log(error));
    }
  }, [users,dataRdx?.credentials ]);

  const selected = (persona) => {
    dispatch(addChoosen({ choosenObject: persona }));
    setTimeout(() => {
      navigate('/detail');
    }, 500);
  };

  return (
    <div className="usersDesign">
      {users.length > 0 ? (
        <div>
          {users.map((persona) => {
            return (
              <div onClick={() => selected(persona)} key={persona._id}>
                {persona.name}
              </div>
            );
          })}
        </div>
      ) : (
        <div>ESTAN VINIENDO</div>
      )}
    </div>
  );
};

export default Users;
