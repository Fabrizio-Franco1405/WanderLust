import { StyleSheet } from 'react-native';
import { theme } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.xl,
    ...theme.shadows.md,
  },
  icon: {
    color: theme.colors.textMuted,
  },
  input: {
    flex: 1,
    marginLeft: theme.spacing.sm,
    fontSize: theme.fontSize.md,
    color: theme.colors.text,
    padding: 0,
    placeholderTextColor: theme.colors.placeholder,
  },
});