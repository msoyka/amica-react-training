// ==========================================================================================
// 🎯To Do: Pull out common styles to reduce repetitive code.
// ✅ Put all common styles into a const named "headingStyles"
// 💰TIPS: Utilize new import statement => import styled, { css } from "styled-components";
// 💰STARTER TEMPLATE: const headingStyles = css``;
// ==========================================================================================

import styled from "styled-components";

export const H1 = styled.h1`
  font-family: Avenir, Arial, sans-serif;
  font-size: 2.625rem;
  font-weight: 600;
  line-height: 1.19;
`;

export const SubH1 = styled.h1`
  font-family: Avenir, Arial, sans-serif;
  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`;
