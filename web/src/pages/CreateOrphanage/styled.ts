import styled from 'styled-components';

interface ITypeSelected {
  selected: boolean;
}

export const Container = styled.main`
  display: flex;
`;

export const Form = styled.form`
  width: 700px;
  margin: 64px auto;

  background: #fff;
  border: 1px solid #d3e2e5;

  padding: 64px 80px;

  overflow: hidden;

  fieldset {
    border: 0;

    legend {
      width: 100%;

      font-size: 32px;
      line-height: 34px;
      color: #5c8599;
      font-weight: 700;

      border-bottom: 1px solid #d3e2e5;
      margin-bottom: 40px;
      padding-bottom: 24px;
    }
  }

  fieldset + fieldset {
    margin-top: 40px;
  }
`;

export const InputBlock = styled.div`
  label {
    display: flex;
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: #8fa7b3;
      margin-left: 24px;
      line-height: 24px;
    }
  }

  input,
  textarea {
    width: 100%;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    outline: none;
    color: #5c8599;
  }

  input {
    height: 64px;
    padding: 0 16px;
  }

  textarea {
    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    line-height: 28px;
  }

  & + & {
    margin-top: 24px;
  }

  .leaflet-container + & {
    margin-top: 20px;
  }
`;

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 16px;

  & > div {
    position: relative;

    button {
      right: 0;
      top: 0;
      color: red;
      background-color: #fff;
      padding: 5px 10px;
      position: absolute;
      border: 0;
      border-top-right-radius: 20px;
      border-bottom-left-radius: 20px;
      cursor: pointer;
    }

    img {
      height: 96px;
      width: 100%;

      object-fit: cover;

      border-radius: 20px;
    }
  }
`;

export const ButtonNewImage = styled.label`
  width: 100%;
  height: 96px;
  background: #f5f8fa;
  border: 1px solid #96d2f0;
  border-radius: 20px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  input {
    display: none;
    visibility: hidden;
  }
`;

export const Select = styled.div<ITypeSelected>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  button {
    height: 64px;
    cursor: pointer;

    &:first-child {
      border-radius: 20px 0px 0px 20px;
      background: ${(props) => (props.selected ? '#edfff6' : '#f5f8fa')};
      border: ${(props) =>
        props.selected ? '1px solid #a1e9c5' : '1px solid #d2e2e5'};
      color: ${(props) => (props.selected ? '#37c77f' : '#5c8599')};
    }

    &:last-child {
      border-radius: 0px 20px 20px 0px;
      border-left: 0px;
      background: ${(props) => (!props.selected ? '#edfff6' : '#f5f8fa')};
      border: ${(props) =>
        !props.selected ? '1px solid #a1e9c5' : '1px solid #d2e2e5'};
      color: ${(props) => (!props.selected ? '#37c77f' : '#5c8599')};
    }
  }
`;

export const SubmitButton = styled.button`
  margin-top: 64px;

  width: 100%;
  height: 64px;
  border: 0;
  cursor: pointer;
  background: #3cdc8c;
  border-radius: 20px;
  color: #ffffff;
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  svg {
    margin-right: 16px;
  }

  &:hover {
    background: #36cf82;
  }
`;
