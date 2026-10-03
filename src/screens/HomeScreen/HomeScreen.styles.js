import { StyleSheet } from 'react-native';
import { theme } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginBottom: theme.spacing.xl,
  },
  titleContainer: {
    marginBottom: theme.spacing.lg,
  },
  searchBar: {
    marginBottom: theme.spacing.xl,
  },
  categories: {
    marginBottom: theme.spacing.xl,
  },
  destinationsList: {
    paddingBottom: theme.spacing.xxl,
  },
});