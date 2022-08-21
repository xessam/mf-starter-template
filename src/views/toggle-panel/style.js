import styled from 'styled-components';

import { Success } from '@components/icons';

const TWContainer = styled.div`
  display: flex;
  min-height: 30px;
  margin: 10px 0;
`;

const TWSuccessIcon = styled(Success)`
  display: flex;
  justify-content: center;
  font-size: 15px;

  border-radius: 10px;
  color: #f2f2f2;
  text-align: center;
  float: left;
  margin-right: 6px;
  margin-left: -10px;
`;

export { TWContainer, TWSuccessIcon };
