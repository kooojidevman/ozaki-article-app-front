import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import { register } from '../services/api';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await register(username, email, password);
      // 登録後の処理を追加
    } catch (error) {
      console.error('登録失敗:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h5">新規登録</Typography>
      <TextField label="Username" variant="outlined" fullWidth margin="normal" value={username} onChange={(e) => setUsername(e.target.value)} />
      <TextField label="Email" variant="outlined" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Password" variant="outlined" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleRegister}>
        登録
      </Button>
    </Container>
  );
};

export default Register;
