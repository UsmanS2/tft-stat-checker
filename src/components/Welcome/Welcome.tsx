import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to my{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          TFT Stats and AI Prediction App
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Enter your Account name and take a look at your TFT Stats! 
        You can also predict what what comp will get you first next!
      </Text>
      <Text c="dimmed" ta="center" size="sm" maw={580} mx="auto" mt="xl">
        Currently only for NA Accounts
      </Text>

    </>
  );
}
