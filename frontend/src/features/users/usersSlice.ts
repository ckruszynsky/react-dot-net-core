import { createSlice } from '@reduxjs/toolkit';  
import { User } from './model';


  export interface UsersState {
      users: User[]
  }

  const initialState: UsersState = {
    users: [
        { id: '0', name: 'Leroy Jenkins'},
        { id: '1', name: 'Kevin James'},
        { id: '2', name: 'Jane Doe'}
    ]
  };

  const usersSlice = createSlice({
      name: 'users',
      initialState,
      reducers:{}
  });

  export default usersSlice.reducer;