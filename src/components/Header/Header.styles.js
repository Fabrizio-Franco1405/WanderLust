import { StyleSheet } from 'react-native';
import { theme } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  iconButton: {
    backgroundColor: theme.colors.white,
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.sm,
    ...theme.shadows.sm,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
});