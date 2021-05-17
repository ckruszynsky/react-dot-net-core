import styled from '@emotion/styled';

export const gray1 = '#383737';
export const gray2 = '#5c5a5a';
export const gray3 = '#857c81';
export const gray4 = '#b9b9b9';
export const gray5 = '#e3e2e2';
export const gray6 = '#f7f8fa';
export const primary1 = '#681c41';
export const primary2 = '#824c67';
export const accent1 = '#dbb365';
export const accent2 = '#efd197';
export const fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif;";
export const fontSize = '1em';


export const PrimaryButton = styled.button`
  background-color: ${primary2};
  border-color: ${primary2};
  border-style: solid;
  border-radius: 5px;
  font-family: ${fontFamily};
  font-size: ${fontSize};
  padding: 5px 10px;
  color: white;
  cursor: pointer;
  :hover {
    background-color: ${primary1};
  }
  :focus {
    outline-color: ${primary2};
  }
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const AccentButton = styled.button`
  background-color: ${primary2};
  border-color: ${primary2};
  border-style: solid;
  border-radius: 5px;
  font-family: ${fontFamily};
  font-size: ${fontSize};  
  color: white;
  cursor: pointer;
  :hover {
    background-color: ${primary2};
  }
  :focus {
    outline-color: ${primary2};
  }
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ReactionButton = styled.button`
  border:1px solid #e0e3e9;
  padding:5px 10px;
  margin: 5px 6px 10px;
  border-radius: 4px;
  white-space: nowrap;
  background: transparent;
`;
