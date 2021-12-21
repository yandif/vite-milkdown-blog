import { withNProgress } from '@tanem/react-nprogress';
import { FC } from 'react';

import Bar from './Bar';
import Container from './Container';
import Spinner from './Spinner';

const Progress: FC<{
  animationDuration: number;
  isFinished: boolean;
  progress: number;
}> = ({ isFinished, progress, animationDuration }) => (
  <Container animationDuration={animationDuration} isFinished={isFinished}>
    <Bar animationDuration={animationDuration} progress={progress} />
    <Spinner />
  </Container>
);

export default withNProgress(Progress);
