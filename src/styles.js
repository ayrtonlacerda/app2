import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex:1;
  flex-direction: column;
  background-color: #333;
  align-items: center;
`;

export const Title = styled.p`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
`;

export const Count = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: semi-bold;
`;

export const LabelButton = styled.p`
   color: #333;
  font-size: 24px;
  font-weight: semi-bold;
`

//forms
export const Input = styled.input`
  height: 55px;
  width: 300px;
  font-size: 22px;
  margin-bottom: 20px;
  margin-left: 15px;
`;

export const Label = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

export const ContainInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ContainForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #545454;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`

export const ButtonSearch = styled.button`  
  height: 55px;
  background-color: #596;
  margin-left: 15px;
`

export const TextButton = styled.p`
  color: #fff;
  font-size: 16px;
  line-height: 35px;
  margin: 0;
`;