// ================================================================================================
// 🎯 To Do: Create a centralized location for all typography styled-component's.
// ✅ Rename Heading.jsx file to Typography.jsx
// ✅ Rename heading.stories.jsx file to typography.stories.jsx
// ✅ Create H1 & SubH1 styled components.

// 💰 Tips: Need to export each component.
// 💰 Link: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
// ================================================================================================

import styled from "styled-components";

const Heading = styled.h1`
  font-family: Avenir, Arial, sans-serif;
  font-size: 2.625rem;
  font-weight: 600;
  line-height: 1.19;
`;

export default Heading;
