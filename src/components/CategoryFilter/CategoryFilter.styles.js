import { StyleSheet } from 'react-native';
import { theme } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.xl,
  },
  scrollContent: {
    paddingHorizontal: theme.spacing.xs,
  },
  button: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.pill,
    backgroundColor: theme.colors.white,
    marginRight: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  buttonActive: {
    backgroundColor: theme.colors.buttonActiveBg,
    borderColor: theme.colors.buttonActiveBg,
  },
  text: {
    color: theme.colors.textSecondary,
    fontWeight: theme.fontWeight.medium,
  },
  textActive: {
    color: theme.colors.white,
  },
});