import { Text } from '@mantine/core';
import classes from './ShowingresultsFor.module.css';

type ShowingResultsForProps = {
    name: string;
};
  
export default function ShowingResultsFor({ name }: ShowingResultsForProps) {
  return (
    <>
        <Text className={classes.text}>Showing results for {name}</Text>
    </>
  );
}
