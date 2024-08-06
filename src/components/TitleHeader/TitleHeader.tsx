import { Title, Text, Anchor } from '@mantine/core';
import classes from './TitleHeader.module.css';

export function TitleHeader() {
  return (
    <>
      <Title className={classes.title} ta="left" mt={30} ml={20}>
        <Text className={classes.text} inherit variant="gradient" gradient={{ from: 'pink', to: 'yellow' }}>
          TFT Stats and AI Prediction App
        </Text>
      </Title>
    </>
  );
}
