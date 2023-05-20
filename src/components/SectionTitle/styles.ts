import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  h1 {
    color: ${({ theme }) => theme.text};
    font-size: 2.5rem;
  }

  h2 {
    color: ${({ theme }) => theme.secondary};
    font-weight: 300;
    font-size: 1.8rem;
  }

  @media (max-width: 980px) {
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 0.8rem;
    }
  }
`;
