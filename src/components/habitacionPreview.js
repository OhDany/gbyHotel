import React from 'react';
import Image from'gatsby-image';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44, 62, 80, .85);
  width: 100%;
  color: #ffffff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
`;

const HabitacionPreview = ({habitacion}) => {

  const { contenido, imagen, titulo, slug } = habitacion;

  return (
    <div
      css={css`
        border: 1px solid #e1e1e1;
        margin-bottom: 2rem;
      `}
    >
      <div>
        <Image 
          fluid={imagen.fluid}
        />
        <div
          css={css`
            padding: 3rem;
          `}
        >
          <h3
            css={css`
              font-size: 3rem;
            `}
          >{titulo}</h3>
          <p>{contenido}</p>

        </div>
          <Boton to={slug}>Ver Habitación</Boton>
      </div>
    </div>
  );
}
 
export default HabitacionPreview;